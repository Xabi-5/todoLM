<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:array="http://www.w3.org/2005/xpath-functions/array"
                xmlns:map="http://www.w3.org/2005/xpath-functions/map"
                xmlns:math="http://www.w3.org/2005/xpath-functions/math"
                exclude-result-prefixes="#all"
                expand-text="yes"
                version="3.0">

    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="/" mode="#all">
        <xsl:element name="teaches">
            <xsl:apply-templates select="//teaches-tuple"/>
        </xsl:element>
    </xsl:template>
    <xsl:template match="teaches-tuple">
        <xsl:element name="course">
            <xsl:value-of select="./@course"/>
        </xsl:element>
        <xsl:element name="lecturer">
            <xsl:value-of select="./@lecturer"/>
        </xsl:element>
    </xsl:template>

        <!-- <teaches>
            <teaches-tuple>
                <course><xsl:value-of select="//teaches-touple[1]/@course"/></course>
                <lecturer><xsl:value-of select=""/>
            </teaches-tuple>
        </teaches> -->
    

</xsl:stylesheet>