// const url = 'https://jsonplaceholder.typicode.com/posts';

// function loadPosts() {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => displayPost(data))
// }

// function displayPost(posts) {
//     const postsContainer = document.getElementById('post-container');
//     for (const post of posts) {
//         console.log(post);
//         const postsDiv = document.createElement('div');
//         postsDiv.classList.add('post');
//         postsDiv.innerHTML = `
//         <h4>${post.userId}</h4>
//         <h5>Title: ${post.title}</h5>
//         <p>Description: ${post.body}</p>
//         `;
//         postsContainer.appendChild(postsDiv);
//     }
// }

// loadPosts();

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);

