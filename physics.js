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
      cogs[i].blocked = 0;
    }
    
    // make mobile cogs fall and check collisions 4 x 1px/s
    for(k = 0; k < 4; k++){
      
      for(i = 0; i < cogs.length; i++){ // loop over all cogs (non-fixed)
        for(j = 0; j < cogs.length; j++){ // consider all other cogs
      
          if(i != j){
            
            // if touching a neighbour:
            if(cogstouch(cogs[i].x, cogs[i].y, cogs[i].radius1, cogs[j].x, cogs[j].y, cogs[j].radius1) && !cogs[i].neighbours.includes(j)){

              // add neighbour to neighbours list
              cogs[i].neighbours.push(j);

              /*if(cogs[i].color == "blue"){
                //console.log(i + " touches " + j);
                //console.log(cogs[i].neighbours);
              }*/
              
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
    }
    //console.log("===", cogs[3]?.rotation, cogs[5]?.rotation);
    
    // check jams
    
    // n iterations
    for(k in cogs){
      
      // for all cogs
      for(i in cogs){
        
        // except yellow
        if(i > 0){
          
          // define a global angle
          var globalneighbourangle = 0;
          
          // check neighbours rotations
          for(j of cogs[i].neighbours){
            
            // if neighbour rotation is not 0 and global rotation is 0 or eqal to it
            if(cogs[j].rotation != 0 && (globalneighbourangle == 0 || globalneighbourangle == cogs[j].rotation)){
                
              // set global rotation equal to neighbour rotation
              globalneighbourangle = cogs[j].rotation;
            }
            
            // if neighbour is already jammed (99) or if its rotation is 0 and different from global rotation and global rotation is not 0
            if(cogs[j].rotation == 99 || (cogs[j].rotation != 0 && globalneighbourangle != 0 &&globalneighbourangle != cogs[j].rotation)){
              
              // JAM (set to 99)
              globalneighbourangle = 99;
            }     
          }
          
          if(i==5){
            //console.log(5, cogs[5]?.rotation, cogs[4]?.rotation, cogs[3]?.rotation, globalneighbourangle);
          }
          
          // If jam touches yellow cog: blocked
          if(Math.abs(globalneighbourangle) == 99 && cogs[i].neighbours.includes(0)){
            cogs[0].rotation = 0;
            blocked = 1;
          }
          else {
            cogs[0].rotation = 1;
            blocked = 0;
          }
          
          // make cog rotate at the opposite of the neighbours angle
          if(Math.abs(globalneighbourangle) < 99){
            cogs[i].rotation = -globalneighbourangle;
          }
          else {
            cogs[i].rotation = 99;
          }
        }
        
        if(i==5){
          //console.log(5, cogs[5]?.rotation, cogs[4]?.rotation, cogs[3]?.rotation, globalneighbourangle);
        }
          
      }
      //if(i == 5) console.log(cogs[i].rotation);
    }
    
    //console.log(cogs[0].neighbours);
    //console.table(cogs);
    for(i of cogs[0].neighbours){
      //console.log(i);
      if(cogs[i].rotation == 99){
        cogs[0].rotation = 0;
        blocked = 1;
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