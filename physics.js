// cogs = [{size: 1/2/3/4/5, fixed: 0/1, color:grey/yellow/blue, rotation: 0/1/-1, x, y, radius1, radius2, neighbours: [], grounded: 0/1 }]

physics = () => {
  
  var i, j;
  
  // game
  if(page == 1){
    
    // reset collisions
    for(i in cogs){
      cogs[i].neighbours = [];
      cogs[i].grounded = 0;
    }
    
    for(i = 0; i < cogs.length; i++){ // loop over gray cogs (non-fixed)
      if(!cogs[i].fixed){
        for(j = 0; j < cogs.length; j++){ // consider all other cogs except current one
          if(i != j){
            // if touching a neighbour:
            
            //console.log(i + " and " + j + " touch?");
            
            if(cogstouch(cogs[i].x, cogs[i].y, cogs[i].radius1, cogs[j].x, cogs[j].y, cogs[j].radius1)){
              
              //console.log(i + " and " + j + " touch!");
              
              // add neighbour to neighbours list
              cogs[i].neighbours.push(j);
              
              // if colliding and higher:
              if(circlescollide(cogs[i].x, cogs[i].y, cogs[i].radius1+2, cogs[j].x, cogs[j].y, cogs[j].radius1+2, 1) && (cogs[i].y < cogs[j].y)){
                
                // ground (stop falling)
                cogs[i].grounded = 1;
              }
            }
          }
        }
      }
    }
    
    // let non grounded grey cogs fall
    for(i in cogs){
      if(cogs[i].y + cogs[i].radius2 >= 450){
        cogs[i].grounded = 1;
      }
      if(!cogs[i].fixed && !cogs[i].grounded){
        cogs[i].y ++;
      }
      if(cogs[i].neighbours.length > 1){
        console.log(i + " touches " + cogs[i].neighbours);
      }
    }
  }
}