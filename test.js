// const arr = [[1,2],[3,4]]
// let flattened = [].concat(arr)
// console.log(...arr,flattened)

// // const value  = 6
// // console.log("check round up val", Math.ceil(value*100)/100)
// // console.log("check round down val", Math.floor(value*100) /100)

const obj1 = {name : "Pravin", age:18}
let obj2 = {...obj1} //Shallow copy
 obj2 = obj1 //Reference Copy
obj2.name = 'Arun'
console.log("check obj", obj1===obj2, obj1, obj2)

const obj3 = {
  name: "Pravin",
  address: {
    city: "Chennai"
  }
}
const obj4 = {...obj3} //Shallow copy copies only the first level of object which here is name. The address is itself a reference to another object city. In shallow copy the reference of nested objects will be the same (obj4.address===obj3.address), hence we see Mumbai in obj4 as well once obj3 is updated


const obj5 = structuredClone(obj3) //Deep copy creates a brand new object including the nested objects, thus obj5 is still Chennai as they both are new objects (obj5.address!==obj3.address)

obj3.address.city = "Mumbai"
console.log("check obje4", obj4, obj5)
// // const users = [
// //   { id: 1, name: "Aarav", age: 20, active: true, city: "Delhi" },
// //   { id: 2, name: "Riya", age: 22, active: false, city: "Mumbai" },
// //   { id: 3, name: "Karan", age: 19, active: true, city: "Chennai" },
// //   { id: 4, name: "Simran", age: 24, active: true, city: "Delhi" },
// //   { id: 5, name: "Amit", age: 21, active: false, city: "Pune" },
// // ];

// // const activeUsers = users.filter((data)=>data.active===true)
// // const onlyNames = users.map((data)=>data.name)
// // const sortByAge = users.toSorted((a,b)=>a.age-b.age)
// // const findUserId3 = users.find((data)=>data.id===3)
// // const filterUserByDelhi  = users.filter((data)=>data.city==='Delhi')
// // console.log("check active users", activeUsers)
// // console.log("check only name", onlyNames)
// // console.log("check ascending age", sortByAge)
// // console.log("check findId3",findUserId3)
// // console.log("check findDelhi",filterUserByDelhi)

// // const products = [
// //   { id: 101, name: "Laptop", price: 45000, rating: 4.5, stock: 10 },
// //   { id: 102, name: "Mobile", price: 15000, rating: 4.2, stock: 0 },
// //   { id: 103, name: "Watch", price: 3000, rating: 3.8, stock: 25 },
// //   { id: 104, name: "Tablet", price: 20000, rating: 4.0, stock: 5 },
// //   { id: 105, name: "Speaker", price: 2500, rating: 3.5, stock: 30 },
// // ];


// // const filterMoreThan4 = products.filter((data)=>data.rating>=4)
// // const showUserNames = products.map((data)=>data.name)
// // const totalStock = products.reduce((total, current)=>total + current.stock, 0)
// // products.sort((a,b)=>b.price-a.price)

// // console.log("check filterMoreThan4",filterMoreThan4)
// // console.log("showname", showUserNames)
// // console.log("totalStock", totalStock)
// // console.log("Price desc", products)


// // const students = [
// //   { 
// //     name: "Aarav",
// //     marks: { math: 88, science: 92, english: 75 },
// //     hobbies: ["cricket", "reading"],
// //     city: "Mumbai"
// //   },
// //   { 
// //     name: "Riya",
// //     marks: { math: 78, science: 85, english: 89 },
// //     hobbies: ["dance", "music"],
// //     city: "Delhi"
// //   },
// //   { 
// //     name: "Nisha",
// //     marks: { math: 95, science: 92, english: 97 },
// //     hobbies: ["dance"],
// //     city: "Pune"
// //   },
// //   { 
// //     name: "Simran",
// //     marks: { math: 88, science: 90, english: 82 },
// //     hobbies: ["music", "reading"],
// //     city: "Mumbai"
// //   }
// // ];

// // const mathFiltered = students.filter((data)=>data.marks.math>80)
// // const onlyNameAndMark = students.map((data)=>{
// //   return {name : data.name,
// //   mathMark : data.marks.math
// // }
  
// // })

// // // console.log("check math", mathFiltered)
// // console.log(onlyNameAndMark)

// // const topScorersScience = students.toSorted((a,b)=>b.marks.science - a.marks.science)
// // console.log(topScorersScience[0])

// // const studentsPerCity = students.reduce((acc, current)=>{
// // acc[current.city] = (acc[current.city] || 0) +1
// // return acc
// // },{})

