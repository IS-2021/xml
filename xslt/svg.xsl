<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns="http://www.w3.org/2000/svg"
>
    <xsl:output method="xml" version="1.0" encoding="utf-8" indent="yes" />
    <xsl:variable name="squareSize" select='640' />

    <xsl:template match="/">
        <xsl:element name="svg" namespace="http://www.w3.org/2000/svg">
            <xsl:namespace name="xlink" select="'http://www.w3.org/1999/xlink'" />
            <xsl:attribute name="viewBox">
                <xsl:value-of select="'0 0 300 300'" />
            </xsl:attribute>
            <xsl:attribute name="width">
                <xsl:value-of select="$squareSize" />
            </xsl:attribute>
            <xsl:attribute name="height">
                <xsl:value-of select="$squareSize" />
            </xsl:attribute>
            <xsl:attribute name="fill">
                <xsl:value-of select="'none'" />
            </xsl:attribute>

            <!-- Templates -->
            <xsl:call-template name="fonts" />
            <xsl:call-template name="svg_body" />
            <xsl:call-template name="javascript" />

        </xsl:element>
    </xsl:template>

    <xsl:template name="fonts">
        <style type="text/css">
            <![CDATA[ 
                @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
            ]]>
        </style>
    </xsl:template>

    <xsl:template name="javascript">
        <xsl:element name="script">
            <xsl:attribute name="type">text/javascript</xsl:attribute>
            <xsl:attribute name="href">https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js</xsl:attribute>
        </xsl:element>
        <xsl:element name="script">
            <xsl:attribute name="type">text/javascript</xsl:attribute>
            <xsl:attribute name="href">../assets/scripts/svg.js</xsl:attribute>
        </xsl:element>
    </xsl:template>

    <xsl:template name="svg_body">
        <g id="gatunki">
            <rect width="300" height="300" rx="8" fill="white" />
            <!-- <path id="title" d="M29.1634 27.3707C29.0185 26.8338 28.8054 26.3608 28.5241 25.9517C28.2429 25.5341 27.8977 25.1804 27.4886 24.8906C27.0795 24.6009 26.6108 24.3835 26.0824 24.2386C25.554 24.0852 24.9744 24.0085 24.3438 24.0085C23.0739 24.0085 21.9744 24.3153 21.0455 24.929C20.125 25.5426 19.4134 26.4375 18.9105 27.6136C18.4077 28.7812 18.1562 30.2003 18.1562 31.8707C18.1562 33.5497 18.3991 34.9815 18.8849 36.1662C19.3707 37.3509 20.0739 38.2543 20.9943 38.8764C21.9148 39.4986 23.0312 39.8097 24.3438 39.8097C25.5028 39.8097 26.483 39.6222 27.2841 39.2472C28.0938 38.8636 28.7074 38.3224 29.125 37.6236C29.5426 36.9247 29.7514 36.1023 29.7514 35.1562L30.9276 35.2969H24.5611V30.6818H35.8494V34.1463C35.8494 36.4901 35.3509 38.4972 34.3537 40.1676C33.3651 41.8381 32.0014 43.1207 30.2628 44.0156C28.5327 44.9105 26.5426 45.358 24.2926 45.358C21.7955 45.358 19.6009 44.8168 17.7088 43.7344C15.8168 42.652 14.3423 41.1094 13.2855 39.1065C12.2287 37.0952 11.7003 34.7088 11.7003 31.9474C11.7003 29.7997 12.0199 27.8949 12.6591 26.233C13.2983 24.5625 14.1889 23.1477 15.331 21.9886C16.4815 20.8295 17.8111 19.9517 19.3196 19.3551C20.8366 18.7585 22.4688 18.4602 24.2159 18.4602C25.733 18.4602 27.1435 18.6776 28.4474 19.1122C29.7599 19.5469 30.919 20.1605 31.9247 20.9531C32.9389 21.7457 33.7614 22.6875 34.392 23.7784C35.0227 24.8693 35.4148 26.0668 35.5682 27.3707H29.1634ZM45.1147 45.3324C43.8619 45.3324 42.7496 45.1236 41.7781 44.706C40.815 44.2798 40.0522 43.6406 39.4897 42.7884C38.9357 41.9276 38.6587 40.8494 38.6587 39.554C38.6587 38.4631 38.8505 37.5426 39.234 36.7926C39.6175 36.0426 40.146 35.4332 40.8192 34.9645C41.4925 34.4957 42.2681 34.142 43.146 33.9034C44.0238 33.6562 44.9613 33.4901 45.9585 33.4048C47.0749 33.3026 47.9741 33.196 48.6559 33.0852C49.3377 32.9659 49.832 32.7997 50.1389 32.5866C50.4542 32.3651 50.6119 32.054 50.6119 31.6534V31.5895C50.6119 30.9332 50.386 30.4261 49.9343 30.0682C49.4826 29.7102 48.8732 29.5312 48.1062 29.5312C47.2795 29.5312 46.6147 29.7102 46.1119 30.0682C45.609 30.4261 45.2894 30.9205 45.1531 31.5511L39.3874 31.3466C39.5579 30.1534 39.9968 29.0881 40.7042 28.1506C41.4201 27.2045 42.4002 26.4631 43.6445 25.9261C44.8974 25.3807 46.4016 25.108 48.1573 25.108C49.4102 25.108 50.565 25.2571 51.6218 25.5554C52.6786 25.8452 53.5991 26.2713 54.3832 26.8338C55.1673 27.3878 55.7724 28.0696 56.1985 28.8793C56.6332 29.6889 56.8505 30.6136 56.8505 31.6534V45H50.9698V42.2642H50.8164C50.467 42.929 50.0195 43.4915 49.4741 43.9517C48.9371 44.4119 48.3022 44.7571 47.5692 44.9872C46.8448 45.2173 46.0266 45.3324 45.1147 45.3324ZM47.0451 41.2415C47.7184 41.2415 48.3235 41.1051 48.8604 40.8324C49.4059 40.5597 49.8406 40.1847 50.1644 39.7074C50.4883 39.2216 50.6502 38.6591 50.6502 38.0199V36.1534C50.4712 36.2472 50.2539 36.3324 49.9982 36.4091C49.7511 36.4858 49.4783 36.5582 49.18 36.6264C48.8817 36.6946 48.5749 36.7543 48.2596 36.8054C47.9442 36.8565 47.6417 36.9034 47.3519 36.946C46.7638 37.0398 46.261 37.1847 45.8434 37.3807C45.4343 37.5767 45.119 37.8324 44.8974 38.1477C44.6843 38.4545 44.5778 38.821 44.5778 39.2472C44.5778 39.8949 44.8079 40.3892 45.2681 40.7301C45.7369 41.071 46.3292 41.2415 47.0451 41.2415ZM71.7567 25.3636V29.9659H59.369V25.3636H71.7567ZM61.9641 20.6591H68.2156V38.8253C68.2156 39.2088 68.2752 39.5199 68.3945 39.7585C68.5224 39.9886 68.7056 40.1548 68.9442 40.2571C69.1829 40.3509 69.4684 40.3977 69.8008 40.3977C70.0394 40.3977 70.2908 40.3764 70.555 40.3338C70.8278 40.2827 71.0323 40.2401 71.1687 40.206L72.1147 44.7188C71.8164 44.804 71.3945 44.9105 70.8491 45.0384C70.3121 45.1662 69.6687 45.2472 68.9187 45.2812C67.4528 45.3494 66.1957 45.179 65.1474 44.7699C64.1076 44.3523 63.3107 43.7045 62.7567 42.8267C62.2113 41.9489 61.9471 40.8452 61.9641 39.5156V20.6591ZM87.6154 36.5241V25.3636H93.854V45H87.8967V41.3438H87.6921C87.2575 42.5455 86.516 43.5 85.4677 44.2074C84.4279 44.9062 83.1708 45.2557 81.6964 45.2557C80.3583 45.2557 79.1822 44.9489 78.168 44.3352C77.1538 43.7216 76.3654 42.8651 75.8029 41.7656C75.2404 40.6577 74.9549 39.3622 74.9464 37.8793V25.3636H81.1978V36.652C81.2063 37.7173 81.4876 38.5568 82.0415 39.1705C82.5955 39.7841 83.3498 40.0909 84.3043 40.0909C84.9265 40.0909 85.4847 39.9545 85.979 39.6818C86.4819 39.4006 86.8782 38.9957 87.168 38.4673C87.4663 37.9304 87.6154 37.2827 87.6154 36.5241ZM104.085 33.8011V45H97.8331V25.3636H103.778V28.9688H103.995C104.43 27.767 105.171 26.8253 106.219 26.1435C107.268 25.4531 108.516 25.108 109.965 25.108C111.346 25.108 112.543 25.419 113.558 26.0412C114.58 26.6548 115.373 27.5156 115.935 28.6236C116.506 29.723 116.788 31.0099 116.779 32.4844V45H110.528V33.7116C110.536 32.6207 110.259 31.7685 109.697 31.1548C109.143 30.5412 108.371 30.2344 107.383 30.2344C106.727 30.2344 106.147 30.3793 105.644 30.669C105.15 30.9503 104.766 31.3551 104.494 31.8835C104.229 32.4119 104.093 33.0511 104.085 33.8011ZM126.287 39.848L126.313 32.3949H127.182L132.705 25.3636H139.787L131.58 35.4375H129.931L126.287 39.848ZM120.65 45V18.8182H126.901V45H120.65ZM132.846 45L127.706 36.8438L131.823 32.4077L140.069 45H132.846ZM142.025 45V25.3636H148.276V45H142.025ZM145.157 23.0753C144.279 23.0753 143.525 22.7855 142.894 22.206C142.263 21.6179 141.948 20.9105 141.948 20.0838C141.948 19.2656 142.263 18.5668 142.894 17.9872C143.525 17.3991 144.279 17.1051 145.157 17.1051C146.043 17.1051 146.797 17.3991 147.419 17.9872C148.05 18.5668 148.365 19.2656 148.365 20.0838C148.365 20.9105 148.05 21.6179 147.419 22.206C146.797 22.7855 146.043 23.0753 145.157 23.0753Z" fill="black" /> -->
            <text id="title" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="36" font-weight="800" letter-spacing="0em">
                <tspan x="10" y="45.0909">Gatunki</tspan>
            </text>
            <xsl:call-template name="bars" />
        </g>
    </xsl:template>

    <xsl:template name="bars">
        <xsl:variable name="total" select="sum(//stats/gatunki/iloscPerGatunek/gatunek/ilosc)" />

        <xsl:for-each select="//stats/gatunki/iloscPerGatunek/gatunek">
            <xsl:variable name="gatunek" select="nazwa" />
            <xsl:variable name="yPos" select="22 * (position() - 1)" />
            <xsl:variable name="proc" select="ilosc div $total * 100" />
            <xsl:variable name="procDisplay" select="concat(format-number($proc, '0'), '%')" />

            <g id="bars">
                <g id="bar">
                    <text id="name" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="10" font-weight="600" letter-spacing="0em">
                        <tspan x="-60" y="{81.63 + $yPos}">
                            <xsl:value-of select="$gatunek" />
                        </tspan>
                    </text>
                    <rect id="bg" x="154" y="{69 + $yPos}" width="{$proc + 40}" height="18" fill="#D9D9D9" />
                    <text id="value" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="10" font-weight="500" letter-spacing="0em">
                        <tspan x="84" y="{81.6364 + $yPos}">
                            <xsl:value-of select="$procDisplay" />
                        </tspan>
                    </text>
                </g>
            </g>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>