import styles from './list.module.css'

import DetailInput from '../DetailInput/DetailInput'

export default function ListView ({ label, style, title, style2 }){
    return (
        <div className={styles.cont} style={style}>
            <div className={styles.leftCnt}>
                <p className={styles.number} style={style2}>{label}</p>
                <p>{title}</p>
            </div>
            <DetailInput label={label} style={{width: '150px'}}/>
        </div>
    )
}