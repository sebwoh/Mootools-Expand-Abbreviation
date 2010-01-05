Expand Abbreviation
===========

Expand Abbreviation provides ZEN-Coding functionality to MooTools. Expand Abbreviation extends Elements.

How to use
----------

You can use Expand Abbreviation with any existing Element by using the expandAbbr method. In the following example, we will add two divs to #myElement ( div#my1stContainer and div#my2ndContainer ). div#my2ndContainer will contain an ul which contains five li elements with class "myitem".

	#JS
	$("myElement").expandAbbr( "div#my1stContainer+div#my2ndContainer>ul>li.myitem*5" );

Arbitrary section
-----------------
