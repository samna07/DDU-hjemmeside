// Question data

// Qestions data
let Current_question_index = 0
let Score = 0
let Questions_level_1 = "";

var lastPart = window.location.pathname.split("/").pop();

if (lastPart == "Level1.html"){
    Questions_level_1 = [
  {
    Question: "Hvilket dyr er særligt kendt i Vadehavet?",
    Answers: [
      { Text: "Isbjørn", Correct: false },
      { Text: "Sæl", Correct: true},
      { Text: "Kænguru", Correct: false },
      { Text: "Panda", Correct: false }
    ]
  },
  {
    Question: "Hvad er Vadehavet kendt for?",
    Answers: [
      { Text: "Store bjergkæder", Correct: false },
      { Text: "Vadeflader", Correct: true},
      { Text: "Regnskov", Correct: false },
      { Text: "Dybe søer", Correct: false }
    ]
  },
  {
    Question: "Hvorfor er vadehavet vigtigt for fugle?",
    Answers: [
      { Text: "Meget føde", Correct: true},
      { Text: "Ingen rovdyr", Correct: false },
      { Text: "De behøver ikke flyve der", Correct: false },
      { Text: "De vil bade", Correct: false }
    ]
  },
  {
    Question: 'Hvad betyder "Vade" I Vadehavet?',
    Answers: [
      { Text: "Svømme hurtigt", Correct: false },
      { Text: "Mange dyr", Correct: false },
      { Text: "Havbunden man ser når tidevandet er lavt", Correct: true },
      { Text: "Man kan løbe meget der", Correct: false}
    ]
  },
  {
    Question: 'Hvad er en "Sort sol"',
    Answers: [
      { Text: "Solformørkelse", Correct: false},
      { Text: "Mørke skyer", Correct: false },
      { Text: "Mange fugler der flyver sammen", Correct: true },
      { Text: "Havet om natten", Correct: false }
    ]
  },
  {
    Question: 'Hvad er tidevande?',
    Answers: [
      { Text: "Vandet er helt væk", Correct: false},
      { Text: "Vandet bevæger sig", Correct: true },
      { Text: "Dyrene er ude af vandet", Correct: false },
      { Text: "Havet er beskidt", Correct: false }
    ]
  }
];
} else if (lastPart == "Level2.html"){
    Questions_level_1 = [
  {
    Question: "Hvad kan man finde i sandet?",
    Answers: [
      { Text: "Træer", Correct: false },
      { Text: "Skattekiste", Correct: false},
      { Text: "Bøger", Correct: false },
      { Text: "Sandorme", Correct: true }
    ]
  },
  {
    Question: "Hvad er et UNESCO Verdensarv?",
    Answers: [
      { Text: "Et mærkeligt sted", Correct: false },
      { Text: "Et pænt sted", Correct: false},
      { Text: "Et sted med vigtig natur", Correct: true },
      { Text: "Et sted med mange floder", Correct: false }
    ]
  },
  {
    Question: "Hvad er en sandbakke?",
    Answers: [
      { Text: "En bunke sand", Correct: true},
      { Text: "Der hvor muldvarpe bor", Correct: false },
      { Text: "En slags fisk", Correct: false },
      { Text: "Et bjerg med sand på toppen", Correct: false }
    ]
  },
  {
    Question: 'Hvor mange gange i døgnet er der typisk højvande?',
    Answers: [
      { Text: "4", Correct: false },
      { Text: "8", Correct: false },
      { Text: "2", Correct: true },
      { Text: "1", Correct: false}
    ]
  },
  {
    Question: 'Hvorfor er mudder vigtigt i vadehavet?"',
    Answers: [
      { Text: "Det indeholder mad til dyrene", Correct: true},
      { Text: "Det holder varmen", Correct: false },
      { Text: "Man kan lege med det", Correct: false },
      { Text: "Dyrene går bedre i det", Correct: false }
    ]
  },
  {
    Question: 'Hvad er en tidevandszone?',
    Answers: [
      { Text: "Et område med meget vand", Correct: false},
      { Text: "Et område der skifter mellem vand og tørt", Correct: true },
      { Text: "Et område der er meget tørt", Correct: false },
      { Text: "Et område uden dyr ", Correct: false }
    ]
  }
];
} else if (lastPart == "Level3.html"){
    Questions_level_1 = [
  {
    Question: "Hvad kaldes de dyr, der lever nedgravet i sand og mudder?",
    Answers: [
      { Text: "Rovdyr", Correct: false },
      { Text: "Flyvedyr", Correct: false },
      { Text: "Bunddyr", Correct: true },
      { Text: "Pattedyr", Correct: false }
    ]
  },
  { 
    Question: "Hvad er en fødekæde?",
    Answers: [
      { Text: "Hvem spiser hvem i naturen", Correct: true },
      { Text: "En kæde af sten", Correct: false },
      { Text: "En type fisk", Correct: false },
      { Text: "En slags bølge", Correct: false }
    ]
  },
  {
    Question: "Hvad er en vigtig regel, når man går tur i Vadehavet?",
    Answers: [
      { Text: "Gå så langt ud som muligt alene", Correct: false },
      { Text: "Undgå at kigge på naturen", Correct: false },
      { Text: "Løb hele tiden", Correct: false },
      { Text: "Hold øje med tidevandet", Correct: true }
    ]
  },
  {
    Question: "Hvad sker der med sand og mudder i Vadehavet på grund af tidevandet?",
    Answers: [
      { Text: "Det forsvinder helt", Correct: false },
      { Text: "Det flyttes rundt og danner nye landskaber", Correct: true },
      { Text: "Det bliver til sten", Correct: false },
      { Text: "Det bliver til is", Correct: false }
    ]
  },
  {
    Question: "Hvad betyder det, at Vadehavet er et økosystem?",
    Answers: [
      { Text: "Det er kun vand", Correct: false },
      { Text: "Der bor kun fisk", Correct: false },
      { Text: "Dyr og planter lever sammen og påvirker hinanden", Correct: true },
      { Text: "Det er et sted uden liv", Correct: false }
    ]
  },
  {
    Question: "Hvad er hovedårsagen til tidevand?",
    Answers: [
      { Text: "Vind", Correct: false },
      { Text: "Månens tiltrækningskraft", Correct: true },
      { Text: "Regn", Correct: false },
      { Text: "Temperatur", Correct: false }
    ]
  }
];
}






