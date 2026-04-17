// render
render = () => {

  a.width ^= 0;
  yellowangle+= 100;
  
  // menu
  if(page == 0){
    editor.classList.add("hidden");
    c.font = "bold 120px Calibri, Arial, sans-serif";
    c.fillText("C   GS", 15, 230);
    drawcog(118,192,yellowangle+80,2,2);
    drawcog(118,130,-yellowangle+90,1,0);
    drawcog(118,7,yellowangle+155,5,1);
    drawcog(250,310,0,3,0);
    drawcog(58,420,0,2,2);
    c.font = "bold 50px Calibri, Arial, sans-serif";
    c.fillText("PLAY", 25, 320);
    c.fillText("EDITOR", 135, 415);
    c.font = "17px Calibri, Arial, sans-serif";
    c.fillText("A tribute to 'Geared' for GamedevJS 2026", 20, 490);
    c.strokeStyle = "#000";
    c.lineWidth = 10;
    c.rect(0,0,320,500);
    c.stroke();
  }
  
  // game
  else if(page == 1){
    
    ingameframes++;
    
    // red
    if(level.red.length == 4){
      drawred();
    }
  
    // yellow
    if(level.yellow.length){
      drawcog(level.yellow[0],level.yellow[1],cogs[0].rotation == 1 ? -yellowangle : 0,5, 1);
    }
    
    // blue
    if(level.blue.length){
      for(var i in cogs){
        if(cogs[i].color == "blue"){
          drawcog(cogs[i].x,cogs[i].y,(cogs[i].rotation == -1) ? yellowangle : (cogs[i].rotation == 1) ? -yellowangle : 0, 3, 2);
        }
      }
    }
    
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
    
    // bottom
    c.fillStyle = "#000";
    c.strokeStyle = "#000";
    c.lineWidth = 10;
    c.fillRect(0,450,320,50);
    c.rect(0,0,320,500);
    c.stroke();
    c.font = "bold 33px Calibri, Arial, sans-serif";
    
    // boxes
    for(var i = 0; i < 7; i++){
      c.fillStyle = "hsl(" + (i<5?-160:(i * 40 - 200)) + ", 70%, 70%)";
      c.fillRect(5+45*i, 455, 40, 40);
      if(i < 5){
        drawcog(34 + i*49,485+i*2,0,1+i,3,.35);
        if(level["n" + (i+1)] != 0){
          c.fillStyle = "#fff";
          c.strokeStyle = "#000";
          c.lineWidth = .5;
          c.fillText(level["n"+(i+1)] - level["placed" + (i+1)], 10 + i * 45, 479);
          c.strokeText(level["n"+(i+1)] - level["placed" + (i+1)], 10 + i * 45, 479);
          c.strokeText(level["n"+(i+1)] - level["placed" + (i+1)], 10 + i * 45, 479);
          c.strokeText(level["n"+(i+1)] - level["placed" + (i+1)], 10 + i * 45, 479);
          c.strokeText(level["n"+(i+1)] - level["placed" + (i+1)], 10 + i * 45, 479);
        }
      }
    }
    c.fillStyle = "#000";
    c.font = "bold 15px Calibri, Arial, sans-serif";
    c.fillText("RESET", 231, 480);
    c.fillText("EXIT", 281, 480);

  }
  
  // editor
  else if(page == 2){
    editor.classList.remove("hidden");

    // red
    if(level.red.length == 4){
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
        drawcog(level.blue[i][0],level.blue[i][1],0,3, (placing == "blue" && collision && i == level.blue.length-1) ? 4 : 2);
      }
    }
    
    // bottom
    c.fillStyle = "#000";
    c.fillRect(0,450,320,50);
    
    c.strokeStyle = "#000";
    c.lineWidth = 10;
    c.rect(0,0,320,500);
    c.stroke();
  }
  
  // levels
  else if(page == 3){
    //c.font = "bold 120px Calibri, Arial, sans-serif";
    //c.fillText("3", 15, 230);
  }
}