/*Submit Form*/
function formSubmit() {
    "use strict";
    window.alert("Thank you! Your form has been submitted and an Volunteer Representative will contact you shortly.");
}

// back to top button
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {"use strict"; scrollFunction(); };

function scrollFunction() {
    "use strict";
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    "use strict";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



function vFormOpen() {
  document.getElementById("vModal").style.display = 'block';

}
