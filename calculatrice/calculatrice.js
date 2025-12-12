!function($) { 
  // ------------------------------------------
  // REGISTER  CODE
  // ------------------------------------------

  /* Do stuff on DOM Ready */
  var register = function() {

    $.console.info('Calculatrice Plugin', 'Init calculatrice ');
    $(document).on("click", ".button", calculatrice_onButtonClick);
    
    $.console.info('Calculatrice Plugin', 'Calculatrice registered');
  }
  
  // ------------------------------------------
  // PRIVATE CODE
  // ------------------------------------------  
  
    function calculatrice_onButtonClick(event){
      alert("calculatrice_onButtonClickjhgjhgjh");
    }

  // ------------------------------------------
  // DOM READY CODE
  // ------------------------------------------

  $(document).ready(function($) {
    register();
  });
}(window.jQuery);

