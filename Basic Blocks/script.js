/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/
/*
var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;
console.log(job);
job = 'teacher';
isMarried = false;

console.log(name + ' ' + age + ' ' +  job + ' ' + isMarried);

var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3+5) * 4 - 6;
console.log(ageJohn);
console.log(ageMark);

ageJohn++;
console.log(ageJohn);




var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes'){
    console.log(name + 'is married!');
}else{
    console.log(name + ' will hopefully be married one day!')
}


isMarried = false;

if(isMarried){
    console.log('yes');
}else{
    console.log('no');   
}

if (23 == "23"){
    console.log('something to print...')
}
if (23 === "23"){
    console.log('Something to print...')
}

var age = 16;
if ( age < 20 ){
    console.log("John is a teenager")
} else{
    console.log("John is a man")
}


var johnsHeight = 72
var ryansHeight = 74
var johnsAge = 27
var ryansAge = 25

console.log("Who will win this silly game?");
var johnsScore = johnsHeight + (johnsAge * 5);
var ryansScore = ryansHeight + (ryansHeight *5);

if (johnsScore > ryansScore){
    console.log("John Wins!");
}else if (ryansScore > johnsScore){
    console.log("Ryan Wins!");
} else{
    console.log("It's a tie!");
}





function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn, ageMike, ageMary);

function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retire = 65 - age;
    console.log(retire);
}
yearsUntilRetirement('John', 1990);


//Statement (do something)
function someFun(par){
    //code
}
//Expression (Provide a value)
var someFun(par){
    //code
}


var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1998, 1923);
console.log(years[2]);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

//alert(john.indexOf('Smith'));



//var arr = [1,2,3];
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job:'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1956;
jane['job'] = 'retired';
jane['isMarried'] = true;
console.log(jane);



var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job:'teacher',
    isMarried: false,
    family: ['Jane','Mark','Bob'],
    calculateAge: function(){
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
//this goes into what is currently in the object / what is defined


var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job:'teacher',
    isMarried: false,
    family: ['Jane','Mark','Bob'],
    calculateAge: function(){
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);

for (var i = 0; i < 10; i++){
    console.log(i);
}

var names = ['John',"jane",'Mary','Mark','Bob'];
for (var i = 0; i< names.length; i++){
    console.log(names[i]);
}


for (var i = names.length - 1; i >=0 ; i--){
     console.log(names[i]);
}

var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++
}


var years = [1985, 1965, 1966, 1998];
var toFill = [];

for( i =0; i < years.length; i++){
    toFill.push(Math.floor(Math.random() * 100) + 1 );
    if (toFill[i] >=18){
        console.log("This person is of age. They are " + toFill[i])
    }
}
console.log(toFill);

*/


















































