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

const getH5 = document.querySelector(".card-title")

const renderDogs = () => {
    fetch("http://localhost:3000/dogs")
        .then((response) => response.json())
        .then((datas) => datas.forEach(dog => showDogs(dog))
        )
};


const showDogs = (dog) => {
    const img = document.createElement("img");
    img.src = dog.image

    img.addEventListener("click", () => {
        const name = document.querySelector(".card-title")
        const age = document.querySelector(".card-age")
        const gender = document.querySelector(".card-gender")
        const breed = document.querySelector(".dog-breed")
        const image = document.querySelector(".card-img-top")

        image.src = dog.image
        name.textContent = dog.name
        age.textContent = dog.age
        gender.textContent = dog.gender
        breed.textContent = dog.breed
        console.log(image)
        console.log(name)
        console.log(age)
        console.log(gender)
        console.log(breed)
    })
    // listdogs.appendChild(img)
}