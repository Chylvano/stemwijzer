var question = 0;
let answers = [];
var partieData = [];
var questionData = [];
var partiesList = [];


// let secularparties = [];

// for(i = 0; i < parties.length; i++){
//   if(parties.secular == true){
//     array_push($secularparties ,parties[i].name);
//   }
// }



createHomepage();

function createHomepage() {
    document.getElementById("btnStart").onclick = function() {
        startQuestions()
    };
    document.getElementById("btnEens").style.display = "none";
    document.getElementById("btnGeen").style.display = "none";
    document.getElementById("btnOneens").style.display = "none";
    document.getElementById("btnSkip").style.display = "none";
    document.getElementById("btnVorige").style.display = "none";
    document.getElementById("btnVerder").style.display = "none";
    document.getElementById("partiesSelect").style.display = "none";
    document.getElementById("questionSelect").style.display = "none";
    document.getElementById("resultScreen").style.display = "none";
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
    // for(i = 0; i < parties.length; i++){
    //   parties[i].score = 0;
    // }

}

function anwserPro() {
    answers[question] = "pro";
    nextWindow();
}

function anwserContra() {
    answers[question] = "contra";
    nextWindow();
}

function anwserNone() {
    answers[question] = "none";
    nextWindow();
}

function goBack() {
    question--;
    document.getElementById("title").innerHTML = subjects[question].title;
    document.getElementById("statement").innerHTML = subjects[question].statement;
}

function nextWindow() {
    if ((question + 1) == subjects.length) {
        document.getElementById("title").style.display = "none";
        document.getElementById("statement").style.display = "none";
        document.getElementById("btnVorige").style.display = "none";
        document.getElementById("btnEens").style.display = "none";
        document.getElementById("btnGeen").style.display = "none";
        document.getElementById("btnOneens").style.display = "none";
        document.getElementById("btnSkip").style.display = "none";
        // belangrijkeVragen();
        importantQuestions();
        console.log(answers);
        // console.log(secularparties);
    } else {
        question++;
        document.getElementById("title").innerHTML = subjects[question].title;
        document.getElementById("statement").innerHTML = subjects[question].statement;
        if (question < 0) {
          startQuestions()
        } else {
          document.getElementById("btnVorige").style.display = "block";

        }
    }
}

// function addElement () {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode(parties.name);

//    // add the text node to the newly created div
//    newDiv.appendChild(newContent);

//    // add the newly created element and its content into the DOM
//    const currentDiv = document.getElementById("input1");
//    document.body.insertBefore(newDiv, currentDiv);
// }

function importantParties() {
    document.getElementById("btnEnd").style.display = "inline";
    document.getElementById("partiesSelect").style.display = "inline";
    document.getElementById("questionSelect").style.display = "none";

    var partiesForm = document.getElementById("partieList");
    if (partiesForm.innerHTML == "") {
        for (var i = 0; i < parties.length; i++) {
            partiesForm.innerHTML += '<label><input type="checkbox" name="' + parties[i].name + '"> ' + parties[i].name + '</label><br>';
        }
    }
}

function importantQuestions() {
    document.getElementById("questionSelect").style.display = "inline"
    document.getElementById("partiesSelect").style.display = "none";

    var questionsList = document.getElementById("questionList");
    if (questionsList.innerHTML == "") {
        for (var i = 0; i < subjects.length; i++) {
            questionsList.innerHTML += '<label><input type="checkbox" name="' + subjects[i].title + '"> ' + subjects[i].title + '</label><br>';
        }
    }
}


// function belangrijkeVragen(){
//   document.getElementById("btnVerder").style.display = "block";
//   for (var i = 0; i < parties.length; i++) { 
//     partiesForm.innerHTML += '<label><input type="checkbox" name="' + parties[i].name + '"> ' + parties[i].name + '</label><br>';
//     displayPartyResults();
//   }
// }


// function berekenEindResultaat() {
//   document.getElementById("btnVerder").style.display = "none";
//   //add property score to party elements in de parties array
//   for(b = 0; b < subjects[b].parties[b].length; b++) {
//     for(a = 0; a < subjects[a].parties.length; a++){
//       if(answers[b] == subjects[b].parties[a].position){
//         document.getElementById("eindResultaat").innerHTML = subjects[b].parties[a].name + "score:" + parties[a].score;
//       //increment score for party
//       parties[a].score++
//       console.log(subjects[b].parties[a].name + "score:" + parties[a].score);
//         for(i = 0; i < subjects[b].parties[a].length; i++){
//         document.createElement(subjects[b].parties[a]); 
//           document.body.appendChild(partijen);
//         }
//       }
//     }
//   }
// }

// function formCheck(form, data){
//     for (var i = 0; i < form.length; i++) {
//         if (form[i].type != "submit") { //dont include submit button
//             data[form[i].name] = form[i].checked;
//         } 
// }

function calculatePartiePoints() {

    //Get checked boxes from questions form
    var questionForm = document.getElementById("questionForm").elements;
    for (var i = 0; i < questionForm.length; i++) {
        if (questionForm[i].type != "submit") { //dont include submit button
            questionData[questionForm[i].name] = questionForm[i].checked;
        }
    }


    //Get checked boxes from parties form
    var partieForm = document.getElementById("partieForm").elements;
    for (var i = 0; i < partieForm.length; i++) {
        if (partieForm[i].type != "submit") { //dont include sumbit button
            partieData[partieForm[i].name] = partieForm[i].checked;
        }
    }


    //Generate array with all parties
    for (var i = 0; i < parties.length; i++) {
        partiesList[parties[i].name] = 0;
    }



    for (var a = 0; a < subjects.length; a++) { //Loop through questions

        for (var b = 0; b < subjects[a].parties.length; b++) { //Loop through and compare partie positions

            if ((answers[a] == "pro" && subjects[a].parties[b].position == "pro") || (answers[a] == "contra" && subjects[a].parties[b].position == "contra") || (answers[a] == "none" && subjects[a].parties[b].position == "none")) {

                if (questionData[subjects[a].title] == true) {
                    partiesList[subjects[a].parties[b].name] += 2;
                } else {
                    partiesList[subjects[a].parties[b].name] += 1;
                }

            }
        }

    }
}


function EndResultScreen() {
    calculatePartiePoints();

    var partieDisplayList = document.getElementById("partieDisplayList");
    document.getElementById("btnEnd").style.display = "none";
    document.getElementById("partiesSelect").style.display = "none";
    document.getElementById("resultScreen").style.display = "block";


    partieDisplayList.innerHTML = "";


    //Convert object to array and sort
    var arrayPartiesList = [];

    for (var partie in partiesList) {
        arrayPartiesList.push([partie, partiesList[partie]]);
    }

    for (partie in arrayPartiesList) {
        partieDisplayList.innerHTML += "<p>" + arrayPartiesList[partie][0] + "(" + partiesList[arrayPartiesList[partie][0]] + " punten)</p>";
    }
}