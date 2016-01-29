//welcome to your javascript file.
$( document ).ready(function() {

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


  $(document).ready(function(){
      $("button").click(function(){
          $("#image").animate({
              left: '250px',
              height: '+=150px',
              width: '+=150px'
          });
      });
  });


  $( "toggler" ).click(function() {
    $( "#classes" ).toggle("slow", function(){
    console.log("Is it visible? " + $( "classes" ).is( ":visible" ))
    });
    console.log("You clicked the toggle button!");
  });
