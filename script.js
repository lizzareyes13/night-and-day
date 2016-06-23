$("#orb").on("click", function(){
  if ( $("#orb").hasClass("sun") ){
      $("#orb").removeClass("sun").addClass("moon");
      $("#sky").removeClass("day").addClass("night");

    }
    else {
      $("#orb").removeClass("moon").addClass("sun");
      $("#sky").removeClass("night").addClass("day");
    }


});
