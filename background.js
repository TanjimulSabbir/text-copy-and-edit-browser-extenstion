// Define the context menu item
chrome.contextMenus.create({
    "id": "AskKursor",
    "title": "Ask Kursor",
    "contexts": ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId === "AskKursor" && clickData.selectionText) {
        // Calculate the center coordinates of the screen
        const centerX = window.screen.width / 2;
        const centerY = window.screen.height / 2;

        // Calculate the left and top coordinates of the modal
        const modalWidth = Math.floor(window.screen.width / 2);
        const modalHeight = window.screen.height;
        const modalLeft = Math.floor(centerX - modalWidth / 2);
        const modalTop = Math.floor(centerY - modalHeight / 2);


        // Create the modal window
        chrome.windows.create({
            type: 'popup',
            width: modalWidth,
            height: modalHeight,
            left: modalLeft,
            top: modalTop,
            url: chrome.runtime.getURL("popup.html") + "?selection=" + encodeURIComponent(clickData.selectionText),
            focused: true,
        });
    }
});
