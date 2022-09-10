$('#artModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var title = button.data('title')
    var medium = button.data('medium')
    var size = button.data('size')
    var year = button.data('year')
    var description = button.data('description') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(title)
    document.getElementById('modalImage').src=`img/${title}.jpeg`
    modal.find('#modalMedium').text(medium)
    modal.find('#modalSize').text(size)
    modal.find('#modalYear').text(year)
    modal.find('#modalDescription').text(description)
  })
  