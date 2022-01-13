const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height)
    
    context.fillStyle = 'black'

    const cx = width * 0.5
    const cy = height * 0.5

    const w = width * 0.01
    const h = height * 0.1
    let x,y;


    const num = 80;
    const radius = width * 0.3;

    for(let i = 0; i < num; i++){
      const slice = math.degToRad(360 / num);
      const angle = slice * i;
    

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      
      context.save()
      context.translate(x,y)
      context.rotate(-angle);
      context.scale(random.range(2,20),2 )

      context.beginPath();
      context.rect(-w / 2, random.range(0, -h / 2), w, h);
      context.fillStyle = 'black'
      context.fill()
      context.restore()


      context.save()
      context.translate(cx,cy)
      context.rotate(-angle)

      context.lineWidth = random.range(10, 1)

      context.beginPath()
      context.arc(0, 0, radius * random.range(1.9, 0.9), slice * random.range(1, -1), slice * random.range(10,100));

      context.strokeStyle = 'white'
      context.stroke();

      context.restore()
    }
  };
};

canvasSketch(sketch, settings);
