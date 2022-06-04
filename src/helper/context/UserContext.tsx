import React, { createContext, useContext, useState} from 'react';
import { appleAuthRequest } from '../api/appleAuthAPI';

type UserContextState = [appleAuthRequest | null, (user: appleAuthRequest) => void]

const UserContext = createContext<UserContextState | null>(null);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => { 
    const userState = useState<appleAuthRequest | null>(null);
    return (
        <UserContext.Provider value={ userState }>{children}</UserContext.Provider>
    );
}

// Context를 니중에 사용하기 위한
export const useUserState = () => { 
    const userState = useContext(UserContext);
    if (!userState) { 
        throw new Error('UserContext is not used');
    }
    return userState;
}