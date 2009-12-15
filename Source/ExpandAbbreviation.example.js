/**
 * Additional Options will be introduced by ^ tag.
 * Multiple options must be seperated by ,
 * Options must be in format attribute=value
 * attribute must be a valid html attribute for the specific tag, expecting the "text" attribute (which will be the innerHTML
 */

// Example:

window.addEvent('domready', function() {
    // Generating Header
    document.body.expandAppr( 'div#header>div#logo^text=Containing Logo+div#navigation+div#subnavigation' );

    // the Navigation with some li's and a's
    $('navigation').expandAppr( 'ul>li*3>a^href=http://www.google.com,text=GOOGLE,target=_blank,title=a navigation link' );

    // the Navigation with some li's and a's
    $('subnavigation').expandAppr( 'ul>li*5>a^href=http://www.nyt.com,text=NYT,title=a link' );

    // Generating Main Content Body with left and right column
    document.body.expandAppr( 'div#main>div#content' );
    $('content').expandAppr( 'div.box*24>h3^text=a little box+p^text=with some content' );
    $('content').expandAppr( 'br^style=clear:both' );

    // Generating Footer and Sitemap Body
    document.body.expandAppr( 'div#bottom>div#sitemap^text=The Sitemap+div#footer^text=The Footer' );
});