chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log("Request URL:", details.url);
    // Process request data here
  },
  { urls: ["<all_urls>"] }
);

chrome.webRequest.onCompleted.addListener(
  function (details) {
    chrome.storage.local.set({ requestDetails: details });
  },
  { urls: ["<all_urls>"] }
);

chrome.webRequest.onErrorOccurred.addListener(
  function (details) {
    console.error(
      "Error occurred with URL:",
      details.url,
      "Error:",
      details.error
    );
  },
  { urls: ["<all_urls>"] }
);
