var isEditing = false;

$(document).on('ready', function() {
  

    $('img').on('click', function addMarker(e){
      if (!isEditing){
    //append a container div on click on the map
      var marker = $('<div class="marker"></div>');
      $('.container').append($(marker));


      //append a div for the marker in the marker container
      var pic = $('<div class="marker-image"></div>');
      marker.append(pic);

      //append a note div in the marker container
      var note = $('<div class="note"></div>');
      marker.append(note);

      //sets the coordiantes of the marker container to the mouse position relative to the document
      marker.offset({top: e.pageY, left:e.pageX});

      var noteText = $('<input class="note-text"></input>');
      marker.append(noteText);

      noteText.focus();

      isEditing = true;

      noteText.blur(function(){
        var input = noteText.val();
        $(this).hide("slow");
        var savedNote = $('<div class="saved-note"></div>');
        marker.append(savedNote)
        savedNote.text(input);
        setTimeout(function(){isEditing = false;}, 500);

      pic.hover(function(){
        $(this).siblings('.saved-note').toggle();
      });
});
    }
    });

  $(document).on('click', '.marker-image', function(e){
  	$(this).closest('.marker').remove();

  });


});