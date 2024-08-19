// Function to format the timestamp
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}

// Function to update popup with stored request details
chrome.storage.local.get("requestDetails", function (data) {
  if (data.requestDetails) {
    const details = data.requestDetails;
    document.getElementById("requestUrl").textContent = details.url;
    document.getElementById("requestTime").textContent = formatTimestamp(
      details.timeStamp
    );

    // Assuming you want to display an image
    // This example just uses the URL if it happens to be an image
    if (details.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      document.getElementById("requestImage").src = details.url;
    }
  } else {
    document.getElementById("requestUrl").textContent = "No details available";
    document.getElementById("requestTime").textContent = "";
  }
});
