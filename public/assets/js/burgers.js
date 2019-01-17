// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-button").on("click", function(event) {
      var id = $(this).data("id");
  
      var newState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".addBurgerButton").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      console.log("clicked?")
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });