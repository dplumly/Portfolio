/*==================================================================
Form validation script
==================================================================*/

(function ($) {
    "use strict";
    /*==================================================================*/
    $('.input').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })

    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');

    $('.validate-form').on('submit', function () {
        var check = true;

        if ($(name).val().trim() == '') {
            showValidate(name);
            check = false;
        }

        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }

        if ($(message).val().trim() == '') {
            showValidate(message);
            check = false;
        }
        return check;
    });

    $('.validate-form .input').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);


/*==================================================================
Modal 
==================================================================*/

// Get the modal - On the modal container
let contactModal = document.getElementById("contact-modal");

// Get the thank you modal - On the modal container
let thanksModal = document.getElementById("thank-you-modal");

// Get the button that opens the modal - triggers the modal
let contactModalTrigger = document.getElementById("menu-contact");
let contactModalTrigger1 = document.getElementById("nav-contact");
let contactModalTrigger2 = document.getElementById("email");
let contactModalTrigger3 = document.getElementById("mobile-nav-contact");


// Get the <span> element that closes the modal
let closeContactModal = document.getElementsByClassName("closeContactModal")[0];
let closeThanksModal = document.getElementsByClassName("closeThanks")[0];


// When the user clicks on the button, open the modal
contactModalTrigger.onclick = function () {
    contactModal.style.display = "block";
}
contactModalTrigger1.onclick = function () {
    contactModal.style.display = "block";
}
contactModalTrigger2.onclick = function () {
    contactModal.style.display = "block";
}
contactModalTrigger3.onclick = function () {
    contactModal.style.display = "block";
}

// When the user clicks on (x) in the contact modal, close the modal
closeContactModal.onclick = function () {
    contactModal.style.display = "none";
}

// When the user clicks on  (x) in the thanks modal, close the modal
closeThanksModal.onclick = function () {
    thanksModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
    if (event.target == thanksModal) {
        thanksModal.style.display = "none";
    }
}