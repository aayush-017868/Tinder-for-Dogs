document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    var button = document.getElementById('colorButton');

    // Add click event listener to the button
    button.addEventListener('click', function() {
      // Toggle the 'btn-custom' class on the button
      button.classList.toggle('btn-custom');
    });
  });