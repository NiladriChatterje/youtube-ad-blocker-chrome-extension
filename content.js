// Function to remove ad elements
const removeAds = () => {
    // Remove video ads
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
        skipButton.click();
    }

    // Remove banner ads
    const adOverlay = document.querySelector('.ytp-ad-overlay-container');
    if (adOverlay) {
        adOverlay.remove();
    }

    // Remove side ads
    const adSlots = document.querySelectorAll('.ytd-promoted-video-renderer, .ytd-display-ad-renderer, .ytd-companion-slot-renderer');
    adSlots.forEach(ad => ad.remove());

    // Remove masthead ads
    const mastheadAd = document.querySelector('ytd-masthead-ad-renderer');
    if (mastheadAd) {
        mastheadAd.remove();
    }

    // Remove in-feed ads
    const inFeedAds = document.querySelectorAll('ytd-in-feed-ad-layout-renderer');
    inFeedAds.forEach(ad => ad.remove());
};

// Create a MutationObserver to watch for new ad elements
const observer = new MutationObserver(() => {
    removeAds();
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Initial ad removal
removeAds();

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'removeAds') {
        removeAds();
    }
});
