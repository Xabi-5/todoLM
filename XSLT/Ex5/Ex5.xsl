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
                <h1>Our customer</h1>
            </head>
            <body>
                <p>The name of the customer is <xsl:value-of select="//first"/> and their surname is <xsl:value-of select="//last"/>.
                They live at <xsl:value-of select="//city"/> in <xsl:value-of select="//state"/>
                </p>
            </body>
        </html>
    </xsl:template>

    

</xsl:stylesheet>