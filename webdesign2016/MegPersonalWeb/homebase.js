$(  document ).ready(function() {

  $(".nav-item").hover(
    function(){
      $(this).toggleClass("hover-nav-item");
    });

  $("#more").click(function(){
    $("#more-information").slideToggle(500, function(){
      if ($('#more-information').is(":visible")){
        $( "button#more" ).html( "Click to close..." );
      }
      else {
        $( "button#more" ).html( "Click to open..." )
      }
    });
  });



});
