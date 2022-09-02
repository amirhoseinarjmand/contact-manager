import { createContext } from "react";

const contactContext = createContext({
    loading: false,
    setLoading: () => { },
    getContacts: [],
    setGetContacts: () => { },
    getGroups: [],
    setGetGroups: () => { },
})

export default contactContext;