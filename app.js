
let gameseq = [];
let userseq = [];
let btn = ["div1", "div2", "div3", "div4"];

let start = false;
let level = 0;
let h3 = document.querySelector('h3');

//Step 1

document.addEventListener("click", function () {
  if (start == false) {
    console.log("game is start");
    start = true;
    levelup();
  }

});

//Step 2

function btnflash(btn) {
  btn.classList.add("f"); 
  setTimeout(function(){
    btn.classList.remove("f");
  },300 );

};


function levelup() {
  userseq=[];
  level++;
  h3.innerText = `Level ${level}`;
  let randnum = Math.floor(Math.random()*3);
  let randind= btn[randnum];
  let randbtn=document.querySelector(`.${randind}`);
gameseq.push(randind);
console.log(gameseq);
  btnflash(randbtn);
};

function checkfunc(indx){
 
  if(userseq[indx]===gameseq[indx]){
    if(userseq.length==gameseq.length){
      setTimeout(levelup, 1000);
    }
  }
  else{
    h3.innerHTML = `Game Over! Your score was ${ level } . click anywere to restart`; 
    highscore();
    let body=document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(function(){
     
      body.style.backgroundColor = "rgb(4, 4, 58)";

    },150)
    resetfunc();

  }

}

function highscore(){
  let h1=document.querySelector("#score")

  h1.innerText=`Highest Score is ${level}`;

}


//Step 3

function btnclick(){
  let btn=this;
  btnflash(btn);
  userbtn=btn.getAttribute("id");
  userseq.push(userbtn);
  console.log(userseq);
  checkfunc(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn");

for(btns of allbtns){
  btns.addEventListener("click",btnclick);
  }
  
   function resetfunc(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
   
   };
