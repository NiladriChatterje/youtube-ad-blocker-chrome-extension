// Define rules for blocking ad domains
const rules = [
    {
        "id": 1,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
            "urlFilter": "||doubleclick.net",
            "resourceTypes": ["xmlhttprequest", "script", "image", "media"]
        }
    },
    {
        "id": 2,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
            "urlFilter": "||googlesyndication.com",
            "resourceTypes": ["xmlhttprequest", "script", "image", "media"]
        }
    },
    {
        "id": 3,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
            "urlFilter": "||youtube.com/pagead/",
            "resourceTypes": ["xmlhttprequest", "script", "image", "media"]
        }
    },
    {
        "id": 4,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
            "urlFilter": "||youtube.com/ptracking",
            "resourceTypes": ["xmlhttprequest", "script", "image", "media"]
        }
    },
    {
        "id": 5,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
            "urlFilter": "||youtube.com/api/stats/ads",
            "resourceTypes": ["xmlhttprequest", "script", "image", "media"]
        }
    }
];

// Update the rules when the extension starts
chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: rules.map(rule => rule.id),  // Remove existing rules
    addRules: rules  // Add new rules
});
