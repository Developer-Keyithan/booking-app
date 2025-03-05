"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`flex items-center justify-center fixed right-5 bottom-5 bg-blue-700 text-white h-10 w-10 z-50 rounded-full cursor-pointer shadow-lg transition-transform ${visible ? "scale-100" : "scale-0"
        }`}
    >
      <ArrowUp />
    </button>
  )
}

export default ScrollToTop
