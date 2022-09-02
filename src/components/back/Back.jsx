// react-router-dom
import { Link } from 'react-router-dom'

// react icons
import { HiArrowSmLeft } from 'react-icons/hi'

export default function Back() {
    return (
        <>
            <Link
                to='/'
                className="btn shadow rounded"
                style={{ backgroundColor: 'var(--themeColor)' }}
            >
                <HiArrowSmLeft size={20} />
                <span style={{ marginLeft: '0.4rem' }}>بازگشت</span>
            </Link>
        </>
    )
}