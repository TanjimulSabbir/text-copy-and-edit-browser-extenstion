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
    alert("Text copied")
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

// share text
const shareButton = document.getElementById("share-button");
const modal = document.getElementById("modal");
const facebookLink = document.getElementById("facebook-link");
const whatsappLink = document.getElementById("whatsapp-link");
const instagramLink = document.getElementById("instagram-link");


shareButton.addEventListener("click", function () {
    modal.style.display = "block";
});
const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", function () {
    modal.style.display = "none"
})

facebookLink.addEventListener("click", function () {
    // Share on Facebook code
    const selectedText = selectedTextElement.textContent;
    const shareUrl = `https://facebook.com/share?text=${encodeURIComponent(selectedText)}`;
    window.open(shareUrl, '_blank');
});

whatsappLink.addEventListener("click", function () {
    // Share on WhatsApp code
    const selectedText = selectedTextElement.textContent;
    const shareUrl = `https://whatsapp.com/share?text=${encodeURIComponent(selectedText)}`;
    window.open(shareUrl, '_blank');
});

instagramLink.addEventListener("click", function () {
    // Share on Instagram code
    const selectedText = selectedTextElement.textContent;
    const shareUrl = `https://instragram.com/share?text=${encodeURIComponent(selectedText)}`;
    window.open(shareUrl, '_blank');
});


// Pdf
document.getElementById('pdf-button').addEventListener('click', function () {
    // Get the selected text

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add the selected text to the PDF document
    doc.text(selectedText, 10, 10);

    // Save the PDF document
    doc.save('selected-text.pdf');
});
