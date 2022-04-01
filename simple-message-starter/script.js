function showMessage() {
    let message = document.getElementById("message-text").value;
    let name = document.getElementById("name-text").value;
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = (message + " - " + name);
    // console.log(message);
};

window.onload = function () {
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");
    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    speechBubbleElement.appendChild(messageBox);
    // console.log("page has loaded");
    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
};