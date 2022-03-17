import styles from './filling.module.css'

import CheckBox from '../CheckBox/CheckBox'
import Arrow from '../Arrow/Arrow'

export default function FillingStatus () {
    const labels = [
        "Single",
        "Married filling jointly",
        "Married filling separately (MFS)",
        "Head of household (HOH)",
        "Qualifying widower(er) (QW)"
    ]

    const checks = labels.map((label, i) => <CheckBox key={i} label={label}/>)
    return (
        <div className={styles.container}>
            <div className={styles.leftCont}>
                <h6>Filling Status</h6>
                <p className={styles.leftText}>Check only <br/> one box</p>
            </div>
            <div className={styles.content}>
                <div className={styles.checks}>
                    { checks }
                </div>
                <div className={styles.textCont}>
                    <p className={styles.text}>
                        If you checked the MFS box, enter the name of your spouse. If you checked the HOH or QW box, enter the child's name if the qualifying
                    </p>
                    <div className={styles.bottomCont}>
                        <p className={styles.text}>person is a child but not your dependent</p>
                        <div className={styles.inputCont}>
                        <Arrow/>
                        <input type='text' className={styles.input}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}