import { NavBar } from '@/components/navbar/navbar';
import { ChatGround } from '@/features/chat/components/ChatGround';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
    return (<>
        <div className='bg-private-background  px-8 py-4 h-screen select-none flex justify-center overflow-scroll scrollbar-hide' >
            <div className='bg-black w-full flex h-full items-center' style={{ minWidth: "752px", maxWidth: "1600px" }}>
                <NavBar />
                <div id="chatList" className='h-full min-w-96 max-w-100 w-full flex flex-col bg-private-secondary  overflow-y-hidden   border border-transparent'>
                    <Outlet />
                </div>
                <div className='w-full h-full border flex flex-col'>
                    <ChatGround />
                </div>
            </div>
        </div>
    </>
    )
}

export default PrivateLayout