// Globals 
page = 2;         // 0 menu, 1 ingame/test, 2 editor, 3 level select
back = 2;         // exit page
currentlevel = 1; // 1-150
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
  pinkcog: [],
  orange: [],
  grey: [],
}
placing = 0;
pinkclick = 0;
redclick = 0;
pinkposition = 0;
collision = 0;
back = 0;
levelhistory = [];
cogshistory = [];
historylength = 0;


//back = 2;
//page = 1;


var cogs = []; // [{size: 1/2/3/4/5, fixed: 0/1, color:grey/yellow/blue, rotation: 0/1/-1, x, y, radius1: inner, radius2: outer, neighbours: [], grounded: 0 }]

blocked = 0;
won = 0;
messageframes = 0;
blockedframes = 0;
currentlevel = localStorage["cogs_currentlevel"] || 1;

// tmp
for(i = 1; i < 150; i++){
  tmp.innerHTML += "<button onclick='bg("+i+")'>"+i+"</button>";
}

bg = (i) => {
  
  if(levels[i] && levels[i].yellow){
    currentlevel = i;
    page = 1;
    back = 0;
    parselevel();
    editor.classList.add('hidden');
    a.style.background = '';
  }
  else {
    //currentlevel = i;
    //parselevel();
    page = 2;
    a.style.background = 'url("levels/'+i+'.png?1")';
    bottom.style.background = 'url("levels/'+i+'.png?1")';
    a.style.backgroundSize = '320px auto';
    bottom.style.backgroundSize = '320px auto';
    bottom.style.backgroundPosition = 'bottom center';
  }
}