import React from 'react'


export const users = {
    user1: {
        name: 'Nikola Tesla',
        avatar_url: 'https://avatars3.githubusercontent.com/u10001'
    }
}


export const UserContext = React.createContext(users.user1)