// // console.log(studentsPerCity)
// // const orders = [
// //   { orderId: "ORD1", user: "Aarav", amount: 1200, status: "delivered" },
// //   { orderId: "ORD2", user: "Riya", amount: 500, status: "pending" },
// //   { orderId: "ORD3", user: "Aarav", amount: 2200, status: "delivered" },
// //   { orderId: "ORD4", user: "Nisha", amount: 800, status: "cancelled" },
// //   { orderId: "ORD5", user: "Aarav", amount: 1500, status: "pending" }
// // ];

// // const deliveredOrders = orders.filter((data)=>data.status==='delivered')
// // const totalAmount = orders.reduce((total, order)=>{
// // total+=order.amount
// // return total
// // },0)
// // const seen = new Set()
// // let uniqueUser = []
// // for(let order of orders){
// //   if(!(seen.has(order.user))){
// // uniqueUser.push(order)
// // seen.add(order.user)
// //   }
// // }
// // console.log(deliveredOrders, totalAmount, uniqueUser)

// // const text = "JavaScript is the best language for MERN developers";
// // const newText = text.replace("best", "most popular")

// // let reverseText = text.split()
// // reverseText.reverse()
// // reverseText = reverseText.join(' ')
// // console.log(newText ,reverseText)
// // const isValid = (str)=> /^[A-Za-z ]+$/.test(str)
// // console.log(isValid("Emplo"))





// // Checking formFields

// // 


// //IIFE

// // ;(function (num1, num2){
// //    console.log(num1*num2)
// // })(5, 6);

// // //IIFE and Closures
// //IIFE
// // IIFE (Immediately Invoked Function Expression) is a JavaScript function that is
// //  defined and executed immediately after it is created.


// // (function (x){
// //   (function(y){
// //     console.log(x)  // The x variable is placed in the outside scope and js can use it . This is closure
// //   })(2)
// // })(1)


// // var and let

// // for(var i=0;i<5;i++){
// //   setTimeout(()=>console.log(i),0)
// //   // console.log(i)
// // }

// // var a = 21
// // function n(){
// //   console.log(a)  //During hoisting initially js creates global scoped variables and executes
// //                  //Later it comes for local scoped in our case function n, now here again a is
// //                  //declared , hence it hoists the local a first to undefined and hence in console
// //                  //we see undefined
// //   var a =20
// // }
// // n()

// //Arguments and Parameters diff

// // const multiply = (...nums)=>{  //Parameters, The value that we reveive is in Rest operator
// // const [num1, num2]  = nums
// // return num1 * num2
// // }

// // const nums = [4, 5]
// // console.log(multiply(...nums))  // The values that we pass are the arguments, the value that we pass is spread operator


// // const fn = (x, y, z, ...numbers)=>{  //Rest operators should always be in last value of parameters
// //   console.log("nums",x, y, z, numbers)
// // }
// // fn(1,2,3,4,5,6,7)
// //Normal and Arrow functions

// // class A{
// //   name;
// //   constructor(name){
// //     this.name  = name;
// //   }

// //   checkName = ()=>{
// //     setTimeout(()=>console.log("Arrow", this.name, this),10)
// //   }

// //   normalFunCheckName (){
// //     setTimeout(function(){console.log("Arrow", this.name, this)},100)
// //   }
// // }

// // var length = 4
// // function callback(){
// //     console.log(this.length)
// // }



// // function insideMethod(){
// //     var length = 6
// //     const obj={
// //     length:5,
// //     method:(fn)=>{
// //         console.log("check within",this.length)
// //         fn()
// //     }
   
// // }
// //  return obj
// // }

// // const insideObj = insideMethod()
// // insideObj.method(callback);

// // const a = new A("Pravin")
// // a.checkName()
// // a.normalFunCheckName()

// // Var, Let, Const

// //Scope:
// // {
// //   var a = "Pravin";
// //   const b = "Prav"
// // }

// // console.log("checkVar", a,b);

// //Shadowing:

// // function test(){
// //   var testa = "Hi"
// //   let b = "Hello";
// //   if(true){
// //     // let a = "Hello";
// //     // var b = "Hi";
    
// //     let c = "C"
// //     var d = "D"
// //     console.log(testa,b)

// //   }
// //   console.log("check c d",c, d)
// // }

// // test();

// //Closures and Lexical Scopes

// // Lexical scoping :
// // Lexical scoping determines variable accessibility based on where functions and variables
// //  are defined in the source code, allowing an inner function to access variables from its outer scopes.

