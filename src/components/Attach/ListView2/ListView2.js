import styles from './view.module.css'

import DetailInput from '../DetailInput/DetailInput'

export default function ListView ({ style,label, label2,label3, title1, title2, style2}){
    return (
        <div className={styles.cont} style={style}>
            <p className={styles.number} style={style2}>{label}</p>
            <p className={styles.title}>{title1}</p>
            <DetailInput label={label} style={{borderRight: '1px solid #000'}}/>
            <div style={{display: 'flex'}}>
                <p className={styles.number}>{label2}</p>
                <p className={styles.title}>{title2}</p>
            </div>
            <DetailInput label={label3} style={{width: '150px'}} />
        </div>
    )
}