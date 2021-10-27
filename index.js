
const randomFacts = document.getElementById("random-fact");
const imageDetails = document.getElementsByClassName("detail-images");
const dogContainer = document.getElementById("dog-container")
const footer = document.getElementById("dog-footer")


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
    const createDivCol = document.createElement("div")
    createDivCol.className = "column"
    const img = document.createElement("img");
    img.src = dog.image
    const h4 = document.createElement("span")
    h4.textContent = dog.name
    // createDiv.append(createDivCol)
    createDivCol.append(img, h4)
    container.append(createDivCol)
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


const showDefaultDog = () => {
    const image = document.querySelector(".detail-images")
    const name = document.querySelector(".name")
    const age = document.querySelector(".dog-age")
    const gender = document.querySelector(".dog-gender")
    const breed = document.querySelector(".dog-breed")
    if (image.src) {
        showDogs()
    } else {
        let number = Math.floor(Math.random() * 11);
        fetch("http://localhost:3000/dogs").then(resp => resp.json()).then(dogs => {
            image.src = dogs[number].image
            name.textContent = dogs[number].name
            age.textContent = dogs[number].age
            gender.textContent = dogs[number].gender
            breed.textContent = dogs[number].breed
        })

    }
}