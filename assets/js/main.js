var posts = [
    // Add your posts here
    {
        image: 'assets/images/kali3.jpg',
        title: 'Kali-Kalihan Festival',
        content: 'The Kali-Kalihan Festival is an annual event held on February 9 in Don Salvador Benedicto, Negros Occidental, Philippines. It celebrates the towns founding, culture, harvest, and the Filipino martial art of kali. The festival also serves as a thanksgiving for the farmers hard work and bountiful harvest.'
    },
    {
        image: 'assets/images/malatanog3.jpg',
        title: 'Malatan-og Falls',
        content: 'Malatanog Falls in Don Salvador Benedicto is a tranquil oasis, offering a soothing retreat amidst its long, cascading waters. The falls serene beauty creates a perfect setting to unwind, rejuvenate, and bask in the refreshing, chilly waters. Its elongated form allows visitors to immerse themselves in a calming embrace, providing a serene escape that complements the towns picturesque landscape.'
    },
    {
        image: 'assets/images/kawa.jpg',
        title: 'Kawa Falls',
        content: 'Situated in Don Salvador Benedicto, Kawa Falls is a charming gem known for its smaller yet playful waterfall, inviting visitors to engage in an adventurous slide. This natural wonder offers a delightful experience, allowing guests to enjoy the thrill of sliding down the falls while immersing themselves in the refreshing waters. Its petite size creates an intimate and enjoyable setting, adding a touch of excitement to the tranquil beauty of the surrounding area.'
    },
];

var postsContainer = document.getElementById('blog-posts');

if (posts.length === 0) {
    var messageElement = document.createElement('p');
    messageElement.textContent = 'No posts yet.';
    postsContainer.appendChild(messageElement);
} else {
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var postElement = document.createElement('div');
        postElement.className = 'post';

        var imageElement = document.createElement('img');
        imageElement.className = 'post-image small'; // Add 'small' class
        imageElement.src = post.image;

        // Add event listener to each image to toggle its size
        imageElement.addEventListener('click', function(event) {
            event.stopPropagation();
            if (event.target.classList.contains('small')) {
                event.target.classList.remove('small');
                event.target.classList.add('large');
            } else {
                event.target.classList.remove('large');
                event.target.classList.add('small');
            }
        });

        postElement.appendChild(imageElement);

        var textElement = document.createElement('div');
        textElement.className = 'post-text';

        var titleElement = document.createElement('h2');
        titleElement.className = 'post-title';
        titleElement.textContent = post.title;
        textElement.appendChild(titleElement);

        var contentElement = document.createElement('p');
        contentElement.className = 'post-content';
        contentElement.textContent = post.content;
        textElement.appendChild(contentElement);

        postElement.appendChild(textElement);
        postsContainer.appendChild(postElement);
    }
}

// Add event listener to window to close enlarged image when clicked outside
window.addEventListener('click', function(event) {
    var enlargedImages = document.querySelectorAll('.post-image.large');
    enlargedImages.forEach(function(image) {
        if (!image.contains(event.target)) {
            image.classList.remove('large');
            image.classList.add('small');
        }
    });
});