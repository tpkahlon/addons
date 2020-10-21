/*
Just draw a border round the document.body.
*/

let result = [];

document.querySelectorAll('body *').forEach((i) => {
  if (i.tagName === 'SCRIPT') return;
  const style = window.getComputedStyle(i);
  const zI = style.zIndex;
  result.push(zI);
});

result = [...new Set(result)]
  .map((i) => {
    return isNaN(i) ? i : Number(i);
  })
  .sort((a, b) => (a < b ? -1 : 1));

console.log(
  `Total z-index declarations found: ${result.length}\nTotal z-index found:`,
  result
);
