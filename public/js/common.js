// delete todo
$(() => {
    $('.delete-todo').on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-id')
        $.ajax({
            type: 'DELETE',
            url: `/${id}`,
            success: (response) => {
                console.log(response)
                deleteCardById(id)
            },
            error: (error) => {
                console.log(error)
            }
        })
    })
})

// done todo
$(() => {
    $('.done-todo').on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-id')
        $.ajax({
            type: 'PUT',
            url: `/${id}`,
            data: {
                done: true
            },
            success: (response) => {
                window.location.href = '/'
            },
            error: (error) => {
                console.log(error)
            }
        })

        console.log('Done ToDo', id)
    })
})

// open todo
$(() => {
    $('.done-open').on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-id')
        $.ajax({
            type: 'PUT',
            url: `/${id}`,
            data: {
                done: false
            },
            success: (response) => {
                window.location.href = '/'
            },
            error: (error) => {
                console.log(error)
            }
        })

        console.log('Done ToDo', id)
    })
})

// update todo
$(() => {
    $('#update-todo').on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-id')
        $.ajax({
            type: 'POST',
            url: `/edit/${id}`,
            data: {
                name: document.getElementById('todo-name').value,
                body: document.getElementById('todo-body').value
            },
            success: (response) => {
                window.location.href = '/'
            },
            error: (error) => {
                console.log(error)
            }
        })

        console.log('ToDo was updated:', id)
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
