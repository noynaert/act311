function Person (firstName,last,yearBorn){
    this.first=firstName;
    this.last=last;
    this.birth=yearBorn;
    this.getName = function(){
       return this.first+ " "+this.last;
    };
    this.addMiddle(middle){
        this.middle = middle;
    }
}
