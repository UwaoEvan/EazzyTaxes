import styles from './amount.module.css'

import ListView3 from '../Attach/ListView3/ListView3'
import ListView8 from '../Attach/ListView8/ListView8'
import BlankSpace from '../BlankSpace/BlankSpace'

export default function AmountOwed (){
    return (
        <div className={styles.cont}>
            <div className={styles.leftCont}>
                <h5 className={styles.h5}>Amount <br/> You Owe</h5>
                <p className={styles.leftText}>For details on <br/> how to pay, see <br/> instructions.</p>
            </div>
            <div className={styles.innerCont}>
                <ListView3
                    label='37'
                    title='Subtract line 33 from line 24. This is the amount you owe now . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <div>
                    <div className={styles.note}>
                        <p className={styles.title}><span className={styles.bold}>Note:</span>Schedule H and Schedule SE filers, line 37 may not represent all of the taxes you owe for</p>
                        <BlankSpace style={{backgroundColor: '#ccc'}}/>
                    </div>
                    <div className={styles.note}>
                        <p>2020. See Schedule 3, line 12e, and its instructions for details.</p>
                        <BlankSpace style={{backgroundColor: '#ccc'}}/>
                    </div>
                </div>
                <ListView8
                bg
                    label='36'
                    label2='36'
                    title='Amount of line 34 you want applied to your 2021 estimated tax . . . . . . . . . . . . . . . .'
                />
            </div>
        </div>
    )
}