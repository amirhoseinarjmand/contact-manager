// css
import css from './UpdateContact.module.css'

// react-router
import { useParams, useNavigate, Link } from 'react-router-dom'

// hook
import { useState, useEffect, useContext } from 'react'

// api
import { updateContact, getContact } from '../../connectToApi'

// components
import { contactContext, Spinner, Back } from '../index'

export default function UpdateContact() {

    // params
    const params = useParams()

    // states
    const [contact, setContact] = useState({})

    // context
    const { loading, setLoading, getGroups } = useContext(contactContext)

    // navigate
    const navigate = useNavigate()


    // _______ GET CONTACT ______
    useEffect(() => {
        const fetchData = async () => {
            try {

                setLoading(true)

                const { data } = await getContact(params.id)

                setContact(data)

                setLoading(false)

            } catch (err) {
                console.log(err.message)
                setLoading(false)
            }
        }

        fetchData()

    }, [])

    const setContactInfo = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    // _______ CREATE CONTACT ______
    const submitForm = async (e) => {
        e.preventDefault()

        try {

            setLoading(true)

            const { data } = await updateContact(contact, params.id)

            setLoading(false)

            if (data) {
                navigate("/");
            }

        } catch (err) {
            console.log(err.message)
            setLoading(false)
        }
    }

    return (
        <>
            {
                loading ? <Spinner /> :

                    <div className={`${css.Update} pt-5 container-md`}>

                        <span><Back /></span>

                        <p className={`rounded shadow col-5 col-md-3 ${css.title}`} >ویرایش مخاطب</p>

                        <section className={css.info}>
                            <img src={contact.photo} className="shadow rounded" alt="" />

                            <form className={css.form} onSubmit={submitForm}>

                                <input
                                    name='fullName'
                                    type='text'
                                    value={contact.fullName}
                                    onChange={setContactInfo}
                                    className='form-control shadow'
                                    required={true}
                                    placeholder='نام و نام خانوادگی *'
                                />
                                <input
                                    name='mobile'
                                    type='text'
                                    value={contact.mobile}
                                    onChange={setContactInfo}
                                    className='form-control shadow'
                                    required={true}
                                    placeholder='موبایل *'
                                />
                                <input
                                    name='photo'
                                    type='text'
                                    value={contact.photo}
                                    onChange={setContactInfo}
                                    className='form-control shadow'
                                    required={true}
                                    placeholder='عکس *'
                                />
                                <input
                                    name='email'
                                    type='text'
                                    value={contact.email}
                                    onChange={setContactInfo}
                                    className='form-control shadow'
                                    required={true}
                                    placeholder='ایمیل *'
                                />
                                <input
                                    name='job'
                                    type='text'
                                    value={contact.job}
                                    onChange={setContactInfo}
                                    className='form-control shadow'
                                    required={true}
                                    placeholder='شغل *'
                                />
                                <select
                                    name='group'
                                    value={contact.group}
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
                        </section>
                    </div>
            }
        </>
    )
}