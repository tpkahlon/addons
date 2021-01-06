"use strict";

const searchDOM = () => {
  const a = document.querySelectorAll("a");
  const extrasA = document.querySelectorAll(
    "span, .Story_comment, .SearchHeader_label, p"
  );
  const extrasB = document.querySelectorAll(
    ".storylink, .commtext, .commtext p, .container a, .Story_title span"
  );
  const extrasC = document.querySelectorAll(".Story_meta a");
  const extrasD = document.querySelectorAll(
    ".SearchResults, .SearchFilters, .SearchHeader_search, .Pagination"
  );
  const body = document.querySelector("body");
  a.forEach((e) => (e.style.cssText = "color:inherit"));
  extrasA.forEach((e) => (e.style.cssText = "color:grey"));
  extrasB.forEach((e) => (e.style.cssText = "color:white"));
  extrasC.forEach((e) => (e.style.cssText = "color:inherit"));
  extrasD.forEach(
    (e) => (e.style.cssText = "background-color:transparent;color:grey")
  );
  body.style.cssText = "background-color:#051818;color:grey!important";
};

const mainDOM = () => {
  const strip = document.querySelectorAll("td, #hnmain");
  const a = document.querySelectorAll("a");
  const extras = document.querySelectorAll(".pagetop *, span, p");
  const more = document.querySelectorAll(".storylink, .commtext, .commtext p");
  const body = document.querySelector("body");
  strip.forEach((e) => e.setAttribute("bgcolor", ""));
  a.forEach((e) => (e.style.cssText = "color:inherit"));
  extras.forEach((e) => (e.style.cssText = "color:grey"));
  more.forEach((e) => (e.style.cssText = "color:white"));
  body.style.cssText = "background-color:#051818;color:grey!important";
};

const refreshSearch = () => {
  setTimeout(() => {
    searchDOM();
  }, 1000);
};

const refreshMain = () => {
  mainDOM();
};

const init = (cat) => {
  if (cat === "search") {
    let change = false;

    const setupEvents = () => {
      window.addEventListener("keyup", () => {
        if (change) {
          refreshSearch();
        }
      });
      window.addEventListener("keydown", () => {
        if (change) {
          refreshSearch();
        }
      });
      document.querySelector("input").addEventListener("focus", () => {
        change = true;
      });
      document.querySelector("input").addEventListener("blur", () => {
        change = false;
      });
    }

    setTimeout(() => {
      setupEvents();
    }, 1000);

    refreshSearch();
  } else {
    refreshMain();
  }
};

if (window.location.href.includes("news.ycombinator.com")) {
  init();
}

if (window.location.href.includes("hn.algolia.com")) {
  init("search");
}
