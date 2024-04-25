document.getElementById("inputButton").addEventListener("click", function() {
    let userLink = prompt("Kindly enter your link: ");
    if (userLink) {
        localStorage.setItem("storedLink", userLink);
    } else {
        alert("Wait! First, you need to enter the link!");
    }
});

document.getElementById("redirectButton").addEventListener("click", function () {
    let storedLink = localStorage.getItem("storedLink");
    if (storedLink) {
        window.location.href = storedLink;
    }
})