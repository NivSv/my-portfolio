export const textVariant = (delay: number | null) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.25,
                delay: delay ?? 0,
            },
        },
    }
}

interface IFadeInProps {
    direction: 'left' | 'right' | 'up' | 'down'
    type: 'spring' | 'tween'
    delay: number
    duration: number
}

export const fadeIn = ({ direction, type, delay, duration }: IFadeInProps) => {
    return {
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    }
}

interface IZoomInProps {
    delay: number
    duration: number
}

export const zoomIn = ({ delay, duration }: IZoomInProps) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'tween',
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    }
}

interface ISlideInProps {
    direction: 'left' | 'right' | 'up' | 'down'
    type: 'spring' | 'tween'
    delay: number
    duration: number
}

export const slideIn = ({
    direction,
    type,
    delay,
    duration,
}: ISlideInProps) => {
    return {
        hidden: {
            x:
                direction === 'left'
                    ? '-100%'
                    : direction === 'right'
                      ? '100%'
                      : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    }
}
