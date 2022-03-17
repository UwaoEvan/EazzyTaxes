import styles from './list.module.css'

import DetailInput from '../DetailInput/DetailInput'

export default function ListView5 (){
    return (
        <div className={styles.cont}>
            <div className={styles.innerCont}>
                <div className={styles.leftCont}>
                    <p className={styles.num1}>16</p>
                    <p>Tax (see instructions). Check if any from Form(s):</p>
                </div>
                <div className={styles.rightCont}>
                    <div className={styles.check1}>
                        <p className={styles.num}>1</p>
                        <input type='checkbox' className={styles.check}/>
                        <p>8814</p>
                    </div>
                    <div className={styles.check1}>
                        <p className={styles.num}>1</p>
                        <input type='checkbox' className={styles.check}/>
                        <p>4972</p>
                    </div>
                    <div className={styles.check1}>
                        <p className={styles.num}>1</p>
                        <input type='checkbox' className={styles.check}/>
                        <input type='text' className={styles.input}/>
                    <p className={styles.dot}>. . </p>
                    </div>
                </div>
                    <DetailInput label='16' style={{width: '150px'}}/>
               
            </div>
        </div>
    )
}