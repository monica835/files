$(document).ready(function() {
    function showhide(show, hide, hide1) {
        $('input').val(null)
        $(show).show();
        $(hide).hide();
        $(hide1).hide1();
    }
    // showhide('.register','.loginpage','.home')


    $('.reg-btn').click(function() {
            showhide('.loginpage', '.register', '.home')
        })
        // $('.login-btn').click(function () {
        //     showhide('.loginpage','.register','.home','.loginpage','.register')

    // })

})