import clsx from 'clsx'
import { useState } from 'react'
import Button from '../Button'
import { navBarLinks } from './data'

const NavBar = () => {
    const [hamburgerClicked, setHamburgerClicked] = useState(false)

    const handleHamburgerClick = () => setHamburgerClicked(!hamburgerClicked)

    return (
        <div className="flex justify-between p-8 sticky">
            <div className="text-callToAction">Logo</div>
            <div className="flex items-center gap-8 max">
                {navBarLinks.map((link, index) => (
                    <a
                        href={link.path}
                        key={index}
                        className="text-primary hidden md:block"
                    >
                        {link.label}
                    </a>
                ))}
                <Button className="hidden md:block">
                    <a href="https://niv-shtibel.me/Niv-Shtibel-CV.pdf">
                        Resume
                    </a>
                </Button>
                <div
                    className={clsx(
                        'flex flex-col gap-[7px] md:hidden',
                        hamburgerClicked && 'hamburger-active'
                    )}
                    dir="rtl"
                    role="button"
                    onClick={handleHamburgerClick}
                    tabIndex={0}
                    onKeyDown={handleHamburgerClick}
                >
                    <div className="bg-callToAction w-[44px] h-[2px] rounded-md transition-all"></div>
                    <div className="bg-callToAction w-[36px] h-[2px] rounded-md transition-all"></div>
                    <div className="bg-callToAction w-[27px] h-[2px] rounded-md transition-all"></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
