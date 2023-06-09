<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:array="http://www.w3.org/2005/xpath-functions/array"
                xmlns:map="http://www.w3.org/2005/xpath-functions/map"
                xmlns:math="http://www.w3.org/2005/xpath-functions/math"
                exclude-result-prefixes="#all"
                expand-text="yes"
                version="3.0">

    <xsl:output method="html" indent="yes"/>
    <xsl:mode on-no-match="shallow-copy"/>

    <xsl:template match="/" mode="#all">
            <html>
            <head>
               <title>Movies</title>
            </head>
            <body>
                <h1><xsl:value-of select="count(//movie)"/></h1>
                <ul>
                    <xsl:apply-templates select="//movie">
                        <xsl:sort select="@year" order="ascending">
                            
                        </xsl:sort>
                    </xsl:apply-templates>
                </ul>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="movie">
       <li>
            <xsl:value-of select="./title"/> - <xsl:value-of select="@year"/>
       </li>
    </xsl:template>

    

</xsl:stylesheet>