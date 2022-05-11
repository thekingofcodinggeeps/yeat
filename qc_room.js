const firebaseConfig = {
    apiKey: "AIzaSyBzCYG0q9UTWfmeC93-CNryCgekGtaEpT4",
    authDomain: "quickcrack-bfab8.firebaseapp.com",
    databaseURL: "https://quickcrack-bfab8-default-rtdb.firebaseio.com",
    projectId: "quickcrack-bfab8",
    storageBucket: "quickcrack-bfab8.appspot.com",
    messagingSenderId: "1038970824208",
    appId: "1:1038970824208:web:b79f4ece6c9f292bdd4c95",
    measurementId: "G-KL79Y89XWC"
  };

  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "qc_room.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();