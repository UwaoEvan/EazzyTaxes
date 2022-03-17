import styles from './refund.module.css'

import ListView from '../Attach/ListView/ListView'
import ListView3 from '../Attach/ListView3/ListView3'
import ListView6 from '../Attach/ListView6/ListView6'
import ListView7 from '../Attach/ListView7/ListView7'
import ListView8 from '../Attach/ListView8/ListView8'

export default function Refund (){
    return (
        <div className={styles.cont}>
            <div className={styles.leftCont}>
                <h4 className={styles.h4}>Refund</h4>
                <p className={styles.leftText}>Direct deposit? <br/> See instructions.</p>
            </div>
            <div className={styles.innerCont}>
                <ListView
                    label='34'
                    title='If line 33 is more than line 24, subtract line 24 from line 33. This is the amount you overpaid . . . . . . . . . . . . .'
                />
                <ListView3
                    check
                    label='35a'
                    title='Amount of line 34 you want refunded to you. If Form 8888 is attached, check here . . . . . . . . . . . . . . . . '
                />
                <ListView6/>
                <ListView7/>
                <ListView8
                    label='36'
                    label2='36'
                    title='Amount of line 34 you want applied to your 2021 estimated tax . . . . . . . . . . . . . . . .'
                />
            </div>
        </div>
    )
}