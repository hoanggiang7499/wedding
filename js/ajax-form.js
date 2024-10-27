$(function () {
  // Get the form.
  var form = $("#confirmation-form");

  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Define the AJAX URL with query parameters
    var url =
      "https://script.google.com/macros/s/AKfycbz4iFHznbzuT7tzkIwv_LurqBkj4VPlNEmeXqCtKTF5z2VApnmUf5qjPJC_S8mkkEcKAA/exec";

    // Collect the form data
    var params = {
      path: "Sheet1",
      action: "write",
      name: $("#name").val(),
      amount: $("#default-select").find(":selected").val(),
      note: $("#note").val(),
      wish: $("#wish").val(),
    };
    console.log(params, "hehe");

    // Change button text and disable the button
    const rsvpButton = document.getElementById("rsvpButton");
    rsvpButton.innerText = "Thank you";
    rsvpButton.disabled = true;

    // Disable the entire form
    $("#confirmation-form :input").prop("disabled", true);

    // Optional: Add styling class to indicate the form is disabled
    const formContainer = document.getElementById("confirmation-form");
    formContainer.classList.add("disabled-form");

    // Send the AJAX request
    $.ajax({
      url: url,
      type: "GET", // Use GET for sending query parameters
      data: params,
      success: function (response) {
        console.log("Form submitted successfully: ", response);
      },
      error: function (err) {
        console.error("Error submitting form: ", err);
      },
    });
  });
});
