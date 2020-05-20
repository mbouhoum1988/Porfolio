$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyASCY_HlKy2Q2QkpkWGYmF-dkuqr-IbGM8",
        authDomain: "updated-portfolio-bf3d0.firebaseapp.com",
        databaseURL: "https://updated-portfolio-bf3d0.firebaseio.com",
        projectId: "updated-portfolio-bf3d0",
        storageBucket: "updated-portfolio-bf3d0.appspot.com",
        messagingSenderId: "904374058202"
      };
      firebase.initializeApp(config);

      var database = firebase.database();

       $("#submit").on("click", function(){
       var  name = $("#name").val().trim();
       var  email = $("#email").val().trim();
       var  phone = $("#phone").val().trim();
       var  message = $("#message").val().trim();
        
        var add = {
            name : name,
            email : email,
            phone: phone,
            message : message
        }
        database.ref().push(add);
    });
    $("#navbar a, .btn").on("click", function(event){
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
    
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            800
            );
        }
    });
});

function initMap(){
       
    var lt=38.8814;
    var lg= -94.8191;
    
  var options = {
      zoom : 10,
      center: {lat:lt  , lng:lg}
  }
  
  var map = new google.maps.Map(document.querySelector('.map'), options);

  var marker = new google.maps.Marker({
      position : {lat:lt, lng:lg},
      map:map
  });
  
}

window.addEventListener('scroll', function(){
    if (window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.8;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});