
$( document ).ready(function() {


  $(".nav-item").hover(
    function(){
      $(this).toggleClass("hover-nav-item");
    });


  $("#more").click(function(){
    $("#faith").slideToggle(500, function(){
      if ($('#faith').is(":visible")){
        $( "button#more" ).html( "Show Less" );
      }
      else {
        $( "button#more" ).html( "Show More" )
      }

  });

});

});
