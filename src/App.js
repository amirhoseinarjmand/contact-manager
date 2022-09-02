// css
import './App.css'

// components and context
import { Navbar, Main, contactContext, NotFound, ViewContact, AddContact , UpdateContact } from './components/index'

// hook
import { useState, useEffect } from 'react'

// api
import { getAllContacts, getAllGroups } from './connectToApi'

// reacrt-router-dom
import { Route, Routes } from 'react-router-dom'

function App() {

    const [loading, setLoading] = useState(false)
    const [getContacts, setGetContacts] = useState(false)
    const [getGroups, setGetGroups] = useState(false)

    
    // ______ GET CONTACTS AND GROUPS FROM API ______
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                const { data: contactsData } = await getAllContacts()
                const { data: groupsData } = await getAllGroups()

                setGetContacts(contactsData)
                setGetGroups(groupsData)

                setLoading(false)

            } catch (err) {
                console.log(err.message)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (

        <contactContext.Provider value={{
            loading,
            setLoading,
            getContacts,
            setGetContacts,
            getGroups,
            setGetGroups,
        }}>

            <div className="App">
                <Routes>
                    <Route element={<Navbar />} >
                        <Route path='/' element={<Main />} />
                    </Route>
                    <Route path='add' element={<AddContact />} />
                    <Route path='view/:id' element={<ViewContact />} />
                    <Route path='update/:id' element={<UpdateContact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </contactContext.Provider >

    )
}

export default App;