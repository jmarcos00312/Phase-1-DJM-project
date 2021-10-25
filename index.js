
const createH3 = document.createElement("h3");
const randomFacts = document.getElementById("random-fact");
const imageDetails = document.getElementsByClassName("detail-images");
const dogContainer = document.getElementById("dog-details")
const listdogs = document.getElementById("list-dogs")
const footer = document.getElementById("dog-footer")

document.addEventListener("DOMContentLoaded", () => init());

const init = () => {
    factGenerator();
    renderDogs();
};

const factGenerator = () => {
    fetch(`http://localhost:3000/facts`)
        .then((response) => response.json())
        .then((server) => {
            let number = Math.floor(Math.random() * 101);
            randomFacts.textContent = server[number].fact;
            footer.append(randomFacts);
            // console.log(server[number].fact);
        });
};
const renderDogs = () => {
    fetch("http://localhost:3000/dogs")
        .then((response) => response.json())
        .then((datas) => datas.forEach(dog => showDogs(dog))
        )};
//          "id": 1,
//          "name": "Dog9",
//          "Age": 2,
//          "image": "https://images.unsplash.com/photo-1568564321589-3e581d074f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//          "breed": "dog breed here"
//         },

const showDogs = (dog) => {
    const img = document.createElement("img");
    img.src = dog.image
    
    img.addEventListener("click", () => {
        const name = document.querySelector(".name")
        const age = document.querySelector(".dog-age")
        const gender = document.querySelector(".dog-gender")
        const breed = document.querySelector(".dog-breed")
        const image = document.querySelector(".detail-images")
        
        image.src = dog.image
        name.textContent = dog.name
        age.textContent = dog.age
        gender.textContent = dog.gender
        breed.textContent = dog.breed
    })
    listdogs.appendChild(img)
}

/*
const bookUrl = "http://localhost:3000/books"
let ulList = document.querySelector("#list")
let showPanel = document.querySelector("#show-panel")
const myUser = {"id": 1, "username": "pouros"}
document.addEventListener("DOMContentLoaded", () => {
    fetch(bookUrl)
        .then(resp => resp.json())
        .then(data => loadBooks(data))
})
function loadBooks(arrayOfBooks) {
    arrayOfBooks.forEach((book) => {
        renderBooks(book)
    })
}
const myUser = {'id': 1, "username": }
//grab what I need next
"id": 1,
"title": "Grapefruit",
"subtitle": "A book of Instruction and Drawings.",
"description": "Back in print for the first time in nearly thirty years, here is Yoko Ono's whimsical, delightful, subversive, startling book of instructions for art and for life. 'Burn this book after you've read it.' -- Yoko 'A dream you dream alone may be a dream, but a dream two people dream together is a reality. This is the greatest book I've ever burned.' -- John",
"author": "Yoko Ono",
"img_url": "https://books.google.com/books/content?id=3S8Rwr-iBdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
"users": [
  {
    "id": 2,
    "username": "auer"
  },
function renderBooks(book) {
    const bookList = document.createElement('li')
    bookList.innerText = book.title
    ulList.append(bookList)
    bookList.addEventListener("click", (event) => {
        showPanel.innerHTML = ""
        let bookTitle = document.createElement("h1")
        bookTitle.innertext = book.title
        let bookSubtitle = document.createElement("h2")
        bookSubtitle.innerText = book.subtitle
        let bookDescription = document.createElement("p")
        bookDescription.innerText = book.description
        let bookAuthor = document.createElement("p")
        bookAuthor.innerText = book.author
        let bookImage = document.createElement("img")
        bookImage.src = book.img_url
        let likersList = document.createElement("ul")
        likersList.id = "users-list"
        let likeButton = document.createElement("button")
        likeButton.innerText = "Like"
        if (book.users.length > 0) {
            book.users.forEach((user) => {
                let likeUser = document.createElement("li")
                likeUser.innerText = user.username
                likeUser.id = user.username
                likersList.append(likeUser)
            })
        }
        showPanel.append(bookImage, bookTitle, bookAuthor, bookSubtitle, bookDescription, likersList)
        likeButton.addEventListener("click", (event) => {
        //here's where we are pushing our user instance into the book's users array
        book.users.push(myUser)
            fetch()
            .then()
            .then()
        })
    })
}
*/