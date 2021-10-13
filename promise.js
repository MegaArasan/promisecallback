// promise
// const islegal=new Promise((resolve,reject)=>{
// let age =20;
//     if(age>=18){
//         setTimeout(() => {
//           resolve ("Major")
//         }, 1000*4);
//     }else{
//        reject("minor")
//     }
// })
// console.log(islegal)
// islegal 
//     .then(msg=> msg+"! congratulation ")   
//     .then(msg1=>console.log(msg1+"nice"))
//     .catch(err=>console.log(err))

// task-1
var a=10;
const count=new Promise((resolve,reject)=>{
   if(a>=1){
    setTimeout(() => {
       document.querySelector(".msg").innerText=a
       resolve("HAPPY INDEPENDENCE DAY")
    }, 1000);}else{
        reject ("Restart Countdown")
    }
})
console.log(count)
count
    .then(a1=> setTimeout(()=>{ console.log(a); document.querySelector(".msg").innerText=--a},1000))
    .then(a2=>setTimeout(()=>{ console.log(a); document.querySelector(".msg").innerText=--a},1000*2))
    .then(a3=>setTimeout(()=>{ console.log(a); document.querySelector(".msg").innerText=--a},1000*3))
    .then(a4=>setTimeout(()=>{ console.log(a); document.querySelector(".msg").innerText=--a},1000*4))
    .then(a5=>setTimeout(()=>{ console.log(a); document.querySelector(".msg").innerText=--a},1000*5))
    .then(a6=>setTimeout(()=>{ console.log(a); document.querySelector(".msg").innerText=--a},1000*6))
    .then(a7=>setTimeout(()=>{ console.log(a); document.querySelector(".msg").innerText=--a},1000*7))
    .then(a8=>setTimeout(()=>{ console.log(a); document.querySelector(".msg").innerText=--a},1000*8))
    .then(a9=>setTimeout(()=>{ console.log(a); document.querySelector(".msg").innerText=--a},1000*9))
    .then(a10=>setTimeout(()=>{ console.log("HAPPY INDEPENDENCE DAY"); document.querySelector(".msg").innerText="HAPPY INDEPENDENCE DAY"},1000*10))
    
