function addingEventListener() {
    const input = document.getElementById('button');

    if (!input) {
        console.error("Element with ID 'button' not found!");
        return;
    }

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

// Run after DOM is fully loaded
document.addEventListener("DOMContentLoaded", addingEventListener);