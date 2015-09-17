$(document).ready(function() {
  $.ajax({
      url: "https://api.github.com/users/esponage/repos",
      method: "GET",
      dataType: "json",
      headers: { "Authorization": "token 58734ea7b7318b9a258a4b86ea14c7c0f291f75c" }
  })
  .then(function(response) {
        console.log(response);
});
    });

$(document).ready(function() {
    $.ajax({
        url: "https://api.github.com/users/esponage",
        method: "GET",
        dataType: "json",
        headers: { "Authorization": "token 58734ea7b7318b9a258a4b86ea14c7c0f291f75c" }
      }).then(function(response) {
          console.log(response);

      });
    });
