<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns="http://www.w3.org/1999/xhtml"
>
    <xsl:output method="xml"
        doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
        doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" version="1.0" encoding="UTF-8" indent="yes" />


    <xsl:template match="/">
        <xsl:element name="html" namespace="http://www.w3.org/1999/xhtml">
            <xsl:element name="head">
                <xsl:element name="meta">
                    <xsl:attribute name="content">text/html; charset=utf-8</xsl:attribute>
                </xsl:element>
                <xsl:element name="title">
                    <xsl:value-of select="//*[name()='temat']" />
                </xsl:element>
                <xsl:element name="link">
                    <xsl:attribute name="rel">stylesheet</xsl:attribute>
                    <xsl:attribute name="href">../../styles/style.css</xsl:attribute>
                </xsl:element>
                <xsl:element name="link">
                    <xsl:attribute name="rel">stylesheet</xsl:attribute>
                    <xsl:attribute name="href">../../styles/layout.css</xsl:attribute>
                </xsl:element>
                <xsl:element name="link">
                    <xsl:attribute name="rel">stylesheet</xsl:attribute>
                    <xsl:attribute name="href">../../styles/override.css</xsl:attribute>
                </xsl:element>
                <xsl:element name="link">
                    <xsl:attribute name="rel">stylesheet</xsl:attribute>
                    <xsl:attribute name="href">../../styles/stats.css</xsl:attribute>
                </xsl:element>
            </xsl:element>
            <xsl:element name="body">
                <!-- Autor -->
                <xsl:element name="div">
                    <xsl:attribute name="class">autor</xsl:attribute>
                    <xsl:apply-templates select="//data/autor" />
                </xsl:element>
                <!-- Podsumowanie -->
                <xsl:element name="div">
                    <xsl:attribute name="class">stats</xsl:attribute>
                    <xsl:apply-templates select="//stats" />
                </xsl:element>
                <!-- Albumy -->
                <xsl:element name="div">
                    <xsl:attribute name="class">albumy</xsl:attribute>
                    <xsl:apply-templates select="//data/albumy" />
                </xsl:element>
                <!-- Klienci -->
                <xsl:element name="div">
                    <xsl:attribute name="class">klienci</xsl:attribute>
                    <xsl:apply-templates select="//data/klienci" />
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <!-- Templates | Autor -->
    <xsl:template match="//data/autor">
        <xsl:element name="div">
            <xsl:attribute name="class">student</xsl:attribute>
            <xsl:apply-templates select="*[name()='student']" />
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">zadanie</xsl:attribute>
            <xsl:apply-templates select="*[name()='zadanie']" />
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='student']">
        <xsl:element name="div">
            <xsl:attribute name="class">imie</xsl:attribute>
            <xsl:value-of select="imie" />
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">nazwisko</xsl:attribute>
            <xsl:value-of select="nazwisko" />
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">indeks</xsl:attribute>
            <xsl:value-of select="indeks" />
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='zadanie']">
        <xsl:element name="div">
            <xsl:attribute name="class">temat</xsl:attribute>
            <xsl:value-of select="temat" />
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">nazwa</xsl:attribute>
            <xsl:value-of select="nazwa" />
        </xsl:element>
    </xsl:template>


    <!-- Templates | Stats -->
    <xsl:template match="//stats">
        <xsl:element name="h1">
            <xsl:value-of select="concat('Albumy (', albumy/ilosc, ')')" />
        </xsl:element>

        <xsl:element name="div">
            <xsl:attribute name="class">albumy</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">cenaMin</xsl:attribute>
                <xsl:value-of select="albumy/cenaMin" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">cenaAvg</xsl:attribute>
                <xsl:value-of select="albumy/cenaAvg" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">cenaMax</xsl:attribute>
                <xsl:value-of select="albumy/cenaMax" />
            </xsl:element>
        </xsl:element>

        <xsl:element name="h1">
            <xsl:value-of select="concat('Wykonawcy (', wykonawcy/ilosc, ')')" />
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">wykonawcy</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">krajowi</xsl:attribute>
                <xsl:value-of select="wykonawcy/ilosc - wykonawcy/zagraniczni" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">zagraniczni</xsl:attribute>
                <xsl:value-of select="wykonawcy/zagraniczni" />
            </xsl:element>
        </xsl:element>

        <xsl:element name="h1">
            <xsl:value-of select="concat('Klienci (', klienci/ilosc, ')')" />
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">klienci</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">ilosc</xsl:attribute>
                <xsl:value-of select="klienci/ilosc" />
            </xsl:element>
        </xsl:element>

        <xsl:element name="h1">
            <xsl:value-of select="concat('Waluty (', count(waluty/waluta), ')')" />
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">waluty</xsl:attribute>
            <xsl:apply-templates select="waluty/waluta" />
        </xsl:element>

        <xsl:element name="h1">
            <xsl:value-of select="concat('Gatunki (', gatunki/ilosc, ')')" />
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">gatunki</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">zliczenia</xsl:attribute>
                <xsl:for-each select="gatunki/iloscPerGatunek/gatunek">
                    <xsl:element name="div">
                        <xsl:attribute name="class">gatunek</xsl:attribute>
                        <xsl:element name="div">
                            <xsl:attribute name="class">nazwa</xsl:attribute>
                            <xsl:value-of select="nazwa" />
                        </xsl:element>
                        <xsl:element name="div">
                            <xsl:attribute name="class">ilosc</xsl:attribute>
                            <xsl:value-of select="ilosc" />
                        </xsl:element>
                    </xsl:element>
                </xsl:for-each>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="waluty/waluta">
        <xsl:element name="div">
            <xsl:attribute name="class">waluta</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">symbol</xsl:attribute>
                <xsl:value-of select="symbol" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">ilosc</xsl:attribute>
                <xsl:value-of select="ilosc" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">min</xsl:attribute>
                <!-- <xsl:value-of select="concat(min, ' ', upper-case(symbol))" /> -->
                <xsl:value-of select="min" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">avg</xsl:attribute>
                <!-- <xsl:value-of select="concat(avg, ' ', upper-case(symbol))" /> -->
                <xsl:value-of select="avg" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">max</xsl:attribute>
                <!-- <xsl:value-of select="concat(max, ' ', upper-case(symbol))" /> -->
                <xsl:value-of select="max" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">sum</xsl:attribute>
                <xsl:value-of select="concat(sum, ' ', upper-case(symbol))" />
                <!-- <xsl:value-of select="sum" /> -->
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <!-- Templates | Gatunki -->
    <xsl:template match="//data/gatunki">
        <xsl:apply-templates select="gatunek" />
    </xsl:template>

    <xsl:template match="//*[name()='gatunek']">
        <xsl:element name="div">
            <xsl:attribute name="class">gatunek</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">id</xsl:attribute>
                <xsl:value-of select="id" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">nazwa</xsl:attribute>
                <xsl:value-of select="nazwa" />
            </xsl:element>
        </xsl:element>
    </xsl:template>


    <!-- Templates | Albumy -->
    <xsl:template match="//data/albumy">
        <xsl:apply-templates select="album" />
    </xsl:template>

    <xsl:template match="//data/albumy/album">
        <xsl:element name="div">
            <xsl:attribute name="id">
                <xsl:value-of select="id" />
            </xsl:attribute>
            <xsl:attribute name="class">album__info</xsl:attribute>

            <xsl:element name="img">
                <xsl:attribute name="src">
                    <xsl:value-of select="okladka" />
                </xsl:attribute>
                <xsl:attribute name="alt">
                    <xsl:value-of select="concat('Okladka albumu ', nazwa)" />
                </xsl:attribute>
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">album</xsl:attribute>
                <xsl:element name="div">
                    <xsl:attribute name="class">nazwa</xsl:attribute>
                    <xsl:value-of select="nazwa" />
                </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">wykonawcy</xsl:attribute>
                    <xsl:apply-templates select="wykonawcy" />
                </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">producent</xsl:attribute>
                    <xsl:value-of select="producent" />
                </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">dystrybutor</xsl:attribute>
                    <xsl:value-of select="dystrybutor" />
                </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">opakowanie</xsl:attribute>
                    <xsl:value-of select="opakowanie" />
                </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">plyty</xsl:attribute>
                    <xsl:apply-templates select="plyty" />
                </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">data_premiery</xsl:attribute>
                    <xsl:value-of select="data_premiery" />
                </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">cena</xsl:attribute>
                    <xsl:apply-templates select="cena" />
                </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">ocena</xsl:attribute>
                    <xsl:value-of select="ocena" />
                </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">naklad</xsl:attribute>
                    <xsl:value-of select="naklademplarze" />
                </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">sprzedaneEgzemplarze</xsl:attribute>
                    <xsl:value-of select="sprzedaneEgzemplarze" />
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="//*[name()='wykonawca']">
        <xsl:element name="div">
            <xsl:attribute name="class">wykonawca</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">
                    <!-- czyZagraniczny -->
                    <xsl:variable name="czyZagranicznyClass">
                        <xsl:if test="@czyZagraniczny = 'tak'">zagraniczny</xsl:if>
                    </xsl:variable>
                    <xsl:value-of select="concat('nazwa ', $czyZagranicznyClass)" />
                </xsl:attribute>
                <xsl:value-of select="." />
            </xsl:element>
            <!-- <xsl:element name="div">
                <xsl:attribute name="class">czyZagraniczny</xsl:attribute>
                <xsl:value-of select="@czyZagraniczny" />
            </xsl:element> -->
        </xsl:element>
    </xsl:template>

    <xsl:template match="//*[name()='plyta']">
        <xsl:element name="div">
            <xsl:attribute name="class">plyta</xsl:attribute>
            <xsl:element name="div">
                <xsl:attribute name="class">cd</xsl:attribute>
                <xsl:value-of select="concat('💿 CD ', @cd)" />
            </xsl:element>

            <xsl:element name="div">
                <xsl:attribute name="class">utwory</xsl:attribute>
                <xsl:apply-templates select="utwory" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="//*[name()='utwor']">
        <xsl:element name="div">
            <xsl:attribute name="class">utwor</xsl:attribute>
            <xsl:element name="div">
                <xsl:attribute name="class">numer</xsl:attribute>
                <xsl:value-of select="numer" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">nazwa</xsl:attribute>
                <xsl:value-of select="nazwa" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">dlugosc</xsl:attribute>
                <xsl:value-of select="dlugosc" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="//*[name()='cena']">
        <xsl:if test="przeliczona">
            <xsl:element name="div">
                <xsl:attribute name="class">przeliczona</xsl:attribute>
                <xsl:apply-templates select="przeliczona" />
            </xsl:element>
        </xsl:if>
        <xsl:element name="div">
            <xsl:attribute name="class">oryginalna</xsl:attribute>
            <xsl:apply-templates select="oryginalna" />
        </xsl:element>
    </xsl:template>

    <xsl:template match="//*[name()='oryginalna' or name()='przeliczona']">
        <xsl:element name="div">
            <xsl:attribute name="class">waluta</xsl:attribute>
            <xsl:value-of select="waluta" />
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">wartosc</xsl:attribute>
            <xsl:value-of select="wartosc" />
        </xsl:element>
    </xsl:template>


    <!-- Templates | Klienci -->
    <xsl:template match="//data/klienci">
        <xsl:apply-templates />
    </xsl:template>

    <xsl:template match="//*[name()='klient']">
        <xsl:element name="div">
            <xsl:attribute name="class">klient</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">pesel</xsl:attribute>
                <xsl:value-of select="@pesel" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">godnosc</xsl:attribute>
                <xsl:value-of select="godnosc" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">login</xsl:attribute>
                <xsl:value-of select="login" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">wypozyczenia</xsl:attribute>
                <xsl:apply-templates select="wypozyczenia" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="*[name()='wypozyczenia']">
        <!-- <xsl:value-of select="local-name()" /> -->
        <xsl:apply-templates select="wypozyczenie" />
    </xsl:template>

    <xsl:template match="wypozyczenie">
        <xsl:element name="div">
            <xsl:attribute name="class">wypozyczenie</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">albumy</xsl:attribute>
                <xsl:apply-templates select="./albumy" />
            </xsl:element>

            <xsl:element name="div">
                <xsl:attribute name="class">data_rozpoczecia</xsl:attribute>
                <xsl:value-of select="data_rozpoczecia" />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">data_zakonczenia</xsl:attribute>
                <xsl:value-of select="data_zakonczenia" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="wypozyczenie/albumy">
        <xsl:for-each select="album">
            <xsl:element name="a">
                <xsl:attribute name="href">
                    <xsl:value-of select="concat('#', id)" />
                </xsl:attribute>

                <xsl:element name="div">
                    <xsl:attribute name="class">album</xsl:attribute>

                    <xsl:element name="div">
                        <xsl:attribute name="class">nazwa</xsl:attribute>
                        <xsl:value-of select="nazwa" />
                    </xsl:element>
                    <xsl:element name="div">
                        <xsl:attribute name="class">wykonawcy</xsl:attribute>
                        <xsl:apply-templates select="wykonawcy/wykonawca" />
                    </xsl:element>
                </xsl:element>
            </xsl:element>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>