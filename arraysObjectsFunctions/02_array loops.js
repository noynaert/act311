//Arrays and for loops

function roll(){
    return Math.floor(Math.random() * 6 +1);
}

function printIt(value,index){
    console.log("[" + index + "] " + value);
}

var stuff = ["blue", "fish", 42, new Date(), Math.random(), roll()];
stuff.push("duck");
stuff[0] = "yellow";
stuff[9] = 'Oops...'


console.log("\nCounting for loop");
console.log("Length of stuff is " + stuff.length);
for (let i=0; i<stuff.length;i++){
    //console.log("["+i+"] "+stuff[i]);
    if(stuff[i] !== undefined)
     console.log(i + '. ' + stuff[i]);
}
//for/in
console.log("\n\n\nfor/in");
for(let i in stuff){
    console.log(i+'. '+stuff[i]);
}

//for/of
console.log("\n\n---For OF")
for (value of stuff) {
    if(value !== undefined)
    console.log(value);
}

// Array foreach with a callback
console.log("\n\nArray.forEach")
stuff.forEach((printIt));
/*
//anonymous callback
console.log("\n\nAnonymous");
stuff.forEach(function(a,b,c){
    console.log(b+", "+a+": "+c)
});
*/
console.log("\nDONE!")