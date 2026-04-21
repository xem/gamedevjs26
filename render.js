// render
render = () => {

  a.width ^= 0;
  yellowangle+= 100;

  // grid
  for(var i = 0; i < 320; i += 10){
    c.globalAlpha = .2;
    c.fillStyle = "#abf";
    c.fillRect(i, 0, (i % 50) == 0 ? 2 : 1, 500);
    c.globalAlpha = 1;
  }
  for(var i = 0; i < 500; i += 10){
    c.globalAlpha = .2;
    c.fillStyle = "#abf";
    c.fillRect(0, i, 320, (i % 50) == 0 ? 2 : 1);
    c.globalAlpha = 1;
  }
  
  // menu
  if(page == 0){
    editor.classList.add("hidden");
    c.fillStyle = "#000";
    c.font = "bold 120px Calibri, Arial, sans-serif";
    c.fillText("C   GS", 15, 230);
    drawcog(118,3,yellowangle+155,5,1);
    drawcog(118,130,-yellowangle+90,1,0);
    drawcog(118,192,yellowangle+80,2,2);
    drawcog(250,310,0,2,0);
    drawcog(58,420,0,2,2);
    c.font = "bold 50px Calibri, Arial, sans-serif";
    c.fillText("PLAY", 25, 320);
    c.fillText("EDITOR", 135, 415);
    c.font = "17px Calibri, Arial, sans-serif";
    c.fillText("A tribute to 'Geared' for GamedevJS 2026", 20, 484);
    c.strokeStyle = "#000";
    c.lineWidth = 10;
    c.beginPath();
    c.rect(0,0,320,494);
    c.stroke();
    c.closePath();
    if(currentlevel > 1){
      c.font = "25px Calibri, Arial, sans-serif";
      c.fillText("Level " + currentlevel, 27, 340);
    }
  }
  
  // game
  else if(page == 1){
    
    ingameframes++;
    
    // custom
    if(level.custom){
      level.custom();
    }
    
    // red
    if(level.red.length > 0){
      drawred();
    }
    
    // pink
    if(level.pink.length == 12){
      drawpink();
    }
  
    // yellow
    if(level.yellow.length){
      drawcog(level.yellow[0], level.yellow[1], blocked ? Math.cos(blockedframes) * 10 : cogs[0].rotation == 1 ? -yellowangle : 0,5, 1);
    }
    
    // blue
    if(level.blue.length){
      for(var i in cogs){
        if(cogs[i].color == "blue"){
          drawcog(cogs[i].x,cogs[i].y, (cogs[i].rotation == -1) ? yellowangle : (cogs[i].rotation == 1) ? -yellowangle : 0, cogs[i].size, 2);
        }
      }
    }
    
    // grey
    for(var i in cogs){
      if(!cogs[i].fixed){
        drawcog(cogs[i].x, cogs[i].y, (cogs[i].rotation == -1) ? yellowangle : (cogs[i].rotation == 1) ? -yellowangle : 0, cogs[i].size, 0);
      }
    }
    
    // red (colliding) grey cogs being placed
    if(placing == "1") {
      drawcog(level.cogs1[level.cogs1.length-1][0],level.cogs1[level.cogs1.length-1][1],0,1,level.cogs1[level.cogs1.length-1][3] ? 4 : 0);
    }
    if(placing == "2") {
      drawcog(level.cogs2[level.cogs2.length-1][0],level.cogs2[level.cogs2.length-1][1],0,2,level.cogs2[level.cogs2.length-1][3] ? 4 : 0);
    }
    if(placing == "3") {
      drawcog(level.cogs3[level.cogs3.length-1][0],level.cogs3[level.cogs3.length-1][1],0,3,level.cogs3[level.cogs3.length-1][3] ? 4 : 0);
    }
    if(placing == "4") {
      drawcog(level.cogs4[level.cogs4.length-1][0],level.cogs4[level.cogs4.length-1][1],0,4,level.cogs4[level.cogs4.length-1][3] ? 4 : 0);
    }
    if(placing == "5") {
      drawcog(
        level.cogs5[level.cogs5.length-1][0],level.cogs5[level.cogs5.length-1][1],0,5,level.cogs5[level.cogs5.length-1][3] ? 4 : 0);
    }
    
    // boxes
    c.font = "bold 33px Calibri, Arial, sans-serif";
    for(var i = 0; i < 8; i++){
      c.beginPath();
      c.lineWidth = 2;
      c.fillStyle = "hsl(" + (i<5?-160:(-i * 40 +280)) + ", 70%, 70%)";
      c.rect(1+40*i, 452, 38, 38);
      c.fill();
      c.stroke();
      if(i < 5){
        drawcog(34 + i*42,485+i*2,0,1+i,3,.35);
        if(level["n" + (i+1)] != 0){
          c.fillStyle = "#fff";
          c.strokeStyle = "#000";
          c.lineWidth = .5;
          c.fillText((level["n"+(i+1)] - level["placed" + (i+1)]) || '', 10 + i * 40, 479);
          c.strokeText((level["n"+(i+1)] - level["placed" + (i+1)]) || '', 10 + i * 40, 479);
          c.strokeText((level["n"+(i+1)] - level["placed" + (i+1)]) || '', 10 + i * 40, 479);
          c.strokeText((level["n"+(i+1)] - level["placed" + (i+1)]) || '', 10 + i * 40, 479);
          c.strokeText((level["n"+(i+1)] - level["placed" + (i+1)]) || '', 10 + i * 40, 479);
        }
      }
    }
    c.fillStyle = "#000";
    c.font = "bold 12px Calibri, Arial, sans-serif";
    c.fillText("UNDO", 205, 476);
    c.fillText("RESET", 244, 476);
    c.fillText("EXIT", 287, 476);
    
    // bottom
    c.fillStyle = "#000";
    c.strokeStyle = "#000";
    c.beginPath();
    c.lineWidth = 5;
    c.rect(0,450,320,60);
    c.stroke();
    c.beginPath();
    c.lineWidth = 10;
    c.rect(0,0,320,494);
    c.stroke();
    c.closePath();
    
    if(blocked){
      messageframes++;
      blockedframes++;
      if(messageframes > 50){
      //setTimeout(()=>{
        c.globalAlpha = 0.7;
        c.fillStyle = "#def";
        c.fillRect(5,5,320-10,450-9);
        c.globalAlpha = 1;
        buttons.classList.remove("hidden");
        reset1.classList.remove("hidden");
        c.fillStyle = "#fff";
        c.font = "bold 60px Calibri, Arial, sans-serif";
        c.fillText("COG-", 110-3, 200-3);
        c.fillText("COG-", 110-3, 200+3);
        c.fillText("COG-", 110+3, 200-3);
        c.fillText("COG-", 110+3, 200+3);
        c.fillText("BLOCKED!", 25-3, 250-3);
        c.fillText("BLOCKED!", 25-3, 250+3);
        c.fillText("BLOCKED!", 25+3, 250-3);
        c.fillText("BLOCKED!", 25+3, 250+3);
        c.fillStyle = "#000";
        c.font = "bold 60px Calibri, Arial, sans-serif";
        c.fillText("COG-", 110, 200);
        c.fillText("BLOCKED!", 25, 250);
      //}, 500);
      }
    }
    
    if(won){
      messageframes++;
      if(messageframes > 70){
      //setTimeout(()=>{
        c.globalAlpha = 0.7;
        c.fillStyle = "#def";
        c.fillRect(5,5,320-10,450-9);
        c.globalAlpha = 1;
        buttons.classList.remove("hidden");
        if(back == 2){
          exit1.classList.remove("hidden");
        }
        else {
          next1.classList.remove("hidden");
        }
        c.fillStyle = "#fff";
        c.font = "bold 45px Calibri, Arial, sans-serif";
        c.fillText("COG-", 110-3, 200-3);
        c.fillText("COG-", 110+3, 200-3);
        c.fillText("COG-", 110-3, 200+3);
        c.fillText("COG-", 110+3, 200+3);
        c.fillText("RATULATIONS!", 20+3, 250+3);
        c.fillText("RATULATIONS!", 20-3, 250+3);
        c.fillText("RATULATIONS!", 20+3, 250-3);
        c.fillText("RATULATIONS!", 20-3, 250-3);
        c.fillStyle = "#000";
        c.font = "bold 45px Calibri, Arial, sans-serif";
        c.fillText("COG-", 110, 200);
        c.fillText("RATULATIONS!", 20, 250);
      //}, 500);
      }
    }


  }
  
  // editor
  else if(page == 2){
    editor.classList.remove("hidden");

    // red
    if(level.red.length > 0){
      drawred();
    }
    
    // pink
    if(level.pink.length >= 4){
      drawpink();
    }
    
    // yellow
    if(level.yellow.length){
      drawcog(level.yellow[0],level.yellow[1],-yellowangle,5, (placing == "yellow" && collision) ? 4 : 1);
    }
    
    // blue
    if(level.blue.length){
      for(var i in level.blue){
        drawcog(level.blue[i][0],level.blue[i][1],0,(level.blue[i][2]-15)/20+1, (placing == "blue" && collision && i == level.blue.length-1) ? 4 : 2);
      }
    }
    
    // bottom
    c.fillStyle = "#000";
    c.fillRect(0,450,320,50);
    
    c.beginPath();
    c.strokeStyle = "#000";
    c.lineWidth = 10;
    c.rect(0,0,320,500);
    c.stroke();
    c.closePath();
  }
  
  // levels
  else if(page == 3){
    //c.font = "bold 120px Calibri, Arial, sans-serif";
    //c.fillText("3", 15, 230);
  }
}