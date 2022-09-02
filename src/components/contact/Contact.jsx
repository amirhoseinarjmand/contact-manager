// css
import css from './Contact.module.css'

// react icons
import { BsFillEyeFill } from 'react-icons/bs'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

// react-router
import { Link } from 'react-router-dom'

export default function Contact({ contact }) {


    return (
        <div className={`${css.Contact} rounded shadow`}>

            <img src={contact.photo} className="rounded shadow" alt="" />

            <div className={`${css.info} rounded shadow`}>
                <span>
                    <span>نام : {" "}</span>
                    <span style={{ fontWeight: 'bolder' }}>{contact.fullName}</span>
                </span>
                <span>
                    <span>موبایل : {" "}</span>
                    <span>{contact.mobile}</span>
                </span>
                <span>
                    <span>ایمیل : {" "}</span>
                    <span style={{ fontSize: '0.9rem' }}> {contact.email} </span>
                </span>
                <span>
                    <span>شغل : {" "}</span>
                    <span>{contact.job}</span>
                </span>
            </div>

            <div className={css.btn}>
                <Link to={`view/${contact.id}`} className='btn shadow bg-warning'>
                    <BsFillEyeFill size={16} />
                </Link>
                <Link to={`update/${contact.id}`} className='btn shadow bg-primary'>
                    <FaPencilAlt size={16} />
                </Link>
                <button className='btn shadow bg-danger'>
                    <FaTrash size={16} />
                </button>
            </div>
        </div>
    )
}