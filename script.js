document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Select elements
const addBlogBtn = document.getElementById('addBlogBtn');
const blogForm = document.getElementById('blogForm');
const publishBtn = document.getElementById('publishBtn');
const blogText = document.getElementById('blogText');
const blogList = document.getElementById('blogList');

// Show blog input when clicking "+ Add"
addBlogBtn.addEventListener('click', () => {
    blogForm.style.display = 'block';
});

// Publish blog
publishBtn.addEventListener('click', () => {
    const blogContent = blogText.value.trim();
    
    if (blogContent) {
        // Create a new blog post
        const blogPost = document.createElement('div');
        blogPost.classList.add('blogPost');
        blogPost.innerHTML = `<p>${blogContent}</p>`;
        
        // Add blog post to the list
        blogList.prepend(blogPost);
        
        // Clear the input
        blogText.value = '';
        
        // Hide the form again
        blogForm.style.display = 'none';
    } else {
        alert("Please write something before publishing!");
    }
});