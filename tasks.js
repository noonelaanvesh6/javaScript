//Task 1- Variable Declaration
const name="Pushpam"; //string
let age= 21; //int
let isStudent=true; //boolean

console.log(name);
console.log(age);
console.log(isStudent);


//Task 2- Grade calculator
let marks=82;

if (marks>=90){
    console.log("Grade A");
}
else if(marks>=75){
    console.log("Grade B");
}
else if(marks>=60){
    console.log("Grade C");
}
else{
    console.log("Fail");
}

//Task 3-  Switch Case - Day of the week
let dayNumber=6
switch (dayNumber){
    case 1: console.log("Monday");
    break;

    case 2: console.log("Tuesday")
    break;

    case 3: console.log("Wednesday");
    break;

    case 4: console.log("Thursday");
    break;

    case 5: console.log("Friday");
    break;

    case 6: console.log("Saturday");
    break;

    case 7: console.log("Sunday");
    break;

    default: console.log("Invalid input");
}
