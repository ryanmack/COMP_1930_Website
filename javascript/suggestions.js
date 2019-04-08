// contains the JavaScript code for the suggestion page


var searchBar = document.getElementById("mySearchbar"); // grabs the information that is currently in the search bar
var submitBtn = document.getElementById("submitButton"); 

// writes whatever is in the searh bar into the database
submitBtn.onclick = function()  {
    var suggestion = searchBar.value;
    console.log(suggestion);
    firebase.database().ref("suggestions/").set({
      suggestion: "website",
    });
}   
