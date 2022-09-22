export {}

chrome.runtime.onMessage.addListener(({ type }, sender, sendResponse) => {
  console.log("doing stuff")
  if (type === "init") {
    chrome.storage.sync.set({
      originalTabId: sender.tab.id
    })
  } else if (type === "auth-completed") {
    chrome.storage.sync.get("originalTabId", ({ originalTabId }) => {
      chrome.tabs.sendMessage(originalTabId, { type: "auth-completed" })
    })
  }
  return true
})
