const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const heart = document.querySelector(".heart");
const Nocounter = 0;
var yesbtn = null;
var nobtn = null;
var btngroup = null;
var gificon = null;


var heartisclicked = false;

var i = 0;
var usedtext = "";
const text1 = "Would you be my valentine??";




function heartclicked(){
    if(heartisclicked === false){
        heart.classList.add("zoomin");
        question.innerHTML = "";
        setTimeout(deleteheart, 3000);
        heartisclicked = true;
    }
}

function deleteheart(){
    document.body.style.background = "#ffeff3";
    heart.remove();
    addgif();
    // typeAnimate(text1);
}


function addgif() {
    gificon = document.createElement('img');
    gificon.className = "gif fadein";
    gificon.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";
    
    document.getElementById("wrapper").appendChild(gificon);
    question.innerHTML = text1;
    question.classList.add("fadein");
    setTimeout(showbutton(), 3000);
    // usedtext = text1;
}

function showbutton(){
    btngroup = document.createElement('div');
    btngroup.className = "btn-group hidden";
    btngroup.id = "btngroup";
    document.getElementById("wrapper").appendChild(btngroup);
    
    yesbtn = document.createElement('button');
    yesbtn.className = "yes-btn";
    yesbtn.innerHTML = "Yes";
    yesbtn.addEventListener("click", () =>{
        question.innerHTML = "Aaaaa, I like you too";
        btngroup.classList.remove("fadein");
        btngroup.classList.add("fadeout");
        gificon.classList.remove("fadein");
        gificon.classList.add("fadeout");
        setTimeout(() => {
            btngroup.classList.remove("fadeout");
            btngroup.classList.add("hidden");
        }, 3000);
        yesbtn.addEventListener("click", () => {
            question.innerHTML = "Hehehe";
        });
    });
    document.getElementById("btngroup").appendChild(yesbtn);
    
    nobtn = document.createElement('button');
    nobtn.className = "no-btn";
    nobtn.innerHTML = "No";
    nobtn.addEventListener("mouseover", () => {
        const noBtnRect = nobtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;
        
        const randomX = Math.floor(Math.random()*maxX);
        const randomY = Math.floor(Math.random()*maxY);
        
        nobtn.style.left = randomX + "px";
        nobtn.style.top = randomY + "px";
    });
    document.getElementById("btngroup").appendChild(nobtn);
    
    btngroup.classList.remove("hidden");
    btngroup.classList.add("fadein");
    
}

function typeAnimate(){
    if(i < text1.length ){
        document.getElementById("question").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeAnimate(usedtext), 50);
    }
}