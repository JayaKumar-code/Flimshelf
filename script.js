let currentCategory = '';
function openForm(category) {
    currentCategory = category;
    document.getElementById('selectedCategory').innerText = category;
    document.getElementById('movieForm').classList.remove('hidden');
}
function closeForm() {
    document.getElementById('movieForm').classList.add('hidden');
}
function addMovie() {
let name = document.getElementById('movieName').value;
let actor = document.getElementById('actorName').value;
let about = document.getElementById('movieAbout').value;

if (!name || !actor || !about) return alert("Please fill all fields");

let categoryDiv = document.getElementById(currentCategory);
if (!categoryDiv) {
categoryDiv = document.createElement('div');
categoryDiv.id = currentCategory;
categoryDiv.innerHTML = `<h3>${currentCategory}</h3><div class='movie-list'></div>`;
document.getElementById('movieCollections').appendChild(categoryDiv);
}

let movieList = categoryDiv.querySelector('.movie-list');
let movieItem = document.createElement('div');
movieItem.className = 'movie-item';
movieItem.innerHTML = `<div><strong>${name}</strong> (${actor})<br>${about}</div> 
                   <button onclick="this.parentNode.remove()">Delete</button>`;
movieList.appendChild(movieItem);

// **Reset the form fields after adding the movie**
document.getElementById('movieName').value = '';
document.getElementById('actorName').value = '';
document.getElementById('movieAbout').value = '';

closeForm();
}
