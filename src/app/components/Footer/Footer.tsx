import React from 'react'

const Footer = () => {
  return (
    <footer className="shadow-sm bg-primary py-10">
        <div className="px-10 md:py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center text-center">
                <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="logo.png" className="h-20" alt="PhoYou log" />
                </a>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-text sm:mb-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <span className="block text-sm text-text sm:text-center">© 2025 <a href="#" className="hover:underline">PhoYou™</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer