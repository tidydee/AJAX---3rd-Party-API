
      $(function () {

        connectAPI();
        function connectAPI() {

        var url = "https://api.instagram.com/v1/tags/lighthouse/media/recent?client_id=a17b202a68d644619d0f4b7d0c4c498b&callback=?";
        options = {
          dataType: 'jsonp',
          success: loadImages,  
          error: function() {
            alert('error');
          }
        };

        $.ajax(url, options);
      }

        function loadImages(data) {
          console.log('APIrunning!');
          
          for(var i=0; i<data.data.length; i++){
            var rip = data.data[i]
            var images = rip.images.low_resolution.url
            $('<p><img src="'+images+'"/></p>').appendTo($('body'));
            // console.log(images);

            

          }
       
        }
      });