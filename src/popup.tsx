
import { useState, useEffect } from "react"



export function PopupOffer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000) // Show after 3 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <>
    <div className="popup-overlay" style={{display:'flex',flexDirection:'column'}}>
          <button className="close-button" onClick={() => setIsVisible(false)}>
            ×
          </button>
      <img src="/we.png" alt="ofwe" style={{maxHeight:300}}/>
        <button
          className="claim-button"
          onClick={() => {
            setIsVisible(false)
          }}
        >
اغلاق        </button>
</div>

      </>
  )
}

