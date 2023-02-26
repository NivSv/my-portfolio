interface Props {
    children: React.ReactNode
}

const Button = (props: Props) => {
    return (
        <div
            role="button"
            className="border rounded-md border-1 border-solid border-callToAction px-3 py-2 text-callToAction transition-all duration-500 hover:bg-opacity-25 hover:bg-callToAction w-fit"
        >
            {props.children}
        </div>
    )
}

export default Button
