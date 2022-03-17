import styles from './list.module.css'

import Arrow from '../../Arrow/Arrow'
import BlankSpace from '../../BlankSpace/BlankSpace'
import RoutingNumber from '../../RoutingNumber/RoutingNumber'

export default function ListView6 () {
    return (
        <div className={styles.cont}>
            <div className={styles.leftCont}>
                <div className={styles.num}>
                    <Arrow/>
                    <p className={styles.numDetails}>b</p>
                </div>
                <p className={styles.title}>Routing Number</p>
                <RoutingNumber/>
            </div>
            <div className={styles.leftCont}>
                <div className={styles.num1}>
                    <Arrow/>
                    <p className={styles.numDetails}>c</p>
                    <p className={styles.title1}>Type</p>
                </div>
                <div className={styles.num1}>
                    <input type='checkbox'/>
                    <p className={styles.title1}>Checking</p>
                </div>
                <div className={styles.num1}>
                    <input type='checkbox'/>
                    <p className={styles.title1}>Savings</p>
                </div>
                <BlankSpace/>
            </div>
        </div>
    )
}