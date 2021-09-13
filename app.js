$(".wakeUpTime").val("8");
$(".lunchTime").val("12");
$(".napTime").val("15");
let partyTime = false;


setInterval(() => {
let date = new Date();
let time = date.toLocaleTimeString();
$("#time").text(time+"!");
}, 1000);


checkTime();
setInterval(() => {
  checkTime();
},1000);

$("button").click(()=>{
partyTime = !partyTime;
if(!partyTime)
  $("button").attr("class","partyTimeButton").text("Party Time!");
})

function getHour(){
let d = new Date();
let hour = d.getHours();
return hour;
}


function checkTime(){
  let hour = getHour();
  let morning = hour<12;
  let afternoon = hour>=12 && hour<16;
  let wakeUpTime = $(".wakeUpTime").val();
  let lunchTime = $(".lunchTime").val();
  let napTime = $(".napTime").val();
  if(partyTime){
    $("img").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg")
  $(".imgText").text("Let's Party");
  $("button").attr("class","partyOverButton").text("Party Over!");
  }
  else if(wakeUpTime == hour){
    $("img").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg")
  $(".imgText").text("Wake Up !");
  }
  else if (lunchTime == hour) {
    $("img").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg")
  $(".imgText").text("Let's have some Lunch");
  }
  else if (napTime == hour) {
    $("img").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg")
  $(".imgText").text("Sleep Tight");
  }
  else if(morning){
    $("img").attr("src","https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg");
  $(".imgText").text("Good Morning!");
  }
  else if(afternoon){
    $("img").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg")
  $(".imgText").text("Good Afternoon!");
  }
  else{
    $("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg")
    $(".imgText").text("Good Evening!");
  }
}
