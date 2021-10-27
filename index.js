
const randomFacts = document.getElementById("random-fact");
const imageDetails = document.getElementsByClassName("detail-images");
const dogContainer = document.getElementById("dog-container")
const footer = document.getElementById("dog-footer")
const form = document.querySelector("form")


document.addEventListener("DOMContentLoaded", () => init());

const init = () => {
    renderDogs();
    showDefaultDog()
    factGenerator();
};

const factGenerator = () => {
    fetch(`http://localhost:3000/facts`)
        .then((response) => response.json())
        .then((server) => {
            let number = Math.floor(Math.random() * 101);
            randomFacts.textContent = server[number].fact;
            footer.append(randomFacts);
        });
};
const renderDogs = () => {
    fetch("http://localhost:3000/dogs")
        .then((response) => response.json())
        .then((datas) => datas.forEach(dog => showDogs(dog))
        )
};

const container = document.querySelector(".container-fluid")

const showDogs = (dog) => {
    const createArticle = document.createElement("article")
    const createHeader = document.createElement("header")
    createArticle.className = "column"
    const img = document.createElement("img");
    img.src = dog.image
    const h2 = document.createElement("h2")
    h2.textContent = dog.name
    createHeader.appendChild(h2)
    // createDiv.append(createDivCol)
    createArticle.append(img, h2)
    container.append(createArticle)
    // console.log(dog)

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
    dogContainer.appendChild(container)
}
let getStyle = document.querySelector("Style")


const showDefaultDog = () => {
    const image = document.querySelector(".detail-images")
    const name = document.querySelector(".name")
    const age = document.querySelector(".dog-age")
    const gender = document.querySelector(".dog-gender")
    const breed = document.querySelector(".dog-breed")
    if (image.src) {
        showDogs()
    } else {
        let number = Math.floor(Math.random() * 10);
        fetch("http://localhost:3000/dogs")
            .then(resp => resp.json())
            .then(dogs => {
                image.src = dogs[number].image
                name.textContent = dogs[number].name
                age.textContent = dogs[number].age
                gender.textContent = dogs[number].gender
                breed.textContent = dogs[number].breed
            })
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const dogName = document.querySelector("#subject").value
    const message = document.querySelector("#message").value


    alert(`Hello ${name}! you want us to contact you at ${email} about ${dogName}`)
    console.log(`${name} said ${message}`)
})

const EMPTY_HEART = '♡'
const FULL_HEART = '♥️'
const heartLiker = document.querySelectorAll(".like-glyph")
heartLiker.forEach(heart => {
    console.log(heart)
    heart.addEventListener("click", () => {
        if (heart.textContent === EMPTY_HEART) {
            heart.className = "activated-heart"
            heart.textContent = FULL_HEART
        } else {
            heart.textContent = EMPTY_HEART
        }
    })
})