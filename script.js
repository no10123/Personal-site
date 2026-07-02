const canvas = document.getElementById("canvas");
canvas.width = width = window.innerWidth
canvas.height = height = window.innerHeight
const ctx = canvas.getContext("2d");

ctx.lineWidth = 10;
ctx.strokeStyle = '#a6e3a1';
ctx.lineCap = 'round';

ctx.beginPath();

ctx.moveTo(-10, 400); 
ctx.bezierCurveTo(0, 370, width / 2, 500, width, 350); 

ctx.stroke();

ctx.strokeStyle = '#fab387';

ctx.beginPath();

ctx.moveTo(0, 560); 
ctx.bezierCurveTo(0, 560, width / 2, 590, width, 420); 

ctx.stroke();
