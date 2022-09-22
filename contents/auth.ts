import type { PlasmoContentScript } from "plasmo"

export {}

export const config: PlasmoContentScript = {
  matches: ["https://accounts.google.com/*"]
}

chrome.runtime.sendMessage({ type: "auth-completed" })
