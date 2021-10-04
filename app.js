let name = "Max";
console.log(name);
const age = 29;
let hasHobbies = true;
console.log(`My name is ${name} and i am ${age} years old`);

let hobbies = ["Sports", "Cooking"];
for(let hobby of hobbies){
    console.log(hobby);
}

let newHobbies = [...hobbies, "Something new here"];
console.log(newHobbies);