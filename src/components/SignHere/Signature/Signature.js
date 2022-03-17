import styles from './sign.module.css'

import Pin from '../../Pin/Pin'
import Arrow from '../../Arrow/Arrow'

export default function Signature (props){
    return (
        <div className={styles.cont}>
            <div className={styles.sign}>
                <div className={styles.sign1}>
                    <p className={styles.title}>{props.signature}</p>
                    <div className={styles.space1}></div>
                </div>
                <div className={styles.date}>
                    <p className={styles.title}>Date</p>
                    <div className={styles.space2}></div>
                </div>
                <div className={styles.occupation}>
                    <p className={styles.title}>{props.occupation}</p>
                    <input type='text' className={styles.input}/>
                </div>
                <div className={styles.pin}>
                    <p className={styles.title}>{`If the IRS sent ${props.status} an Identity`} <br/>Protection PIN, enter it here</p>
                    <div className={styles.sign3}>
                        <p className={styles.title}>(see ins.)</p>
                        <div className={styles.sign4}>
                            <Arrow/>
                            <Pin style={{marginLeft: '5px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}