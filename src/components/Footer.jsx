import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="flex h-40 items-center justify-center bg-gradient-to-b from-gray-700 via-gray-900 to-black">
        <div className="contact border-white-500 flex cursor-pointer items-center justify-center  rounded-xl border-4 px-20 py-4 font-bold text-white ring-2 ring-offset-2">
          <a href="mailto:kalil.belgoumri@gmail.com">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
