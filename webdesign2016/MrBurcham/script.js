//welcome to your javascript file.
$( document ).ready(function() {

  //setup html includes for header and footer so we can manage them in one place.
  $('#header').load('header.html');
  $('#footer').load('footer.html');

  //setup hover
  $(".nav-item").hover(
    function(){
      $(this).toggleClass("hover-nav-item");
    });

  //setup slide toggle
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