// Login

function Login() {
  const navn = document.getElementById("navn").value;
  const klasse = document.getElementById("klasse").value;

  // Saving
  localStorage.setItem("navn", navn);
  localStorage.setItem("klasse", klasse);

  window.location.href = "Valg_figur.html";
}

function Load_user() {
  const navn = localStorage.getItem("navn");
  const klasse = localStorage.getItem("klasse");

  const welcome = document.getElementById("Welcome");

  if (welcome && navn && klasse) {
    welcome.innerText = `Velkommen ${navn} fra ${klasse}`;
  }
}

// Choose figur

function Save_figur(Figure_id) {
  localStorage.setItem("Figure", Figure_id);
}

// Pictures

function Lear_img() {
  const Figure_id = localStorage.getItem("Figure");

  if (Figure_id == "Worm"){
    return "img/worm.png"
  }

  if (Figure_id == "Crab"){
    return "img/Lear-crab.png"
  }

  if (Figure_id == "Fish"){
    return "img/Lear-fish.png"
  }

}

function Sad_img() {
  const Figure_id = localStorage.getItem("Figure");

  if (Figure_id == "Worm"){
    return "img/Sad_worm.png"
  }

  if (Figure_id == "Crab"){
    return "img/sad-crab.png"
  }

  if (Figure_id == "Fish"){
    return "img/sad-fish.png"
  }

}

// Menu

function Toggle_menu() {
  document.getElementById("Side_menu").classList.toggle("active");
  document.getElementById("Overlay").classList.toggle("active");
}

function Close_menu() {
  document.getElementById("Side_menu").classList.remove("active");
  document.getElementById("Overlay").classList.remove("active");
}

// Dyr code

function Open_popup(Id) {
  document.getElementById(Id).classList.add("active");
}

function Close_popup(Id) {
  document.getElementById(Id).classList.remove("active");
}

//Quiz code

// Btn is button, tortoriel used abriviation

// let xp = 0;

function load_xp() {
  const Saved_XP = localStorage.getItem("xp");
  xp = Saved_XP ? parseInt(Saved_XP) : 0;
  return xp
}

function Update_XP(amount) {
  xp += amount;
  localStorage.setItem("xp", xp);
  if (xp > 100) {
    Update_XP(-100)
    Update_Niveau(1)
    Render_Niveau()
  }
  Render_XP()
  }

function Render_XP() {
  const Xp_display = document.querySelector(".Xp_pos");
  if (Xp_display) {
    Xp_display.innerHTML = xp + " XP";
  }
}

// Niveau

function load_Niveau() {
  const Saved_Niveau = localStorage.getItem("Niveau");
  Niveau = Saved_Niveau ? parseInt(Saved_Niveau) : 0;
  return Niveau
}

function Update_Niveau(amount) {
  Niveau += amount;
  localStorage.setItem("Niveau", Niveau);
  Render_Niveau()
  }

function Render_Niveau() {
  const Xp_display = document.querySelector(".Niveau");
  if (Xp_display) {
    Xp_display.innerHTML = `<div class="Number"> ${Niveau} </div> <span>Niveau (${Niveau})</span>`;
  }
}

// DOMContentLoaded Makes the function run after everthing is loaded.
// Updates the xp

let cards = null;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

