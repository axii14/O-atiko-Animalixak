function myFunction() {
    document.getElementById("aukerak").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.nagusixa')) {
      var dropdowns = document.getElementsByClassName("opzinuak");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function bajau2() {
    document.getElementById("aukerak2").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.nagusixa2')) {
      var dropdowns = document.getElementsByClassName("opzinuak2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function bajau3() {
    document.getElementById("aukerak3").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.nagusixa3')) {
      var dropdowns = document.getElementsByClassName("opzinuak3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }