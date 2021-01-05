"use strict";

document.querySelectorAll("td, #hnmain").forEach(e=>e.setAttribute("bgcolor",""));

document.querySelectorAll("a").forEach(e=>e.style.cssText="color:inherit");

document.querySelectorAll(".storylink").forEach(e=>e.style.cssText="color:white");

document.querySelectorAll(".pagetop *, span").forEach(e=>e.style.cssText="color:grey");

document.querySelector("body").style.cssText="background-color:#222;color:#fff";
