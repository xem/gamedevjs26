levels = [

  // 0 (no)
  {},

  // 1
  {"n1":0,"n2":1,"n3":0,"n4":0,"n5":0,"yellow":[203,394],"blue":[[208,146,55]],"red":[],"pink":[],"cogs1":[],"cogs2":[[201,249]],"cogs3":[],"cogs4":[],"cogs5":[],"placed1":0,"placed2":1,"placed3":0,"placed4":0,"placed5":0,
  custom:()=>{
    c.fillStyle = "#000";
    c.font = "bold 38px Calibri, Arial, sans-serif";
    c.fillText("Welcome to COGS!", 10,45);
    c.font = "bold 18px Calibri, Arial, sans-serif";
    c.fillText("Power the", 15,80);
    c.fillText("blue cog", 15,100);
    c.fillText("by linking it", 15,230);
    c.fillText("to the yellow cog", 15,250);
    c.fillText("using cogs", 15,340);
    c.fillText("from the", 15,360);
    c.fillText("inventory", 15,380);
    
    c.beginPath();
    c.strokeStyle = "#000";
    c.lineWidth = 3;
    c.moveTo(90, 110-5);
    c.lineTo(120, 135-5);
    c.moveTo(120, 135-5);
    c.lineTo(120, 125-5);
    c.moveTo(122, 135-5);
    c.lineTo(110, 135-5);
    c.stroke();
    c.closePath();
    
    c.beginPath();
    c.strokeStyle = "#000";
    c.lineWidth = 3;
    c.moveTo(90, 110+150);
    c.lineTo(120, 135+150);
    c.moveTo(120, 135+150);
    c.lineTo(120, 125+150);
    c.moveTo(122, 135+150);
    c.lineTo(110, 135+150);
    c.stroke();
    c.closePath();
    
    c.beginPath();
    c.strokeStyle = "#000";
    c.lineWidth = 3;
    c.moveTo(50+10, 110+280);
    c.lineTo(50+10, 110+330);
    c.moveTo(50+10, 110+330);
    c.lineTo(45+10, 110+320);
    c.moveTo(50+10, 110+330);
    c.lineTo(55+10, 110+320);
    c.stroke();
    c.closePath();
    
  }},
  
  // 2
  {"n1":"1","n2":"1","n3":"0","n4":"0","n5":"0","yellow":[172,444],"blue":[[172,168,35]],"red":[],"pink":[], custom: () => {
    c.fillStyle = "#000";
    c.font = "bold 22px Calibri, Arial, sans-serif";
    c.fillText("You can stack cogs", 80,50);
  }},
  
  // 3
  {"n1":"0","n2":"3","n3":"0","n4":"0","n5":"0","yellow":[160,495],"blue":[[157,84,55]],"red":[],"pink":[],custom: () => {
    c.fillStyle = "#000";
    c.font = "bold 20px Calibri, Arial, sans-serif";
    c.fillText("You can let the cogs fall", 60,200);
    c.fillText("from a higher point", 80,225);
  }},
  
  // 4
  {"n1":"0","n2":"0","n3":"1","n4":"0","n5":"0","yellow":[50,207],"blue":[[324,205,55]],"red":[],"pink":[]},
  
  // 5
  {"n1":"0","n2":"5","n3":"0","n4":"0","n5":"0","yellow":[-4,495],"blue":[[299,-3,55]],"red":[],"pink":[]},
  
  // 6
  {"n1":"0","n2":"1","n3":"1","n4":"0","n5":"0","yellow":[-4,208],"blue":[[322,208,55]],"red":[],"pink":[]},
  
  // 7
  {"n1":"5","n2":"2","n3":"0","n4":"0","n5":"0","yellow":[-7,495],"blue":[[292,36,55]],"red":[],"pink":[]},
  
  // 8
  {"n1":"1","n2":"1","n3":"0","n4":"1","n5":"0","yellow":[-59,253],"blue":[[346,98,55]],"red":[],"pink":[]},
  
  // 9
  {"n1":"2","n2":"2","n3":"0","n4":"0","n5":"0","yellow":[-58,211],"blue":[[345,207,55]],"red":[],"pink":[]},
  
  // 10
  {"n1":"0","n2":"0","n3":"0","n4":"1","n5":"1","yellow":[159,489],"blue":[[159,4,55]],"red":[],"pink":[]},
  
  // 11
  {"n1":"0","n2":"0","n3":"2","n4":"0","n5":"0","yellow":[160,428],"blue":[[160,109,55]],"red":[],"pink":[]},
  
  // 12
  {"n1":"0","n2":"0","n3":"0","n4":"3","n5":"0","yellow":[162,507],"blue":[[157,-5,55]],"red":[],"pink":[]},
  
  // 13
  {"n1":"0","n2":"2","n3":"0","n4":"0","n5":"0","yellow":[19,412],"blue":[[119,176,55]],"red":[],"pink":[]},
  
  // 14
  {"n1":"0","n2":"0","n3":"0","n4":"0","n5":"2","yellow":[16,448],"blue":[[28,58,55]],"red":[],"pink":[]},
  
  // 15
  {"n1":"0","n2":"0","n3":"1","n4":"1","n5":"1","yellow":[343,519],"blue":[[306,35,55]],"red":[],"pink":[]},
  
  // 16
  {"n1":"6","n2":"0","n3":"0","n4":"0","n5":"0","yellow":[-55,211],"blue":[[348,209,55]],"red":[],"pink":[]},
  
  // 17
  {"n1":"1","n2":"0","n3":"0","n4":"0","n5":"2","yellow":[157,511],"blue":[[18,21,55]],"red":[],"pink":[]},
  
  // 18
  {"n1":"0","n2":"1","n3":"0","n4":"0","n5":"2","yellow":[324,528],"blue":[[13,39,55]],"red":[],"pink":[]},
  
  // 19
  {"n1":"2","n2":"0","n3":"0","n4":"0","n5":"2","yellow":[336,524],"blue":[[357,-6,55]],"red":[],"pink":[]},
  
  // 20
  {"n1":"0","n2":"0","n3":"0","n4":"1","n5":"1","yellow":[270,102],"blue":[[29,100,15]],"red":[],"pink":[]},
  
  // 21
  {"n1":"0","n2":"0","n3":"0","n4":"1","n5":"1","yellow":[160,490],"blue":[[157,-4,55]],"red":[[29,196,259,128]],"pink":[],custom: () => {
    c.fillStyle = "#000";
    c.font = "bold 20px Calibri, Arial, sans-serif";
    c.fillText("No drop zone", 100,180);
  }},
  
  // 22
  {"n1":"0","n2":"2","n3":"0","n4":"0","n5":"0","yellow":[158,389],"blue":[[352,280,55],[201,96,55]],"red":[],"pink":[],custom: () => {
    c.fillStyle = "#000";
    c.font = "bold 20px Calibri, Arial, sans-serif";
    c.fillText("All the blue gears", 20,205);
    c.fillText("must be powered", 20,230);
  }},
  
  // 23
  {"n1":"0","n2":"0","n3":"3","n4":"0","n5":"0","yellow":[159,488],"blue":[[158,283,35],[160,160,35],[159,34,35]],"red":[],"pink":[]},
  
  // 24
  {"n1":"0","n2":"1","n3":"0","n4":"0","n5":"1","yellow":[310,504],"blue":[[24,425,55]],"red":[[31,222,259,126]],"pink":[]},
  
  // 25
  {"n1":"0","n2":"3","n3":"0","n4":"0","n5":"1","yellow":[338,513],"blue":[[159,-4,55]],"red":[[148,151,126,254]],"pink":[]},
  
  // 26
  {"n1":"0","n2":"1","n3":"1","n4":"0","n5":"0","yellow":[322,304],"blue":[[9,201,55]],"red":[[244,138,-240,124]],"pink":[]},
  
  // 27
  {"n1":"0","n2":"2","n3":"0","n4":"0","n5":"0","yellow":[-2,247],"blue":[[306,247,55]],"red":[[129,12,61,259]],"pink":[]},
  
  // 28
  {"n1":"1","n2":"1","n3":"1","n4":"0","n5":"0","yellow":[158,530],"blue":[[242,306,55],[118,118,35],[55,56,15]],"red":[],"pink":[]},
  
  // 29
  {"n1":"0","n2":"0","n3":"3","n4":"0","n5":"0","yellow":[282,491],"blue":[[262,55,55]],"red":[[93,80,131,261]],"pink":[]},
  
  // 30
  {"n1":"0","n2":"0","n3":"0","n4":"0","n5":"2","yellow":[100,493],"blue":[[224,-6,55]],"red":[[123,114,160,130]],"pink":[95,190,130,132,160,256,180,305,130,132,245,371],custom: () => {
    c.fillStyle = "#000";
    c.font = "bold 20px Calibri, Arial, sans-serif";
    c.fillText("Touch the purple zone", 20,75);
    c.fillText("to make it move", 20,90);
    c.beginPath();
    c.strokeStyle = "#000";
    c.lineWidth = 3;
    c.moveTo(50, 100);
    c.lineTo(90, 175);
    c.moveTo(90, 175);
    c.lineTo(78, 168);
    c.moveTo(90, 177);
    c.lineTo(93, 163);
    c.stroke();
    c.closePath();
  }},
  
  // 31
  {},
  
  // 32
  {},

]