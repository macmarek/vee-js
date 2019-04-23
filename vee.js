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
    var shapes = [drawRectangle, drawCircle, drawVee, drawVee];
    
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
    vee.ctx.strokeRect(x, y, 8, 8);
}

function drawCircle(x, y){
    vee.ctx.beginPath();
    vee.ctx.arc(x, y+5, 5, 0, Math.PI * 2, true);
    vee.ctx.stroke();
}