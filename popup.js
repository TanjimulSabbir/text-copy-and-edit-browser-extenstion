// Get the selected text from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const selectedText = urlParams.get("selection");

// Display the selected text in the popup window
const selectedTextElement = document.getElementById("selected-text");
selectedTextElement.textContent = selectedText;

// Handle clicks on the copy button
const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", function () {
    // Copy the selected text to clipboard
    const textArea = document.createElement("textarea");
    textArea.value = selectedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("text copied")
});
const shareButton = document.getElementById('share-button');
shareButton.addEventListener('click', () => {
    const selectedText = selectedTextElement.textContent;
    const shareUrl = `https://example.com/share?text=${encodeURIComponent(selectedText)}`;
    window.open(shareUrl, '_blank');
});


const selectedTextInput = document.getElementById("selected-text-input");
selectedTextInput.value = selectedText;

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
    const editedText = selectedTextInput.value;
    console.log(editedText, "EditedText")
    const selectedTextElement = document.getElementById("selected-text");
    selectedTextElement.textContent = editedText;
});