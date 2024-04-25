let buttonContainer = document.getElementById("buttonContainer");

buttonContainer.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        let buttonResult = event.target.textContent;
        alert(`The ${buttonResult} was clicked`);
    }
})