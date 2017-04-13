(: 
2.
count(fn:doc("bib.xml")//book[author = "Abiteboul"])
:)
(:
for $a in fn:distinct-values(doc("bib.xml")//author)
return
fn:count(doc("bib.xml")//book[author])
:)

<result>
 {
for $a in fn:distinct-values(fn:doc("bib.xml")//author)
return 
    <author name="{data($a)}">
    {
 for $b in fn:doc("bib.xml")//book[author = $a]
 order by $b/@year
   return 
        <book title="{data($b/title)}">{data($b/@year)}</book>   
}
 </author>
}
</result>