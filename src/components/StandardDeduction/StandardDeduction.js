import styles from './std.module.css'

import CheckBox from '../CheckBox/CheckBox'

export default function StandardDeduction (){
    return (
        <div>
            <div className={styles.cont}>
                <div className={styles.sidebar}>
                    <h4>Standard <br/> Deduction</h4>
                </div>
                <div className={styles.innerCont}>
                    <h5>Someone can claim:</h5>
                    <CheckBox label="You as a dependent"/>
                    <CheckBox label="Your spouse as a dependent"/>
                    <CheckBox label="Spouse itemizes on a separate return or you were a dual-status alien"/>
                </div>
            </div>
            <div className={styles.blindCont}>
                <div className={styles.bsidebar}>
                    <h5>Age/Blindness</h5>
                </div>
                <div className={styles.innerCont}>
                    <div className={styles.check}>
                        <h5>You:</h5>
                        <CheckBox label="Were born before January 2, 1956"/>
                        <CheckBox label="Are you blind"/>
                    </div>
                    <div className={styles.check}>
                        <h5>Spouse:</h5>
                        <CheckBox label="Was born before January 2, 1956"/>
                        <CheckBox label="Is blind"/>
                    </div>
                </div>
            </div>
        </div>
    )
}