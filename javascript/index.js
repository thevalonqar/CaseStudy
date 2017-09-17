// back to top button 
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// array for testimonials    
    var testimonials = [
        ["This shelter is amazing!", "Mary"],
        ["Animal Shelter gave me my best friend!", "Tom"],
        ["Animal Shelter helps so many dogs and pups in need.", "Molly"],
        ["Volunteering at Animal Shelter is the best", "Bill"],
        ["I adopted all of my dogs from here!", "Sue"]
]

function displayTestimonials() {
    "use strict";
    var testimonies = "";
    
    for(var i =0; i < testimonials.length; i++){
        testimonies += "<p>&ldquo;" + testimonials[i][0] + "&rdquo; &mdash; <em>" + testimonials[i][1] + "</em></p>";
    }
    document.getElementById("testimonial").innerHTML = testimonies;
};

// displays testimonies on load, backwards compatible
if(window.addEventListener){
   window.addEventListener("load", displayTestimonials, false);
} else if (window.attachEvent){
   window.attachEvent("onload", displayTestimonials);
} 