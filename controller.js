// basic functionalities
var client;

var btnPublish = $("#publish-btn")

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")

client.on("connect",function(){
  console.log("succesfully Connected");
  $('#btn-connect').on('click', function () {
    $("#status").text("The Device is currently Turned ON!")
    $("#status").css("color", "green")
    $("#status").css("font-style", "italic")
    $("#status").css("font-weight", "bold")
    // $("#status").removeClass("alert-warning")
    // $("#status").addClass("alert-success")
    var topic = "annabelle/device/status";
    var message = "turnedOn "+moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log("ON")
    console.log("Published Topic: "+topic+ " Message: " + message)
    client.publish(topic, message);
  });// end connect
  $(".btn-disconnect").click(function () {
    
    $("#status").text("The device is currently Turned OFF!")
    $("#status").css("color", "red")
    console.log("OFF")
  })


})

