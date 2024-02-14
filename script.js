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
var yesisclicked = false;
var noisclicked1 = false;
var noisclicked2 = false;
var noisclicked3 = false;

var i = 0;
var usedtext = "";
const text1 = "Would you be my valentine??";
const yestext1 = "Reaalllyyyy??? omagaaa";
const yestext2 = "I wanna tell you something";
const yestext3 = "For me, every day with you is Valentine’s Day."; 
const yestext4 = "Your smile sets my heart on fire."
const yestext5 = "With every passing moment, my heart is drawn to the warmth of your love"
const yestext6 = "Words can’t describe my love for you, so I made you this!"
const yestext7 = "Thank you for being my Valentine."
const yestext8 = "I Love You."

const notext1 = "EHHHHHH??? Coba yaa sekali lagiii"
const notext2 = "Kamu benerang gamaauu??"
const notext3 = "Yaudahdeh, aku masih sayang sama kamu kok"



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
        if(yesisclicked === false){
            yesisclicked = true;
            yesfunc();
        }else{
            lastyes();
        }
    });
    document.getElementById("btngroup").appendChild(yesbtn);
    
    nobtn = document.createElement('button');
    nobtn.className = "no-btn";
    nobtn.innerHTML = "No";
    nobtn.addEventListener("click", () =>{
        if(noisclicked1 === false){
            noisclicked1 = true;
            nofunc1();
        }else if(noisclicked2 === false){
            noisclicked2 = true;
            nofunc2();
        }else if(noisclicked3 === false){
            btngroup.classList.add("hidden");
            noisclicked3 = true;
            nofunc3();
        }
    });
    // nobtn.addEventListener("mouseover", () => {
    //     const noBtnRect = nobtn.getBoundingClientRect();
    //     const maxX = window.innerWidth - noBtnRect.width;
    //     const maxY = window.innerHeight - noBtnRect.height;
        
    //     const randomX = Math.floor(Math.random()*maxX);
    //     const randomY = Math.floor(Math.random()*maxY);
        
    //     nobtn.style.left = randomX + "px";
    //     nobtn.style.top = randomY + "px";
    // });
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

