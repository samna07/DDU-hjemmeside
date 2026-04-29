// Dyr code

function openPopup() {
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
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
  Render_XP()
  }

function Render_XP() {
  const Xp_display = document.querySelector(".Xp_pos");
  if (Xp_display) {
    Xp_display.innerText = xp + " XP";
  }
}

// DOMContentLoaded Makes the function run after everthing is loaded.
// Updates the xp
document.addEventListener("DOMContentLoaded", () => {
  xp = load_xp();
  Render_XP()
});




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

// Qestions data
let Current_question_index = 0
let Score = 0

const Questions_level_1 = [
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

Show_question()


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
