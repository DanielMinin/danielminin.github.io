$(function(){ 

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $(".makeorder").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(".hidden").addClass("visible");
            // Done Functions
            th.trigger("reset");
            $(".success").removeClass("visible");
            window.location.href = "order.html";
        });
        return false;
    });

});