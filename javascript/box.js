function display_items(category){
  var dbRef = firebase.database().ref("box/"+category+"/");
  dbRef.once("value", function(snap){
    list = snap.val();
    console.log(list);
    display_information(list);
    })
}


display_items("pizza");
display_items("cardboard");