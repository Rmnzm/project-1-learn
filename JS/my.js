
$(document).ready(function(){
  $("#create").on("click", function(){
    var thing = $("#thing");
    var time = $("#time");
    var hard = $("#hard option:selected");
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
    }
    }
  });
});
