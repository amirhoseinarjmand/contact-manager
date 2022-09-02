// css
import css from './Spinner.module.css'

// assets
import spinnerGif from '../../assets/Spinner.gif'

export default function Spinner() {
    return (
        <div className={css.Spinner}>
            <img src={spinnerGif} alt="" />
        </div>
    )
}