<xsl:stylesheet
    version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
>
    <xsl:output method="text" encoding="UTF-8" />

    <xsl:template name="repeat">
        <xsl:param name="value" />
        <xsl:param name="length" />

        <xsl:if test="$length &gt; 0">
            <xsl:value-of select="string($value)" />
        </xsl:if>
        <xsl:if test="$length &gt; 1">
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="$value" />
                <xsl:with-param name="length" select="($length - 1)" />
            </xsl:call-template>
        </xsl:if>
    </xsl:template>

    <xsl:template name="getColumnWidth">
        <xsl:param name="column" />
        <xsl:param name="displayName" />

        <xsl:for-each select="//data/albumy/album">
            <xsl:sort select="string-length(*[name()=$column])" data-type="number" order="ascending" />
            <xsl:if test="position()=last()">
                <xsl:variable name="x0" select="string-length(*[name()=$column])" />
                <xsl:variable name="x1" select="string-length($displayName)" />

                <xsl:if test="$x0 > $x1">
                    <xsl:value-of select="$x0" />
                </xsl:if>
                <xsl:if test="$x1 >= $x0">
                    <xsl:value-of select="$x1" />
                </xsl:if>
            </xsl:if>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="/">
        <xsl:value-of select="//*[name()='temat']" />
        <xsl:text>&#xa;</xsl:text>
        <xsl:text>&#xa;</xsl:text>
        <xsl:apply-templates select="//data/albumy" />
    </xsl:template>

    <xsl:template match="//data/albumy">
        <!-- Wyliczenie długości pojedynczych kolumn -->
        <!-- Tytuł -->
        <xsl:variable name="titleDisplayName" select="'Tytuł'" />
        <xsl:variable name="titleLength">
            <xsl:call-template name="getColumnWidth">
                <xsl:with-param name="column" select="'nazwa'" />
                <xsl:with-param name="displayName" select="$titleDisplayName" />
            </xsl:call-template>
        </xsl:variable>
        <!-- Gatunek -->
        <xsl:variable name="genreDisplayName" select="'Gatunek'" />
        <xsl:variable name="genreLength">
            <xsl:call-template name="getColumnWidth">
                <xsl:with-param name="column" select="'gatunek'" />
                <xsl:with-param name="displayName" select="$genreDisplayName" />
            </xsl:call-template>
        </xsl:variable>
        <!-- Cena -->
        <xsl:variable name="priceDisplayName" select="'Cena'" />
        <xsl:variable name="priceLength">
            <xsl:call-template name="getColumnWidth">
                <xsl:with-param name="column" select="'cena'" />
                <xsl:with-param name="displayName" select="$priceDisplayName" />
            </xsl:call-template>
        </xsl:variable>
        <!-- Ocena -->
        <xsl:variable name="ratingDisplayName" select="'Ocena'" />
        <xsl:variable name="ratingLength">
            <xsl:call-template name="getColumnWidth">
                <xsl:with-param name="column" select="'ocena'" />
                <xsl:with-param name="displayName" select="$ratingDisplayName" />
            </xsl:call-template>
        </xsl:variable>
        <!-- Data premiery -->
        <xsl:variable name="releaseDisplayName" select="'Data premiery'" />
        <xsl:variable name="releaseLength">
            <xsl:call-template name="getColumnWidth">
                <xsl:with-param name="column" select="'data_premiery'" />
                <xsl:with-param name="displayName" select="$releaseDisplayName" />
            </xsl:call-template>
        </xsl:variable>


        <!-- Wyliczenie długości całej tabeli -->
        <xsl:variable name="width" select="11 + $titleLength + $genreLength + $priceLength + $ratingLength + $releaseLength" />


        <!-- Generowanie tabelki -->
        <!-- Linie -->
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="'-'" />
            <xsl:with-param name="length" select="$width" />
        </xsl:call-template>

        <!-- Nagłówki -->
        <xsl:text>&#xa;| </xsl:text>
        <xsl:value-of select="$titleDisplayName" />
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="' '" />
            <xsl:with-param name="length" select="$titleLength - string-length($titleDisplayName)" />
        </xsl:call-template>

        <xsl:text>| </xsl:text>
        <xsl:value-of select="$genreDisplayName" />
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="' '" />
            <xsl:with-param name="length" select="$genreLength - string-length($genreDisplayName)" />
        </xsl:call-template>

        <xsl:text>| </xsl:text>
        <xsl:value-of select="$priceDisplayName" />
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="' '" />
            <xsl:with-param name="length" select="$priceLength - string-length($priceDisplayName)" />
        </xsl:call-template>

        <xsl:text>| </xsl:text>
        <xsl:value-of select="$ratingDisplayName" />
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="' '" />
            <xsl:with-param name="length" select="$ratingLength - string-length($ratingDisplayName)" />
        </xsl:call-template>

        <xsl:text>| </xsl:text>
        <xsl:value-of select="$releaseDisplayName" />
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="' '" />
            <xsl:with-param name="length" select="$releaseLength - string-length($releaseDisplayName)" />
        </xsl:call-template>
        <xsl:text>| </xsl:text>

        <!-- Linie -->
        <xsl:text>&#xa;</xsl:text>
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="'-'" />
            <xsl:with-param name="length" select="$width" />
        </xsl:call-template>


        <!-- Wypełnianie danymi -->
        <xsl:for-each select="//data/albumy/album">
            <xsl:text>&#xa;| </xsl:text>
            <xsl:variable name="title" select="nazwa" />
            <xsl:variable name="genre" select="gatunek" />
            <xsl:variable name="price" select="concat(cena/przeliczona/wartosc, ' zł')" />
            <xsl:variable name="rating" select="ocena" />
            <xsl:variable name="release" select="data_premiery" />

            <xsl:value-of select="$title" />
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="' '" />
                <xsl:with-param name="length" select="$titleLength - string-length($title)" />
            </xsl:call-template>
            <xsl:text>| </xsl:text>

            <xsl:value-of select="$genre" />
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="' '" />
                <xsl:with-param name="length" select="$genreLength - string-length($genre)" />
            </xsl:call-template>
            <xsl:text>| </xsl:text>

            <xsl:value-of select="$price" />
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="' '" />
                <xsl:with-param name="length" select="$priceLength - string-length($price)" />
            </xsl:call-template>
            <xsl:text>| </xsl:text>

            <xsl:value-of select="$rating" />
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="' '" />
                <xsl:with-param name="length" select="$ratingLength - string-length($rating)" />
            </xsl:call-template>
            <xsl:text>| </xsl:text>

            <xsl:value-of select="$release" />
            <xsl:call-template name="repeat">
                <xsl:with-param name="value" select="' '" />
                <xsl:with-param name="length" select="$releaseLength - string-length($release)" />
            </xsl:call-template>
            <xsl:text>| </xsl:text>
        </xsl:for-each>


        <!-- Linie -->
        <xsl:text>&#xa;</xsl:text>
        <xsl:call-template name="repeat">
            <xsl:with-param name="value" select="'-'" />
            <xsl:with-param name="length" select="$width" />
        </xsl:call-template>
    </xsl:template>
</xsl:stylesheet>