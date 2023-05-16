<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:array="http://www.w3.org/2005/xpath-functions/array"
                xmlns:map="http://www.w3.org/2005/xpath-functions/map"
                xmlns:math="http://www.w3.org/2005/xpath-functions/math"
                exclude-result-prefixes="#all"
                expand-text="yes"
                version="3.0">

    <xsl:output method="text" indent="yes"/>
    

    <xsl:template match="/" mode="#all">
       <xsl:apply-templates select="//record"/>
    </xsl:template>

    <xsl:template match="record">
        ID: <xsl:value-of select="./id"/>
        Title: <xsl:value-of select="./title"/>
        Date: <xsl:value-of select="./date/@when"/>
        Keywords: <xsl:value-of select="./keywords"/>
    </xsl:template>
    

</xsl:stylesheet>