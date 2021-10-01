// chat app users
export default [
    {
        id: 2,
        first_name: 'Venkat',
        last_name: 'acpl',
        photo_url: require('Assets/avatars/user-1.jpg'),
        last_chat_date: 'yesterday',
        isActive: true,
        status: "online",
        last_chat: 'Hi welcome.',
        new_message_count: 5,
        isSelectedChat: true,
        previousChats: [
            {
                message: 'Sed mollis, mi in malesuada semper, ipsum nulla luctus sem',
                sent: '12:47 PM',
                isAdmin: false
            },
            {
                message: 'Vivamus aliquet ligula augue, et suscipit mauris sollicitudin ',
                sent: '12:49 PM',
                isAdmin: true
            },
            {
                message: 'Phasellus in felis posuere, fringilla ligula eget, tristique diam',
                sent: '12:51 PM',
                isAdmin: true
            },
            {
                message: 'Ut vel consectetur ligula, non tincidunt elit. Nulla pellentesque finibus consequat.',
                sent: '12:55 PM',
                isAdmin: false
            }
        ]
    },
    {
        id: 3,
        first_name: 'Sundar',
        last_name: 'Dean',
        photo_url: require('Assets/avatars/user-2.jpg'),
        last_chat_date: 'today',
        isActive: true,
        status: "online",
        last_chat: 'Hi',
        new_message_count: 10,
        isSelectedChat: false,
        previousChats: [
            {
                message: 'Maecenas lacus nunc, condimentum sed arcu eget,',
                sent: '12:47 PM',
                isAdmin: false
            },
            {
                message: 'Duis ullamcorper laoreet nulla, sed mollis urna semper nec. Cras ac bibendum neque.',
                sent: '12:49 PM',
                isAdmin: true
            },
            {
                message: 'Pellentesque interdum aliquam nunc quis viverra. Morbi placerat massa eget neque feugiat, sit amet porta nibh vehicula.',
                sent: '12:51 PM',
                isAdmin: true
            },
            {
                message: 'Sed elementum vel ex ullamcorper egestas. Phasellus laoreet nec sem et tempus. Integer pellentesque sapien augue',
                sent: '12:55 PM',
                isAdmin: false
            }
        ]
    },
    
]