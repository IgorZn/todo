$(() => {
    $('.delete-todo').on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-id')
        console.log(id)
        $.ajax({
            type: 'DELETE',
            url: `/${id}`,
            success: (response) => {
                console.log(response)
                deleteCardById(id)
                // location.reload()
            },
            error: (error) => {
                console.log(error)
            }
        })
    })
})


$(() => {
    $('.done-todo').on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-id')
        $.ajax({
            type: 'PUT',
            url: `/${id}`,
            success: (response) => {
                alert('Done todo')
                window.location.href = '/'
            },
            error: (error) => {
                console.log(error)
            }
        })

        console.log('Done ToDo', id)
    })
})


$(() => {
    // prevent form resubmission when page is refreshed
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
})


function deleteCardById(id) {
    return $(`.card.my-2[data-id=${id}]`).remove()
}
