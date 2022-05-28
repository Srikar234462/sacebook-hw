var firebaseConfig = {
      apiKey: "AIzaSyAeUsDgKMqDf7yUl7sUS5PxmwL0J9CRxqM",
      authDomain: "sacebook-219d8.firebaseapp.com",
      databaseURL: "https://sacebook-219d8-default-rtdb.firebaseio.com",
      projectId: "sacebook-219d8",
      storageBucket: "sacebook-219d8.appspot.com",
      messagingSenderId: "947051436113",
      appId: "1:947051436113:web:b44a91c97705dfdc0cc070",
      measurementId: "G-3V0JRKF13Z"
};
firebase.initializeApp(firebaseConfig)
user_name = document.getElementById("user_name").value;
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
function addroom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"addingroomname"
})
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"


}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

            });
      });
}
getData();
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"

}