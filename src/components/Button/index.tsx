import clsx from 'clsx'
interface Props {
    children: React.ReactNode
    className?: string
}

const Button = (props: Props) => {
    return (
        <div
            role="button"
            className={clsx(
                'flex border rounded-md border-1 border-solid border-callToAction px-3 py-2 text-callToAction transition-all duration-500 hover:bg-opacity-25 hover:bg-callToAction w-fit justify-center items-center text-center',
                props.className
            )}
        >
            {props.children}
        </div>
    )
}

export default Button
