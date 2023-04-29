import tw from 'tailwind-styled-components'
interface Props {
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
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
    cursor-pointer
    ${(props: Props) => (props.size === 'small' ? 'text-sm' : '')}
    ${(props: Props) => (props.size === 'medium' ? 'text-base' : '')}
    ${(props: Props) => (props.size === 'large' ? 'text-lg' : '')}
    ${(props: Props) => (props.disabled ? 'opacity-50' : '')}
    ${(props: Props) => (props.disabled ? 'cursor-not-allowed' : '')}
`

const Button = (props: Props) => {
    return (
        <ButtonStyle
            size={props.size}
            disabled={props.disabled}
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
