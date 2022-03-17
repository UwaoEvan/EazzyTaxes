import styles from './list.module.css'

import Arrow from '../../Arrow/Arrow'
import BlankSpace from '../../BlankSpace/BlankSpace'
import AccountNumber from '../../AccountNumber/AccountNumber'

export default function ListView7 (){
    return (
        <div className={styles.cont}>
            <div className={styles.leftCont}>
                <div className={styles.num}>
                    <Arrow/>
                    <p className={styles.numDetails}>d</p>
                </div>
                <p className={styles.title}>Account Number</p>
                <AccountNumber/>
            </div>
            <div className={styles.leftCont}>
                <BlankSpace/>
            </div>
        </div>
    )
}