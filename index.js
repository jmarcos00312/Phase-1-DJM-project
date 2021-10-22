const urlFacts = "http://localhost:3000/facts"
const createH1 = document.createElement('h3');
const randomFacts = document.getElementById('random-fact')
const body = document.getElementsByTagName("body")[0]
const image = document.getElementById("radomPups")

document.addEventListener("DOMContentLoaded", () => init())

const init = () => {
    factGenerator()
    dogImageGenerator()
}


const factGenerator = () => {
    fetch(urlFacts)
        .then(response => response.json())
        .then(data => {
            let number = Math.floor(Math.random() * 101)
            createH1.textContent = data[number].fact
            randomFacts.append(createH1)
            console.log(data.fact)
        })
}

const dogImageGenerator = () => {
    fetch(urlFacts)
        .then(response => response.json())
        .then(data =>
        {
            let number = Math.floor(Math.random() * 51)
            console.log(number)
            // console.log(data[101].message[number])
            const createImg = document.createElement("img")
            createImg.src = data[101].message[number]
            body.append(createImg)

        }
        )
}