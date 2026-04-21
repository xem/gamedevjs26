// Editor stuff
// yellow is size 5

oninput = onchange = () => {
  if(page == 2){
    level.n1 = s1.value;
    level.n2 = s2.value;
    level.n3 = s3.value;
    level.n4 = s4.value;
    level.n5 = s5.value;
  }
}

btest.onclick = () => {
  back = 2;
  page = 1;
  parselevel();
  editor.classList.add("hidden");
  if(cogs.length < 2){
    alert("Levels require at least one yellow cog and one blue cog");
    back = 2;
    page = 2;
  }
  else {
    parselevel();
  }
}

breset.onclick = reseteditor = () => {
  s1.value = 0;
  s2.value = 0;
  s3.value = 0;
  s4.value = 0;
  s5.value = 0;
  level = {
    n1: 0,
    n2: 0,
    n3: 0,
    n4: 0,
    n5: 0,
    yellow: [],
    blue: [],
    red: [],
    pink: [],
    pinkcog: [],
  }
}

bshare.onclick = () => {
  prompt("Share level", JSON.stringify(level));
}

bexit.onclick = () => {
  page = 0;
}

byellow.onclick = () => {
  placing = "yellow";
}

bblue1.onclick = () => {
  placing = "blue";
  if(level.blue.length > 0 && level.blue[level.blue.length-1][0] == 999){
    // use the last blue slot if empty
  }
  else {
    level.blue.push([999,999,15]); // new one
  }
}

bblue2.onclick = () => {
  placing = "blue";
  if(level.blue.length > 0 && level.blue[level.blue.length-1][0] == 999){
    // use the last blue slot if empty
  }
  else {
    level.blue.push([999,999,35]); // new one
  }
}

bblue3.onclick = () => {
  placing = "blue";
  if(level.blue.length > 0 && level.blue[level.blue.length-1][0] == 999){
    // use the last blue slot if empty
  }
  else {
    level.blue.push([999,999,55]); // new one
  }
}

bpinkcog.onclick = () => {
  placing = "pinkcog";
  if(level.pinkcog && level.pinkcog.length > 0 && level.pinkcog[level.pinkcog.length-1][0] == 999){
    // use the last blue slot if empty
  }
  else {
    if(!level.pinkcog)level.pinkcog=[];
    level.pinkcog.push([999,999,15]); // new one
  }
}

bred.onclick = () => {
  placing = "red";
}

bpink.onclick = () => {
  placing = "pink";
  level.pink = [];
  pinkclick = 0;
}

checkeditorcollisions = () => {
  // blue radius is 15/35/55
  // yellow radius is 95
  collision = 0;
  
  // yellow 
  if(placing == "yellow"){
    for(var i of level.blue){
      if(circlescollide(level.yellow[0], level.yellow[1], 95, i[0], i[1], i[2])){
        collision = 1;
      }
    }
    for(var i of level.pinkcog){
      if(circlescollide(level.yellow[0], level.yellow[1], 95, i[0], i[1], i[2])){
        collision = 1;
      }
    }
  }
  
  // blue
  if(placing == "blue" && level.blue.length > 1){
    
    // vs blue
    for(var i = 0; i < level.blue.length - 1; i++){
      if(circlescollide(
        level.blue[level.blue.length-1][0],
        level.blue[level.blue.length-1][1],
        level.blue[level.blue.length-1][2],
        level.blue[i][0],
        level.blue[i][1],
        level.blue[i][2]
      )){
        collision = 1;
      }
    }
    
    // vs pink cog
    for(var i = 0; i < level.pinkcog.length; i++){
      if(circlescollide(
        level.blue[level.blue.length-1][0],
        level.blue[level.blue.length-1][1],
        level.blue[level.blue.length-1][2],
        level.pinkcog[i][0],
        level.pinkcog[i][1],
        level.pinkcog[i][2]
      )){
        collision = 1;
      }
    }
  }
  
  // vs yellow
  if(placing == "blue" && level.yellow.length && circlescollide(
    level.yellow[0],
    level.yellow[1],
    95,
    level.blue[level.blue.length-1][0],
    level.blue[level.blue.length-1][1],
    level.blue[level.blue.length-1][2]
  )){
    collision = 1;
  }
  
  // pink cog
  
  if(placing == "pinkcog" && level.pinkcog.length > 1){

    // vs blue
    for(var i = 0; i < level.blue.length; i++){
      if(circlescollide(
        level.pinkcog[level.pinkcog.length-1][0],
        level.pinkcog[level.pinkcog.length-1][1],
        level.pinkcog[level.pinkcog.length-1][2],
        level.blue[i][0],
        level.blue[i][1],
        level.blue[i][2]
      )){
        collision = 1;
      }
    }
    
    // vs pink
    for(var i = 0; i < level.pinkcog.length - 1; i++){
      if(circlescollide(
        level.pinkcog[level.pinkcog.length-1][0],
        level.pinkcog[level.pinkcog.length-1][1],
        level.pinkcog[level.pinkcog.length-1][2],
        level.pinkcog[i][0],
        level.pinkcog[i][1],
        level.pinkcog[i][2]
      )){
        collision = 1;
      }
    }
  }
  
  // vs yellow
  if(placing == "pinkcog" && level.yellow.length && circlescollide(
    level.yellow[0],
    level.yellow[1],
    95,
    level.pinkcog[level.pinkcog.length-1][0],
    level.pinkcog[level.pinkcog.length-1][1],
    level.pinkcog[level.pinkcog.length-1][2]
  )){
    collision = 1;
  }
}