const DOMSelectors = {
    button: document.getElementById("submit"),
    form: document.getElementById("form"),
    title: document.querySelector(".title"),
    inputname: document.getElementById("inputname"),
    inputgame: document.getElementById("inputgame"),
    inputimg: document.getElementById("inputimg"),
    container: document.getElementById("flexcontainer"),
}

function addcard() {
    DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="flexcontainer">
        <div class="card"> 
            <h1 class="name">${DOMSelectors.inputname.value}</h1>
            <h2 class="game">${DOMSelectors.inputgame.value}</h2>
            <img src="${DOMSelectors.inputimg.value}" alt="Image" class="card-img"/> <br>
            <button class="remove">Remove</button>
        </div>
    </div>`
    );
}

function deletecard() {
    const removecontainer = document.querySelectorAll(".remove")
    removecontainer.forEach(remove => remove.addEventListener("click", function(find) {
        find.target.parentElement.remove();
    }))
}

function clearinputs() {
    DOMSelectors.inputname.value = "";
    DOMSelectors.inputgame.value = "";
    DOMSelectors.inputimg.value = "";
}

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    addcard();
    deletecard();
    clearinputs();
});


//insertAdjacentHTML() look up
//backticks allow u to input a string and insert variable in adjacent
// html using ${} ex(Album.name) use .value after domselector variable name

//DOMSelectors.input.value = ""; makes the input box clear

/*function changelist() {
    let pointbruh = 2;
    DOMSelectors.points.forEach((poin) => {
        poin.addEventListener("click", function() {
            poin.textContent = `hello ${pointbruh}`;
            pointbruh++;
        });
    });*/

//console.log(DOMSelectors.h2s);