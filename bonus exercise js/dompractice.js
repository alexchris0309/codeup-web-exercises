
// Dom Events
// When a user hits the "g" key, the background of the page should turn purple.
var bg = document.getElementsByTagName('body')[0];

var backgroundColor = function (event) {
    if(event.keyCode === 71) {

        bg.style['background-color'] = 'purple';
    }
}


window.addEventListener('keyup', backgroundColor);


//     Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.



var bucket=[]

var count=function(key){
    if(key.which===13){
       var result= bucket.push(key)
    }
console.log("enter key has been pressed "+ bucket.length +' times.');
}

document.addEventListener('keyup',count);


//     When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".

var alertCode = '49,50,51';
var code=[];



$(document).keyup(function(element){
    code.push(element.keyCode);
    if (code.toString().indexOf(alertCode)>=0) {
        alert("you get a 50% discount");

    }
});

console.log(code)