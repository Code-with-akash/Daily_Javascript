// DOM Manipulation

// 1. Get Element By Id

// const heading = document.getElementById("heading");
// console.log(heading);

// 2. Get Element by Tag Name

// const heading = document.getElementsByTagName('h1');
// console.log(heading);
// console.log(heading[0]);

// 3. Get elements by Class Name

// const heading = document.getElementsByClassName("sec_heading");
// console.log(heading);

// 4. Querry Secletor

// const heading = document.querySelector("#heading");
// const sec_heading = document.querySelector(".sec_heading");
// console.log(sec_heading);

// Traverse DOM

// 1. parentNode

// const heading = document.querySelector(".heading");
// const parent = heading.parentNode;

// console.log(parent);

// 2. ChildNodes

// const parent = document.querySelector(".parent");
// console.log(parent.childNodes);

// 3.nextElementsibling

// const heading = document.querySelector(".heading");

// const getSibling = heading.nextElementSibling;

// console.log(getSibling);


// Manipulation

// const heading = document.querySelector(".heading");

// heading.innerHTML = "Web dev is awesome!"
// heading.style.color = "red";
// heading.style.fontSize = "100px"

// create elemnets

// const heading = document.createElement("h1");
// heading.innerHTML = "javascript is Awesome";
// console.log(heading);

// const parent = document.querySelector(".parent");
// parent.appendChild(heading);


// Dom Events


// const button = document.querySelector("#btn");
// const heading = document.querySelector("#heading");

// button.addEventListener("click",function(){
//     console.log("button clicked");
//     heading.style.color = "red";
//     heading.style.fontSize = "50px";
// })



// 1. Bulb Project

// const bulb = document.querySelector("#bulb");
// const bulbSwitch = document.querySelector("#bulbSwitch");

// bulbSwitch.addEventListener("click",function(){
//     if (bulb.src.match("off")){
//         bulb.src = "/Image/bulb_on.png";
//         bulbSwitch.innerHTML = "Turn OFF";
//     }else{
//         bulb.src = "/Image/bulb_off.png";
//         bulbSwitch.innerHTML = "Turn ON";
//         bulb.style.width = "100px"
//     }
// })