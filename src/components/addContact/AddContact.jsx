// css
import css from './AddContact.module.css'

// components
import { Back, contactContext, Spinner } from '../index'

// context
import { useContext, useState } from 'react'

// react-Router
import { Link, useNavigate } from 'react-router-dom'

// api
import { createContact } from '../../connectToApi'

export default function AddContact() {

    // context
    const { getGroups, getContacts, loading } = useContext(contactContext)

    // navigate
    const navigate = useNavigate()

    // States
    const [addContact, setAddContact] = useState({})


    // ______ CREATE CONTACTS ______
    const createContactForm = async (e) => {
        e.preventDefault()

        try {

            const { status } = await createContact(addContact)

            if (status === 201) {
                setAddContact({})
                navigate('/')
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    const setContactInfo = (e) => {
        setAddContact({
            ...addContact,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {
                loading ? <Spinner /> :

                    <div className={`${css.AddContact} pt-5 container-md`}>

                        <span><Back /></span>

                        <p className={`rounded shadow col-5 col-md-3 ${css.title}`} >افزودن مخاطب</p>

                        <form className={css.form} onSubmit={createContactForm}>
                            <input
                                name='fullName'
                                value={getContacts.fullName}
                                onChange={setContactInfo}
                                className='form-control shadow'
                                type="text"
                                required={true}
                                placeholder='نام و نام خانوادگی *' />
                            <input
                                name='mobile'
                                value={getContacts.mobile}
                                onChange={setContactInfo}
                                className='form-control shadow'
                                type="text"
                                required={true}
                                placeholder='موبایل *' />
                            <input
                                name='photo'
                                value={getContacts.photo}
                                onChange={setContactInfo}
                                className='form-control shadow'
                                type="text"
                                required={true}
                                placeholder='عکس *' />
                            <input
                                name='email'
                                value={getContacts.email}
                                onChange={setContactInfo}
                                className='form-control shadow'
                                type="text"
                                required={true}
                                placeholder='ایمیل *' />
                            <input
                                name='job'
                                value={getContacts.job}
                                onChange={setContactInfo}
                                className='form-control shadow'
                                type="text"
                                required={true}
                                placeholder='شغل *' />

                            <select
                                name="group"
                                value={getGroups.group}
                                onChange={setContactInfo}
                                className='form-control'
                                required={true}
                                style={{ color: '#E0E0E0', fontFamily: 'vazir' }}
                            >
                                <option className='bg-dark bg-gradient text-white-50' value="">انتخاب گروه *</option>
                                {getGroups.length > 0 &&
                                    getGroups.map(group =>
                                        <option
                                            className='bg-dark bg-gradient text-white' key={group.id} value={group.name}>
                                            {group.name}
                                        </option>
                                    )
                                }
                            </select>

                            <div className={css.btn}>
                                <button className="btn btn-success w-50 shadow">تایید</button>
                                <Link to='/' className="btn btn-danger w-50 shadow">انصراف</Link>
                            </div>

                        </form>



                    </div>
            }
        </>
    )
}