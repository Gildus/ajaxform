$(function () {
    'use strict';    
    $(document).ready(function(){
		$('.file').preimage();
		
		var options = { 
			beforeSend: function() {
				$('.alert').remove();
			},
			uploadProgress: function(event, position, total, percentComplete)  {
						
			},
			success: function()  {
				
			},
			complete: function(response)  {
				$('.alert').remove();
				if (response.status == 200) {					
					if(response.responseText=='ok') {
						$('.container_main').prepend('<div class="alert alert-success"><h4>Exito</h4>!Se guardaron los datos satisfactoriamente...</div>');
						$('form').resetForm();
						$('.prev_container').empty();
					} else {
						$('.container_main').prepend('<div class="alert alert-danger"><h4>Ops!</h4>Ocurrio un error interno...</div>');
					}
					$('html, body').animate({scrollTop:0}, 'slow');
				}
				$('#btnGuardar').button('reset');
			},
			error: function() {
				
			}
		 
		};
	
		
		$('form').on('submit', function(e) {
            e.preventDefault();
			var i_logo = $('input#logotipo'), i_img = $('input#imagen');
			
			var isValidLogo = /(\.jpe?g|\.gif|\.png)$/i.test(i_logo.val()), 
				isValidImg = /(\.jpe?g|\.gif|\.png)$/i.test(i_img.val());
			if (!isValidLogo || !isValidImg) {
				$('.container_main .alert').remove();
				$('.container_main').prepend('<div class="alert alert-danger"><h4>No puede ser!</h4>Solo se admiten archivos JPG, GIF y PNG...</div>');
				$('html, body').animate({scrollTop:0}, 'slow');
				return false;
			} else {
				$('#btnGuardar').button('loading');
				$(this).ajaxSubmit(options);
			}
            
        });
		
		
		$('button#btnPreview').click(function(){
			var mbody = $('.modal-body');
			mbody.find('.tpl_head div').empty();
			mbody.find('.tpl_body div').empty();
			mbody.find('.tpl_foot div').empty();
			
			mbody.find('#tpl_titulo').html($('form #titulo').val());
			mbody.find('#tpl_comentario').html($('form #titulo').val());
			mbody.find('#tpl_piepagina').html($('form #titulo').val());
			mbody.find('#tpl_logotipo').html($('#prev_logotipo').html());
			mbody.find('#tpl_imagen').html($('#prev_imagen').html());
			
			$('#myModal').modal('show');

		});
		
		
		$('#rootwizard').bootstrapWizard({onTabShow: function(tab, navigation, index) {
			var $total = navigation.find('li').length;
			var $current = index+1;
			var $percent = ($current/$total) * 100;
			console.log($percent);
			$('#rootwizard').find('#bar .progress-bar')
				.css({width:$percent+'%'})
				.attr('aria-valuenow',$percent)
				.find('span').html($percent+'%');
				
		}});
		
		
		
	});
	
	
		
});