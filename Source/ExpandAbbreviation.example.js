/*
---
description: expandAbbr Example

license: MIT-style

authors:
- Sebastian Wohlrab

requires:
  core/1.2.4: '*'
# actually:
# - core/1.2.4: Element

provides: [Element.expandAbbr]

...
*/

window.addEvent('domready', function() {
    // Generating Header
    document.body.expandAbbr( 'div#header>div#logo^text=Containing Logo+div#navigation+div#subnavigation' );

    // the Navigation with some li's and a's
    $('navigation').expandAbbr( 'ul>li*3>a^href=http://www.google.com,text=GOOGLE,target=_blank,title=a navigation link' );

    // the Navigation with some li's and a's
    $('subnavigation').expandAbbr( 'ul>li*5>a^href=http://www.nyt.com,text=NYT,title=a link' );

    // Generating Main Content Body with left and right column
    document.body.expandAbbr( 'div#main>div#content' );
    $('content').expandAbbr( 'div.box*24>h3^text=a little box+p^text=with some content' );
    $('content').expandAbbr( 'br^style=clear:both' );

    // Generating Footer and Sitemap Body
    document.body.expandAbbr( 'div#bottom>div#sitemap^text=The Sitemap+div#footer^text=The Footer' );
});