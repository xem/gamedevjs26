// render
render = () => {

  a.width ^= 0;
  
  if(page != 1 || cogs[0].rotation){
    yellowangle+= 100;
  }
  
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
    drawcog(320,330,0,4,0);
    drawcog(58,430,0,1,2);
    c.font = "bold 50px Calibri, Arial, sans-serif";
    c.fillText("PLAY", 25, (currentlevel > 1) ? 290: 300);
    c.fillText("LEVELS", 65, 370);
    c.fillText("EDITOR", 125, 445);
    c.font = "12px Calibri, Arial, sans-serif";
    //c.fillText("A tribute to 'Geared' made in 13 days for GamedevJS 2026", 20, 484);
    c.strokeStyle = "#000";
    c.lineWidth = 10;
    c.beginPath();
    c.rect(0,0,320,494);
    c.stroke();
    c.closePath();
    
    if(currentlevel > levels.length-1) currentlevel = levels.length - 1;
    //console.log(currentlevel);
    
    if(currentlevel > 1){
      c.font = "25px Calibri, Arial, sans-serif";
      if(currentlevel < 151){
        c.fillText("Level " + currentlevel, 27, 310);
      }
      else {
        c.fillText("Credits", 27, 310);
      }
    }
    
    if(editorcrossed){
      c.save();
      c.translate(112,420);
      c.rotate(0.06);
      c.fillRect(0,0,175,5);
      c.restore();
      c.font = "15px Calibri, Arial, sans-serif";
      c.fillText("(Desktop only, sorry)" , 137, 460);
    }
    
  }
  
  // game
  else if(page == 1){
    
    ingameframes++;
    
    // custom
    if(custom && back != 2){
      custom();
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
      drawcog(level.yellow[0], level.yellow[1], cogs[0].rotation == 0 ? cogs[0].rotation == 1 ? yellowangle + Math.cos(blockedframes) * 10 : -yellowangle + Math.cos(blockedframes) * 10 : cogs[0].rotation == 1 ? -yellowangle : 0,5, 1);
    }
    
    // blue
    if(level.blue.length){
      for(var i in cogs){
        if(cogs[i].color == "blue"){
          drawcog(cogs[i].x,cogs[i].y, (cogs[i].rotation == 99) ? Math.cos(blockedframes) * 10 : (cogs[i].rotation == -1) ? yellowangle : (cogs[i].rotation == 1) ? -yellowangle : 0, cogs[i].size, 2);
        }
      }
    }
    
    // pink cog
    if(level.pinkcog && level.pinkcog.length){
      for(var i in cogs){
        if(cogs[i].color == "pink"){
          drawcog(cogs[i].x,cogs[i].y, (cogs[i].rotation == 99) ? Math.cos(blockedframes) * 10 : (cogs[i].rotation == -1) ? yellowangle : (cogs[i].rotation == 1) ? -yellowangle : 0, 1, 5);
        }
      }
    }
    
    // orange
    if(level.orange && level.orange.length){
      for(var i in cogs){
        if(cogs[i].color == "orange"){
          drawcog(cogs[i].x,cogs[i].y, (cogs[i].rotation == 99) ? Math.cos(blockedframes) * 10 : (cogs[i].rotation == -1) ? yellowangle : (cogs[i].rotation == 1) ? -yellowangle : 0, cogs[i].size, 6);
        }
      }
    }
    
    // grey
    for(var i in cogs){
      if(!cogs[i].fixed && cogs[i].color == "grey"){
        drawcog(cogs[i].x, cogs[i].y, (cogs[i].rotation == 99) ? Math.cos(blockedframes) * 10 : (cogs[i].rotation == -1) ? yellowangle : (cogs[i].rotation == 1) ? -yellowangle : 0, cogs[i].size, 0);
      }
    }
    
    // red (colliding) grey cogs being placed
    if(placing == "1") {
      drawcog(level.cogs1[level.cogs1.length-1][0],level.cogs1[level.cogs1.length-1][1],0,1,level.cogs1[level.cogs1.length-1][3] || bottomcollision ? 4 : 0);
    }
    if(placing == "2") {
      drawcog(level.cogs2[level.cogs2.length-1][0],level.cogs2[level.cogs2.length-1][1],0,2,level.cogs2[level.cogs2.length-1][3] || bottomcollision  ? 4 : 0);
    }
    if(placing == "3") {
      drawcog(level.cogs3[level.cogs3.length-1][0],level.cogs3[level.cogs3.length-1][1],0,3,level.cogs3[level.cogs3.length-1][3] || bottomcollision  ? 4 : 0);
    }
    if(placing == "4") {
      drawcog(level.cogs4[level.cogs4.length-1][0],level.cogs4[level.cogs4.length-1][1],0,4,level.cogs4[level.cogs4.length-1][3] || bottomcollision  ? 4 : 0);
    }
    if(placing == "5") {
      drawcog(
        level.cogs5[level.cogs5.length-1][0],level.cogs5[level.cogs5.length-1][1],0,5,level.cogs5[level.cogs5.length-1][3] || bottomcollision  ? 4 : 0);
    }
    if(placing == "pinkcog") {
      drawcog(
        level.pinkcog[level.pinkcog.length-1][0],level.pinkcog[level.pinkcog.length-1][1],0,1,level.pinkcog[level.pinkcog.length-1][3] || bottomcollision  ? 4 : 5);
    }
    
    // boxes
    c.font = "bold 33px Calibri, Arial, sans-serif";
    for(var i = 0; i < 8; i++){
      c.fillStyle = "#000";
      c.strokeStyle = "#000";
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
    
    if(cogs[0].rotation == 0){
      messageframes++;
      blockedframes++;
      if(messageframes > 50 && (page == 1 && back == 0 && currentlevel < 100)){
      //setTimeout(()=>{
        c.globalAlpha = 0.7;
        c.fillStyle = "#def";
        c.fillRect(5,5,320-10,450-9);
        c.globalAlpha = 1;
        buttons.classList.remove("hidden");
        reset1.classList.remove("hidden");
        undo1.classList.remove("hidden");
        c.fillStyle = "#fff";
        c.font = "bold 60px Calibri, Arial, sans-serif";
        c.fillText("COG-", 90-3, 200-3);
        c.fillText("COG-", 90-3, 200+3);
        c.fillText("COG-", 90+3, 200-3);
        c.fillText("COG-", 90+3, 200+3);
        c.fillText("BLOCKED!", 25-3, 250-3);
        c.fillText("BLOCKED!", 25-3, 250+3);
        c.fillText("BLOCKED!", 25+3, 250-3);
        c.fillText("BLOCKED!", 25+3, 250+3);
        c.fillStyle = "#000";
        c.font = "bold 60px Calibri, Arial, sans-serif";
        c.fillText("COG-", 90, 200);
        c.fillText("BLOCKED!", 25, 250);
      //}, 500);
      }
    }
    
    if(won){
      messageframes++;
      if(messageframes > 70){
        
        if(currentlevel < 150){
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
          c.fillStyle = "#000";
          c.fillText("COG-", 110, 200);
          var messages = ["NUMENTAL", "RATULATIONS", "TASTIC", "BELIEVABLE", "SMICAL", "PLIMENTS", "CELLENT", "PRESSIVE", "STANDING", "MAZING", "WESOME", "BULOUS", "STONISHING", "STACULAR", "TRAORDINARY", "BLOWING", "DERFUL", "REKA", "RIFIC", "CEPTIONAL", "ENDARY", "PIC WIN", "TORY", "FECTION", "DROPPING", "MARKABLE", "NIFICENT", "LORIOUS", "LOSSAL", "RAZY", "SMIC", "WILDERING", "PREME", "CREDIBLE", "DING OVATION", "MINATION", "IGANTIC", "RAVO", "PLENDID", "OTCHA"];
          var message = back == 2 ? "RATULATIONS" : messages[currentlevel % messages.length];
          c.textAlign = "center";
          c.fillStyle = "#fff";
          c.fillText(message+"!", 160+3, 250+3);
          c.fillText(message+"!", 160-3, 250+3);
          c.fillText(message+"!", 160+3, 250-3);
          c.fillText(message+"!", 160-3, 250-3);
          c.fillStyle = "#000";
          c.font = "bold 45px Calibri, Arial, sans-serif";
          c.fillText(message+"!", 160, 250);
          localStorage["cogs_"+currentlevel] = 1;
          if(window.Wavedash){
            Wavedash.uploadLeaderboardScore("SCORE", currentlevel, true);
            
            if(currentlevel == 1){
              Wavedash.setAchievement("TRY_THE_GAME");
            }
            
            if(currentlevel == 120){
              Wavedash.setAchievement("FINISH_GAME");
            }
            
            if(currentlevel == 150){
              Wavedash.setAchievement("COMPLETIONIST");
            }
            
            if(currentlevel == 106){
              Wavedash.setAchievement("NINJA");
            }
          }
        }
        else {
          page = 0;
          eth.classList.add("hidden");
        }
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
    
    // pink cog
    if(level.pinkcog && level.pinkcog.length){
      for(var i in level.pinkcog){
        drawcog(level.pinkcog[i][0],level.pinkcog[i][1],0,1, (placing == "pinkcog" && collision && i == level.pinkcog.length-1) ? 4 : 5);
      }
    }
    
    // orange
    if(level.orange && level.orange.length){
      for(var i in level.orange){
        drawcog(level.orange[i][0],level.orange[i][1],0,(level.orange[i][2]-15)/20+1, (placing == "orange" && collision && i == level.orange.length-1) ? 4 : 6);
      }
    }
    
    // grey
    if(level.grey && level.grey.length){
      for(var i in level.grey){
        drawcog(level.grey[i][0],level.grey[i][1],0, (level.grey[i][2]-15)/20+1 , (placing == "grey" && collision && i == level.grey.length-1) ? 4 : 0);
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
    c.strokeStyle = "#000";
    c.fillStyle = "#000";
    c.font = "bold 25px Calibri, Arial, Sans-serif";
    c.fillText("LEVELS", 15, 30);
    c.font = "bold 20px Calibri, Arial, Sans-serif";
    c.fillText("RESET", 200, 27);
    c.fillText("EXIT", 268, 27);
    c.lineWidth = 10;
    c.beginPath();
    c.rect(0,0,320,494);
    c.stroke();
    c.closePath();
    for(var j = 0; j < 15; j++){
      for(var i = 0; i < 10; i++){
        if(levels.length - 1 < 130 && !unlocked150) {
          c.fillStyle = "#fff";
          c.fillRect(30, 410, 270, 70);
          c.textAlign = "center";
          c.font = "bold 20px Calibri, Arial, Sans-serif";
          c.fillStyle = "#000";
          //c.fillText("Connect your ETH wallet", 160, 430);
          //c.fillText("to unlock levels 120-150", 160, 450);
        }
        if((j*10+i+1) > levels.length-1 && !unlocked150) return;
        c.lineWidth = 2;
        c.beginPath();
        c.rect(13 + i * 30, 38 + j * 30, 24, 24);
        if(localStorage["cogs_"+(j*10+i+1)] == 1){
          c.fillStyle = "#7F7";
        }
        else {
          
          if(levels[j*10+i+1]?.custom){
            c.fillStyle = "#def";
          }
          
          else if(
            localStorage["cogs_"+(j*10+i+1-1)]
            || localStorage["cogs_"+(j*10+i+1-2)]
            || localStorage["cogs_"+(j*10+i+1-3)]
            || localStorage["cogs_"+(j*10+i+1-4)]
            || localStorage["cogs_"+(j*10+i+1-5)]
            || (j*10+i+1 <= 5)
          ){
            c.fillStyle = "#fff";
          }
          else {
            c.fillStyle = "#ccc";
          }
        }
        c.fill();
        c.stroke();
        c.closePath();
        c.textAlign = "center";
        c.font = "bold 14px Calibri, Arial, Sans-serif";
        c.fillStyle = "#000";
        c.fillText(j*10+i+1, 25 + i * 30, 55 + j * 30);
      }
    }
    c.lineWidth = 2;
    c.beginPath();
    c.rect(195, 9, 58, 23);
    c.stroke();
    c.closePath();
    c.lineWidth = 2;
    c.beginPath();
    c.rect(265, 9, 43, 23);
    c.stroke();
    c.closePath();
  }
}