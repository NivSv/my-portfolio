import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Button from '../Button'
import { navBarLinks } from './data'
import { motion } from 'framer-motion'
import { fadeIn, zoomIn } from '../../utils/motion'
import logo from '../../assets/logo.png'

const NavBar = () => {
    const [hamburgerClicked, setHamburgerClicked] = useState(false)

    const handleHamburgerClick = () => setHamburgerClicked(!hamburgerClicked)
    const [activateScroll, setActivateScroll] = useState(false)

    const handleScroll = () => {
        if (window.scrollY != 0) {
            setActivateScroll(true)
        } else {
            setActivateScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            className={clsx(
                'flex justify-between px-8 py-6 sticky top-0 transition-all duration-300 z-50',
                activateScroll && 'nav-start-scrolling'
            )}
        >
            <div className="text-callToAction self-center relative w-[100px]">
                <div className=" top-0 z-[99]">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[100px] absolute top-[-30px] right-0"
                    />
                </div>
            </div>
            <div className="flex items-center gap-8 max">
                {navBarLinks.map((link, index) => (
                    <motion.a
                        initial="hidden"
                        whileInView="show"
                        variants={fadeIn({
                            direction: 'down',
                            type: 'spring',
                            delay: (index - 1) * 0.2,
                            duration: 0.6,
                        })}
                        href={link.path}
                        key={index}
                        className="text-primaryLight tracking-wider hidden md:block hover:text-callToAction transition-all duration-300"
                    >
                        <p className="inline text-callToAction mr-2">
                            {('0' + index).slice(-2)}.
                        </p>
                        {link.label}
                    </motion.a>
                ))}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={zoomIn({
                        delay: 0,
                        duration: 1,
                    })}
                >
                    <Button className="hidden md:block">
                        <a href="https://niv-shtibel.me/Niv-Shtibel-CV.pdf">
                            Resume
                        </a>
                    </Button>
                </motion.div>
                <div
                    className={clsx(
                        'flex flex-col gap-[7px] md:hidden z-50',
                        hamburgerClicked && 'hamburger-active fixed right-8'
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
            <div
                className={clsx(
                    'hidden transition-all duration-500 w-0 items-center gap-10 justify-center md:hidden',
                    hamburgerClicked && 'sidebar-active'
                )}
            >
                {navBarLinks.map((link, index) => (
                    <a
                        href={link.path}
                        key={index}
                        className="text-primaryLight text-xl hover:text-callToAction transition-all duration-300 flex flex-col"
                    >
                        <p className=" text-callToAction self-center">
                            {('0' + index).slice(-2)}.
                        </p>
                        {link.label}
                    </a>
                ))}
                <Button className="w-44 h-16">
                    <a href="https://niv-shtibel.me/Niv-Shtibel-CV.pdf">
                        Resume
                    </a>
                </Button>
            </div>
            {/* <div className="absolute h-full w-1/4 blur"></div> */}
        </div>
    )
}

export default NavBar
