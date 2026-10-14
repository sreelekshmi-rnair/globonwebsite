'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.querySelector('body')

        if (bodyElement) {
            // Remove all classes
            bodyElement.classList.remove('theme-green', 'theme-yellow', 'theme-purple', 'theme-orange', 'black2-bg')

            bodyElement.classList.add('light-theme')
            bodyElement.classList.remove('black2-bg')

        }
    }, [pathname])

    return null
}
