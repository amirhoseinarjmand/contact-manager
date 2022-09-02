// css
import css from './Navbar.module.css'

// react icons
import { FcContacts } from 'react-icons/fc';

// components
import { Search } from '../index'

// react-router
import { Outlet } from 'react-router';

export default function Navbar() {
    return (
        <>
            <div className={`${css.navbar} bg-dark text-white shadow`} >
                <div>
                    <FcContacts size={50} />
                    <span>
                        اپلیکیشن مدیریت {" "}
                        <span style={{ color: 'var(--themeColor)' }}> مخاطبین </span>
                    </span>
                </div>

                <Search />
            </div >

            <Outlet />
        </>
    )
}