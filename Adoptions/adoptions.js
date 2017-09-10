/*Modal*/
function imageClick() {
    "use strict";
    document.getElementById("modalId").style.display = 'block';
}

function imageClose() {
    "use strict";
    document.getElementById("modalId").style.display = 'none';
}

window.onclick = function (event) {
    "use strict";
    if (event.target === document.getElementById("modalId")) {
        document.getElementById("modalId").style.display = 'none';
    }
};

/*Submit Form*/
function formSubmit() {
    "use strict";
    window.alert("Thank you! Your form has been submitted and an Adoptions Representative will contact you shortly.");
}
