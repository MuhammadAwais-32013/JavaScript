/*
symbol in obj
obj freez
this key
obj into obj
assign and spread method
object keys
obj values
obj entries
hasownproperty()

*/

// object litrals
// alert('Hi')
// const student={
//     name:"Awais",
//     "Roll No": 2883,
//     location: "khaplu"
// }
// // delete student.location
// // const obj= new Object();

// // const{name:std_name}=student
// // console.log(student);

// // ------------user update / get  Obj value-------------
// let name="name"
// let key = prompt("What do you want to do", "");
// // student.name=key
// alert(student[name])

// ==============Property Value shortand================

// ------------user initilized Obj value-------------
// let age=prompt("Enter age  ", "");
// let name=prompt("Enter name ", "");

// const user={
//     name:name,
//     age:age
// };

// const{age:userAge, name:userName}=user
// alert(`User details \n  ${userName}  ${userAge} old`)

// ----------intilized obj using Function-----------
// let name= prompt("Enter name ","")

// function user(name,age,section,Course) {
//     return{
//         name,
//         age,
//         section,
//         Course
//     }
// }


// let userInfo=user(name,21,'A', 'CS')

// alert(userInfo.name)

// let user={
//     name:'abc',
//     age:14
// }
// console.log(user.noSuchProperty===undefined);

// --------------key 'in' obj--------------

// let key= "name"
// console.log("age" in user);
// console.log("location" in user);
// console.log(key in user);

// for (const key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// function isEmpty(obj) {

//     for (const key in obj) {
//        return false
//     }

//     return true
// }

// let schedule={};
// console.log(isEmpty(schedule));
// schedule["7:00"]="Get Up";
// console.log(schedule);
// console.log(isEmpty(schedule));
// ------------Immutable--------------
// let x=12;
// let y=x;
// // y=222;

// console.log(x);
// console.log(y);

// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// console.log(user.name);

// ************************Cloning and merging, Object.assign********************

// const car1={
//     names:"BMW",
//     model:2019,
//     price: "$134K"
// }

// const car2={
//     name:"Civic",
//     model:2020,
//     price: "$34K"
// }

// // let cars= Object.assign(car1,car2)
// // let cars=Object.assign(car1,car2);
// let cars= {...car1,...car2}
// console.log(car1);
// console.log(car2);
// console.log(cars);

// cars={
//     car1:car1,
//     car2:car2
// }

// console.log(cars);

// const user={
//     name:'abc',
//     fullName:{
//         firstName:'Awais',
//         lastName:'Qarni'
//     }
// };

// const{firstName:firstName}=user.fullName
// // console.log(firstName);
// let users=Object.assign({},user);
// console.log(users);

let marry=(man,women)=>{
    man.wife=women;
    women.husband=man;

    return {
        father:man,
        mother:women,
        child:{name:'Sunney'}
    }
}
// console.log(family); not possible
let family= marry({name:'Harry'},{name:'Ane'})
// family.child.father=family.father
// family.child.mother=family.mother
// console.log(family.child);

// let user ='awa'
// // console.log(user ?? );
// const users={
//     firstName:'John',
//     lastname:''
// }
// // delete users?.lastname
// console.log(users);

let user;
let user1=null;
let user2='john'
console.log(user ?? 'Anonymous');