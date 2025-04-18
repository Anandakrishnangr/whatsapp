import { Search } from '@/assets';
import { NavBar } from '@/components/navbar/navbar';
import constant from '@/constant';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
    const { chatList } = constant
    return (<>
        <div className='bg-private-background  px-8 py-4 h-screen select-none flex justify-center overflow-scroll scrollbar-hide' >
            <div className='bg-black w-full flex h-full items-center' style={{ minWidth: "752px", maxWidth: "1600px" }}>
                <NavBar />
                <Outlet />
                <div className='w-3xl h-full bg-private-secondary text-white overflow-x-hidden overflow-y-scroll'>
                    <div className='p-4 font-bold sticky top-0 bg-private-secosndary bg-amber-200'>
                        <span className='pe-4'>X</span>
                        <span>Group Info</span>
                    </div>
                    <div className='justify-items-center'>
                        <img src='/src/assets/logo.png' className='h-44 rounded-b-full' />
                    </div>
                    <div className='text-center'>
                        <div className='text-2xl font-bold'>Bsc Cs Group </div>
                        <div className=''>Group </div>
                        <div>18 members</div>

                    </div>
                    <div className='px-4'>
                        <div className='text-whatsapp-primary'>Add group description</div>
                        <div>Group Created by ananda, on 01/01/2021 at 17:39</div>
                        <div className='flex justify-between'>
                            <span>
                                Media, links and docs
                            </span>
                            <span>125 =</span>
                        </div>
                        <div className='flex justify-between'>
                            <div className='bg-amber-100 h-20 w-20'>x</div>
                            <div className='bg-amber-100 h-20 w-20'>x</div>
                            <div className='bg-amber-100 h-20 w-20'>x</div>
                        </div>

                    </div>
                    <div>
                        Starred Messages
                    </div>
                    <div>
                        Mute Notification
                    </div>
                    <div>
                        Encryption
                        <div>
                            Messages are end-to-end encrypted. Click to learn more.
                        </div>
                    </div>
                    <div>
                        Disappearing message
                    </div>
                    <div className=' flex justify-between'>
                        <span>16 members</span>
                        <Search />
                    </div>
                    <div>
                        {chatList.map((elem) => <div>
                            <div>{elem.name}</div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default PrivateLayout