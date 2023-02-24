import { FC } from 'react'
import socialMedias from './data/social_medias'

const SocialMediaBar: FC = () => {
    const openSocialMedia = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div className="fixed bottom-0 left-[4%] flex flex-col-reverse items-center">
            <div className="bg-black w-[2px] h-[80px]"></div>
            <div className="mb-4 flex flex-col gap-4">
                {socialMedias.map((socialMedia, index) => (
                    <div
                        key={index}
                        onClick={() => openSocialMedia(socialMedia.url)}
                        onKeyDown={() => openSocialMedia(socialMedia.url)}
                        role="button"
                        tabIndex={index}
                        title={socialMedia.name}
                        className="group hover:translate-y-[-4px] transition-all duration-400"
                    >
                        {
                            <socialMedia.icon
                                size={20}
                                className="group-hover:fill-blue-700"
                            />
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SocialMediaBar
