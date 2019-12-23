
$(document).ready(function(){
  var easyThing = 0;
  var normalThing = 0;
  var hardThing = 0;
  var easyStatus = $("span#easy");
  var normalStatus = $("span#normal");
  var hardStatus = $("span#hard");
  easyStatus.text(easyThing);
  normalStatus.text(normalThing);
  hardStatus.text(hardThing);
  $("#create").on("click", function(){
    var thing = $("#thing");
    var time = $("#time");
    var hard = $("select#hard option:selected");

    if(thing.val().trim().length == 0){
      alert("Введите вашу задачу");
    }else{
      if(time.val().trim().length == 0){
        alert("Укажите время выполнения");
      }else{
        var list = $("#list");
        list.append("<li class='"+hard.val()+"'>"+thing.val()+" - <b> "+time.val()+" минут</b></li>");
        thing.val("");
        time.val("");
        switch(hard.val()){
          case "easy":
            easyThing++;
            easyStatus.text(easyThing);
            break;
          case "normal":
            normalThing++;
            normalStatus.text(normalThing);
            break;
          case "hard":
          hardThing++;
          hardStatus.text(hardThing);
          break;
        }

    }
    }
  });
});