function yesfunc(){
    btngroup.classList.remove("fadein");
        btngroup.classList.add("fadeout");
        gificon.classList.remove("fadein");
        gificon.classList.add("fadeout");
        question.classList.remove("fadein");
        question.classList.add("fadeout");
        setTimeout(() => {
            btngroup.classList.remove("fadeout");
            btngroup.classList.add("hidden");
            gificon.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";    
            gificon.classList.remove("fadeout");
            gificon.classList.add("fadein");
            question.innerHTML = yestext1;
            question.classList.remove("fadeout");
            question.classList.add("fadein");
            // btngroup.remove();
            setTimeout(() => {
                gificon.classList.remove("fadein");
                gificon.classList.add("fadeout");
                question.classList.remove("fadein");
                question.classList.add("fadeout");
                setTimeout(() => {
                    gificon.src = "src/angry-animated-bears-9z416raof8j7etdu.webp";    
                    gificon.classList.remove("fadeout");
                    gificon.classList.add("fadein");
                    question.innerHTML = yestext2;
                    question.classList.remove("fadeout");
                    question.classList.add("fadein");
                    setTimeout(() => {
                        gificon.classList.remove("fadein");
                        gificon.classList.add("fadeout");
                        question.classList.remove("fadein");
                        question.classList.add("fadeout");
                        setTimeout(() => {
                            gificon.src = "src/newt00th-newtooth.gif";    
                            gificon.classList.remove("fadeout");
                            gificon.classList.add("fadein");
                            question.innerHTML = yestext3;
                            question.classList.remove("fadeout");
                            question.classList.add("fadein");
                            setTimeout(() => {
                                gificon.classList.remove("fadein");
                                gificon.classList.add("fadeout");
                                question.classList.remove("fadein");
                                question.classList.add("fadeout");
                                setTimeout(() => {
                                    gificon.src = "src/smile-milk.gif";    
                                    gificon.classList.remove("fadeout");
                                    gificon.classList.add("fadein");
                                    question.innerHTML = yestext4;
                                    question.classList.remove("fadeout");
                                    question.classList.add("fadein");
                                    setTimeout(() => {
                                        gificon.classList.remove("fadein");
                                        gificon.classList.add("fadeout");
                                        question.classList.remove("fadein");
                                        question.classList.add("fadeout");
                                        setTimeout(() => {
                                            gificon.src = "src/milk-and-mocha-hug(old).gif"; 
                                            gificon.classList.remove("fadeout");
                                            gificon.classList.add("fadein");
                                            question.innerHTML = yestext5;
                                            question.classList.remove("fadeout");
                                            question.classList.add("fadein");
                                            setTimeout(() => {
                                                gificon.classList.remove("fadein");
                                                gificon.classList.add("fadeout");
                                                question.classList.remove("fadein");
                                                question.classList.add("fadeout");
                                                setTimeout(() => {
                                                    gificon.src = "src/Work.gif";    
                                                    gificon.classList.remove("fadeout");
                                                    gificon.classList.add("fadein");
                                                    question.innerHTML = yestext6;
                                                    question.classList.remove("fadeout");
                                                    question.classList.add("fadein");
                                                    setTimeout(() => {
                                                        gificon.classList.remove("fadein");
                                                        gificon.classList.add("fadeout");
                                                        question.classList.remove("fadein");
                                                        question.classList.add("fadeout");
                                                        setTimeout(() => {
                                                            gificon.src = "src/love-milk-mocha-kiss-grukv7pst0hcyojf.gif";    
                                                            gificon.classList.remove("fadeout");
                                                            gificon.classList.add("fadein");
                                                            question.innerHTML = yestext7;
                                                            question.classList.remove("fadeout");
                                                            question.classList.add("fadein");
                                                            setTimeout(() => {
                                                                gificon.classList.remove("fadein");
                                                                gificon.classList.add("fadeout");
                                                                question.classList.remove("fadein");
                                                                question.classList.add("fadeout");
                                                                setTimeout(() => {
                                                                    gificon.src = "src/eccomi.gif";    
                                                                    gificon.classList.remove("fadeout");
                                                                    gificon.classList.add("fadein");
                                                                    question.innerHTML = yestext8;
                                                                    question.classList.remove("fadeout");
                                                                    question.classList.add("fadein");
                                                                    setTimeout(() => {
                                                                        gificon.classList.remove("fadein");
                                                                        gificon.classList.add("fadeout");
                                                                        question.classList.remove("fadein");
                                                                        question.classList.add("fadeout");
                                                                        setTimeout(() => {
                                                                            gificon.src = "src/eccomi.gif";    
                                                                            gificon.classList.remove("fadeout");
                                                                            gificon.classList.add("fadein");
                                                                            question.innerHTML = "You like it??";
                                                                            btngroup.classList.add("fadein");
                                                                            question.classList.remove("fadeout");
                                                                            question.classList.add("fadein");
                                                                            btngroup.classList.remove("fadeout");
                                                                            btngroup.classList.remove("hidden");
                                                                        }, 3000);
                                                                    }, 5000);
                                                                }, 3000);
                                                            }, 5000);
                                                        }, 3000);
                                                    }, 5000);
                                                }, 3000);
                                            }, 5000);
                                        }, 3000);
                                    }, 5000);
                                }, 3000);
                            }, 5000);
                        }, 3000);
                    }, 5000);
                }, 3000);
            }, 5000);
        }, 3000);
}

function nofunc1(){
    gificon.src = "src/sad1.gif"
    question.innerHTML = notext1;
}

function nofunc2(){
    gificon.src = "src/sad2.gif"
    question.innerHTML = notext2;
}

function nofunc3(){
    gificon.src = "src/sad3.gif"
    question.innerHTML = notext3;
    setTimeout(() => {
        gificon.classList.remove("fadein");
        gificon.classList.add("fadeout");
        gificon.classList.add("hidden");
        question.classList.remove("fadein");
        question.classList.add("fadeout");
        question.classList.add("hidden");
    }, 5000);
}


function lastyes(){
    gificon.classList.remove("fadein");
    gificon.classList.add("fadeout");
    question.classList.remove("fadein");
    question.classList.add("fadeout");
    btngroup.classList.remove("fadein");
    btngroup.classList.add("fadeout");
    btngroup.classList.add("hidden");
    setTimeout(() => {
        gificon.src = "src/milk-and-mocha-kiss.gif";    
        gificon.classList.remove("fadeout");
        gificon.classList.add("fadein");
        question.innerHTML = "AWWWW Thank You";
        question.classList.remove("fadeout");
        question.classList.add("fadein");
    }, 3000);
}

function lastno(){
    gificon.classList.remove("fadein");
    gificon.classList.add("fadeout");
    question.classList.remove("fadein");
    question.classList.add("fadeout");
    btngroup.classList.remove("fadein");
    btngroup.classList.add("fadeout");
    btngroup.classList.add("hidden");
    setTimeout(() => {
        gificon.src = "src/kiss-milk-and-mocha.gif";    
        gificon.classList.remove("fadeout");
        gificon.classList.add("fadein");
        question.innerHTML = "Ahhh its okkay I still Love You";
        question.classList.remove("fadeout");
        question.classList.add("fadein");
    }, 3000);
}