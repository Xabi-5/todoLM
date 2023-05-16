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
               <title>Books</title>
            </head>
            <body>
                <table>
                    <caption><xsl:value-of select="count(//book)"/></caption>
                    <tr style="background-color:dodgerblue;color:white;">
                        <th>Autor</th>
                        <th>Titulo</th>
                    </tr>
                    <xsl:apply-templates select="//book">
                        <!-- <xsl:sort select="./price">
                            
                        </xsl:sort> -->
                    </xsl:apply-templates>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="book">
        <xsl:if test="./price &lt;= 10">
            <tr style="background-color:aquamarine;">
                <td><xsl:value-of select="./author"/></td>
                <td><xsl:value-of select="./title"/></td>
            </tr>
        </xsl:if>
        <xsl:if test="./price > 10 and ./price &lt;= 15">
            <tr style="background-color:gold;">
                <td><xsl:value-of select="./author"/></td>
                <td><xsl:value-of select="./title"/></td>
            </tr>
        </xsl:if>
        <xsl:if test="./price > 15">
            <tr style="background-color:crimson;color:white;">
                <td><xsl:value-of select="./author"/></td>
                <td><xsl:value-of select="./title"/></td>
            </tr>
        </xsl:if>
    </xsl:template>
    

    

</xsl:stylesheet>