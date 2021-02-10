console.log("Objects");
var pn = {
    firstName: "Fred",
    "last Name": "Flintstone",
    age:35
};

console.log(pn.firstName);
console.log(pn.age);
console.log("-----");
console.log(pn["firstName"]);
console.log("-----");

for(key in pn){
    console.log(key +" is "+ pn[key] );
}