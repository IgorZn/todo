$(() => {
    $('.delete-todo').on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-id')
        $.ajax({
            type: 'DELETE',
            url: `/${id}`,
            success: (response) => {
                alert('Deleting todo')
                window.location.href = '/'
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
                alert('Deleting todo')
                window.location.href='/'
            },
            error: (error) => {
                console.log(error)
            }
        })

        console.log('Done ToDo', id)
    })
})