// //Closures:
// // A closure is a function along with its preserved lexical environment that allows 
// // it to access variables from its outer scope even after the outer
// //  function has finished execution.
// let globalVar = 3;

// const outer = ()=>{
//   let outerVar = 5;
//   return function inner(){
//     outerVar++
//     globalVar+=1
//     console.log(outerVar, globalVar)
//   }
// }

// const counter = outer();
// counter(
// )
// // counter()

// // const createBase = (base)=>{
// //   return addSix = (num)=>{
// //     console.log(num+base)
// //   }
// // }

// // var addSix = createBase(6);
// // addSix(10) //returns 16
// // addSix(21) //returns 27

// //Create a private counter variable using closures

// // function Counter(){
// //   let _counter = 0;
// //   function add(num){
// // _counter+=num
// //   }
// //   function retrieve(){
// //     console.log("Counter:" +_counter)
// //   }

// //   return{
// //     add,
// //     retrieve
// //   }
// // }

// // const c = Counter()
// // c.add(5)
// // c.add(10)
// // c.retrieve()


// //Currying

// function sum(num1){
//     console.log("check arg1", num1)
// return (num2)=>{
// return(num3)=>{
//   console.log(num1+num2+num3)
// }
// }
// }
// sum(4)(5)(6)

// // function evaluate(operation){
// // return function value1(num1){
// //       return function value2(num2){
// //         if(operation=="sum"){
// //           console.log(num1+num2)
// //         }
// //         else if(operation=="multiply"){
// //           console.log(num1*num2)
// //         }
// //         else if(operation=="subtract"){
// //           console.log(Math.abs(num1-num2))
// //         }
// //         else{
// //           console.log(Math.floor((num1/num2)*100)/100)
// //         }
// //       }
// // }
// // }

// // evaluate("sum")(4)(2)
// // evaluate("multiply")(4)(2)
// // evaluate("divide")(11)(4)
// // evaluate("subtract")(2)(4)


// //Date manipulation

// // const orders = [
// //   { orderId: "ORD1", user: "Aarav", amount: 1200, status: "delivered", date: new Date("2025-12-01") },
// //   { orderId: "ORD2", user: "Riya", amount: 500, status: "pending", date: new Date("2025-11-20") },
// //   { orderId: "ORD3", user: "Aarav", amount: 2200, status: "delivered", date: new Date("2025-12-10") },
// //   { orderId: "ORD4", user: "Nisha", amount: 800, status: "cancelled", date: new Date("2025-10-05") },
// //   { orderId: "ORD5", user: "Aarav", amount: 1500, status: "pending", date: new Date("2025-12-08") },
// //   { orderId: "ORD6", user: "Kabir", amount: 400, status: "delivered", date: new Date("2025-09-15") },
// //   { orderId: "ORD7", user: "Simran", amount: 1800, status: "delivered", date: new Date("2025-12-03") },
// //   { orderId: "ORD8", user: "Riya", amount: 950, status: "pending", date: new Date("2025-11-28") },
// //   { orderId: "ORD9", user: "Simran", amount: 3000, status: "delivered", date: new Date("2025-12-07") },
// //   { orderId: "ORD10", user: "Nisha", amount: 700, status: "delivered", date: new Date("2025-10-15") },
// //   { orderId: "ORD11", user: "Pravin", amount: 800, status: "delivered", date: new Date("2025-11-12") }
// // ];


// // const filterDecOrders = orders.filter((data)=>data.date.getMonth()===11)
// // const filterTodayOrders = orders.filter((data)=>data.date.getFullYear()===new Date().getFullYear() && data.date.getMonth()===new Date().getMonth() && data.date.getDate()===new Date().getDate() )
// // const filterOrdBeforeNovers = orders.filter((data)=>data.date<new Date("2024-11-01"))
// // const filterOrdAfterDec = orders.filter((data)=>data.date>new Date("2024-12-05"))
// // const sortNewToOld = orders.toSorted((a, b)=>b.date - a.date)
// // console.log(sortNewToOld)

// // const mostRecentOrderByAarav = ()=>{
// //     const aaravData = orders.filter((data)=>data.user==="Aarav")
// //     const mostRecent = aaravData.toSorted((a, b)=>b.date-a.date)[0]
// //     return mostRecent
// // }

// // const showOrderIdAndDaysAgo= ()=>{
// //     const orderIdAndDaysAgo = orders.map((order)=>{
// //         const daysAgo = Math.round((new Date() - order.date)/(1000*60*60*24))
// //         return {
// //             orderId : order.orderId,
// //             daysAgo : daysAgo
// //         }
// //     })

// //     return orderIdAndDaysAgo
// // }

