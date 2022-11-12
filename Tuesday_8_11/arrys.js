
[1,7,9,4,5]

["Str","alex","moh",
'the','fox','over','lazy','dog']
/////////////////// /////// /////////////

"Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
index=[0,1]
// /////////////////////////////////////
Favorite_Food=['makloba','mansaf','mloukheah','kabsah','mandi']
Favorite_Sport=['karate','kick-boxing','Table Tennis']
Favorite_Movie=['enola holmes','purple hearts','dont look up','the in between']

// ////////// /////////////////////////
function firstOfArray(array) {
    return array[0]
}
console.log(firstOfArray([1,4,5]));
console.log(firstOfArray(["t","u","g","x"]))
// ///////////////////////////////
function lastOfArray(array) {
    return array[array.length-1]
}
console.log(lastOfArray([1,4,5]));
console.log(lastOfArray(["t","u","g","x"]))
// ////////////////////////////////////////////
var array = [0,5,7,9]
array.push(10)
array.shift()
array.shift()
array.shift()
array.unshift(1,3,4,6,8)
console.log(array);
// ////////////////////////////////////////
var array2 = [5,9,-7,3.5]
array2.push(8)
array2.shift()
array2.unshift(3,2,1)
array2.sort()
console.log(array2)

// ///////////////////////////////////////

let container = document.getElementById('container');
container.textContent='Hello everyone';

/////////    first way   ////////////////
// element.style.property= value /////////
container.style.backgroundColor = '#800080';
container.style.color= '#fff';
container.style.border= '5px';
container.style.borderTop='2px solid #fa0';

/////////// second way ////////////////

// element.style.cssText//////////
container.style.cssText=
`
background:purple;
color:#fff;
`

// third way //////////////////

// element.style.setProperty=('property,value)///
container.style.setProperty('color','yellow','important')

// How to remove an element //////

container.style.removeProperty('background')













