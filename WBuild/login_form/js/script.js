'use strict'

$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        var username = $('#username').val();
        var password = $('#password').val();

        // Simulate login validation (replace with your actual validation logic)
        var isUsernameValid = (username === 'new_user');
        var isPasswordValid = (password === '123456789');

        // Clear previous error/success indications
        $('.error').hide();
        $('.success').removeClass('success');
        $('.form-control').removeClass('border-danger border-success'); // Remove border classes

        // Apply border color for username
        if (isUsernameValid) {
            $('#username').addClass('border-success');
        } else {
            $('#username').addClass('border-danger');
            $('#usernameError').text('*please, enter valid username').show();
        }

        // Apply border color for password
        if (isPasswordValid) {
            $('#password').addClass('border-success');
        } else {
            $('#password').addClass('border-danger');
            $('#passwordError').text('*please, enter valid password').show();
        }

        // Display success message if login is successful
        if (isUsernameValid && isPasswordValid) {
            $('#result').text('Successful login!').addClass('success');
        }
    });

    // Remove error styles when user starts typing in the inputs
    $('#username, #password').keyup(function() {
        $(this).removeClass('border-danger border-success');
        $('#result').text('').removeClass('success');
    });
});


