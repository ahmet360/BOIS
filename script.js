// Mock function to demonstrate the concept
function submitPost() {
    const content = document.getElementById('postContent').value;
    console.log('Submitting post:', content);
    // Here you would send the content to the backend or an API.
}

// Mock function to load posts
function loadPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear current posts
    // Fetch posts from the backend or an API, then display them
    const mockPosts = ['Post 1', 'Post 2', 'Post 3']; // Example posts
    mockPosts.forEach(post => {
        const div = document.createElement('div');
        div.textContent = post;
        postsContainer.appendChild(div);
    });
}

// Load posts on page load
window.onload = loadPosts;
