import styles from './qstn.module.css'
import CheckBox from '../CheckBox/CheckBox'

export default function Question () {
    return (
        <div className={styles.cont}>
            <p className={styles.text}>
                At any time during 2020, did you receive, sell, send, exchange, or otherwise acquire any financial interest in any virtual currency?
            </p>
            <CheckBox label="Yes"/>
            <CheckBox label="No"/>
        </div>
    )
}