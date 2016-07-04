document.addEventListener('click', function(e) {
  console.log(e.targetCurrent);
});
// index.ts(2,17): error TS2339: Property 'targetCurrent' does not exist on type 'MouseEvent'.
