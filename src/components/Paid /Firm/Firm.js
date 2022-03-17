import styles from './firm.module.css'

import Arrow from '../../Arrow/Arrow'

export default function Firm ({ name, phone, style, check }){
    return (
        <div className={styles.cont} style={style}>
            <div className={styles.name}>
                <div className={styles.lCheck}>
                    <p className={styles.label}>{name}</p>
                    <Arrow/>
                </div>
                <div className={styles.inputCont}>
                    <input type='text' className={styles.input}/>
                </div>
            </div>
            <div className={styles.phone}>
                <div className={styles.lCheck}>
                    <p className={styles.label}>{phone}</p>
                    {check && <Arrow/>}
                </div>
                <div className={styles.inputCont}>
                    <input type='text' className={styles.input}/>
                </div>
            </div>
        </div>
    )
}