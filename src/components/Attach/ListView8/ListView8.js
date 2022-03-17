import styles from './list.module.css'

import Arrow from '../../Arrow/Arrow'
import DetailInput from '../DetailInput/DetailInput'
import BlankSpace from '../../BlankSpace/BlankSpace'

export default function ListView8 ({ label, label2, title, bg}){
    return (
        <div className={styles.content}>
            <div className={styles.details}>
                <p className={styles.number}>{label}</p>
                <p>{title}</p>
            </div>
            <div className={styles.input}>
                <div className={styles.arrowCont}>
                    <Arrow/>
                    <DetailInput style={{ width: '130px', marginLeft: 10, borderBottom: 'none'}} label={label2}/>
                </div>
                {bg ? <BlankSpace  style={{backgroundColor: '#ccc'}}/> : <BlankSpace/>}
            </div>
        </div>
    )
}