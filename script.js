const questions = [
  { audio: "ng.mp3", correct: "ங்" },
  { audio: "nj.mp3", correct: "ஞ்" },
  { audio: "nn.mp3", correct: "ண்" },
  { audio: "nt.mp3", correct: "ந்" },
  { audio: "m.mp3", correct: "ம்" },
  { audio: "n.mp3", correct: "ன்" },
 
];

const options = ["ங்", "ஞ்", "ண்", "ந்", "ம்", "ன்"];
const container = document.getElementById('quiz-container');

questions.forEach((q, index) => {
  const qDiv = document.createElement('div');
  qDiv.className = 'question';

  const playBtn = document.createElement('button');
  playBtn.textContent = `🔊 எழுத்து ${index + 1}`;
  playBtn.onclick = () => {
    const audio = new Audio(`audio/${q.audio}`);
    audio.play();
  };
  qDiv.appendChild(playBtn);

  const optsDiv = document.createElement('div');
  optsDiv.className = 'options';

  options.forEach(opt => {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "q" + index;
    radio.value = opt;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt));
    optsDiv.appendChild(label);
  });

  qDiv.appendChild(optsDiv);
  container.appendChild(qDiv);
});

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.correct) {
      score++;
    }
  });
  document.getElementById("result").textContent = `✅ உங்கள் மதிப்பெண்: ${score} / ${questions.length}`;
}
