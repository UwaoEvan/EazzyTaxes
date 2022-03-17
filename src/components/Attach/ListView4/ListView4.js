import styles from './list.module.css'

import BlankSpace from '../../BlankSpace/BlankSpace'
import DetailInput from '../DetailInput/DetailInput'

export default function ListView4 ({ label, title, label2, style }){
    return (
        <div className={styles.content}>
            <div className={styles.details}>
                <p className={styles.number} style={style}>{label}</p>
                <p>{title}</p>
            </div>
            <div className={styles.input}>
                <DetailInput style={{ width: '130px'}} label={label2}/>
                <BlankSpace />
            </div>
        </div>
    )
}