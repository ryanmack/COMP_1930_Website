// contains the JavaScript code for the index page/landing page      
     

// code for the dropdown menu begins 

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }
              
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
            }    
        } 
    }

// end of code for the drop down menu 