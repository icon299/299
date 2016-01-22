
$(function() {
  $(".submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    //var dataString = 'name='+ name + '&email=' + email + '&message=' + message + '&gender=' + gender;

  if(name=='' || email=='' || message=='' )
  {
    $('.success').fadeOut(200).hide();
    $('.error').fadeOut(200).show();
  }
  else
  {
    $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': '2F6MglzFRGo7NtJIylksug',
      'message': {
        'from_email': 'postmaster@299.pp.ua',
        'to': [
          {
            'email': 'postmaster@299.pp.ua',
            'name': name,
            'type': 'to'
          }
        ],
        'subject': 'title',
        'html': email
      
    }
    },

    success: function(){
      $('.success').fadeIn(200).show();
      $('.error').fadeOut(200).hide();
    }
  });
}
return false;
});

});

/*function sendMail(emV){
         var emV; 
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': '2F6MglzFRGo7NtJIylksug',
      'message': {
        'from_email': 'postmaster@299.pp.ua',
        'to': [
          {
            'email': 'postmaster@299.pp.ua',
            'name': 'YOUR_RECEIVER_NAME',
            'type': 'to'
          }
        ],
        'subject': 'title',
        'html': emV.value;
      }
    }
  });
}
*/