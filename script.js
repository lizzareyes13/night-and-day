$("#orb").on("click", function(){
  if ( $("#orb").hasClass(".day") ){
      $("#orb").removeClass(".day").addClass(".night");

    }
    else {
      $("#orb").removeClass(".night").addClass(".day");
    }


});
