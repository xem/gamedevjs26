// cogs = [{size: 1/2/3/4/5, fixed: 0/1, color:grey/yellow/blue, rotation: 0/1/-1/99, x, y, radius1, radius2, neighbours: [], grounded: 0/1 }]

physics = () => {

  //console.log("===");
  
  var i, j, k;
  
  // game
  if(page == 1){
    
    // reset collisions and rotation
    for(i in cogs){
      cogs[i].neighbours = [];
      if(cogs[i].color == "grey"){
        cogs[i].grounded = 0;
      }
      if(cogs[i].color == "orange"){
        cogs[i].grounded = 0;
      }
      if(cogs[i].color != "yellow"){
        cogs[i].rotation = 0;
      }
    }
    
    for(i = 0; i < cogs.length; i++){ // loop over all cogs (non-fixed)
      for(j = 0; j < cogs.length; j++){ // consider all other cogs
    
        if(i != j){
          
          // if touching a neighbour:
          if(cogstouch(cogs[i].x, cogs[i].y, cogs[i].radius1, cogs[j].x, cogs[j].y, cogs[j].radius1)){

            // add neighbour to neighbours list
            cogs[i].neighbours.push(j);

            if(cogs[i].color == "blue"){
              //console.log(i + " touches " + j);
              //console.log(cogs[i].neighbours);
            }
            
            // if grey and colliding and higher than neighbour:
            if(cogs[i].color == "grey" && circlescollide(cogs[i].x, cogs[i].y, cogs[i].radius1+5, cogs[j].x, cogs[j].y, cogs[j].radius1+5, 1) && (cogs[i].y < cogs[j].y)){
              
              // ground (stop falling)
              cogs[i].grounded = 1;
            }
            
            // if orange and colliding and higher than neighbour:
            if(cogs[i].color == "orange" && circlescollide(cogs[i].x, cogs[i].y, cogs[i].radius1+5, cogs[j].x, cogs[j].y, cogs[j].radius1+5, 1) && (cogs[i].y < cogs[j].y)){
              
              // ground (stop falling)
              cogs[i].grounded = 1;
            }
            
          }
        }
      }
    }
    
    // let non grounded grey cogs fall
    for(i in cogs){
      if(cogs[i].color == "grey"){
        if(cogs[i].y + cogs[i].radius2 >= 450){
          cogs[i].grounded = 1;
        }
        if(!cogs[i].fixed && !cogs[i].grounded){
          cogs[i].y ++;
        }
        if(cogs[i].neighbours.length > 1){
          //console.log(i + " touches " + cogs[i].neighbours);
        }
      }
    }
    
    // let non grounded orange cogs fall
    for(i in cogs){
      if(cogs[i].color == "orange"){
        if(cogs[i].y + cogs[i].radius2 >= 450){
          cogs[i].grounded = 1;
        }
        if(!cogs[i].fixed && !cogs[i].grounded){
          cogs[i].y ++;
        }
        if(cogs[i].neighbours.length > 1){
          //console.log(i + " touches " + cogs[i].neighbours);
        }
      }
    }
    
    for(k in cogs){
      for(i in cogs){
        // rotation (-1,0,1 or 99 if stuck)
        if(i > 0){
          var globalneighbourangle = 0;
          for(j of cogs[i].neighbours){
            if(cogs[j].rotation != 0 && (globalneighbourangle == 0 || globalneighbourangle == cogs[j].rotation)){
              globalneighbourangle = cogs[j].rotation;
            }
            
            if(cogs[j].rotation != 0 && globalneighbourangle != cogs[j].rotation){
              globalneighbourangle = 99;
            }     
          }
          if(globalneighbourangle == 99 && cogs[i].neighbours.includes(0)){
            cogs[0].rotation = 0;
            blocked = 1;
          }
          else {
            cogs[0].rotation = 1;
            blocked = 0;
          }
          cogs[i].rotation = -globalneighbourangle;
        }
      }
    }
    
    // check victory
    won = 1;
    for(i in cogs){
      if(cogs[0].rotation == 0) won = 0;
      if(cogs[i].color == "blue" && cogs[i].rotation == 0){
        won = 0;
      }
    }
    if(won == 1){
      // see timeout in render.js
    }
  }
}