document.addEventListener("DOMContentLoaded", () => {

document.querySelectorAll(".Answer").forEach(Button => {
  Button.addEventListener("click", () => {
    const Is_correct = Button.dataset.Correct == "true";

    if (Is_correct) {
      Button.classList.add("Correct");
      document.getElementById("Feedback").innerText = "Rigtigt!";
      Score++;
      document.getElementById("NextBtn").classList.remove("Hidden");
      document.querySelectorAll(".Answer").forEach(x => x.disabled = true);
    } else {
      Button.classList.add("Wrong");
      document.getElementById("Feedback").innerText = "Forkert!";
    }

  });
});


  xp = load_xp();
  Update_XP(0);
  Render_XP();

  Niveau = load_Niveau();
  Update_Niveau(0);
  Render_Niveau();

  Load_user();

  
  const cards = document.querySelectorAll(".Vendespil_card");

  firstCard = null;
  secondCard = null;
  lockBoard = false;

  cards.forEach(card => {
  card.addEventListener("click", flipCard);
});
  // const figure = localStorage.getItem("Figure");
  
    const Lear_imgage = document.getElementById("Laer_picture");
  if (Lear_imgage) {
    Lear_imgage.src = Lear_img();
  }

  const Sad_imgage = document.getElementById("Sad_picture");
  if (Sad_imgage) {
    Sad_imgage.src = Sad_img();
  }

  Show_question()

});



// Lear code
let Video_number = 1
function Next_video() {
  Video_number = Video_number + 1
  if (Video_number > 3) {
    Video_number = 1
  }

  Update_video(Video_number)
}

function Update_video(Id) {
  if (Id == 1){
    var vid = document.getElementById("Video_div");
    vid.src = "../youtube/Tidevand.mp4";
  }
  if (Id == 2){
    var vid = document.getElementById("Video_div");
    vid.src = "../youtube/Vadehav.mp4";
  }
  if (Id == 3) {
    var vid = document.getElementById("Video_div");
    vid.src = "../youtube/Plastik.mp4";
  }

}

Update_video(Video_number)

// First qeustion framework
// const Answers = document.querySelectorAll(".Answer");
// const Feedback = document.getElementById("Feedback");
// const NextBtn = document.getElementById("NextBtn");

// Answers.forEach(Btn => {
//   Btn.addEventListener("click", () => {

//     if (Btn.dataset.correct == "true) {
//         Btn.classList.add("Correct");
//         Feedback.innerText = "Korrekt!";
//         Answers.forEach(x => x.disabled = true;
//         Update_XP(10);
//         NextBtn.classList.remove("Hidden");
//     } else {
//         Btn.classList.add("Wrong");
//         Feedback.innerText = "Prøv igen";
//     }
//   });
// });

// NextBtn.addEventListener("click", () => {
//     alert("Næste spørgsmål!");
// });

//Exit pop up

function Exit_popup() {
  document.getElementById("Exit_popup").classList.add("Active");
}

function Close_exit_popup() {
  document.getElementById("Exit_popup").classList.remove("Active");
}


//Functions

function Show_question() {
  const Question_data = Questions_level_1[Current_question_index];

  document.querySelector("h2").innerText = Question_data.Question;

  const Buttons = document.querySelectorAll(".Answer");

  Buttons.forEach((Button, Index) => {
    Button.innerText = Question_data.Answers[Index].Text;
    Button.dataset.Correct = Question_data.Answers[Index].Correct;
    Button.classList.remove("Correct", "Wrong");
    Button.disabled = false;
  });

  document.getElementById("Feedback").innerText = "";

  Update_progress_bar()
}



function Next_question() {
  Current_question_index++;

  if (Current_question_index < Questions_level_1.length) {
    Show_question();
    document.getElementById("NextBtn").classList.add("Hidden");
  } else {
    Show_result();
  }
}

function Show_result() {
  Update_progress_bar()
  const Box = document.querySelector(".Questions_box");
  Update_XP(Score*10)
  Box.innerHTML = `
    <h2>Du er færdig! </h2>
    <p class="Finish_correct">Du fik ${Score} ud af ${Questions_level_1.length} rigtige</p>
    
    <div class="Center Results_buttons_box">
      <button onclick="location.href='Quiz.html'">Til quiz</button>
      <button onclick="location.href='Home_menu.html'">Til menu</button>
    </div>
  `;
}




window.addEventListener("pageshow", () => {
  load_xp();
  Render_XP();
});

//Progress bar

function Update_progress_bar() {
  const Progress_fill = document.getElementById("Progress_fill");
  const Total_questions = Questions_level_1.length;

  const Percentage = ((Current_question_index) / Total_questions) * 100;
  Progress_fill.style.width = Percentage + "%";
} 

//Vendespil



function flipCard() {
  if (lockBoard) return;
  if (this == firstCard) return;

  const img = this.querySelector("img");

  // Vis billedet
  img.src = this.dataset.image;

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkMatch();
}

function checkMatch() {
  var Name_first = firstCard.dataset.image
  Name_last_part_1 = Name_first.split("/").pop();
  
  var Name_first = secondCard.dataset.image
  Name_last_part_2 = Name_first.split("/").pop();

  const isMatch =
    Name_last_part_1 == Name_last_part_2;

  if (isMatch) {
    resetBoard();
  } else {
    setTimeout(() => {
      firstCard.querySelector("img").src = "img/Vendespi_kort.png";
      secondCard.querySelector("img").src = "img/Vendespi_kort.png";
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}