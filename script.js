let inputTroco = document.getElementById("money");
let simularNum = document.getElementById("simula");
let digitarNum = document.getElementById("digitar")
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

let numSorteOne = document.querySelectorAll('.award_one div:nth-child(1) div span')
let numSorteTwo = document.querySelectorAll('.award_two div:nth-child(1) div span')
let numSorteTree = document.querySelectorAll('.award_tree div:nth-child(1) div span')


inputTroco.type = "tel";
inputTroco.value = "";
function reset() {
   premio1.textContent = "R$ 0,00";
   premio2.textContent = "R$ 0,00";
   premio3.textContent = "R$ 0,00";
}
reset();

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
   if (event.target.value >= "0,10") {
      awardChange(multiplicador1, premio1);
      awardChange(multiplicador2, premio2);
      awardChange(multiplicador3, premio3);
   } else {
      reset();
   }
   valueMinMax(event.target.value);
});

wrapperTroco.insertAdjacentHTML("beforeend", '<div class="validation hidemsg"><div><span>valor mínimo: <b>R$ 0,10</b></span></div></div>');

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

   console.log(inputTroco.value)
   if (inputTroco.value.replace(",", ".") <= 0.00) {
      setTimeout(() => {
         if (inputTroco.value.replace(",", ".") <= 0.00) {
            validationElement.classList.remove("showmsg");
            validationElement.classList.add("hidemsg");
         }
      }, 600);
   } else if (inputTroco.value.replace(",", ".") <= 0.09) {
      setTimeout(() => {
         if (inputTroco.value.replace(",", ".") <= 0.09 && inputTroco.value.replace(",", ".") > 0.00) {
            validationElement.classList.add("showmsg");
            validationElement.classList.remove("hidemsg");
         }
      }, 600);
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
               }
            }
            num.style.transform = scale;
         }, index * 100);
      }); // fim forEach
      setTimeout(() => {
         film("rgba(0,0,0,0.0)", 700, true)
         changeNumbers()
      }, 500)
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
         let ElementFilm = document.getElementById("constrast")
         if (ElementFilm) { ElementFilm.style.background = color };
         if (remove == true) {
            setTimeout(() => {
               if (ElementFilm) { ElementFilm.remove() }
               simularNum.disabled = false;
               execute = false;
            }, 300);
         }
      }, temp);
   }


   // Função que preenche o numero da sorte dos prêmios
   function changeNumbers() {
      setTimeout(() => {
         //altera os numeros da sorte do 1º Prêmio
         numSorteOne.forEach((num, index) => {
            num.textContent = numSorte[index]
         })
         //altera os numeros da sorte do 2º Prêmio
         numSorteTwo.forEach((num, index) => {
            if (index > 0) { num.textContent = numSorte[index] }
         })
         //altera os numeros da sorte do 3º Prêmio
         numSorteTree.forEach((num, index) => {
            if (index > 1) { num.textContent = numSorte[index] }
         })
      }, 1000)
   } // fim changeNumbers()
} // Fim função generatorNum








digitarNum.addEventListener('click', digitarNumero)
function digitarNumero() {
   ContainerPrincipal.insertAdjacentHTML("beforeend", '<div class="enterNum"><div class="wrapperInput"><input type="text"><label>Digitar número da Sorte</label></div><button>Confirnar</button></div>');



}
