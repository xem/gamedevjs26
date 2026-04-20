// draw cog
// size: 1, 2, 3, 4, 5
// radius: 15, 35, 55, 75, 95
// teeth: 6, 12, 18, 24, 30
// type: 0 grey, 1 yellow, 2 blue, 3 black, 4 red
// speed: 1, 1/2, 1/3, 1/4, 1/5
drawcog = (x, y, angle = 0, size = 1, type = 0, scale = 1) => {
  c.save();
  c.beginPath();
  c.translate(x, y);
  c.lineWidth = 3;
  c.scale(scale, scale);
  c.arc(0, 0, 15 + (size - 1) * 20, 0, 7);
  c.fillStyle = ["#ccc", "yellow", "#2ad","black", "red"][type];
  c.strokeStyle = "#000";
  c.fill();
  c.stroke();
  if(type == 1 && page == 1){
    c.save();
    c.rotate(-(angle * 1/size) / 2000);
    c.fillStyle = "#000";
    c.font = "bold 20px calibri, arial, sans-serif";
    c.textAlign = "center";
    c.fillText("LEVEL " + (currentlevel), 0, -30);
    c.restore();
  }
  c.closePath();
  
  c.beginPath();
  c.arc(0, 0, 5, 0, 7);
  c.fillStyle = "#000";
  c.fill();
  c.closePath();
  var teeth = size * 6;
  
  for(var i = 0; i < teeth; i++){
    c.save();
    c.rotate((2 * Math.PI / teeth) * i + (angle * 1/size) / 100);
    c.translate(0, -25 - (size - 1) * 20);
    c.fillRect(-6, -3, 12, 12);
    c.fillStyle = c.fillStyle = ["#ccc", "yellow", "#2ad", "black", "red"][type];
    c.fillRect(-3, 0, 6, 12);
    c.restore();
  }
  c.restore();
}

// draw red zone
drawred = () => {
  c.beginPath();
  c.fillStyle = "pink";
  c.lineWidth = 3;
  c.strokeStyle = "red";
  c.rect(level.red[0],level.red[1],level.red[2],level.red[3]);
  c.fill();
  c.stroke();
  c.closePath();
}

// draw pink zone
// pink = [x, y, w, h, cx, cy, x2, y2, w2, h2, cx2, cy2]
drawpink = () => {
  
  if(pinkposition == 0){
    c.save();
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.beginPath();
    c.fillStyle = "#e7e";
    c.lineWidth = 3;
    c.strokeStyle = "purple";
    c.rect(level.pink[0],level.pink[1],level.pink[2],level.pink[3]);
    c.fill();
    c.stroke();
    c.closePath();
    if(level.pink.length > 6){
      c.beginPath();
      c.fillStyle = "#e7e";
      c.lineWidth = 3;
      c.strokeStyle = "purple";
      c.arc(level.pink[10], level.pink[11], 6, 0, 7);
      c.fill();
      c.stroke();
      c.closePath();
      
      c.beginPath();
      c.fillStyle = "#e7e";
      c.lineWidth = 3;
      c.strokeStyle = "purple";
      c.moveTo(level.pink[10], level.pink[11]);
      c.lineTo(level.pink[4], level.pink[5]);
      c.fill();
      c.stroke();
      c.closePath();
    }
    c.restore();
  }
  else {
    c.save();
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.beginPath();
    c.fillStyle = "#e7e";
    c.lineWidth = 3;
    c.strokeStyle = "purple";
    c.rect(level.pink[0+6],level.pink[1+6],level.pink[2+6],level.pink[3+6]);
    c.fill();
    c.stroke();
    c.closePath();
    if(level.pink.length > 6){
      c.beginPath();
      c.fillStyle = "#e7e";
      c.lineWidth = 3;
      c.strokeStyle = "purple";
      c.arc(level.pink[10-6], level.pink[11-6], 6, 0, 7);
      c.fill();
      c.stroke();
      c.closePath();
      
      c.beginPath();
      c.fillStyle = "#e7e";
      c.lineWidth = 3;
      c.strokeStyle = "purple";
      c.moveTo(level.pink[10-6], level.pink[11-6]);
      c.lineTo(level.pink[4+6], level.pink[5+6]);
      c.fill();
      c.stroke();
      c.closePath();
    }
    c.restore();
  }
}

