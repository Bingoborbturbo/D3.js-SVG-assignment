function makeLabel(i) {
  labels.push("Unit" + (i+1));
}


function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}


let labels = [];

repeat(3, makeLabel);

/*
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
*/

console.log(labels);

/////////////////////

function checkIfEven(n) {
  if (n % 2 != 0) { 
    console.log(n, "is not even"); 
  } 
}

repeat(10, (n) => {
  checkIfEven(n);
});


function unless(test, then) {
  if (!test) then();
}

repeat(20, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

[1,2,3,4,5].forEach((n) => {
  checkIfEven(n);
});

/////////////////////

let arr = [1,2,3,4,5];
let evenArray = arr.filter( (n) => {  return n % 2 == 0;  }   ); 
console.log(evenArray);


let creatures = [ 
  {creature:"orc", alignment:"evil", weapon:"axe", damage:25},
  {creature:"elf", alignment:"good", weapon:"bow", damage:50},
  {creature:"Sauron", alignment:"evil", weapon:"mind powers", damage:1000},
  {creature:"hobbit", alignment:"neutral", weapon:"none", damage:0},
  {creature:"Gollum", alignment:"evil", weapon:"none", damage:1}
]

let evilCreatures = creatures.filter( (n) => {  return n.alignment == "evil";  }   ); 
console.log(evilCreatures);

let harmlessCreatures = creatures.filter( (n) => {  return n.weapon == "none";  }   ); 
console.log(harmlessCreatures);

let creatureNames = creatures.map( (n) => n.creature ); 
console.log(creatureNames);

let damages = creatures.map( (n) => parseInt(n.damage) );  
console.log(damages);



function myReducer(acc, item) {
  return acc + item * damageMultiplier;
}

let damageMultiplier = 2;
//let totalPower = damages.reduce( (acc, item) => ( acc + (item * damageMultiplier) ), 0 );
let totalPower = damages.reduce( myReducer, 0 );

console.log(totalPower);




