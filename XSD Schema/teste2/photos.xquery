<result>
{
for $x in  fn:distinct-values(fn:doc("photos.xml")//photo/photographer)
order by $x ascending
return
<photograph name="{$x}">
{
for $y in fn:doc("photos.xml")//photo
where $y/text/@lang = "EN"
and (fn:contains($y/text[@lang = "EN"], "Gambozinos") or fn:contains($y/text[@lang = "EN"], "Porto"))
and $y//dateImported > xs:date("2015-12-31") and $y//dateImported < xs:date("2017-01-01")
and $y/photographer = $x

return 
<photo id="{data($y/@id)}">
</photo>

}
</photograph>
}
</result>