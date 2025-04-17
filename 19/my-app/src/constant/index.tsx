import { Channels, ChatIcon, Communities, Profile, Settings, Status } from '@/assets';
import { ReactElement } from 'react';

type NavItem = {
    element: ReactElement;
    text: string;
  };

const NavList : NavItem[]= [
    {
        element: <ChatIcon />,
        text: 'Chats'
    },
    {
        element: <Status />,
        text: 'Status'
    }, {
        element: <Channels />,
        text: 'Channels'

    },
    {
        element: <Communities />,
        text: "Communities"
    },

]
const bottom = [
    {
        element: <Settings />
        , text: "Settings"
    },
    {
        element: <Profile />
        ,
        text: "Profile"
    }
]

 const chatList = [
        {
            "description": "AnK rr",
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

export default {
    bottom,
    NavList,
    chatList
}