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
    document.body.expanAbbr( 'div#header>div#logo^text=Containing Logo+div#navigation+div#subnavigation' );

    // the Navigation with some li's and a's
    $('navigation').expanAbbr( 'ul>li*3>a^href=http://www.google.com,text=GOOGLE,target=_blank,title=a navigation link' );

    // the Navigation with some li's and a's
    $('subnavigation').expanAbbr( 'ul>li*5>a^href=http://www.nyt.com,text=NYT,title=a link' );

    // Generating Main Content Body with left and right column
    document.body.expanAbbr( 'div#main>div#content' );
    $('content').expanAbbr( 'div.box*24>h3^text=a little box+p^text=with some content' );
    $('content').expanAbbr( 'br^style=clear:both' );

    // Generating Footer and Sitemap Body
    document.body.expanAbbr( 'div#bottom>div#sitemap^text=The Sitemap+div#footer^text=The Footer' );
});