const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080,1080]
};
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    
    
    
const w = width * 0.10;
const h = height * 0.10;
const ix = width * 0.17;
const iy = width * 0.17;

const off = width * 0.02;
let x,y;

for(i = 0; i < 5; i ++){
	for(j = 0; j < 5; j ++){
	x = ix * i
	y = iy * j
	context.beginPath();
	
	//rectangle syntax: rect(X, Y, Height, Width)
	context.rect(x, y, h, w);
	//uncomment this to turn back to white
	context.strokeStyle= 'white'
	context.stroke();
	
	
	
	if(Math.random() < 0.4){
	context.lineWidth = width * 0.01
	context.beginPath();
	context.rect(x + off / 2, y + off / 2, h - off, w - off)
	context.fillRect(x + 8, y + 8, h - 16, w - 16)
	//uncomment this to turn back to white
	context.strokeStyle= 'white'
	context.stroke();
	}
	}
}
  };
};

canvasSketch(sketch, settings);
