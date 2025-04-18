import { Folder, Search, ThreeDotVertical } from "@/assets"
import constant from '@/constant';
import { Link } from "react-router-dom";

export const ChatList = () => {
    const { chatList } = constant
    const activeIndex = 0
    return <><div className='flex-shrink-0'>
        <div className='flex justify-between h-16  px-3 py-4'>
            <div className='flex items-center'>
                <span className='text-xl text-white font-bold' >Chats</span>
            </div>
            <div className='flex'>
                <div
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full p-4 cursor-pointer ${activeIndex === 0
                        ? 'bg-private-primary-transparent'
                        : ''
                        }`}
                >
                    <div className="text-white">
                        <Folder />
                    </div>
                </div>
                <div
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full p-4 cursor-pointer ${activeIndex === 0
                        ? 'bg-private-primary-transparent'
                        : ''
                        }`}
                >
                    <div className="text-white">
                        <ThreeDotVertical />
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center bg-private-primaryHover text-white px-3 mx-3'>
            <Search />
            <input
                type="text"
                className="w-full px-4 py-2 bg-transparent text-white focus:outline-none focus:ring-0 border-none"
                placeholder='Search'
            />
            <button>X</button>

        </div>
        <div className='px-3 py-2 flex gap-1'>
            <button className='bg-private-primaryHover text-green-800 px-3 py-1 rounded-4xl' >All</button>
            <button className='bg-private-primaryHover text-icons-muted px-3 py-1 rounded-4xl' >Unread</button>
            <button className='bg-private-primaryHover  text-icons-muted px-3 py-1 rounded-4xl' >Favourites</button>
            <button className='bg-private-primaryHover text-icons-muted px-3 py-1 rounded-4xl' >Groups</button>

        </div>
    </div>
        <div className='flex-grow overflow-y-scroll  scrollbar-thin scrollbar-track-private-secondary scrollbar-thumb-private-primary'>
            {chatList.map((element,index) => {
                return <Link to={`/chat/${index}`} className='flex p-3 hover:bg-private-primaryHover border-b border-private-primary-transparent/30 hover:border-private-primary-transparent/10 cursor-pointer'>
                    <div className='flex w-full'>
                        <div>
                            <div className="w-12 me-3 h-12 flex justify-center rounded-full p-0 overflow-hidden bg-gray-200 ">
                                <img
                                    src={element['image-url']}
                                    alt="Rounded Image"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className='w-full '>
                            <div className='text-white flex justify-between'>
                                <span>{element.name}</span>
                                <span className='text-icons-muted text-xs'>{element.time}</span>
                            </div>
                            <p className='text-icons-muted'>{element.description}</p>
                        </div>
                        <div className='flex justify-center align-middle'>
                        </div>
                    </div>
                </Link>
            })}
        </div>
    </>
}