onmousedown = () => {
  md = 1;
}

onmouseup = () => {
  md = 0;
}

onmousemove = (e) => {
  
  var x = e.layerX - a.offsetLeft, y = e.layerY - a.offsetTop;
  //console.log(x,y);
  var radius;
  
  // game
  if(page == 1){
    if(isHandheld()) return;
    // bottom line 
    c.beginPath();
    c.rect(0,450,320,50);
    c.closePath();
    if(c.isPointInPath(x, y)){
      bottomcollision = 1;
    }
    else {
      bottomcollision = 0;
    }
    
    // cog 1
    if(placing == "1"){
      radius = 25;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(gamecollision(x,y,15)){
        level.cogs1[level.cogs1.length-1] = [x, y, 1, 1]; // x, y, tmp, colliding
      }
      else {
        level.cogs1[level.cogs1.length-1] = [x, y, 1, 0]; // x, y, tmp, colliding
      }
    }
    
    // cog 2
    else if(placing == "2"){
      radius = 45;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(gamecollision(x,y,35)){
        level.cogs2[level.cogs2.length-1] = [x, y, 1, 1]; // x, y, tmp, colliding
      }
      else {
        level.cogs2[level.cogs2.length-1] = [x, y, 1, 0]; // x, y, tmp, colliding
      }
    }
    
    // cog 3
    else if(placing == "3"){
      radius = 65;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(gamecollision(x,y,55)){
        level.cogs3[level.cogs3.length-1] = [x, y, 1, 1]; // x, y, tmp, colliding
      }
      else {
        level.cogs3[level.cogs3.length-1] = [x, y, 1, 0]; // x, y, tmp, colliding
      }
    }
    
    // cog 4
    else if(placing == "4"){
      radius = 85;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(gamecollision(x,y,75)){
        level.cogs4[level.cogs4.length-1] = [x, y, 1, 1]; // x, y, tmp, colliding
      }
      else {
        level.cogs4[level.cogs4.length-1] = [x, y, 1, 0]; // x, y, tmp, colliding
      }
    }
    
    // cog 5
    else if(placing == "5"){
      radius = 110;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(gamecollision(x,y,100)){
        level.cogs5[level.cogs5.length-1] = [x, y, 1, 1]; // x, y, tmp, colliding
      }
      else {
        level.cogs5[level.cogs5.length-1] = [x, y, 1, 0]; // x, y, tmp, colliding
      }
    }
  }
  
  // editor
  else if(page == 2){
    
    // yellow
    if(placing == "yellow"){
      level.yellow = [x, y];
    }
    
    // blue
    if(placing == "blue"){
      level.blue[level.blue.length-1][0] = x;
      level.blue[level.blue.length-1][1] = y;
    }
    
    // pinkcog
    if(placing == "pinkcog"){
      level.pinkcog[level.pinkcog.length-1][0] = x;
      level.pinkcog[level.pinkcog.length-1][1] = y;
    }
    
    // orange
    if(placing == "orange"){
      level.orange[level.orange.length-1][0] = x;
      level.orange[level.orange.length-1][1] = y;
    }
    
    // grey
    if(placing == "grey"){
      level.grey[level.grey.length-1][0] = x;
      level.grey[level.grey.length-1][1] = y;
    }
    
    // red
    if(placing == "red" && level.red.length > 0 && level.red[level.red.length-1].length >= 2 && redclick == 1){
      level.red[level.red.length-1][2] = x - level.red[level.red.length-1][0];
      level.red[level.red.length-1][3] = y - level.red[level.red.length-1][1];
    }
    
    // pink
    if(placing == "pink" && pinkclick == 1){
      level.pink[2] = x - level.pink[0];
      level.pink[3] = y - level.pink[1];
    }
    
    if(placing == "pink" && pinkclick == 2){
      level.pink[10] = x;
      level.pink[11] = y;
    }
    
    checkeditorcollisions();
  }
}