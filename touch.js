ontouchstart = (e) => {
  var x = e.touches[0].pageX - a.offsetLeft, y = e.touches[0].pageY - a.offsetTop;
  console.log("start", x, y);
  
  // game
  if(page == 1 && ingameframes > 20){
    
    
    // undo
    c.beginPath()
    c.rect(202, 455, 40, 40); // reset
    c.closePath();
    if(c.isPointInPath(x,y)){
      if(historylength > 0){
        historylength--;
        level = JSON.parse(levelhistory[historylength]);
        cogs = JSON.parse(cogshistory[historylength]);
        //console.log(cogshistory);
        reset1.classList.add("hidden");
        undo1.classList.add("hidden");
        messageframes = 0;
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
    
    // grey to inventory
    for(var i in cogs){
      if(!cogs[i].fixed && cogs[i].color == "grey"){
        c.beginPath();
        //c.fillStyle = "red";
        c.arc(cogs[i].x, cogs[i].y, 15 + (cogs[i].size - 1) * 20 + (cogs[i].size == 5 ? 5 : 0), 0, 7);
        //c.fill();
        c.closePath();
        if(c.isPointInPath(x, y) && placing == 0){
          //console.log("clicked")
          level["placed" + cogs[i].size]--;
          cogs.splice(i, 1);
        }
      }
    }
    
    
    
    // bottom line

      // inventory cog 1
      c.beginPath()
      c.rect(5+40*0, 455, 40, 40); // 1
      //c.fill();
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
      c.rect(5+40*1, 455, 40, 40); // 2
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
      c.rect(5+40*2, 455, 40, 40); // 3
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
      c.rect(5+40*3, 455, 40, 40); // 4
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
      c.rect(5+40*4, 455, 40, 40); // 5
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

ontouchmove = (e) => {
  var x = e.touches[0].pageX - a.offsetLeft, y = e.touches[0].pageY - a.offsetTop;
  console.log("move", x, y);
 
  // game
  if(page == 1){
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
}

ontouchend = (e) => {
  var x = e.changedTouches[0].pageX - a.offsetLeft, y = e.changedTouches[0].pageY - a.offsetTop;
  console.log("end", e);
  
  // game
  if(page == 1){
    
    // place cog 1
    if(placing == "1"){
      radius = 25;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(!gamecollision(x,y,15) && !bottomcollision){
        //console.log(x, y);
        cogs.push({size: 1, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 15, radius2: 25, neighbours: [], grounded: 0 });
        level.cogs1[level.cogs1.length-1] = [x, y];
        placing = 0;
        //console.log(cogs[cogs.length-1]);
        //console.log(level.cogs1[level.cogs1.length-1]);
        
        
        historylength++;
        levelhistory[historylength] = JSON.stringify(level);
        cogshistory[historylength] = JSON.stringify(cogs);
        
        if((level.n1 - level.placed1) > 0){
          placing = "1";
          level.placed1++;
        }
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
      if(!gamecollision(x,y,35) && !bottomcollision){
        cogs.push({size: 2, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 35, radius2: 45, neighbours: [], grounded: 0 });
        level.cogs2[level.cogs2.length-1] = [x, y];
        placing = 0;
        
        historylength++;
        levelhistory[historylength] = JSON.stringify(level);
        cogshistory[historylength] = JSON.stringify(cogs);
        
        if((level.n2 - level.placed2) > 0){
          placing = "2";
          level.placed2++;
        }
        
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
      if(!gamecollision(x,y,55) && !bottomcollision){
        cogs.push({size: 3, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 55, radius2: 65, neighbours: [], grounded: 0 });
        level.cogs3[level.cogs3.length-1] = [x, y];
        placing = 0;
        
        historylength++;
        levelhistory[historylength] = JSON.stringify(level);
        cogshistory[historylength] = JSON.stringify(cogs);
        
        if((level.n3 - level.placed3) > 0){
          placing = "3";
          level.placed3++;
        }
        
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
      if(!gamecollision(x,y,75) && !bottomcollision){
        cogs.push({size: 4, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 75, radius2: 85, neighbours: [], grounded: 0 });
        level.cogs4[level.cogs4.length-1] = [x, y];
        placing = 0;
        
        historylength++;
        levelhistory[historylength] = JSON.stringify(level);
        cogshistory[historylength] = JSON.stringify(cogs);
        
        if((level.n4 - level.placed4) > 0){
          placing = "1";
          level.placed4++;
        }
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
      if(!gamecollision(x,y,100) && !bottomcollision){
        cogs.push({size: 5, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 100, radius2: 110, neighbours: [], grounded: 0 });
        level.cogs5[level.cogs5.length-1] = [x, y];
        placing = 0;
        
        historylength++;
        levelhistory[historylength] = JSON.stringify(level);
        cogshistory[historylength] = JSON.stringify(cogs);
        
        if((level.n5 - level.placed5) > 0){
          placing = "5";
          level.placed5++;
        }
      }
      else {
        placing = 0;
        level.placed5 --;
      }
    }
    
  }
}