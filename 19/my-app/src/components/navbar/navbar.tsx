import Constants from '@/constant/index'
import useAuthStore from '@/store/authStore'
import { useState } from 'react'

export const NavBar = () => {
    const { logout } = useAuthStore()
    const { NavList, bottom } = Constants
    const [activeIndex, setActiveIndex] = useState(0)
    return  <header className='w-24 py-3 h-full border border-opacity-15 border-slate-300 flex flex-col items-center justify-between bg-private-primary'>
    <div>
        {NavList.map((item, index) => (
            <div className='w-12 h-12 flex justify-center'>
                <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full p-4 cursor-pointer ${activeIndex === index
                        ? 'bg-private-primary-transparent'
                        : ''
                        }`}
                >
                    <div className="text-white ">{item.element}</div>
                    <span className="absolute left-14 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {item.text}
                    </span>
                </div>
            </div>

        ))}
    </div>

    <div>
        <button onClick={() => logout()} >Lt</button>
        {bottom.map((item, index) => (
            <div className='w-12 h-12 flex justify-center'>
                <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full p-4 cursor-pointer ${activeIndex === index
                        ? 'bg-icons-muted bg-opacity-20'
                        : ''
                        }`}
                >
                    <div className="text-white">{item.element}</div>
                    <span className="absolute left-14 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {item.text}
                    </span>
                </div>
            </div>
        ))}
    </div>
</header>
}