	(function($){

		// Children Toggling
		$('.iadoc li').click(function(){
			// hide children li's wheneve the current li is clicked.
			$(this).children().children('li').toggle();
			return false; // to stop the event bubbling up.
		});
		
		
		// Level Toggling
		$('.iadoc li').prepend('<button class="toggle" name="level_toggle" value="">toggle level</button>');
		
		$('button.toggle').hide().click(function(){
			var show = $(this).val();										// hide or show?	
			var cur_level_lis = $(this).parent().parent().children('li'); 	// get all li's at level above.
			if (!show) {
				cur_level_lis.children().children('li').hide(); 			// hide children of the current level
				cur_level_lis.children('button.toggle').val('1');			// make button 'show' children next time.
			}
			else {
				cur_level_lis.children().children('li').show();				// hide children of the current level
				cur_level_lis.children('button.toggle').val('');			// reset button to 'hide' children next time.
			}
			return false;
		});
		
		$('li').hover(
			function(){ // Hover In
				$(this).children('button.toggle').show();
			},
			function(){  // Hover Out
				$(this).children('button.toggle').hide();
			}
		);
		
	})(jQuery); 
	
