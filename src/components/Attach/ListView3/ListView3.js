import styles from './list.module.css'

import DetailInput from '../DetailInput/DetailInput'
import CheckBox from '../../CheckBox/CheckBox'

export default function ListView ({ style, label,title, check, label2}){
    return(
        <div className={styles.cont} style={style}>
            <div className={styles.check}>
                <p className={styles.number}>{label}</p>
                <p>{title}</p>
            </div>
            <div className={styles.bottomCnt}>
                <div className={styles.leftCheck}>
                    <div className={styles.arrow}></div>
                    {check && <CheckBox/>}
                </div>
            <DetailInput label={label} label2={label2} style={{width: '150px'}}/>
            </div>
        </div>
    )
}