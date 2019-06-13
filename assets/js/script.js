console.log("Hello, beautiful");

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyAMzEcFlp8p6SK9u1hQSp_Kmxv-k0ac9Lo",
  authDomain: "train-times-d1225.firebaseapp.com",
  databaseURL: "https://train-times-d1225.firebaseio.com",
  storageBucket: "train-times-d1225.appspot.com",
};

// Initialize Firebase
firebase.initializeApp(config);

var database = firebase.database();

$("#submit-input").on("click", function (event) {
  event.preventDefault();


  var trainName = $("#train-name").val().trim();
  var destination = $("#destination").val().trim();
  var initialTime = $("#first-time").val().trim();
  var frequency = $("#frequency").val().trim();

  var newTrain = {
    name: trainName,
    dest: destination,
    time_initial: initialTime,
    freq: frequency
  };

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.dest);
  console.log(newTrain.time_initial);
  console.log(newTrain.freq);

  $("#train-name").val("");
  $("#destination").val("");
  $("#firstTime").val("");
  $("#frequency").val("");
});

database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());

  // store stuff in variables
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().dest;
  var initialTime = childSnapshot.val().time_initial;
  var frequency = childSnapshot.val().freq;

  // log info
  console.log(trainName);
  console.log(destination);
  console.log(initialTime);
  console.log(frequency);

  // initialTime pushed back a year
  var initialTimeConverted = moment(initialTime, "HH:mm").subtract(1, "years");
  console.log(initialTimeConverted);

  // current time
  var currentTime = moment();
  console.log("CURRENT TIME:" + moment(currentTime).format("hh:mm"));

  var timeDiff = moment().diff(moment(initialTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME:" + timeDiff);

  var tRemainder = timeDiff % frequency;
  console.log(tRemainder);

  // time until train
  var untilTrain = frequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + untilTrain);

  // next train
  var nextT = moment().add(untilTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextT).format("hh:mm"));

  


})