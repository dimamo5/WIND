<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:template match="/">
        <planes>
            <xsl:apply-templates select="//traveler"/>
        </planes>
    </xsl:template>
    <xsl:template match="traveler">
        <xsl:apply-templates select="./trip"/>
    </xsl:template>
    <xsl:template match="trip">
        <xsl:apply-templates select="./plane"/>
    </xsl:template>
    <xsl:template match="plane">
        <plane>
            <xsl:attribute name="date" select="./@date"/>
            <passenger>
                <xsl:value-of select="./../../name"/>
            </passenger>
            <destination>
                <xsl:value-of select="//destination[@id = current()/../itinerary/@destination]"/>
            </destination>
            <airport>
                <xsl:value-of select="./airport"/>
            </airport>
        </plane>
    </xsl:template>
    
   
</xsl:stylesheet>