$(function() {
  $("#subscribe").validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages : {
      email: {
        required: "Please enter your email",
        email: "Please provide a valid email"
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).addClass("input-error").removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass("input-error").addClass(validClass);
    }
  });
});
