onclick = (e) => {
  var x = e.layerX - a.offsetLeft, y = e.layerY - a.offsetTop;
  var radius;
  
  // menu
  if(page == 0){
    c.beginPath();
    c.rect(25, 270, 130, 50); // play
    if(c.isPointInPath(x,y)){
      back = 0;
      page = 1;
      parselevel();
    }
    c.closePath();
    
    c.beginPath();
    c.rect(135, 370, 160, 50); // editor
    if(c.isPointInPath(x,y)){
      page = 2;
      reseteditor();
    }
    c.closePath();
  }
  
  // game
  else if(page == 1 && ingameframes > 20){
    
    // reset
    c.beginPath()
    c.rect(5+45*5, 455, 40, 40); // reset
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
    c.rect(5+45*6, 455, 40, 40);
    c.closePath();
    if(c.isPointInPath(x,y)){
      page = back;
    }
    
    // place cog 1
    if(placing == "1"){
      radius = 25;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(!gamecollision(x,y,15)){
        console.log(x, y);
        cogs.push({size: 1, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 15, radius2: 25, neighbours: [], grounded: 0 });
        level.cogs1[level.cogs1.length-1] = [x, y];
        placing = 0;
        //console.log(cogs[cogs.length-1]);
        //console.log(level.cogs1[level.cogs1.length-1]);
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
      }
    }
    
    // place cog 5
    else if(placing == "5"){
      radius = 105;
      if(x < radius) x = radius;
      if(y < radius) y = radius;
      if(x > 320 - radius) x = 320 - radius;
      if(y > 450 - radius) y = 450 - radius;
      if(!gamecollision(x,y,95)){
        cogs.push({size: 5, fixed: 0, color:"grey", rotation: 0, x: x, y: y, radius1: 95, radius2: 105, neighbours: [], grounded: 0 });
        level.cogs5[level.cogs5.length-1] = [x, y];
        placing = 0;
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
      if(placing == "yellow") { 
        placing = 0;
      }
      if(placing == "blue") { 
        placing = 0;
      }
      if(placing == "red") { 
        if(level.red.length == 0){
          level.red = [x, y];
        }
        else if(level.red.length == 2 || level.red.length == 4){
          level.red[2] = (x - level.red[0]);
          level.red[3] = (y - level.red[1]);
          placing = 0;
        }
      }
      if(placing == "pink") { 
        if(pinkclick == 0){
          level.pink = [x, y];
          pinkclick++;
        }
        else if(pinkclick == 1){
          level.pink[2] = (x - level.pink[0]);
          level.pink[3] = (y - level.pink[1]);

          pinkclick++;
        }
        else if(pinkclick == 2){
          level.pink[4] = (x);
          level.pink[5] = (y);
          placing = 0;
          pinkclick = 0;
        }
      }
    }
  }
  
  return;
}