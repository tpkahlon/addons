let elements = [];

document.querySelectorAll('body *').forEach((i) => {
  if (i.tagName === 'SCRIPT') return;
  const style = window.getComputedStyle(i);
  const zI = style.zIndex;
  elements.push({
    element: i,
    index: zI,
  });
});

elements = elements
  .filter((i) => i.index !== 'auto')
  .map((i) => ({
    element: i.element,
    index: Number(i.index),
  }))
  .sort((a, b) => (a.index < b.index ? -1 : 1));

console.log(
  `Total z-index declarations found: ${elements.length}\nTotal z-index found:`,
  elements
);
