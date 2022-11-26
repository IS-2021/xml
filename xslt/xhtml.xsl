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
            </xsl:element>
            <xsl:element name="body">
                <xsl:apply-templates select="//data/albumy" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="//data/albumy">
        <xsl:apply-templates select="album" />
    </xsl:template>

    <xsl:template match="//data/albumy/album">
        <xsl:element name="div">
            <xsl:attribute name="class">album</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">nazwa</xsl:attribute>
                <xsl:value-of select="nazwa" />
            </xsl:element>
            <xsl:element name="img">
                <xsl:attribute name="src">
                    <xsl:value-of select="okladka" />
                </xsl:attribute>
                <xsl:attribute name="alt">
                    <xsl:value-of select="concat('Okladka albumu ', nazwa)" />
                </xsl:attribute>
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
    </xsl:template>

    <xsl:template match="//*[name()='wykonawca']">
        <xsl:element name="div">
            <xsl:attribute name="class">wykonawca</xsl:attribute>

            <xsl:element name="div">
                <xsl:attribute name="class">nazwa</xsl:attribute>
                <xsl:value-of select="." />
            </xsl:element>
            <xsl:element name="div">
                <xsl:attribute name="class">czyZagraniczny</xsl:attribute>
                <xsl:value-of select="@czyZagraniczny" />
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template match="//*[name()='plyta']">
        <xsl:element name="div">
            <xsl:attribute name="class">plyta</xsl:attribute>
            <xsl:element name="div">
                <xsl:attribute name="class">cd</xsl:attribute>
                <xsl:value-of select="@cd" />
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
        <xsl:element name="div">
            <xsl:attribute name="class">oryginalna</xsl:attribute>
            <xsl:apply-templates select="oryginalna" />
        </xsl:element>
        <xsl:element name="div">
            <xsl:attribute name="class">przeliczona</xsl:attribute>
            <xsl:apply-templates select="przeliczona" />
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
</xsl:stylesheet>