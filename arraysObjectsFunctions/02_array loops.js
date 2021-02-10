//Arrays and for loops

function roll(){
    return Math.floor(Math.random() * 6 +1);
}

function printArrayItem(index, value){
    return "["+index+"] "+value;
}

function printIt(item,value){
    console.log(printArrayItem(item,value));
}

var stuff = ["blue", "fish", 42, new Date(), Math.random(), roll()];

console.log("\nCounting for loop");
for (let i=0; i<stuff.length;i++){
    //console.log("["+i+"] "+stuff[i]);
    printArrayItem(i,stuff[i]);
}

//for/in
console.log("\nfor/in");
for(let i in stuff){
    console.log(printArrayItem(stuff[i],i));
}

//for/of
console.log("---For OF")
for(item of stuff){
    console.log(item);
}

// Array foreach with a callback
console.log("Array.forEach")
stuff.forEach((printIt));

//anonymous callback
console.log("Anonymous");
stuff.forEach(function(a,b,c){
    console.log(b+", "+a+": "+c)
   });
