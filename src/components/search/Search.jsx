// css
import css from './Search.module.css'

// react icons
import { FaSearch } from 'react-icons/fa';


export default function Search() {
    return (
        <div className={css.search}>
            <input type="text" placeholder='جستجو کنید ...' />
            <span>
                <FaSearch style={{ color: '#000' }} />
            </span>
        </div>
    )
}