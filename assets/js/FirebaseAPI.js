
    var config = {
        apiKey: "AIzaSyBiAAFOGurOh8nI9yaSz00h6LJNMyyM7bk",
        authDomain: "munchies-project.firebaseapp.com",
        databaseURL: "https://munchies-project.firebaseio.com",
        projectId: "munchies-project",
        storageBucket: "munchies-project.appspot.com",
        messagingSenderId: "1096538443935"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    $(document).ready(function () {
    var fAge = "";
    var allAges = 0;
    var averageAge = "";
    var ageArray;

    database.ref().once("value").then(function (snapshot) {
        // console.log(snapshot.val())
        // console.log(typeof (snapshot.val()))
        ageArray = snapshotToArray(snapshot.val()) //[]
        fAge = moment(snapshot.val().age);
        // ageArray.push(fAge._i);
        var sum = 0;
        for (var i = 0; i < ageArray.length; i++) {
            sum += parseInt(ageArray[i], 10); //don't forget to add the base
        }
        // console.log(sum);
        // console.log(ageArray.length);
        var avg = sum / ageArray.length;
        var roundAvg = Math.round(avg);
        console.log("The average age of users is " + roundAvg)
    });
    function snapshotToArray(object) {
        var newArr = [];
        for (prop in object) {
            var item = object[prop];
            // console.log(item.age);
            newArr.push(item.age);
        };
        return newArr;
    };

});