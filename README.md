# YouTube Ad Blocker Chrome Extension

A powerful Chrome extension designed to enhance your YouTube viewing experience by blocking various types of advertisements.

## Purpose

This extension was created to provide users with an ad-free YouTube experience. While content creators deserve support, some users may find frequent advertisements disruptive to their viewing experience. This tool helps in:

- Removing video advertisements before and during videos
- Blocking banner ads and overlay advertisements
- Removing sponsored cards and promotional content
- Blocking tracking and analytics related to advertisements
- Improving overall page load times by blocking ad requests

## How It Works

The extension uses multiple approaches to block advertisements:

### 1. Network Request Blocking
Using Chrome's `declarativeNetRequest` API, the extension blocks ad-related network requests from known advertising domains:
- doubleclick.net
- googlesyndication.com
- youtube.com/pagead/
- youtube.com/ptracking
- youtube.com/api/stats/ads

### 2. DOM Element Removal
The content script continuously monitors the YouTube page and removes ad-related elements such as:
- Video ad overlays
- Banner advertisements
- Sponsored content
- Promotional video suggestions
- Masthead ads
- In-feed advertisements

### 3. CSS Blocking
The extension includes CSS rules to hide ad-related elements that might slip through the other blocking methods.

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Components

- `manifest.json`: Extension configuration and permissions
- `background.js`: Handles network request blocking using declarative rules
- `content.js`: Manages DOM manipulation and ad element removal
- `styles.css`: Contains CSS rules for hiding ad elements
- `popup.html`: Simple user interface showing extension status

## Technical Implementation

The extension uses Chrome's Manifest V3 with the following key features:

- `declarativeNetRequest` for efficient network-level ad blocking
- MutationObserver for real-time DOM monitoring
- Event listeners for dynamic content changes
- CSS rules for fail-safe ad element hiding

## Privacy & Permissions

This extension requires the following permissions:
- Access to youtube.com domains
- Network request modification capabilities
- Storage access for extension settings

The extension does not:
- Collect any user data
- Track user behavior
- Modify non-ad content
- Interfere with YouTube's core functionality

## Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating your feature branch
3. Committing your changes
4. Pushing to the branch
5. Creating a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Note**: YouTube frequently updates its platform, which may require periodic updates to maintain the extension's effectiveness.
