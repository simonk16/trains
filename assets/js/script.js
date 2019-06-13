console.log("Hello, beautiful");

$(document).ready(function(){
    console.log("ready!");

    
  // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAMzEcFlp8p6SK9u1hQSp_Kmxv-k0ac9Lo",
        authDomain: "train-times-d1225.firebaseapp.com",
        databaseURL: "https://train-times-d1225.firebaseio.com",
        projectId: "train-times-d1225",
        storageBucket: "train-times-d1225.appspot.com",
        messagingSenderId: "305345252541",
        appId: "1:305345252541:web:f1792f7fcd12fc58"
    };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    $("#submit-input").on("click", function(){

        var trainName = $("#train-name").val();
        var destination =$("#destination").val();
        var firstTime = $("#first-time").val();
        var frequency = $("#frequency").val();
    })





















})