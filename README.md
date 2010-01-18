Expand Abbreviation
===========

Expand Abbreviation provides ZEN-Coding functionality to MooTools. Expand Abbreviation extends Elements.

![Screenshot](http://0049.ch/expandabbr.jpg)

How to use
----------

You can use Expand Abbreviation with any existing Element by using the expandAbbr method. In the following example, we will add two div's to #myElement ( div#my1stContainer and div#my2ndContainer ). div#my2ndContainer will contain an ul which contains five li elements with class "myitem".

An additional feature of this plugin is setting attributes (and innerHTML) of elements in the string. You can easily do that by using an "^" for indicating the "attribute-string" as shown in the second sample. You can combine attribute/values by seperating with ",". The text will be set by "text=" ( this feature uses the mootools Element.set-Function ).

Another Difference to the original Zen-Functionality is a not-implemented iterating variable ( $ ). Hope i will have time to to that later.

	#JS
	$("myElement").expandAbbr( "div#my1stContainer+div#my2ndContainer>ul>li.myitem*5" );
	
	$("myElement").expandAbbr( "a.mylink^text=my linktext,style=display:block,target=_blank");