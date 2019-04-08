// contains the JavaScript code for the bottle search page       


// reads the respective items from the database 
function display_items(category){
    var dbRef = firebase.database().ref("bottle/"+category+"/");
    dbRef.once("value", function(snap){
        list = snap.val();
        console.log(list);
        display_information(list);
    })
}



display_items("glass_pop");
display_items("plastic_pop");