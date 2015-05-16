            var clickedIcon = { icon: './marker-icon-red.png'};
            marker.on('click', function(e){
                  for(var i=0; i<10; i++)
                        marker.setIcon(clickedIcon)   
            });

                  function onClick(){
                  marker.setIcon({
                        icon: '     /marker-icon-red.png'
                  });
            }
            marker.on('click', onClick())