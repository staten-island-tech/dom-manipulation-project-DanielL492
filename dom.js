const DOMSelectors = {
    button: document.getElementById("submit"),
    form: document.getElementById("form"),
    title: document.querySelector(".title"),
    input1: document.getElementById("inputname"),
    input2: document.getElementById("inputgame"),
    input3: document.getElementById("inputimg"),
    container: document.getElementById("flexcontainer"),
}

function addcard() {
    DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="flexcontainer">
        <h1 class="charname">${DOMSelectors.input1.value}</h1>
        <h2 class="chargame">${DOMSelectors.input2.value}</h2>
        <img src="${DOMSelectors.input3.value}" alt="Image" class="img"/>
        <button class="remove">Remove</button>
    </div>`
    );
}

/*function deletecard() {

}

function clearinputs() {
    DOMSelectors.inputname.value = "";
    DOMSelectors.inputgame.value = "";
    DOMSelectors.inputimg.value = "";
}*/

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    addcard();
    //deletecard();
    //clearinputs();
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