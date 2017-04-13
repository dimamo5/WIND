<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
    <xsl:template match="/">
        <destinations>
            <xsl:apply-templates select="//destination"/>
        </destinations>
    </xsl:template>

    <xsl:template match="destination">
        <destination>
            <xsl:attribute name="id" select="@id"/>
            <xsl:apply-templates select="//trip[itinerary/@destination = current()/@id]"/>
        </destination>
    </xsl:template>

    <xsl:template match="trip">
        <trip>
            <xsl:attribute name="start" select="./start"/>
            <xsl:attribute name="end" select="./end"/>
            <itinerary>
                <xsl:value-of select="./itinerary"/>
            </itinerary>
            <planes>
                <xsl:value-of select="count(./plane)"/>
            </planes>
        </trip>

    </xsl:template>

</xsl:stylesheet>
