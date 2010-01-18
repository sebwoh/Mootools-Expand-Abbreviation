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
    document.body.expandAbbr(
        'div#header>div#logo^text=Containing Logo+div#navigation+div#subnavigation'
    );
    $('navigation').expandAbbr(
        'ul>li*3>a^href=http://localhost,text=My Linktext,target=_blank,title=a navigation link'
    );
    $('subnavigation').expandAbbr(
        'ul>li*5>a^href=http://localhost/sub,text=My Sub-Linktext,title=a link'
    );
});