import type { PlasmoContentScript } from "plasmo"
import { useEffect, useState } from "react"

export const config: PlasmoContentScript = {
  matches: ["https://docs.plasmo.com/*"]
}

function IndexPopup() {
  const [data, setData] = useState("")

  const init = () => {
    chrome.runtime.sendMessage({ type: "init" }, () => {
      return true
    })
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.type === "auth-completed") {
        setData("hurray!")
      }
      return true
    })
  }

  useEffect(() => init(), [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>{data} blah</h1>
    </div>
  )
}

export default IndexPopup
