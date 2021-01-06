"use strict";

const refresh = () => {
  document
    .querySelectorAll("td, #hnmain")
    .forEach((e) => e.setAttribute("bgcolor", ""));

  document
    .querySelectorAll("a")
    .forEach((e) => (e.style.cssText = "color:inherit"));

  document
    .querySelectorAll(
      ".pagetop *, span, .Story_comment, .SearchHeader_label, p"
    )
    .forEach((e) => (e.style.cssText = "color:grey"));

  document
    .querySelectorAll(
      ".storylink, .commtext, .commtext p, .container a, .Story_title span"
    )
    .forEach((e) => (e.style.cssText = "color:white"));

  document
    .querySelectorAll(".Story_meta a")
    .forEach((e) => (e.style.cssText = "color:inherit"));

  document
    .querySelectorAll(
      ".SearchResults, .SearchFilters, .SearchHeader_search, .Pagination"
    )
    .forEach(
      (e) => (e.style.cssText = "background-color:transparent;color:grey")
    );

  document.querySelector("body").style.cssText =
    "background-color:#051818;color:grey!important";
};

if (
  window.location.href.includes("news.ycombinator.com") ||
  window.location.href.includes("hn.algolia.com")
) {
  refresh();

  let change = false;

  window.addEventListener("keyup", () => {
    if (change) {
      refresh();
    }
  });

  window.addEventListener("keydown", () => {
    if (change) {
      refresh();
    }
  });

  document.querySelector("input").addEventListener("focus", () => {
    change = true;
  });

  document.querySelector("input").addEventListener("blur", () => {
    change = false;
  });
}
