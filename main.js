$(document).on('ready', function() {
  $('img').on('click', function addMarker(e){
  	var marker = $('<div class="marker"></div>');
  	$('.container').append($(marker));
  	var pic = $('<div class="marker-image"></div>');
  	marker.append(pic);
  	var note = $('<div class="note"></div>');
  	marker.append(note);
  	marker.offset({top: e.pageY, left:e.pageX});
  	var noteText = prompt("Enter Note:");
  	note.text(noteText);
  	note.css('display', 'none');
  	pic.hover( function(e){
  		console.log("hovering");
  			$(this).closest('.marker').find('.note').toggle();
 // 	console.log('remove called');
  		});
  //	console.log('add called');
  });

  $(document).on('click', '.marker', function(e){
  	$(this).remove();
 // 	console.log('remove called');
  });

 //  $(document).on('hover', '.marker', function(e){
 //  	$(this).find('.note').toggle();
 // // 	console.log('remove called');
 //  });

});