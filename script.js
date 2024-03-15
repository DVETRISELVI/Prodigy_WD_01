document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Button clicked!'); // You can replace this with any desired action
    });
});
