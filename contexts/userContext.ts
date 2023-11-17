import { createContext } from 'react';
import { userType } from '@/types/user';

const  userContext = createContext<userType | null>(null);

export default userContext;