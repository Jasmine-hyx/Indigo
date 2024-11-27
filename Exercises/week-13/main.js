document.addEventListener('DOMContentLoaded', () => {
    // Select the anchor element
    let anchor = document.querySelector('a');
    
    // Ensure the anchor element exists
    if (anchor) {
        const viewComments = (event) => {
            console.log(event); // Log the event object for debugging
            event.preventDefault(); // Prevent default link behavior
            
            // Select the comments element
            let comments = document.querySelector('#comments');
            if (comments) {
                comments.className = 'show-comments'; // Update the class
            } else {
                console.error('Comments element not found!');
            }
        };

        // Attach the event listener to the anchor
        anchor.addEventListener('click', viewComments);
    } else {
        console.error('Anchor element not found!');
    }
});
