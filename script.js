
document.getElementById("alert-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name-input").value;
    if (name.trim() !== "") {
        alert("Hi " + name + "!");
    }
});

let isBlue = true;
document.getElementById("color-btn").addEventListener("click", function() {
    document.body.style.backgroundColor = isBlue ? "lightgreen" : "lightblue";
    isBlue = !isBlue;
});

document.getElementById("text-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let text = document.getElementById("text-input").value;
    let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert("Special characters are not allowed!");
    } else {
        alert("Text is valid!");
    }
});

document.getElementById("add-text-btn").addEventListener("click", function() {
    document.getElementById("main-heading").innerText += " Add Text";
});
