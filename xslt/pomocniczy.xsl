<xsl:stylesheet
    version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
>
    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes" />

    <xsl:key name="keyGenre" match="//gatunki/gatunek" use="@id" />
    <xsl:key name="keyAlbum" match="//albumy/album" use="@id" />

    <xsl:template match="/">
        <xsl:element name="root">
            <xsl:call-template name="stats" />
            <xsl:call-template name="data" />
        </xsl:element>
    </xsl:template>

    <xsl:template name="currencyInfo">
        <xsl:param name="currency" />
        <xsl:variable name="lowercase" select="lower-case($currency)" />

        <xsl:element name="{$lowercase}">
            <xsl:variable name="prices" select="//albumy/album/cena[@waluta=$currency]" />
            <xsl:element name="ilosc">
                <xsl:value-of select="count($prices)" />
            </xsl:element>
            <xsl:element name="min">
                <xsl:value-of select="min($prices)" />
            </xsl:element>
            <xsl:element name="avg">
                <xsl:value-of select="format-number(avg($prices), '0.00')" />
            </xsl:element>
            <xsl:element name="max">
                <xsl:value-of select="max($prices)" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template name="stats">
        <xsl:element name="stats">
            <xsl:variable name="wykonawcyTotal" select="count(distinct-values(//wykonawcy/wykonawca))" />
            <xsl:variable name="wykonawcyZagraniczni" select="count(distinct-values(//wykonawca[@czyZagraniczny='tak']))" />

            <xsl:element name="genreCount">
                <xsl:value-of select="count(//plytoteka/gatunki/gatunek)" />
            </xsl:element>

            <xsl:element name="albumy">
                <xsl:variable name="cenaXpath" select="//plytoteka/albumy/album/cena"></xsl:variable>
                <xsl:element name="lacznie">
                    <xsl:value-of select="count(//plytoteka/albumy/album)" />
                </xsl:element>
                <xsl:element name="cenaMin">
                    <xsl:value-of select="min($cenaXpath)" />
                </xsl:element>
                <xsl:element name="cenaAvg">
                    <xsl:value-of select="format-number(avg($cenaXpath), '0.00')" />
                </xsl:element>
                <xsl:element name="cenaMax">
                    <xsl:value-of select="max($cenaXpath)" />
                </xsl:element>
                <!-- Laczna wartosc dotyczy roznych walut, zatem nie jest prawdziwa -->
                <!-- <xsl:element name="lacznaWartosc">
                    <xsl:value-of select="format-number(sum($cenaXpath), '0.00')" />
                </xsl:element> -->
            </xsl:element>

            <xsl:element name="wykonawcy">
                <xsl:element name="wykonawcyTotal">
                    <xsl:value-of select="$wykonawcyTotal" />
                </xsl:element>
                <xsl:element name="wykonawcyZagraniczni">
                    <xsl:value-of select="$wykonawcyZagraniczni" />
                </xsl:element>
            </xsl:element>

            <xsl:element name="clientCount">
                <xsl:value-of select="count(//klienci/klient)" />
            </xsl:element>

            <xsl:element name="waluty">
                <xsl:call-template name="currencyInfo">
                    <xsl:with-param name="currency" select="'PLN'" />
                </xsl:call-template>
                <xsl:call-template name="currencyInfo">
                    <xsl:with-param name="currency" select="'EUR'" />
                </xsl:call-template>
                <xsl:call-template name="currencyInfo">
                    <xsl:with-param name="currency" select="'USD'" />
                </xsl:call-template>
            </xsl:element>

            <xsl:element name="iloscPerGatunek">
                <xsl:for-each select="//gatunki/gatunek">
                    <!-- <xsl:sort select="count(//albumy/album[@gatunek=@id])" data-type="number" /> -->

                    <xsl:variable name="gatunekID" select="./@id" />
                    <xsl:variable name="count" select="count(//albumy/album[@gatunek=$gatunekID])" />

                    <xsl:element name="gatunek">
                        <xsl:element name="nazwa">
                            <xsl:value-of select="@nazwa" />
                        </xsl:element>
                        <xsl:element name="ilosc">
                            <xsl:value-of select="$count" />
                        </xsl:element>
                    </xsl:element>
                </xsl:for-each>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template name="data">
        <xsl:element name="data">
            <!-- Autor -->
            <xsl:element name="autor">
                <xsl:copy-of select="//autor" copy-namespaces="no" />
            </xsl:element>

            <!-- Przepisanie albumów -->
            <xsl:element name="albumy">
                <xsl:apply-templates select="/plytoteka/albumy" />
            </xsl:element>

            <!-- Przepisanie klientow -->
            <xsl:element name="klienci">
                <xsl:apply-templates select="/plytoteka/klienci" />
            </xsl:element>
        </xsl:element>
    </xsl:template>


    <!-- Templates | Albumy -->
    <xsl:template match="/plytoteka/albumy">
        <xsl:for-each select="./album">
            <xsl:sort select="ocena" data-type="number" order="descending" />

            <xsl:element name="album">
                <xsl:apply-templates select="*[name()='nazwa']" />
                <xsl:element name="gatunek">
                    <xsl:value-of select="key('keyGenre', @gatunek)/@nazwa" />
                </xsl:element>
                <xsl:apply-templates select="*[name()='okladka']" />
                <xsl:apply-templates select="*[name()='wykonawcy']" />
                <xsl:apply-templates select="*[name()='producent']" />
                <xsl:apply-templates select="*[name()='dystrybutor']" />
                <xsl:apply-templates select="*[name()='opakowanie']" />
                <xsl:apply-templates select="*[name()='plyty']" />
                <xsl:apply-templates select="*[name()='data_premiery']" />
                <xsl:apply-templates select="*[name()='cena']" />
                <xsl:apply-templates select="*[name()='ocena']" />
                <xsl:apply-templates select="*[name()='naklad']" />
                <xsl:apply-templates select="*[name()='sprzedaneEgzemplarze']" />
            </xsl:element>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="*[name()='nazwa']">
        <xsl:element name="nazwa">
            <xsl:value-of select="." />
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='okladka']">
        <xsl:variable name="coverImgUrl" select="'./covers/'" />
        <xsl:variable name="imgSrc" select="@src" />
        <xsl:element name="okladka">
            <xsl:value-of select="concat($coverImgUrl, $imgSrc)" />
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='wykonawcy']">
        <xsl:element name="wykonawcy">
            <xsl:for-each select="wykonawca">
                <xsl:copy-of select="." copy-namespaces="no" />
            </xsl:for-each>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='producent']">
        <xsl:variable name="nameTokens" as="xs:string*" select="tokenize(., ' ')" />

        <xsl:element name="producent">
            <xsl:element name="imie">
                <xsl:value-of select="$nameTokens[1]" />
            </xsl:element>
            <xsl:element name="nazwisko">
                <xsl:value-of select="$nameTokens[2]" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='dystrybutor']">
        <xsl:element name="dystrybutor">
            <xsl:value-of select="." />
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='opakowanie']">
        <xsl:element name="opakowanie">
            <xsl:value-of select="." />
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='plyty']">
        <xsl:element name="plyty">
            <xsl:apply-templates select="*[name()='plyta']" />
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='plyta']">
        <xsl:element name="plyta">
            <xsl:attribute name="cd">
                <xsl:value-of select="@cd" />
            </xsl:attribute>
            <xsl:copy-of select="./utwory" copy-namespaces="no" />
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='data_premiery']">
        <xsl:element name="data_premiery">
            <xsl:element name="dzien">
                <xsl:value-of select="format-date(., '[D01]')" />
            </xsl:element>
            <xsl:element name="miesiac">
                <xsl:value-of select="format-date(., '[M01]')" />
            </xsl:element>
            <xsl:element name="rok">
                <xsl:value-of select="format-date(., '[Y01]')" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='cena']">
        <xsl:variable name="kursEUR" select="4.70" />
        <xsl:variable name="kursUSD" select="4.51" />

        <xsl:element name="cena">
            <xsl:element name="oryginalna">
                <xsl:element name="waluta">
                    <xsl:value-of select="@waluta" />
                </xsl:element>
                <xsl:element name="wartosc">
                    <xsl:value-of select="." />
                </xsl:element>
            </xsl:element>
            <xsl:element name="przeliczona">
                <xsl:element name="waluta">PLN</xsl:element>
                <xsl:element name="wartosc">
                    <xsl:choose>
                        <xsl:when test="@waluta = 'EUR'">
                            <xsl:value-of select="format-number(. * $kursEUR, '0.00')" />
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="format-number(. * $kursUSD, '0.00')" />
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='ocena']">
        <xsl:element name="ocena">
            <xsl:value-of select="format-number(., '0.00')" />
        </xsl:element>
    </xsl:template>

    <xsl:template name="shortenNumbers">
        <xsl:choose>
            <xsl:when test=". >= 1000000">
                <xsl:value-of select="concat(. div 1000000, ' M')" />
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="concat(. div 1000, ' tys.')" />
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <xsl:template match="*[name()='naklad']">
        <xsl:element name="naklademplarze">
            <xsl:call-template name="shortenNumbers" />
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='sprzedaneEgzemplarze']">
        <xsl:element name="sprzedaneEgzemplarze">
            <xsl:call-template name="shortenNumbers" />
        </xsl:element>
    </xsl:template>


    <!-- Templates | Klienci -->
    <xsl:template match="/plytoteka/klienci">
        <xsl:apply-templates select="*[name()='klient']">
            <xsl:sort select="count(./wypozyczenia/wypozyczenie/albumy/album)" order="descending" />
        </xsl:apply-templates>
    </xsl:template>

    <xsl:template match="*[name()='klient']">
        <xsl:element name="klient">
            <xsl:attribute name="pesel">
                <xsl:value-of select="pesel" />
            </xsl:attribute>

            <xsl:element name="godnosc">
                <xsl:value-of select="concat(imie, ' ', nazwisko)" />
            </xsl:element>
            <xsl:element name="login">
                <xsl:value-of select="login" />
            </xsl:element>
            <xsl:element name="wypozyczenia">
                <xsl:apply-templates select="*[name()='wypozyczenia']" />
            </xsl:element>

            <xsl:element name="wypozyczone">
                <xsl:value-of select="count(./wypozyczenia/wypozyczenie/albumy/album)" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='wypozyczenie']">
        <xsl:element name="wypozyczenie">
            <xsl:element name="albumy">
                <xsl:apply-templates select="albumy/album" />
            </xsl:element>
            <xsl:element name="data_rozpoczecia">
                <xsl:value-of select="data_rozpoczecia" />
            </xsl:element>
            <xsl:element name="data_zakonczenia">
                <xsl:value-of select="data_zakonczenia" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='album']">
        <xsl:variable name="album" select="key('keyAlbum', @numer)" />
        <xsl:element name="album">
            <xsl:copy-of select="$album/nazwa" copy-namespaces="no" />
            <xsl:copy-of select="$album/wykonawcy" copy-namespaces="no" />
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>