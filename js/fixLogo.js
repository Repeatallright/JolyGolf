let block = document.querySelector('.block')
let blockHeight = window.innerHeight;
let logoFix = (blockHeight / 2) - (block.clientHeight / 2)
console.dir(block);
block.style.top = `${logoFix}px`
block.style.transform = `translate(0, -${(blockHeight / 2.05) - (block.clientHeight / 2)}px)`
console.dir(window.innerHeight);
