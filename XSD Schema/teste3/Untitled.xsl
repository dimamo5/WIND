<!--<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="//Department">
        <xsl:copy-of select="./Course[@Enrollment > 500]"/>
    </xsl:template>
</xsl:stylesheet>-->

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    
    <xsl:template match="/">
        <Course_Catalog>
            <xsl:apply-templates select="/Course_Catalog/Department" />
        </Course_Catalog>
    </xsl:template>
    
    <xsl:template match="Department">
        <Department>
            <xsl:attribute name="Code" select="@Code"></xsl:attribute>
            <xsl:copy-of select="./Title" />
            <xsl:copy-of select="./Chair" />
            <xsl:copy-of select="./Course[@Enrollment &lt;= 60]" />
        </Department>
    </xsl:template>
    
    
</xsl:stylesheet>


<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:template match="//Department[code = 'EE']">
        <xsl:attribute name="Number" select="./Course/@Number">
            <xsl:attribute name="Title" select="./Course/Title">
                <xsl:copy-of select="Description"/>
                <xsl:value-of select="Instructors/Professor/Last_Name"/>
            </xsl:attribute>     
        </xsl:attribute>
    </xsl:template>
</xsl:stylesheet>