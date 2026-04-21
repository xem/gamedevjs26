onclick = (e) => {

  if(e.target.tagName == "BUTTON" || e.target.tagName == "INPUT") return;
  
  var x = e.layerX - a.offsetLeft, y = e.layerY - a.offsetTop;
  var radius;
  
  // menu
  if(page == 0){
    
    // play
    c.beginPath();
    c.rect(25, 250, 120, 70); // play
    if(c.isPointInPath(x,y)){
      back = 0;
      page = 1;
      parselevel();
    }
    //c.fill();
    c.closePath();
    
    // levels
    c.beginPath();
    c.rect(65, 330, 150, 50); // levels
    if(c.isPointInPath(x,y)){
      back = 0;
      page = 3;
    }
    //c.fill();
    c.closePath();
    
    // editor
    c.beginPath();
    c.rect(135, 410, 160, 50); // editor
    if(c.isPointInPath(x,y)){
      page = 2;
      reseteditor();
    }
    //c.fill();
    c.closePath();
  }
  
  // game
  else if(page == 1 && ingameframes > 20){
    
    // undo
    c.beginPath()
    c.rect(202, 455, 40, 40); // reset
    c.closePath();
    if(c.isPointInPath(x,y)){
      if(historylength > 0){
        historylength--;
        level = levelhistory[historylength];
        cogs = cogshistory[historylength];
      }
    }
    
    // reset
    c.beginPath()
    c.rect(5+40*6, 455, 40, 40); // reset
    c.closePath();
    if(c.isPointInPath(x,y)){
      level.placed1 = 0,
      level.placed2 = 0,
      level.placed3 = 0,
      level.placed4 = 0,
      level.placed5 = 0,
      level.cogs1 = [],
      level.cogs2 = [],
      level.cogs3 = [],
      level.cogs4 = [],
      level.cogs5 = [];
      cogs = [];
      parselevel();
    }

    // exit
    c.beginPath()
    c.rect(5+40*7, 455, 40, 40);
    c.closePath();
    if(c.isPointInPath(x,y)){
      page = back;
      exit1.classList.add("hidden");
      next1.classList.add("hidden");
      reset1.classList.add("hidden");
      buttons.classList.add("hidden");
    }
    
    // move pink
    if(level.pink){
      if(pinkposition == 0){
        c.beginPath();
        c.rect(level.pink[0],level.pink[1],level.pink[2],level.pink[3]);
        if(c.isPointInPath(x,y) && placing == 0){
          pinkposition = 1;
        }
      }
      else {
        c.beginPath();
        c.rect(level.pink[6],level.pink[7],level.pink[8],level.pink[9]);
        if(c.isPointInPath(x,y) && placing == 0){
          pinkposition = 0;
        }
      }
    }
    
    // place cog 1
    if(placing == "1"){
      radius = 25;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(!gamecollision(x,y,15)){
        //console.log(x, y);
        cogs.push({size: 1, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 15, radius2: 25, neighbours: [], grounded: 0 });
        level.cogs1[level.cogs1.length-1] = [x, y];
        placing = 0;
        //console.log(cogs[cogs.length-1]);
        //console.log(level.cogs1[level.cogs1.length-1]);
        
        
        historylength++;
        levelhistory[historylength] = JSON.parse(JSON.stringify(level));
        cogshistory[historylength] = JSON.parse(JSON.stringify(cogs));
      }
      else {
        placing = 0;
        level.placed1 --;
      }
    }
    
    // place cog 2
    else if(placing == "2"){
      radius = 45;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(!gamecollision(x,y,35)){
        cogs.push({size: 2, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 35, radius2: 45, neighbours: [], grounded: 0 });
        level.cogs2[level.cogs2.length-1] = [x, y];
        placing = 0;
        
        historylength++;
        levelhistory[historylength] = JSON.parse(JSON.stringify(level));
        cogshistory[historylength] = JSON.parse(JSON.stringify(cogs));
      }
      else {
        placing = 0;
        level.placed2 --;
      }
    }
    
    // place cog 3
    else if(placing == "3"){
      radius = 65;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(!gamecollision(x,y,55)){
        cogs.push({size: 3, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 55, radius2: 65, neighbours: [], grounded: 0 });
        level.cogs3[level.cogs3.length-1] = [x, y];
        placing = 0;
        
        historylength++;
        levelhistory[historylength] = JSON.parse(JSON.stringify(level));
        cogshistory[historylength] = JSON.parse(JSON.stringify(cogs));
        
      }
      else {
        placing = 0;
        level.placed3 --;
      }
    }
    
    // place cog 4
    else if(placing == "4"){
      radius = 85;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(!gamecollision(x,y,75)){
        cogs.push({size: 4, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 75, radius2: 85, neighbours: [], grounded: 0 });
        level.cogs4[level.cogs4.length-1] = [x, y];
        placing = 0;
        
        historylength++;
        levelhistory[historylength] = JSON.parse(JSON.stringify(level));
        cogshistory[historylength] = JSON.parse(JSON.stringify(cogs));
      }
      else {
        placing = 0;
        level.placed4 --;
      }
    }
    
    // place cog 5
    else if(placing == "5"){
      radius = 110;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(!gamecollision(x,y,100)){
        cogs.push({size: 5, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 100, radius2: 110, neighbours: [], grounded: 0 });
        level.cogs5[level.cogs5.length-1] = [x, y];
        placing = 0;
        
        historylength++;
        levelhistory[historylength] = JSON.parse(JSON.stringify(level));
        cogshistory[historylength] = JSON.parse(JSON.stringify(cogs));
      }
      else {
        placing = 0;
        level.placed5 --;
      }
    }
    
    // bottom line
    else {

      // inventory cog 1
      c.beginPath()
      c.rect(5+45*0, 455, 40, 40); // 1
      c.closePath();
      if(c.isPointInPath(x,y)){
        if((level.n1 - level.placed1) > 0){
          level.cogs1.push([999,999]);
          placing = "1";
          level.placed1++;
        }
      }
      
      // inventory cog 2
      c.beginPath()
      c.rect(5+45*1, 455, 40, 40); // 2
      c.closePath();
      if(c.isPointInPath(x,y)){
        if((level.n2 - level.placed2) > 0){
          level.cogs2.push([999,999]);
          placing = "2";
          level.placed2++;
        }
      }

      // inventory cog 3
      c.beginPath()
      c.rect(5+45*2, 455, 40, 40); // 3
      c.closePath();
      if(c.isPointInPath(x,y)){
        if((level.n3 - level.placed3) > 0){
          level.cogs3.push([999,999]);
          placing = "3";
          level.placed3++;
        }
      }

      // inventory cog 4
      c.beginPath()
      c.rect(5+45*3, 455, 40, 40); // 4
      c.closePath();
      if(c.isPointInPath(x,y)){
        if((level.n4 - level.placed4) > 0){
          level.cogs4.push([999,999]);
          placing = "4";
          level.placed4++;
        }
      }

      // inventory cog 5
      c.beginPath()
      c.rect(5+45*4, 455, 40, 40); // 5
      c.closePath();
      if(c.isPointInPath(x,y)){
        if((level.n5 - level.placed5) > 0){
          level.cogs5.push([999,999]);
          placing = "5";
          level.placed5++;
        }
      }
    }
  }
  
  // editor
  else if(page == 2){
    if(!collision && placing != 0){

      // yellow
      if(placing == "yellow") { 
        placing = 0;
      }

      // blue
      if(placing == "blue") { 
        placing = 0;
      }

      // red
      if(placing == "red") {
        if(redclick == 0){
          level.red.push([x, y]);
          redclick++;
          //console.log(level.red, redclick);
        }
        else if(redclick == 1){
          level.red[level.red.length-1][2] = (x - level.red[level.red.length-1][0]);
          level.red[level.red.length-1][3] = (y - level.red[level.red.length-1][1]);
          placing = 0;
          redclick = 0;
          //console.log(level.red, redclick);
        }
      }
      
      // pink
      if(placing == "pink") { // pink = [x, y, w, h, cx, cy, x2, y2, w2, h2, cx2, cy2]
      
        // click 1
        if(pinkclick == 0){
          level.pink = [x, y]; // x, y
          pinkclick++;
        }
        
        // click 2
        else if(pinkclick == 1){
          level.pink[2] = (x - level.pink[0]); // w
          level.pink[3] = (y - level.pink[1]); // h
          level.pink[4] = (level.pink[0] + level.pink[2] / 2); // cx
          level.pink[5] = (level.pink[1] + level.pink[3] / 2); // cy
          //console.log(level.pink[0],level.pink[1],level.pink[2],level.pink[3],level.pink[4],level.pink[5]);
          pinkclick++;
        }
        
        // click 3
        else if(pinkclick == 2){
          //console.log(level.pink[0],level.pink[1],level.pink[2],level.pink[3],level.pink[4],level.pink[5]);
          level.pink[6] = x - level.pink[2] / 2; // x2
          level.pink[7] = y - level.pink[3] / 2; // y2
          level.pink[8] = level.pink[2]; // w2
          level.pink[9] = level.pink[3]; // h2
          level.pink[10] = x; // cx2
          level.pink[11] = y; // cy2
          placing = 0;
          pinkclick = 0;
        }
      }
    }
  }
  
  else if(page == 3){
    
    // levels
    for(var i = 0; i < 10; i++){
      for(var j = 0; j < 15; j++){
        c.beginPath();
        c.rect(13 + i * 30, 38 + j * 30, 24, 24);
        if(c.isPointInPath(x,y)){
          currentlevel = j*10+i+1;
          page = 1;
          back = 0;
          parselevel();
        }
      }
    }
    
    // reset
    c.beginPath();
    c.rect(195, 9, 58, 20);
    c.closePath();
    if(c.isPointInPath(x,y)){
      if(confirm("All your progress will be lost")){
        localStorage.clear();
      }
    }

    // exit
    c.beginPath();
    c.rect(265, 9, 43, 20);
    c.closePath();
    if(c.isPointInPath(x,y)){
      page = 0;
    }
  }
  
  return;
}

reset1.onclick = () => {
  parselevel();
}

next1.onclick = () => {
  currentlevel++;
  localStorage["cogs_currentlevel"] = currentlevel;
  parselevel();
}

exit1.onclick = () => {
  page = back;
  exit1.classList.add("hidden");
  next1.classList.add("hidden");
  reset1.classList.add("hidden");
  buttons.classList.add("hidden");
  pinkposition = 0;
  blocked = 0;
  won = 0;
  messageframes = 0;
  blockedframes = 0;
}