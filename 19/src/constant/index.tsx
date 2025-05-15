import { Channels, ChatIcon, Communities, Profile, Settings, Status } from '@/assets';
import { ReactElement } from 'react';

type NavItem = {
    element: ReactElement;
    text: string;
    to: string;
};

const NavList: NavItem[] = [
    {
        element: <ChatIcon />,
        text: 'Chats',
        to: "/chat"
    },
    {
        element: <Status />,
        text: 'Status',
        to: "/status"
    },
    {
        element: <Channels />,
        text: 'Channels',
        to: "/channels"
    },
    {
        element: <Communities />,
        text: "Communities",
        to: "/communities"
    },

]
const bottom = [
    {
        element: <Settings />
        , text: "Settings",
        to: "Settings"
    },
    {
        element: <Profile />
        ,
        text: "Profile",
        to: "Profile"

    }
]

const chatList = [
    {
        "description": "AnK rr",
        "image-url": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
        name: "Ananda 1",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Mars",
        "image-url": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
        name: "Ananda 2",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Jup",
        "image-url": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
        name: "Ananda 3",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "ackles",
        "image-url": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
        name: "Ananda 4",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Giess",
        "image-url": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
        name: "Ananda 5",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Girair",
        "image-url": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
        name: "Ananda 6",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "AnK",
        "image-url": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
        name: "Ananda 7",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Mars",
        "image-url": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
        name: "Ananda 8",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Jup",
        "image-url": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
        name: "Ananda 9",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "ackles",
        "image-url": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
        name: "Ananda 10",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Giess",
        "image-url": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
        name: "Ananda 11",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Girair",
        "image-url": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
        name: "Ananda 12",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "AnK",
        "image-url": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
        name: "Ananda 13",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Mars",
        "image-url": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
        name: "Ananda 14",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Jup",
        "image-url": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
        name: "Ananda 15",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "ackles",
        "image-url": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
        name: "Ananda 16",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Giess",
        "image-url": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
        name: "Ananda 17",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Girair",
        "image-url": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
        name: "Ananda 18",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "AnK",
        "image-url": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
        name: "Ananda 19",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Mars",
        "image-url": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
        name: "Ananda 20",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "Jup",
        "image-url": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
        name: "Ananda 21",
        time: "10:00",
        Notification: 1
    },
    {
        "description": "ackles",
        "image-url": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
        name: "Ananda 22",
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