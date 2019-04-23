var vee = {
    ctx: null
}

function draw() {
    var canvas = document.getElementById('vee-canvas');
    if (canvas.getContext) {
        vee.ctx = canvas.getContext('2d');
        drawVee(canvas.width/2, 0);
    }
    else{
        alert("Canvas not supported");
    }
}

function getRandom(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function drawVee(x,y){
    var lineOffset = 30;
    var shapes = [drawRectangle, drawCircle, drawStar, drawVee, drawVee];
    
    vee.ctx.beginPath();
    vee.ctx.moveTo(x, y);

    vee.ctx.lineTo(x+lineOffset, y+lineOffset);
    vee.ctx.stroke();
   
    getRandom(shapes)(x+lineOffset, y+lineOffset);

    vee.ctx.moveTo(x, y);

    vee.ctx.lineTo(x-lineOffset, y+lineOffset);
    vee.ctx.stroke();

    getRandom(shapes)(x-lineOffset, y+lineOffset);
}

function drawRectangle(x, y){
    vee.ctx.strokeRect(x, y, 10, 10);
}

function drawCircle(x, y){
    vee.ctx.beginPath();
    vee.ctx.arc(x, y+6, 6, 0, Math.PI * 2, true);
    vee.ctx.stroke();
}

function drawStar(cx,cy){
    var spikes = 5;
    var outerRadius = 8;
    var innerRadius = 4;
    cy = cy+outerRadius;

    var rot=Math.PI/2*3;
    var x=cx;
    var y=cy;
    var step=Math.PI/spikes;

    vee.ctx.beginPath();
    vee.ctx.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
      x=cx+Math.cos(rot)*outerRadius;
      y=cy+Math.sin(rot)*outerRadius;
      vee.ctx.lineTo(x,y)
      rot+=step

      x=cx+Math.cos(rot)*innerRadius;
      y=cy+Math.sin(rot)*innerRadius;
      vee.ctx.lineTo(x,y)
      rot+=step
    }
    vee.ctx.lineTo(cx,cy-outerRadius);
    vee.ctx.closePath();
    vee.ctx.stroke();
  }

  