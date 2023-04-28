import tw from 'tailwind-styled-components'
interface Props {
    children: React.ReactNode
    onClick?: () => void
}

const ButtonStyle = tw.div`
    flex
    border-2
    rounded-md
    border-solid
    border-callToAction
    px-3
    py-2
    text-callToAction
    transition-all
    duration-500
    hover:bg-opacity-25
    hover:bg-callToAction
    w-fit
    justify-center
    items-center
    text-center
`

const Button = (props: Props) => {
    return (
        <ButtonStyle
            onClick={props.onClick}
            role="button"
            tabIndex={0}
            onKeyDown={props.onClick}
        >
            {props.children}
        </ButtonStyle>
    )
}

export default Button
