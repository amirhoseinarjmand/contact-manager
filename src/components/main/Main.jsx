// css
import css from './Main.module.css'

// components
import { Contact, contactContext, Spinner } from '../index'

// raect-icons
import { MdPersonAdd } from 'react-icons/md'

// context
import { useContext } from 'react'

// react-router-dom
import { Link } from 'react-router-dom'

export default function Main() {

    const { getContacts, loading } = useContext(contactContext)

    return (
        <div className={`${css.Main} container-md`}>
            <Link
                to={"/add"}
                className={`${css.add} btn rounded shadow`}
                style={{
                    backgroundColor: 'var(--themeColor)',
                    padding: '10px 16px'
                }}
            >
                <span>افزودن مخاطب {" "}</span>
                <span> <MdPersonAdd size={25} /> </span>
            </Link>

            {loading ? <Spinner /> :

                <section className={`${css.card} container`}>

                    {getContacts.length > 0
                        ? getContacts.map(c => (
                            < Contact key={c.id} contact={c} />))
                        : (
                            <div className={`${css.notFound} rounded shadow`}>
                                <p className='h3 text-white'> مخاطب یافت نشد ... </p>
                                <img src={require("../../assets/no-found.gif")} alt="پیدا نشد" />
                            </div>
                        )
                    }

                </section>

            }
        </div>
    )
}