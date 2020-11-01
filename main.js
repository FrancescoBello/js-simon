$(document).ready(function() {

  var numeri = [];
  var numeri_indovinati = [];
  var numeri_utente = [];



  for (var i = 0; i < 5; i++) {


    var numeri_casuali = Math.floor(Math.random() * 100) + 1;
      numeri.push(numeri_casuali)
      console.log(numeri);
  }
 $('.numero').text("numeri generati : " + numeri);


  setTimeout(function()  {
    $ (".numero").hide();
}, 3000);

  setTimeout(function() {
    for (var i = 0; i < 5; i++) {
       var numero_utente = parseInt(prompt('Inserisci un numero di quelli visualizzati prima'));
          numeri_utente.push(numero_utente);
          console.log(numeri_utente);
    }
  },3500);


    for (var i = 0; i < numeri.length; i++) {
              var numero = numeri[i];
              if(numeri_utente.includes(numero)) {
                  numeri_indovinati.push(numero);
                  console.log(numeri_indovinati);
              }

        }
        $('.numero').text("numeri generati : " + numeri);
        $('.numeri_scelti').text("numeri scelti : " + numeri_utente);
        $ (".numero").removeClass('hide');


        $('.risultato').text("hai indovinato : " + numeri_indovinati);

});
