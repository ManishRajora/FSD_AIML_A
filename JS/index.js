/*var a = 12;
if (a > 10){
    a = 20;
    console.log(a);
}
console.log(a);

console.log(typeof(1n));
console.log(typeof(1.1));
console.log(typeof(true));
console.log(typeof("hello"));
console.log(typeof(null));

console.log("max number: ", BigInt.MAX_VALUE);
console.log("max number: ", Number.MAX_VALUE);

function Hello(msg){
    console.log(msg);
}
Hello('hi their');

const sum = function (x, y, z){
    return (x + y + z);
}
console.log(sum(1,2,3));

const hello = (msg) => console.log(msg);
hello('hi their arrow');

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = 'red';
})*/

// spreading

/*const student = {
    name:'abc',
    branch:'AIML',
    sec:'A'
}
console.log(student);

const new_student = {id:1, ...student, sec:'B'};
new_student.name = 'xyz';
console.log(student);
console.log(new_student);

const emp = ['ABC', 56, 100023.5];
console.log(emp);

const emp1 = [101, ...emp];
console.log(emp1);*/

const my_set = new Set();
console.log(my_set)
my_set.add(24);
my_set.add(21);
my_set.add(12);
my_set.add(24);
my_set.add(21);
console.log(my_set);

const num = [1,2,3,4,5,6];
const filtered = num.filter(n => n % 2 == 0);
console.log(filtered);
