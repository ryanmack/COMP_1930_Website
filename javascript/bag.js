// contains the JavaScript code for the bag search page       

// reads the respective items from the database 
function display_items(category){
    var dbRef = firebase.database().ref("bag/"+category+"/");
    dbRef.once("value", function(snap){
        list = snap.val();
        console.log(list);
        display_information(list);
    })
}

display_items("chip");
display_items("shopping");