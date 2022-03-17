import styles from './third.module.css'

import Arrow from '../Arrow/Arrow'
import Pin from '../Pin/Pin'

export default function ThirdParty (){
    return (
        <div className={styles.cont}>
            <div className={styles.leftCont}>
                <h5>Third Party <br/> Designee</h5>
            </div>
            <div className={styles.innerCont}>
                <p className={styles.title}>Do you want to allow another person to discuss this return with the IRS? See</p>
                <div className={styles.instructions}>
                    <p>instructions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                    <div className={styles.checks}>
                        <Arrow/>
                        <div className={styles.checkB}>
                            <input type='checkbox'/>
                            <p className={styles.bold}>Yes</p>
                            <p>Complete below.</p>
                        </div>
                        <div className={styles.checkB}> 
                            <input type='checkbox'/>
                            <p className={styles.bold}>No</p>
                        </div>
                    </div>
                </div>
                <div className={styles.designee}>
                    <div className={styles.name}>
                        <div className={styles.labelCont}>
                            <p className={styles.title}>Designee's</p>
                            <div className={styles.arr}>
                                <p className={styles.label}>name</p>
                                <Arrow/>
                            </div>
                        </div>
                        <input type='text' className={styles.input}/>
                    </div>
                    <div className={styles.name}>
                        <div className={styles.labelCont}>
                            <p className={styles.title}>Phone</p>
                            <div className={styles.arr}>
                                <p className={styles.label}>no.</p>
                                <Arrow/>
                            </div>
                        </div>
                        <input type='text' className={styles.input}/>
                    </div>
                    <div className={styles.name}>
                        <div className={styles.labelCont}>
                            <p className={styles.title}>Personal identification</p>
                            <div className={styles.arr}>
                                <p className={styles.label}>number (PIN)</p>
                                <Arrow/>
                                <Pin style={{marginLeft: 30, borderBottom: 'none'}}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}