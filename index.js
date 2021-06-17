(function($) { 
    $(function() { 

      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.aukerak').toggle();

        $('.aukerak').not($(this).siblings()).hide();
        e.stopPropagation();
      });

      $('html').click(function() {
        $('.aukerak').hide();
      });

      $('#togglea').click(function() {
        $('nav ul').slideToggle();
      });

      $('#togglea').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery); 