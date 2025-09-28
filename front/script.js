let currentSlide = 0;
const recommendations = [
    {
        quote: "\"Intelligent and diligent. Hard working and delivers results. Highly recommended\"",
        author: "- Paul Najarian, Founder at Pulvina"
    },
    {
        quote: "\"She has quick adaptability and understood our requirements. She followed our guidelines and submitted a very good job.\"",
        author: "- Van Thi N., at Confimis"
    },
    {
        quote: "\"I had the pleasure of working with Jenny, and I can confidently say she is an exceptional professional who always goes above and beyond in her work.\"",
        author: "- Adam Koyuncu, DevOps Engineer"
    }
];

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= recommendations.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = recommendations.length - 1;
    }
    displaySlide();
}

function displaySlide() {
    const recommendation = recommendations[currentSlide];
    document.getElementById('quote').textContent = recommendation.quote;
    document.getElementById('author').textContent = recommendation.author;
}

// Initialize the first slide
window.onload = displaySlide;

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Initialize the first tab open
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("programming").style.display = "block";
});

document.getElementById('readMoreBtn').addEventListener('click', function() {
    var moreText = document.getElementById('moreText');
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        this.textContent = 'Read More';
    }
});
document.querySelector('.future-page').addEventListener('click', function(event) {
    event.preventDefault();  // Prevents the link from being followed
    alert('This feature is coming soon! Stay tuned.');  // Shows an alert message
});

/* Blog Post */
window.onload = function() {
    fetch('https://example.com/api/posts') // Change this URL to your actual API endpoint
        .then(response => response.json())
        .then(data => {
            const blogPosts = document.getElementById('blog-posts');
            data.forEach(post => {
                const div = document.createElement('div');
                div.className = 'blog-post';
                div.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.date}</p>
                    <article>${post.content}</article>
                `;
                blogPosts.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading the blog posts:', error));
};