// // const showOrdersByMonth = ()=>{
// //     const orderByMonthObj = orders.reduce((acc, order)=>{
// // const key = `${order.date.getFullYear()}-${order.date.getMonth()+1}`
// // if(!acc[key]){
// //     acc[key] = []
// // }
// // acc[key].push(order)
// // return acc
// //     },{})
// //     return orderByMonthObj
// // }

// // const revenueForDecember = orders.reduce((total, order)=>{
// // if(order.date.getMonth()===11){
// //     total+=order.amount
// // }
// // return total
// // },0)
// // console.log(mostRecentOrderByAarav())
// // console.log(showOrderIdAndDaysAgo())
// // console.log(showOrdersByMonth())
// // console.log(revenueForDecember)

// // const uniqueNovUsers = ()=>{
// // const novUsers = orders.filter((data)=>data.date.getMonth()===10)
// // let uniqueUsers = []
// // const seen = new Set()
// // for(let order of novUsers){
// // if(!seen.has(order.user)){
// // uniqueUsers.push(order)
// // seen.add(order.user)
// // }
// // }
// // return uniqueUsers

// // }

// // const orderGapBetweenConsecutiveOrders = ()=>{
// //     const sortByDate = orders.toSorted((a, b)=>a.date- b.date)
// //     console.log("check sortByDate", sortByDate)
// //     let i=0
// //     let j=1
// //     let consecutiveDays = []
// //     while(j<sortByDate.length){
// //         let day = Math.round((sortByDate[j].date - sortByDate[i].date)/(1000*24*60*60))
// //         consecutiveDays.push(day)
// //         i+=1
// //         j+=1
// //     }
// //     return consecutiveDays
// // }

// // console.log(orderGapBetweenConsecutiveOrders())

// //Objects

// // const changeNameAndAge = (person)=>{
// //     person.age = 50
// //     person = {...person,name: "John"}
// //     return person
// // }

// // const personObj1 = {
// //     name : "Alex",
// //     age : 25
// // }

// // const personObj2 = changeNameAndAge(personObj1)
// // console.log("Check p1 p2",personObj1, personObj2)

// // console.log([..."Pravin"])


// //call, apply, bind 
// // const fName = "name"
// // const person = {
// //     [fName]  : "Pravin",
// //     hello:function(thing, thing2){
// //         console.log(this.name+" says "+thing+" "+thing2)

// //     }
// // }
// // person.hello("World")
// // const reqObj  = {
// //     name:"Arun"
// // }
// // person.hello.call(reqObj, "Hello World","eve")
// // person.hello.apply(reqObj, ["Hello World","Everyone"])
// // const helloFunBind= person.hello.bind(reqObj) //Bind returns a function that takes context of the passed object
// // helloFunBind("Hello", "World")


// //Promise.all

function resolveText(text, time){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(text)
    },time)
})
}

const rejectText = (text, time)=>{
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(text)
    }, time)
})
}

async function fetchPromise(){
    try{
const resolved = await Promise.all([resolveText("Hello", 100), rejectText("Hi", 100)])
return resolved
    }
    catch(err){
        return err
    }

}
fetchPromise().then((res)=>console.log(res));

// //Implementing own promise.all

// function myPromiseAll(promises){
//     let result = []
//     let completed = 0
// return new Promise((resolve, reject)=>{
//     promises.forEach((p, index)=>{
//         Promise.resolve(p).then((res)=>{
// result.push(res)
// completed+=1
// if(completed===promises.length){
//     resolve(result)
// }
//         }).catch((err)=>{
//             reject(err)
//         })
//     })
// })
// }

// function resolveText(text, time){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(text)
//     },time)
// })
// }

// const rejectText = (text, time)=>{
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(text)
//     }, time)
// })
// }

// myPromiseAll([resolveText("Avengers Assemble",100), rejectText("Doomsday coming", 100), Promise.resolve("Hi Pravin")]).then((res)=>{
//     console.log("check res", res)
// }).catch((err)=>{
//     console.log("err",err)
// })

// (function(num1, num2){
//     (function(){
//         console.log("check", num1+num2)
//     })()
// })(1,2)

// const debounceFn = (fn, delay)=>{
// return function(...args){
//     console.log("check function called")
//     fn(...args)
// }
// }

// const handleSearch = debounceFn((query)=>{
//     console.log("check", query)
// }, 500)

// console.log(handleSearch("Search"))

const numbers = [1, 2, 3]
console.log("check numbers", numbers, [...numbers])
const numbers1 = [...numbers]
const numbers2 = numbers

console.log("check boolean", numbers2==numbers)

