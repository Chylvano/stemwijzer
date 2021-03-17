var question = 0;
let anwsers = [];

createHomepage();

function createHomepage() {
document.getElementById("btnStart").onclick = function() {startQuestions()};
document.getElementById("btnEens").style.display = "none";
document.getElementById("btnGeen").style.display = "none";
document.getElementById("btnOneens").style.display = "none";
document.getElementById("btnSkip").style.display = "none";
}

function startQuestions() {
  document.getElementById("title").innerHTML = subjects[question].title;
  document.getElementById("statement").innerHTML = subjects[question].statement;
  document.getElementById("btnEens").style.display = "block";
  document.getElementById("btnGeen").style.display = "block";
  document.getElementById("btnOneens").style.display = "block";
  document.getElementById("btnSkip").style.display = "block";
  document.getElementById("btnStart").style.display = "none";
  document.body.classList.remove('background');
}

function anwserPro(){
  anwsers[question] = "pro";
  nextWindow();
}

function anwserContra(){
  anwsers[question] = "contra";
  nextWindow();
}

function anwserNone(){
  anwsers[question] = "none";
  nextWindow();
}


function nextWindow(){
  if((question + 1)==subjects.length){
    document.getElementById("title").style.display = "none";
    document.getElementById("statement").style.display = "none";
    document.getElementById("btnEens").style.display = "none";
    document.getElementById("btnGeen").style.display = "none";
    document.getElementById("btnOneens").style.display = "none";
    document.getElementById("btnSkip").style.display = "none";
    console.log(anwsers)
  }
  else{
    question++;
    document.getElementById("title").innerHTML = subjects[question].title;
    document.getElementById("statement").innerHTML = subjects[question].statement;
  }
}