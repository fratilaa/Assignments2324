$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault();

        let username = $('#username').val();
        let password = $('#password').val();

       
        let isUsernameValid = (username === 'new_user');
        let isPasswordValid = (password === '123456789');

        $('.error').hide();
        $('.success').removeClass('success');
        $('.form-control').removeClass('border-danger border-success'); // Remove border classes

        if (isUsernameValid) {
            $('#username').addClass('border-success');
            $('#usernameIcon i').addClass('fa-check').removeClass('fa-times');
        } else {
            $('#username').addClass('border-danger');
            $('#usernameIcon i').addClass('fa-times').removeClass('fa-check');
            $('#usernameError').text('*please, enter valid username').show();
        }

        if (isPasswordValid) {
            $('#password').addClass('border-success');
            $('#passwordIcon i').addClass('fa-check').removeClass('fa-times');
        } else {
            $('#password').addClass('border-danger');
            $('#passwordIcon i').addClass('fa-times').removeClass('fa-check');
            $('#passwordError').text('*please, enter valid password').show();
        }

        if (isUsernameValid && isPasswordValid) {
            $('#result').text('Successful login!').addClass('success');
        }
    });

    $('#username, #password').keyup(function() {
        $(this).removeClass('border-danger border-success');
        $('#result').text('').removeClass('success');
    });
});
