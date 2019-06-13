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

        $("#submit-input").on("click", function(event){
            event.preventDefault();
                    

            var trainName = $("#train-name").val().trim();
            var destination = $("#destination").val().trim();
            var firstTime = $("#first-time").val().trim();
            var frequency = $("#frequency").val().trim();

            var newTrain = {
                name: trainName,
                dest: destination,
                timeOne: firstTime,
                freq: frequency
            };

            database.ref().push(newTrain);

            console.log(newTrain.name);
            console.log(newTrain.dest);
            console.log(newTrain.timeOne);
            console.log(newTrain.freq);
            
        });