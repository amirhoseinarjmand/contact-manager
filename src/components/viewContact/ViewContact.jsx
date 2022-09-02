// css
import css from './ViewContact.module.css'

// components and file
import { contactContext, Spinner, Back } from '../index'

// hook
import { useContext, useState, useEffect } from 'react'

// api
import { getContact } from '../../connectToApi'

// react-router
import { useParams } from 'react-router-dom'

export default function ViewContact() {

    // params
    const params = useParams()

    // context
    const { loading, setLoading } = useContext(contactContext)

    // states
    const [contact, setContact] = useState([])

    // ______ GET CONTACT ______
    useEffect(() => {
        const fetchData = async () => {
            try {

                setLoading(true)

                const { data: contactData } = await getContact(params.id)

                setContact(contactData)

                setLoading(false)

            } catch (err) {
                console.log(err.message)
                setLoading(false)
            }
        }

        fetchData()

    }, [])

    return (
        <>
            {
                loading ? <Spinner /> :

                    <div className={`${css.View} container pt-5`}>

                        <span><Back /></span>

                        <p className={`rounded shadow col-5 col-md-3 ${css.title}`} >مشاهده ی مخاطب</p>

                        <section className={`${css.info} shadow rounded`}>
                            <img src={contact.photo} className="shadow rounded" alt="" />

                            <div className={`${css.cntactDetails} shadow rounded`}>
                                <span>
                                    <span>نام :</span>
                                    <span style={{fontSize: '1.2rem' , paddingRight: '1.5rem' , color: '#B71C1C'}}> {contact.fullName} </span>
                                </span>
                                <span>
                                    <span>موبایل :</span>
                                    <span> {contact.mobile} </span>
                                </span>
                                <span>
                                    <span>ایمیل :</span>
                                    <span> {contact.email} </span>
                                </span>
                                <span>
                                    <span>شغل :</span>
                                    <span> {contact.job} </span>
                                </span>
                                <span>
                                    <span>گروه :</span>
                                    <span> {contact.group} </span>
                                </span>
                            </div>
                        </section>

                    </div>
            }
        </>
    )
}