let newDiv = document.getElementById("layout");
let responseData;

function getAllNames(user) {

    let myXHR = new XMLHttpRequest();

    myXHR.onreadystatechange = function () {

        if (myXHR.readyState === XMLHttpRequest.DONE && myXHR.status === 200) {

            responseData = JSON.parse(myXHR.responseText);
            responseData.filter(value => value.forks > 0).map(v => v.name);

            let newUl = document.createElement("ul");

            newDiv.appendChild(newUl);
            document.body.appendChild(newDiv);

            let newImg = document.createElement("img");

            for (let i = 0; i < responseData.length; i++) {

                let allData = responseData[i];
                let userPhoto = responseData[i].owner.avatar_url;

                // +++++++++++++++++++++++++++++++++++++++++++++ { User's Images } +++++++++++++++++++++++++++++++++++++++++++++++++++ 

                newImg.setAttribute("src", userPhoto);
                newDiv.appendChild(newImg);

                // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++             
                let newLi = document.createElement("li");
                let newH2 = document.createElement("h2");

                newUl.appendChild(newLi);
                newLi.appendChild(newH2);

                newH2.innerHTML = (allData.name);
            }

        }

    }
    myXHR.open("GET", `https://api.github.com/users/${user}/repos`)
    myXHR.send();
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ { Button function } ++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

let button = document.getElementById("button");

button.onclick = event => {

    event.preventDefault();

    getAllNames(document.getElementById("input").value);

    newDiv.innerHTML = "";

};