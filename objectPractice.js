/* let person = {
    name: "Adama", 
    age: 27, 
    country: "USA",
    logData: function() {
        console.log(this.name + " is " + this.age + " years old and lives in " + this.country);
    }
}

person.logData(); */

let age = 25;

if(age<6) {
    console.log("Free");
} else if (age<=17) {
    console.log("Child discount");
} else if (age <= 26) {
    console.log("Student discount");
} else if (age <= 66) {
    console.log("Full price");
} else {
    console.log("Senior citizen discount");
}