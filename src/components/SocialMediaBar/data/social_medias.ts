// eslint-disable-next-line import/named
import { IconType } from 'react-icons'
import { BsGithub, BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs'

interface SocialMedia {
    name: string
    url: string
    icon: IconType
}

const socialMedias: SocialMedia[] = [
    {
        name: 'Github',
        url: 'https://github.com/NivSv',
        icon: BsGithub,
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/niv-shtibel/',
        icon: BsLinkedin,
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/NivSvv/',
        icon: BsFacebook,
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/niv_sv/',
        icon: BsInstagram,
    },
]

export default socialMedias
