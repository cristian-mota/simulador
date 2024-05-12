let inputTroco = document.getElementById("money");
let simular = document.getElementById('simula');
let ContainerPrincipal = document.querySelector('.container')
let labelTroco = document.querySelector(".wrapper_supertroco label");
let wrapperNumbers = document.querySelectorAll('.wrapper_numbers span');
let multiplicador1 = document.getElementById("multi-1");
let multiplicador2 = document.getElementById("multi-2");
let multiplicador3 = document.getElementById("multi-3");
let premio1 = document.getElementById("award-1");
let premio2 = document.getElementById("award-2");
let premio3 = document.getElementById("award-3");

inputTroco.type = "tel";
inputTroco.value = "";
premio1.textContent = 'R$ 0,00';
premio2.textContent = 'R$ 0,00';
premio3.textContent = 'R$ 0,00';
inputTroco.addEventListener("input", function (event) {
   var data = event.target.value.replace(/\D/g, "");
   data = data.slice(0, 4); // Limitar o valor a 4 dígitos
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
});

inputTroco.addEventListener("focus", function (event) {
   if (event.target.value !== "0,00") {
      labelTroco.classList.add("action_label");
   }
});

inputTroco.addEventListener("blur", function (event) {
   if (event.target.value == "") {
      labelTroco.classList.remove("action_label");
   }
   if (event.target.value <= "0,00") {
      labelTroco.classList.remove("action_label");
      event.target.value = "";
   }
});

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


simular.addEventListener('click', generatorNum);




function generatorNum() {
   console.log(wrapperNumbers)
   console.log(wrapperNumbers)
   wrapperNumbers.forEach(num => {
      num.style.position = 'relative';
   })
   ContainerPrincipal.insertAdjacentHTML('beforeend', '<div id="constrast"></div>')
   setTimeout(() => { document.getElementById('constrast').style.background = 'rgba(0,0,0,0.4)'; }, 50)
}
