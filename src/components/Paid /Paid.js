import styles from './paid.module.css'

import Firm from './Firm/Firm'

export default function Paid (){
    return (
        <div className={styles.cont}>
            <div className={styles.leftCont}>
                <h5>Paid <br/>Preparer<br/>Use Only</h5>
            </div>
            <div className={styles.innerCont}>
                <div className={styles.center}>
                <div className={styles.preparerName}>
                    <p className={styles.title}>Preparer's name</p>
                    <input type='text' className={styles.input}/>
                </div>
                <div className={styles.preparerSign}>
                    <p className={styles.title}>Preparer's signature</p>
                    
                </div>
                <div className={styles.preparerDate}>
                    <p className={styles.title}>Date</p>
                </div>
                <div className={styles.preparerPtn}>
                    <p className={styles.title}>PTIN</p>
                    <input type='text' className={styles.input}/>
                </div>
                <div className={styles.preparerCheck}>
                    <p className={styles.title}>Check if:</p>
                    <div className={styles.check}>
                        <input type='checkbox'/>
                        <label className={styles.title}>Self-employed</label>
                    </div>
                </div>
                </div>
                <Firm name="Firm's name" phone='Phone no'/>
                <Firm name="Firm's address" phone="Firms's EIN" style={{borderTop: '1px solid #000'}} check/>
            </div>
        </div>
    )
}