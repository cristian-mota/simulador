let inputTroco = document.getElementById('money')
let labelTroco = document.querySelector('.wrapper_supertroco label')

inputTroco.type = 'tel';
inputTroco.value = '';
inputTroco.addEventListener('input', function (event) {
   var data = event.target.value.replace(/\D/g, '');
   data = data.slice(0, 4); // Limitar o valor a 12 dígitos
   data = (data / 100).toFixed(2);
   data = data.replace(".", ",");
   data = data.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
   event.target.value = data;
   var trocoMax = parseFloat(data.replace(',', '.'))
   if (trocoMax >= '10.00') { event.target.value = '10,00' }
});


inputTroco.addEventListener('focus', function (event) {
   if (event.target.value !== '0,00') { labelTroco.classList.add('action_label') }
})

inputTroco.addEventListener('blur', function (event) {
   if (event.target.value == '') { labelTroco.classList.remove('action_label') }
   if (event.target.value == '0,00') { labelTroco.classList.remove('action_label'); event.target.value = '' }

});