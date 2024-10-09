$(document).ready(function(){
  let userName = "Sarah Connor";
  $("#userName").text(userName);
  $("#greeting").fadeIn();
});

$("#loginForm").submit(function(event) {
  event.preventDefault(); 
  
  let loginSuccess = false;

  if (!loginSuccess) {
      $("#errorMessage").show(); 
      $("#userId, #password").val(''); 
  }
});
$("#ticketType").change(function() {
  let selectedType = $(this).val();

  
  $("#computerFields, #softwareFields, #networkFields").hide();

  
  if (selectedType === "computer") {
      $("#computerFields").show();
  } else if (selectedType === "software") {
      $("#softwareFields").show();
  } else if (selectedType === "network") {
      $("#networkFields").show();
  }
});

$("#problemDescription").on("input", function() {
  let currentLength = $(this).val().length;
  $("#charCount").text(currentLength + "/500 characters");
});




