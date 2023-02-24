import { email } from '../../data/data.constant'

const EmailBar = () => {
    const sendToEmail = () => {
        window.location.href = 'mailto:' + email
    }

    return (
        <div className="fixed bottom-0 right-[4%] flex flex-col-reverse items-center">
            <div className=" bg-black w-[2px] h-[80px]"></div>
            <div className="w-0">
                <div
                    dir="rtl"
                    className=" rotate-90 whitespace-nowrap hover:translate-y-[-4px] transition-all duration-400 hover:text-blue-700"
                    role="button"
                    tabIndex={0}
                    title={email}
                    onKeyDown={sendToEmail}
                    onClick={sendToEmail}
                >
                    {email}
                </div>
            </div>
        </div>
    )
}

export default EmailBar
