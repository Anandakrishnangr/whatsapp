import { Mic, PlusIcon, Search, SendIcon, Smile, ThreeDotVertical } from "@/assets";
import { useState } from "react";

export const ChatGround = () => {
    const [count, setCount] = useState<string>('');
    const [Chats, setChats] = useState<string[]>([]);
    const handleClick = () => {
        setChats((prev) => [count, ...prev]); // Increment count by 1
        setCount('');
    };
    return <>
        <div className='h-16 bg-private-secondary flex text-white'>

            <div className='flex items-center p-3'>
                <div className="w-12  h-12 flex justify-center rounded-full p-0 overflow-hidden bg-gray-200 ">
                    <img
                        className="object-cover"
                        src='https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg' />
                </div>
            </div>

            <div className='flex flex-col flex-1 justify-center'>
                <p className='text-left font-bold text-white'>React Community</p>
                <p className='m-0 text-icons-muted text-xs'>
                    Anees, Aswin, 8327373772,
                </p>
            </div>

            <div className='flex items-center gap-5 mx-5' >
                <Search color='white' />
                <ThreeDotVertical color='white' />

            </div>
        </div>
        <div className='flex-1 flex flex-col-reverse  chat-bg backdrop-blur-2xl overflow-x-hidden scrollbar-gutter-stabl scrollbar-thin scrollbar-track-private-secondary scrollbar-thumb-private-primary'>
            {Chats.map((num, index) => {
                if (index % 2 == 0) {
                    return <div>
                        <div className="chat-bubble left-top">
                            <div className="chat-text">
                                <div className='flex'>
                                    <p>{num}</p>
                                    <span className="flex items-end whitespace-nowrap right-2 text-xs text-gray-500">
                                        10:11 AM
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                } else {
                    return <div className=' flex justify-end'>
                        <div className="chat-bubble right-top relative bg-blue-200 rounded-lg p-4 max-w-xs ml-auto">
                            <div className="chat-text text-sm text-black">
                                <div className='flex'>

                                    <p>{num}</p>
                                    <span className="flex items-end whitespace-nowrap right-2 text-xs text-gray-500">
                                        10:11 AM
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            })}



        </div>
        <div className='h-16 bg-private-primary text-white  py-2 flex'>
            <button className=' justify-items-center w-16'>
                <PlusIcon />
            </button>

            <div className='flex  flex-grow
 w-full bg-private-primaryHover rounded-sm px-2'>

                <button>
                    <Smile />
                </button>

                <input className=' px-4 py-2 text-white focus:outline-none focus:ring-0 border-none w-full ' placeholder='Type a message'
                    value={count}
                    onKeyDown={(e) => {
                        const isEnterkey = e.key === 'Enter';
                        if (isEnterkey) {
                            handleClick()
                        }
                    }}
                    onChange={(e) => setCount(e.target.value)}
                />
            </div>
            {count.length ?
                <button className='text-white justify-items-center w-16' onClick={handleClick}>
                    <SendIcon />
                </button>
                :
                <button className='text-white justify-items-center w-16' onClick={handleClick}>
                    <Mic />
                </button>
            }
        </div>
    </>
}