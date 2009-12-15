/*
---
description: expandAbbr provides ZEN-Coding functionality to MooTools. Expand Abbreviation extends Elements.

license: MIT-style

authors:
- Sebastian Wohlrab

requires:
- core:1.2.4: '*'

provides: [Element.expandAbbr]
*/

Element.implement("expandAbbr", function( str ) {
    var parent = this;

    if ( str.search('>') > 0 )
    {
        var nodes = str.split('>');

        for ( var i = 0; i < nodes.length; i++ )
        {
            if ( nodes[i].split('+').length > 1 )
            {
                var subnodes = nodes[i].split('+');
                for ( var j = 0; j < subnodes.length; j++ )
                {
                    var newEl = createElement( subnodes[j] )
                    adoptNew(parent, newEl);
                }
                parent = newEl;
            }
            else {
                var newEl = createElement( nodes[i] );
                adoptNew(parent, newEl);
                parent = newEl;
            }
        }
    }
    else {
        parent.adopt( createElement( str ) );
    }
    function adoptNew( parent, element )
    {
        if ( parent.length > 1 )
        {
            for ( var i = 0; i < parent.length; i++ )
            {
                if ( element.length > 1 )
                {
                    for ( var j = 0; j < element.length; j++ )
                    {
                        parent[i].adopt( element[j].clone() );
                    }
                }
                else {
                    parent[i].adopt( element.clone() );
                }
            }
        }
        else {
            if ( element.length > 1 )
            {
                for ( var i = 0; i < element.length; i++ )
                {
                    parent.adopt( element[i] );
                }
            }
            else {
                parent.adopt( element );
            }
        }
    }
    function createElement( str )
    {
        if ( str.split("^").length > 1 ) {
            var additional = str.split("^");
            str = additional[0];
            additional = additional[1];
        }

        if ( str.split("#").length > 1 )
        {
            var elementArr = str.split("#");
            var id = elementArr[1];
            if ( id.split(".").length > 1 )
            {
                var classes = id.split(".");
                id = classes.shift();
            }
            var element = new Element( elementArr[0] );
        }
        else {
            if ( str.split('*').length > 1 )
            {
                var strIterate = str.split('*');
                str = strIterate[0];
                strIterate.shift();
            }
            if ( str.split('.').length > 1 )
            {
                var classes = str.split('.');
                var element = new Element( classes.shift() );
            }
            else {
                var element = new Element( str );
            }
        }
        
        if ( element.get('tag') == 'a' )
        {
            element.set('href', '#');
        }
        if ( additional ) {
            addAditional( element, additional );
        }

        if ( id )
        {
            element.set('id', id );
        }
        if ( classes )
        {
            var classstr = "";
            for ( var i = 0; i < classes.length; i++ )
            {
                classstr += " " + classes[i];
            }
            classstr = classstr.substr(1, classstr.length);
            element.set('class', classstr );
        }
        if ( strIterate )
        {
            var elements = [];
            for ( var i = 0; i < strIterate; i++ )
            {
                elements.push( element.clone() );
            }
        }
        if ( elements )
        {
            return elements;
        }
        else {
            return element;
        }
    }
    function addAditional( element, additional ) {
        if ( additional.search(',') > 0 )
        {
            var additionals = additional.split(',');
            
            for ( var i = 0; i < additionals.length; i++ )
            {
                var segment = additionals[i].split('=');
                element.set(segment[0], segment[1]);
            }
        }
        else {
            var segment = additional.split('=');
            element.set(segment[0], segment[1]);
        }
    }
});