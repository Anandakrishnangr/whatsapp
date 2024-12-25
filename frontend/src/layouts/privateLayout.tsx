import  { useState } from 'react'
import useAuthStore from '../store/authStore'

const PrivateLayout = () => {
    const { logout } = useAuthStore()
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const chatList = [
        {
            "description": "AnK",
            "image-url": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Mars",
            "image-url": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Jup",
            "image-url": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "ackles",
            "image-url": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Giess",
            "image-url": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Girair",
            "image-url": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "AnK",
            "image-url": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Mars",
            "image-url": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Jup",
            "image-url": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "ackles",
            "image-url": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Giess",
            "image-url": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Girair",
            "image-url": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "AnK",
            "image-url": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Mars",
            "image-url": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Jup",
            "image-url": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "ackles",
            "image-url": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Giess",
            "image-url": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Girair",
            "image-url": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "AnK",
            "image-url": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Mars",
            "image-url": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Jup",
            "image-url": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "ackles",
            "image-url": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Giess",
            "image-url": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        },
        {
            "description": "Girair",
            "image-url": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
            name: "Ananda",
            time: "10:00",
            Notification: 1
        }
    ]
    const NavList = [
        {
            element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>,
            text: 'Chats'
        },
        {
            element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>,
            text: 'Status'
        }, {
            element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>,
            text: 'Channels'

        },
        {
            element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>,
            text: "Communities"
        },

    ]
    const bottom = [
        {
            element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            , text: "Settings"
        },
        {
            element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            ,
            text: "Profile"
        }
    ]
    const [count, setCount] = useState<string>('');

    const [Chats, setChats] = useState<any>([]);
    const handleClick = () => {
        setChats((prev) => [count, ...prev]); // Increment count by 1
        setCount('');
        // setcount
    };



    return (<>
        <div className='bg-private-background px-8 py-4 h-screen select-none flex justify-center overflow-scroll scrollbar-hide' >
            <div className='bg-black w-full flex h-full items-center' style={{ minWidth: "752px", maxWidth: "1600px" }}>
                <header className='w-24 py-3 h-full border border-opacity-15 border-slate-300 flex flex-col items-center justify-between bg-private-primary'>
                    <div>
                        {NavList.map((item, index) => (
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
                <div id="chatList" className='h-full min-w-96 max-w-100 w-full flex flex-col bg-private-secondary  overflow-y-hidden   border border-transparent'>
                    <div className='flex-shrink-0'>
                        <div className='flex justify-between h-20  px-3 py-4'>
                            <div className='flex items-center'>
                                <span className='text-xl text-white font-bold' >Chats</span>
                            </div>
                            <div className='flex'>
                                <div
                                    className={`relative flex items-center justify-center w-8 h-8 rounded-full p-4 cursor-pointer ${activeIndex === 0
                                        ? 'bg-icons-muted bg-opacity-20'
                                        : ''
                                        }`}
                                >
                                    <div className="text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                        </svg>

                                    </div>
                                </div>
                                <div
                                    className={`relative flex items-center justify-center w-8 h-8 rounded-full p-4 cursor-pointer ${activeIndex === 0
                                        ? 'bg-icons-muted bg-opacity-20'
                                        : ''
                                        }`}
                                >
                                    <div className="text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center bg-slate-400 px-3 mx-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input
                                type="text"
                                className="w-full px-4 py-2 bg-transparent text-gray-700 focus:outline-none focus:ring-0 border-none"
                                placeholder='search'
                            />
                            <button>X</button>

                        </div>
                        <div className='px-3'>
                            <button className='bg-icons-muted' >All</button>
                            <button>Unread</button>
                            <button>Favourites</button>
                            <button>Groups</button>

                        </div>
                    </div>
                    <div className='flex-grow overflow-y-scroll  scrollbar-thin scrollbar-track-private-secondary scrollbar-thumb-private-primary'>
                        {chatList.map((element) => {
                            return <div className='flex p-3 hover:bg-private-primaryHover cursor-pointer'>
                                <div>
                                    <div className="w-12 me-3 h-12 flex justify-center rounded-full p-0 overflow-hidden bg-gray-200 ">
                                        <img
                                            src={element['image-url']}
                                            alt="Rounded Image"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className='w-full border-b border-gray-300 border-opacity-20'>
                                    <div className='text-white flex justify-between'>
                                        <span>{element.name}</span>
                                        <span className='text-white'>{element.time}</span>
                                    </div>
                                    <p className='text-white'>{element.description}</p>
                                </div>
                                <div className='flex justify-center align-middle'>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className='w-full h-full border flex flex-col'>
                    <div className='h-20 bg-whatsapp-dark flex'>

                        <div className='flex items-center p-3'>
                            <div className="w-12  h-12 flex justify-center rounded-full p-0 overflow-hidden bg-gray-200 ">
                                <img
                                    className="object-cover"
                                    src='https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg' />
                            </div>
                        </div>

                        <div className='flex flex-col flex-1 justify-center'>
                            <p className='text-left font-bold text-white'>React Community</p>
                            <p className='m-0'>
                                Anees, Aswin, 8327373772,
                            </p>
                        </div>

                        <div className='flex items-center gap-5 mx-5' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>

                        </div>
                    </div>
                    <div className='flex-1 flex flex-col-reverse  bg-slate-500 overflow-x-hidden scrollbar-gutter-stabl scrollbar-thin scrollbar-track-private-secondary scrollbar-thumb-private-primary'>
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
                    <div className='h-20 bg-white flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        <input className='flex-grow
                         w-full px-4 py-2 bg-transparent text-gray-700 focus:outline-none focus:ring-0 border-none
                        ' placeholder='Type a message'
                            value={count}
                            onKeyDown={(e) => {
                              const isEnterkey = e.key === 'Enter';
                              if(isEnterkey){
                                handleClick()}
                            }}
                            onChange={(e) => setCount(e.target.value)}
                        />
                        <button onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default PrivateLayout