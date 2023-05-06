/* eslint-disable no-unused-expressions */
import React from 'react';

const TestPart = () => {

    ///Smart way to Remove Data From Array!
    const items = [
        { id: 1, name: 'Blue' },
        { id: 2, name: 'Red' },
        { id: 3, name: 'Green' },
        { id: 4, name: 'Sky-Blue' }
    ];

    ///Direct
    const updatedItems = items.filter( ( item ) => item.id !== 3 );
    console.log( 'updatedItems' );

    //JavaScript Object #Lesson 01
    ///Object.prototype.constructor
    const o = {};
    o.constructor === Object;// true

    const oo = new Object;
    oo.constructor === Object; // true

    const a = [];
    a.constructor === Array;// true

    const aa = new Array;
    aa.constructor === Array; // true

    const n = new Number( 3 );
    n.constructor === Number; // true


    // JS Object Lesson #2
    // The Object.assign() method copies all enumerable own properties from one or
    //  more source objects to a target object.It returns the modified target object.
    // Object.assign();
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign( target, source );

    console.log( target );
    // expected output: Object { a: 1, b: 4, c: 5 }

    console.log( returnedTarget );
    // expected output: Object { a: 1, b: 4, c: 5 }


    //JS Lesson#4
    ///Object.create(proto)
    const person = {
        isHuman: false
    };

    const newObj = Object.create( person );
    newObj.name = 'Sohel';
    // "name" is a property set on "newObj",
    //but not on "person"
    newObj.isHuman = true;
    // inherited properties can be overwritten
    console.log( newObj );
    //return {name: 'Sohel', isHuman: true }


    //JS Lesson#5
    const objb = {
        value: 65
    };

    Object.freeze( objb );

    objb.value = 65;
    // Throws an error in strict mode

    console.log( objb.value );
    // expected output: 65

    ///Checking Frozen Object
    // The object has become frozen.
    Object.isFrozen( objb );
    // === true


    //JS JavaScript Lesson #6
    // The Object.entries() method returns an array of
    //a given object's own enumerable string-keyed
    //property[key, value] pairs.
    const entryObj1 = { foo: 'bar', baz: 42 };
    console.log( Object.entries( entryObj1 ) );
    // [ ['foo', 'bar'], ['baz', 42] ]

    // array like object
    const entryObj2 = { 0: 'a', 1: 'b', 2: 'c' };
    console.log( Object.entries( entryObj2 ) );
    // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]


    return (
        <div>TestPart</div>
    );
};

export default TestPart;