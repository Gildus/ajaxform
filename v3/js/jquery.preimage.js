(function( $ ){
  var settings = {
  		'scale': 'contain', // cover
  		'prefix': 'prev_',
		'types': ['image/gif', 'image/png', 'image/jpeg','video/mp4'],
		'mime': {'jpe': 'image/jpeg', 'jpeg': 'image/jpeg', 'jpg': 'image/jpeg', 'gif': 'image/gif', 'png': 'image/png', 'x-png': 'image/png'}
	};

  var methods = {
     init : function( options ) {
		settings = $.extend(settings, options);
		
		return this.each(function(){
			$(this).bind('change', methods.change);
			$('#'+settings['prefix']+this.id).html('').addClass(settings['prefix']+'container');
		});
     },
     destroy : function( ) {
		return this.each(function(){
			$(this).unbind('change');
		})
     },
     change : function(event) { 
     	var id = this.id
     	var typeFileInput = (typeof($(this).data('type'))=='undefined' ? 'videoimage' : $(this).data('type') );
		
		
     	$('#'+settings['prefix']+id).html('');
     	
     	if(window.FileReader){
     		for(i=0; i<this.files.length; i++){
				
				if ($.inArray(this.files[i].type, settings['types']) == -1){
		 			window.alert("File of not allowed type");						
		 			return false;
		 		}
				
				if (typeFileInput != 'videoimage') {
					if (this.files[i].type == 'video/mp4' && typeFileInput == 'image' ) {
						window.alert("File not allowed, It's only for type Images");
						return false;
					}
					
					if (this.files[i].type != 'video/mp4' && typeFileInput == 'video' ) {
						window.alert("File not allowed, It's only for type Videos");
						return false;
					}
				}
				
				
		 	}
     	
			var isVideo = false;
     	    for(i=0; i<this.files.length; i++){
				
				isVideo = (this.files[i].type=='video/mp4') ? true:false;
     	    	var reader = new FileReader();
	    		reader.onload = function (e) {					
					if (isVideo) {
						var sourceVideo = $('<source></source>')
							.attr('src',e.target.result)
							.attr('type','video/mp4');
							
						$('<video></video>')
							.attr('controls','')
							.attr('width','92')
							.attr('height','74').append(sourceVideo)
							.addClass(settings['prefix']+'thumb').appendTo($('#'+settings['prefix']+id));
					} else {
						$('<div />').css({'background-image': ('url('+e.target.result+')'), 'background-repeat': 'no-repeat', 'background-size': settings['scale'] }).addClass(settings['prefix']+'thumb').appendTo($('#'+settings['prefix']+id));
					}
	    			
	    		};
	    		reader.readAsDataURL(this.files[i]);
     	    }
     	}else{
     		//if(window.confirm('Internet Explorer do not support required HTML5 features. \nPleas, download better browser - Firefox, Google Chrome, Opera... \nDo you want to download and install Google Chrome now?')){ window.location("//google.com/chrome"); }
     	}
     }
  };

  $.fn.preimage = function( method ) {
    if ( methods[method] ) {
		return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
		return methods.init.apply( this, arguments );
    } else {
		$.error( 'Method ' +  method + ' does not exist on jQuery.preimage' );
    }    
  
  };

})( jQuery );

