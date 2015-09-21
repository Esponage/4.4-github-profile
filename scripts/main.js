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
        $(".repositories").append('<li class="repo-name js-repo-name">' + repo.name + '</li>');
        $(".repositories").append('<li class="fork-count js-fork-count">' + repo.forks_count + '</li>');
        $(".repositories").append('<li class="stargazers js-stargazers">' + repo.stargazers_count + '</li>');
        $(".repositories").append('<li class="repo-lang js-repo-lang">' + repo.language + '</li>');
        $(".repositories").append('<li class="last-updated js-last-updated">' + (moment(repo.updated_at).startOf('hour').fromNow()) + '</li>');

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
          $(".js-user-photo-2").html('<img src=" '  + response.avatar_url + ' "/> ' + '<i class="fa fa-caret-down caret"></i>');
          $(".js-name").html(response.name);
          $(".js-user-name").html(response.login);
          $(".js-email").html('<i class="fa fa-envelope-o envelope"></i>' + " " + response.email);
          $(".js-date-joined").html('<i class="fa fa-clock-o clock"></i>' + " " + 'Joined on ' + (moment(response.created_at).format("MMM DD, YYYY")));
          $(".js-followers").html(response.followers);
          $(".js-following").html(response.following);
      });
    });

    $(document).ready(function() {
      $.ajax({
          url: "https://api.github.com/users/esponage/orgs",
          type: "GET",
          dataType: "json",
          headers: { "Authorization": "token 58734ea7b7318b9a258a4b86ea14c7c0f291f75c" }
      })
      .then(function(response) {
            console.log(response);
            $("organizations-pic").html('<img src=" '  + response.avatar_url + ' "/> ');
    });
        });
