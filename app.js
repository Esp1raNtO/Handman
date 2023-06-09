document.addEventListener("DOMContentLoaded", () => {
  var canvas = document.getElementById("canvas"); // получим canvas
  var ctx = canvas.getContext("2d");
  let word = document.getElementsByClassName("word")[0];
  let answer = document.getElementsByClassName("answer");
  let task = document.getElementsByClassName("task")[0];

  // Рисовать по нажатию клавиши мыши. Здесь будет отрисаван один прямоугольник при каждом нажатии.
  function canv_1() {
    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.lineTo(200, 250);
    ctx.moveTo(105, 250);
    ctx.lineTo(105, 50);
    ctx.lineTo(250, 50);
    ctx.lineTo(250, 70);

    ctx.stroke();
  }

  function canv_2() {
    ctx.beginPath();
    ctx.moveTo(250, 70);
    ctx.arc(250, 100, 20, 3 * (Math.PI / 2), 7 * (Math.PI / 2));

    ctx.stroke();
  }
  function canv_3() {
    ctx.beginPath();
    ctx.moveTo(250, 120);
    ctx.lineTo(250, 180);

    ctx.stroke();
  }
  function canv_4() {
    ctx.beginPath();
    ctx.moveTo(250, 130);
    ctx.lineTo(230, 150);

    ctx.stroke();
  }
  function canv_5() {
    ctx.beginPath();
    ctx.moveTo(250, 130);
    ctx.lineTo(270, 150);

    ctx.stroke();
  }
  function canv_6() {
    ctx.beginPath();
    ctx.moveTo(250, 180);
    ctx.lineTo(230, 200);

    ctx.stroke();
  }
  function canv_7() {
    ctx.beginPath();
    ctx.moveTo(250, 180);
    ctx.lineTo(270, 200);
    ctx.stroke();
  }

  let funcArray = [canv_1, canv_2, canv_3, canv_4, canv_5, canv_6, canv_7];

  let tasks = [
    {
      questions: "Страна",
      answer: "Китай",
    },
    {
      questions: "Город",
      answer: "Самара",
    },
    {
      questions: "Деталь компа",
      answer: "оперативка",
    },
    {
      questions: "Актер из Марвел",
      answer: "Эванс",
    },
  ];

  let random = Math.floor(Math.random() * tasks.length);
  function giveTasks() {
    task.innerHTML = tasks[random].questions.toUpperCase();
  }

  giveTasks();

  let answerLength = tasks[random].answer.length;
  let arrTasksAnswer = [...tasks[random].answer];

  // function creteInputsAnswer() {
  let arrH2DivAnswer = [];
  for (let i = 0; i < answerLength; i++) {
    console.log(i);
    let divAnswer = document.createElement("div");
    var h2DivAnswer = document.createElement("h2");
    divAnswer.classList.add("answer");
    word.appendChild(divAnswer);
    divAnswer.appendChild(h2DivAnswer);
    h2DivAnswer.innerHTML = arrTasksAnswer[i];
    h2DivAnswer.classList.add("hidden");
    arrH2DivAnswer.push(h2DivAnswer);
  }
  console.log(arrH2DivAnswer);
  console.log(answerLength);
  // }

  // creteInputsAnswer();

  let chars = [];
  for (let i = 1; i <= 33; i++) {
    let char = document.getElementById(`char${i}`);
    // console.log(char);
    chars.push(char);
  }
  let isTrue = false;

  for (let el of chars) {
    el.addEventListener("click", () => {
      el.disabled = true;
      for (let i = 0; i < answerLength; i++) {
        if (el.textContent === arrTasksAnswer[i].toUpperCase()) {
          isTrue = true;
        } else {
          isTrue = false;
          continue;
        }
        arrH2DivAnswer[i].classList.remove("hidden");
        console.log(el.textContent);
        console.log(arrTasksAnswer[i].toUpperCase());

        console.log(true);
        // break;
      }
      isFalse = true;
      for (let i = 0; i < answerLength; i++) {
        if (el.textContent === arrTasksAnswer[i].toUpperCase()) {
          isFalse = false;
          break;
        }
        isFalse ? funcArray[0]() : 0;
      }
    });
  }
});
