function showError() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
    })
}

function showSuccess() {
    Swal.fire({
        type: 'success',
        title: 'Ok!',
        text: 'You are the best!'
    })
}

function showConfirm() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}