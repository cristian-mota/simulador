let inputTroco = document.getElementById("money");
let simularNum = document.getElementById("simula");
let ContainerPrincipal = document.querySelector(".container");
let wrapperTroco = document.querySelector(".wrapper_supertroco");
let labelTroco = document.querySelector(".wrapper_supertroco label");
let wrapperNumbers = document.querySelectorAll(".wrapper_numbers span");
let multiplicador1 = document.getElementById("multi-1");
let multiplicador2 = document.getElementById("multi-2");
let multiplicador3 = document.getElementById("multi-3");
let premio1 = document.getElementById("award-1");
let premio2 = document.getElementById("award-2");
let premio3 = document.getElementById("award-3");

inputTroco.type = "tel";
inputTroco.value = "";
premio1.textContent = "R$ 0,00";
premio2.textContent = "R$ 0,00";
premio3.textContent = "R$ 0,00";

// Evento que formata a entrada para o tipo monetário.
inputTroco.addEventListener("input", function (event) {
  var data = event.target.value.replace(/\D/g, "");
  data = data.slice(0, 4); // Limita o valor a 4 dígitos
  data = (data / 100).toFixed(2);
  data = data.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  event.target.value = data.replace(".", ",");
  var trocoMax = parseFloat(data);
  if (trocoMax >= "9.99") {
    event.target.value = "10,00";
  }
  awardChange(multiplicador1, premio1);
  awardChange(multiplicador2, premio2);
  awardChange(multiplicador3, premio3);
  valueMinMax(event.target.value);
});
// ao focar o input, o label sobe para a parte superior
inputTroco.addEventListener("focus", function (event) {
  if (event.target.value !== "0,00") {
    labelTroco.classList.add("action_label");
  }
});

// o input ao perder o foco, o label desce novamente
inputTroco.addEventListener("blur", function (event) {
  if (event.target.value == "") {
    labelTroco.classList.remove("action_label");
  }
  if (event.target.value <= "0,00") {
    labelTroco.classList.remove("action_label");
    event.target.value = "";
  }
});

function valueMinMax(troco) {
  let validationElement = document.querySelector(".validation");
  if (!validationElement) {
    wrapperTroco.insertAdjacentHTML("beforeend", '<div class="validation"><div><span>valor mínimo: <b>R$ 0,10</b></span></div></div>');
  }
  if (troco.replace(",", ".") <= 0.0) {
    if (validationElement) {
      validationElement.classList.remove("showmsg");
      validationElement.classList.add("hidemsg");
    }
  } else if (troco.replace(",", ".") <= 0.09) {
    if (validationElement) {
      validationElement.classList.add("showmsg");
      validationElement.classList.remove("hidemsg");
    }
  } else {
    validationElement.classList.remove("showmsg");
    validationElement.classList.add("hidemsg");
  }
} // fim function valueMin()

// Função que calcula o troco com o valor dos prêmios
function awardChange(x, award) {
  let multi = parseInt(x.textContent.replace(/[x.]/g, ""));
  let troco = parseFloat(inputTroco.value.replace(",", "."));
  let result = (multi * troco).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  award.textContent = result;
}

simularNum.addEventListener("click", generatorNum);
function generatorNum() {
  // desativa o botão 'Simular Nº da Sorte'
  simularNum.disabled = true;
  // adiciona position relative em todos os 6 numeros da sorte.
  wrapperNumbers.forEach((num) => {
    num.style.position = "relative";
  });
  // cria um número da sorte de 6 digitos e armazena em um array.
  numeroAleatorio = Math.floor(100000 + Math.random() * 900000);
  let numSorte = Array.from(String(numeroAleatorio), Number);
  console.log(numSorte);

  function AnimationNumbers(content, scale) {
    wrapperNumbers.forEach((num, index) => {
      setTimeout(() => {
        if (content == "") {
          num.textContent = content;
        } else {
          for (let i = 0; i < 6; i++) {
            setTimeout(() => {
              wrapperNumbers[i].textContent = numSorte[i];
            }, i * 100);
            if (i == 5) {
              film("rgba(0,0,0,0.0)", 600, true);
            }
          }
        }
        num.style.transform = scale;
      }, index * 100);
    }); // fim forEach
  } // fim function AnimationNumbers

  AnimationNumbers("", "scale(.7)");

  setTimeout(() => {
    AnimationNumbers("item", "scale(1)");
  }, 600);

  // cria uma div que cobre todo o container, exceto os 6 números.
  ContainerPrincipal.insertAdjacentHTML("beforeend", '<div id="constrast"></div>');
  film("rgba(0,0,0,0.6)", 50);

  function film(color, temp, remove) {
    setTimeout(() => {
      document.getElementById("constrast").style.background = color;
      if (remove == true)
        setTimeout(() => {
          document.getElementById("constrast").remove();
          simularNum.disabled = false;
          execute = false;
        }, 300);
    }, temp);
  }
} // Fim função generatorNum
