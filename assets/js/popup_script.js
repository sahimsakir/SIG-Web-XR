jQuery(document).ready(function($) {
    // setCookie("cookieAcceptForPopup", "0", 30);
    //open popup

    $("#info").on('click', () => {
        console.log("icon");
        openpopup();
    })

    function openpopup() {
        if (getCookie("cookieAcceptForPopup") != "1") {
            $('.popup').addClass('is-visible');
            // $("#popup_gdpr").addClass('popup_gdpr_show');
        }
    }
    openpopup();
    //close popup
    $('.popup').on('click', function(event) {
        if ($(event.target).is('.popup-close') || $(event.target).is('.popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
        $('.popup').removeClass('is-visible');
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event) {
        if (event.which == '27') {
            $('.popup').removeClass('is-visible');
        }
    });



    /**
     * Not use for now. Disabled this cookies popup for now.
     */
    // Cookies
    $('#accept').on('click', function(event) {
        event.preventDefault();
        setCookie("cookieAcceptForPopup", "1", 30);
        console.log(getCookie("cookieAcceptForPopup"));
        closeTheCookiesPopup();
    });
    $('#decline').on('click', function(event) {
        event.preventDefault();
        closeTheCookiesPopup();
    });

    function closeTheCookiesPopup() {
        $("#popup_gdpr").hide();
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        let user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
                setCookie("username", user, 30);
            }
        }
    }
});