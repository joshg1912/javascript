const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height)
    
    context.fillStyle = 'black'

    const x = width * 0.5
    const y = height * 0.5
    const w = width * 0.3
    const h = height * 0.3

    context.translate(x,y)

    context.beginPath();
    context.rect(0, 0, w, h);
    context.fill()
    ;
  };
};

canvasSketch(sketch, settings);
