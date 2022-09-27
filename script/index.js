const app = document.getElementById("app")
let data = null;
async function main() {
    const res = await fetch("https://swapi.dev/api/people");
    const {results} = await res.json()
    console.log("data",results);
    return results;
}

function card(name,height,gender,index) {
    let parentDiv = document.createElement("div");
    parentDiv.className = "card";
    let img = document.createElement("img");
    img.setAttribute('src', `/img/${index}.jpeg` );
    let h = document.createElement("h2");
    let pGen = document.createElement("p");
    let pHgt = document.createElement("p");
    let childDiv = document.createElement("div");
    nameTxtNode = document.createTextNode("Name: "+name);
    heightTxtNode = document.createTextNode("Height: "+height);
    genderTxtNode = document.createTextNode("Gender: "+gender);
    h.appendChild(nameTxtNode);
    pHgt.appendChild(heightTxtNode)
    childDiv.appendChild(pHgt);
    pGen.appendChild(genderTxtNode)
    childDiv.appendChild(pGen);
    parentDiv.appendChild(img);
    parentDiv.appendChild(h);
    parentDiv.appendChild(childDiv);

    childDiv.style.display = "none";
    parentDiv.addEventListener("click", e => {
        if(childDiv.style.display == "none") childDiv.style.display = "block";
        else childDiv.style.display = "none";
    })
    return parentDiv;
}

function cardList() {
    let container = document.createElement("div");
    
    container.className = "container";
    data.forEach((element,i) => {
        const {name,height,gender} = element
        container.appendChild(card(name,height,gender,i));

    });
    return container;
}

//IIFE
(async () => {
    data = await main();
    let starwars = cardList();
    let title = document.createElement("h1");
    let titleTxt = document.createTextNode("STAR WARS HEROES");
    title.appendChild(titleTxt);
    app.appendChild(title);
    app.appendChild(starwars);
})();


//module.exports = { main }
