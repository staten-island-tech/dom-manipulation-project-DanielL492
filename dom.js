/*const form = document.querySelector("#form");
console.log(form)*/
const DOMSelectors = {
    button: document.getElementById("submit"),
    form: document.querySelector("#form"),
    title: document.querySelector(".title"),
}

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el) => (el.textContent = DOMSelectors.firstName.value)
    );
    function clearbox() [
        DOM
    ]
})


    //insertAdjacentHTML() look up
    //backticks allow u to input a string and insert variable in adjacent
    // html using ${} ex(Album.name) use .value after domselector variable name



//DOMSelectors.input.value = ""; makes the input box clear

/*DOMSelectors.button.addEventListener("click", function(){
    titleedit(DOMSelectors.title, DOMSelectors.random)
    /*const album = makealbum()
    addCard()
    clearfields()
    addremovebuttons
})*/


/*function changelist() {
    let pointbruh = 2;
    DOMSelectors.points.forEach((poin) => {
        poin.addEventListener("click", function() {
            poin.textContent = `hello ${pointbruh}`;
            pointbruh++;
        });
    });*/

//console.log(DOMSelectors.h2s);