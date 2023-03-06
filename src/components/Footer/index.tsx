import { useEffect, useState } from 'react'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai'
import axios from 'axios'

export const Footer = () => {
    const [stars, setStars] = useState(0)
    const [forks, setForks] = useState(0)

    useEffect(() => {
        axios('https://api.github.com/repos/NivSv/my-portfolio').then(
            (response) => {
                setStars(response.data.stargazers_count)
                setForks(response.data.forks_count)
            }
        )
    }, [])

    return (
        <div className="h-[10%] mt-16 mb-4">
            <a
                href="https://github.com/NivSv/my-portfolio"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center group"
            >
                <p className="text-primary text-base group-hover:text-callToAction transition-all duration-300">
                    Built by Niv Shtibel
                </p>
                <div className="flex text-primary text-sm gap-4">
                    <div className="flex items-center gap-1 group-hover:text-callToAction group-hover:fill-callToAction transition-all duration-300">
                        <AiOutlineStar />
                        <p>{stars}</p>
                    </div>
                    <div className="flex items-center text-sm gap-1 group-hover:text-callToAction group-hover:fill-callToAction transition-all duration-300">
                        <AiOutlineFork />
                        <p>{forks}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