// parse level
parselevel = () => {
  
  placing = 0;
  blocked = 0;
  won = 0;
  yellowangle = 0;
  messageframes = 0;
  blockedframes = 0;
  exit1.classList.add("hidden");
  next1.classList.add("hidden");
  reset1.classList.add("hidden");
  buttons.classList.add("hidden");

  if(back == 0){
    level = levels[currentlevel];
  }
  
  // reset + string to int
  level.n1 = +level.n1;
  level.n2 = +level.n2;
  level.n3 = +level.n3;
  level.n4 = +level.n4;
  level.n5 = +level.n5;
  level.cogs1 = [];
  level.cogs2 = [];
  level.cogs3 = [];
  level.cogs4 = [];
  level.cogs5 = [];
  level.placed1 = 0,
  level.placed2 = 0,
  level.placed3 = 0,
  level.placed4 = 0,
  level.placed5 = 0;
  
  pinkposition = 0;
  
  // create cogs array
  // cogs = [{size: 1/2/3/4/5, fixed: 0/1, color:grey/yellow/blue, rotation: 0/1/-1, x, y, radius1, radius2, neighbours: [], grounded: 0 }]
  cogs = [];
  
  if(level.yellow){
    cogs.push({size: 5, fixed: 1, color:"yellow", rotation: 1, x: level.yellow[0], y: level.yellow[1], radius1: 95, radius2: 105, neighbours: [], grounded: 1 });
  }
  else { alert("no yellow") }
  
  if(level.blue){
    for(var i in level.blue){
      cogs.push({size: (level.blue[i][2]-15)/20+1, fixed: 1, color:"blue", rotation: 0, x: level.blue[i][0], y: level.blue[i][1], radius1: level.blue[i][2], radius2: level.blue[i][2]+10, neighbours: [], grounded: 1 });
    }
  }
  else { alert("no blue") }
  ingameframes = 0;
}

// tmp
//parselevel();

circlescollide = (x1, y1, r1, x2, y2, r2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distSq = dx*dx + dy*dy;
  const radii = r1 + r2 + 4;
  return distSq <= radii * radii;
}

cogstouch = (x1, y1, inner1, x2, y2, inner2, debug) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distSq = dx*dx + dy*dy;
  const innerradii = inner1 + inner2;
  const outerradii = inner1 + inner2 + 20;
  if(debug){
    //console.log(x1, y1, inner1, x2, y2, inner2);
    //console.log(dx, dy, distSq, innerradii, outerradii, innerradii * innerradii, outerradii * outerradii);
  }
  return (distSq < (outerradii * outerradii));
}

// check if a grey cog to place is colliding with anything else
gamecollision = (x,y,radius) => {
  for(var i in cogs){
    if(circlescollide(x,y,radius, cogs[i].x, cogs[i].y, cogs[i].radius1)){
      return 1;
    }
  }
  if(level.red){
    c.beginPath();
    c.rect(level.red[0],level.red[1],level.red[2],level.red[3]);
    if(c.isPointInPath(x,y)){
      return 1;
    }
  }
  
  if(level.pink){
    if(pinkposition == 0){
      c.beginPath();
      c.rect(level.pink[0],level.pink[1],level.pink[2],level.pink[3]);
      if(c.isPointInPath(x,y)){
        return 1;
      }
    }
    else {
      c.beginPath();
      c.rect(level.pink[6],level.pink[7],level.pink[8],level.pink[9]);
      if(c.isPointInPath(x,y)){
        return 1;
      }
    }
  }
  return 0;
}