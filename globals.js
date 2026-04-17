// Globals 
page = 0;         // 0 menu, 1 ingame/test, 2 editor, 3 level select
currentlevel = 0; // 0-150
c = 0;            // context2d
md = 0;           // mousedown
ingameframes = 0;

// yellow angle
yellowangle = 0;

// Editor
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
}
placing = 0;
pinkclick = 0;
collision = 0;
back = 0;

// tmp
level = {
  n1:9,
  n2:2,
  n3:1,
  n4:3,
  n5:4,
  yellow:[104,338],
  blue:[[244,200], /*[0,0]*/],
  red:[143, 167, -109, -133],
  pink:[],
  placed1:0,
  placed2:0,
  placed3:0,
  placed4:0,
  placed5:0,
  cogs1: [],
  cogs2: [],
  cogs3: [],
  cogs4: [],
  cogs5: [],
}
back = 2;
page = 1;


var cogs = []; // [{size: 1/2/3/4/5, fixed: 0/1, color:grey/yellow/blue, rotation: 0/1/-1, x, y, radius1: inner, radius2: outer, neighbours: [], grounded: 0 }]