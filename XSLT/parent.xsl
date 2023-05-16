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

    <xsl:template match="/" >
       <!-- Name of son: <xsl:value-of select="parent/son"/>
       Name of daughter: <xsl:value-of select="parent/daughter"/> -->
       <people>
            <person>
                <xsl:value-of select="parent/son"/>
            </person>
            <person>
                <xsl:value-of select="parent/daughter"/>
            </person>
       </people>
    </xsl:template>

    

</xsl:stylesheet>