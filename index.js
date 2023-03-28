// const outer = () =>{
//     const x=10;

//     const inner = () =>{
//         console.log(x);
//     }
//     return inner
// }
//  const res= outer()

//  res()

//

// function outer(num) {
//     const num1= 10
//     function inner(num2){
//         console.log( num+num1+num2)
//     }
//     return inner
// }

// const res= outer(20)
// res(10)
// console.log("hello")
// function updatecounter() {
//     let count=0;

//     function inner() {
//         count+=1
//         let p= document.getElementById("count")
//         p.innerText=`count:${count}`
//     }
//     return inner
// }
// let update = updatecounter()
// console.log(updatecounter())

// function updatecounter() {
//     let count = 0
//     function inner (){
//         count+=1
//         let p = document.getElementById("count")
//         p.innerText = `count:${count}`
//     }
//     return inner

// }

// const upate = updatecounter()
// upate()
// upate()

// first create a xmlhttprequest()
// let variable = new XMLHttpRequest()
// next command to create reqest by using open()/
//  open() is has five paramenters

//  open (method ,url,async,username,password)
// send ()  to send the data to required once

// let btn = document.getElementById("btn-data")
// let p = document.getElementById("finaldata")

// btn.addEventListener("click",Getingdatafunction)

//  function Getingdatafunction(){
//     const xhr = new  XMLHttpRequest()
//     xhr.open("GET","text.txt",true)
//     xhr.send()

//     xhr.onprogress = function (){
//         p.innerHTML="Loading..."
//     }

//     xhr.onload = function () {
//         p.innerHTML = xhr.responseText
//     }

//  }

//  let btn1 = document.getElementById("btn-data")
//  let  p1= document.getElementById("finaldata")

//  btn1.addEventListener("click",Fetchdata)

//  function Fetchdata (){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET","text.txt",true)
//     xhr.send()

//     xhr.onprogress = function() {
//         p1.innerHTML = "Loading..."

//     }
//     xhr.onload = function(){
//         p1.innerHTML = xhr.responseText
//     }
//  }

//  let btn2 = document.getElementById("getdata")
// let p2= document.getElementById("displaydata")

// btn2.addEventListener("click",Fetchingdata)

// const Fetchingdata = () =>{
//     const  xhr1 = new XMLHttpRequest();
//     xhr1.open("GET","text.txt",true)
//     xhr1.send()

//     xhr1.onprogress= function() {
//         p2.innerHTML= "Loading....."
//     }

//     xhr1.onload = function () {
//         p2.innerHTML = xhr1.responseText;
//     }
// }

// const button = document.getElementById("get")
// const  data = document.getElementById("disp")
// console.log(button,data)

// button.addEventListener('click',displayingfetcheddata)
// function displayingfetcheddata(){
//     let xhr1 = new XMLHttpRequest();
//     xhr1.open('GET','https://tse4.mm.bing.net/th?id=OIP.xddyM5Z5llwe5nz0xAnhvAHaD_&pid=Api&P=0',true);
//     xhr1.send()

//     xhr1.onprogress=function(){
//         data.innerText = "Loading.."
//     }

//     xhr1.onload =function () {
//         data.innerText=xhr1.responseText;
//     }
// }

//  let btn1 = document.getElementById("btn-data")
//      let  p1= document.getElementById("finaldata")
//      btn1.addEventListener("click",Fetchdata)

//     function Fetchdata (){
//         const xhr = new XMLHttpRequest();
//         console.log(xhr)
//          xhr.open("GET","./index.js",true)
//          xhr.send()

//          xhr.onprogress = function() {
//          p1.innerHTML = "Loading..."

//          }
//           xhr.onload = function(){
//              p1.innerHTML = xhr.responseText
//          }
//      }

// div = document.getElementById("finaldata");

// console.log(div)
// btn = document.getElementsByTagName("button")
// console.log(document.getElementsByTagName("button"))

// const new1 = [...btn]
// console.log(new1)

// h1_tag = document.getElementById("h1");
// console.log(h1_tag);

// p_tag = document.getElementsByClassName("p_tag");
// console.log(p_tag);

// button_tag = document.getElementsByTagName("button");
// console.log(button_tag);

// ls = document.querySelectorAll("ul li");
// console.log(ls);

// ls_4th = document.querySelector("ul li:nth-child(3)");
// console.log(ls_4th);

// lis = document.querySelector("ul li:nth-child(3)");
// li1 = document.querySelector("ul");
// const hide_cont = () => {
//   // console.log(lis)
//   li1.innerHtml = "hello its working";
//   console.log("hello its working");
// };

// const list2 = document.querySelector("ul");
// console.log(list2.children);

// const body =document. querySelector("body");
// console.log(body.children);
// childNodes
// childrens
// previousibling
// previousElementsibling
// nextsibling
// nextElementSibling
// firstchild
// firstElementSibling
// lastchild
// lastElementchild
// parentelement

// const ul = document.querySelector("ul")

// // console.log(ul.firstElementChild)
// console.log(ul.innerHTML)

// const para = document.querySelector(".para");
// console.log(para);

// para.innerHTML = "hello";
// para.innerText = "jeevaa";
// para.textContent = "whatsapp up";

// console.log(para);
//  function  hide_cont(){
//     para.innerText = para.
// }

// console.log(para.attributes);
// console.log(para.getAttribute("class"));
// console.log(para.getAttribute("id"));

// const new_para = document.querySelector("p")
// console.log(new_para)

// console.log(new_para.getAttribute("class"))
// new_para.setAttribute("class", "web_class")
// console.log(new_para.getAttribute("class"))

// console.log(para.dataset);

// const h1 = document.querySelector("h2");
// h1.classList.add("h1_class1");
// h1.classList.add("h2_class2")
// console.log(h1.getAttribute("class"))
// h1.classList.remove("h2_class2");
// h1.classList.remove("h1_class1");


