$(document).ready(function() {
  $.ajax({
      url: "https://api.github.com/users/esponage/repos",
      method: "GET",
      dataType: "json",
      headers: { "Authorization": "token 58734ea7b7318b9a258a4b86ea14c7c0f291f75c" }
  })
  .then(function(response) {
        console.log(response);
        response.forEach(function(repo) {
        $(".repositories").append('<li>' + repo.html_url + '</li>');
      });
});
    });

  $(document).ready(function() {
    $.ajax({
      url: "https://api.github.com/users/esponage/starred",
      type: "GET",
      dataType: "json",
      headers: { "Authorization": "token 58734ea7b7318b9a258a4b86ea14c7c0f291f75c" }
    })
     .then(function(response) {
      console.log(response.length);
      $(".js-starred").html(response.length);
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
          $(".js-user-photo").html('<img src=" '  + response.avatar_url + ' "/> ');
          $(".js-name").html(response.name);
          $(".js-user-name").html(response.login);
          $(".js-email").html(response.email);
          $(".js-date-joined").html(response.created_at);
          $(".js-followers").html(response.followers);
          $(".js-following").html(response.following);
      });
    });
