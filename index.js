"use strict";

if (window.location.href.includes("news.ycombinator.com")) {
  document
    .querySelectorAll("td, #hnmain")
    .forEach((e) => e.setAttribute("bgcolor", ""));

  document
    .querySelectorAll("a")
    .forEach((e) => (e.style.cssText = "color:inherit"));

  document
    .querySelectorAll(".pagetop *, span")
    .forEach((e) => (e.style.cssText = "color:grey"));

  document
    .querySelectorAll(".storylink, .commtext")
    .forEach((e) => (e.style.cssText = "color:white"));

  document.querySelector("body").style.cssText =
    "background-color:#222;color:#fff";
}
