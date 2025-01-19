import { useEffect, useState } from "react"
import { CapsuleButton, Input } from "../../../components"
import OtpInput from "../../../components/form/otpInput"
import { useSignIn } from "../hooks"

export const Login = () => {
    const { data, handleLogin, setdata } = useSignIn()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setdata((prev) => ({ ...prev, [name]: value }))
    }
    const [index, setindex] = useState(0)
    return (
        <div>
            <div className=" relative">
                <Slider index={0} activeIndex={index}>
                    <h1 className="text-3xl font-bold">Login</h1>
                </Slider>
                <Slider index={1} activeIndex={index}>
                    <h1 className="text-3xl font-bold">OTP</h1>
                </Slider>
            </div>
            <button onClick={() => setindex((prev) => prev - 1)} className="mx-3" >-</button>
            <button onClick={() => setindex((prev) => prev + 1)} className="mx-3" >+</button>
            <>
                <Input value={data.mobile} onChange={handleChange} name="mobile" label="Phone Number" />
                <div className="flex flex-row-reverse">
                    <CapsuleButton onClick={handleLogin} label="Next" className="my-2 " />
                </div>
            </>

            <>
                <OtpInput value={data.otp} onChange={(e, value) => setdata((prev) => ({ ...prev, otp: value }))} maxLength={6} name="otp" label="OTP" />
                <div className="flex flex-row-reverse">
                    <CapsuleButton onClick={handleLogin} label="Verify" className="my-2 " />
                </div>
            </>
        </div >
    )
}

interface SliderProps {
    index: number;
    activeIndex: number;
    children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ index, activeIndex, children }) => {
    const [previousActiveIndex, setPreviousActiveIndex] = useState(0);


    // let direction = ''
    useEffect(() => {
        // console.log({ activeIndex, previousActiveIndex })
        // direction = index === activeIndex
        //     ? ''
        //     : activeIndex < previousActiveIndex
        //         ?
        //         'slide-in-left'
        //         :
        //         'slide-in-right'
        // console.log(direction)
        setPreviousActiveIndex(activeIndex);
    }, [activeIndex]);
    
    return <div
        className={`absolute inset-0 transition-opacity transform duration-500 flex items-center justify-center ${index === activeIndex
            ? `opacity-100`
            : `opacity-0 pointer-events-none ${index === activeIndex
            ? ''
            : activeIndex < previousActiveIndex
                ?
                'slide-in-left'
                :
                'slide-in-right'}`
            }`}
    >
        {children}
    </div>
};