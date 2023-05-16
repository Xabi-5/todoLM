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
    
    <xsl:template match="/" mode="#all">
        
        <html>
            <head>
               <title>asdfsd</title>
            </head>
            <body>
             <h1>               
                <xsl:value-of select="count(root/record[city='Glasgow' and date/year='1790'])"/>
                </h1>
                <xsl:apply-templates select="//record"/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="record">
         <xsl:if test="city='Glasgow' and date/year='1790'">
            <p>[<xsl:value-of select="./id"/>]</p>
            <p><xsl:value-of select="./city"/></p>
            <p><xsl:value-of select="./text/p[1]"/></p>
        </xsl:if>
    </xsl:template>
                
                
</xsl:stylesheet>