import styles from './sign.module.css'

import Signature from './Signature/Signature'

export default function SignHere (){
    return (
        <div className={styles.cont}>
            <div className={styles.leftCont}>
                <h5>Sign <br/> Here</h5>
                <p className={styles.subTitle}>Joint return? <br/> See instructions.<br/> Keep a copy for <br/> your records.</p>
            </div>
            <div className={styles.innerCont}>
                <div className={styles.arrow2}></div>
                <div className={styles.text}>
                    <p>Under penalties of perjury, I declare that I have examined this return and accompanying schedules and statements, and to the best of my knowledge and <br/>
                    belief, they are true, correct, and complete. Declaration of preparer (other than taxpayer) is based on all information of which preparer has any knowledge</p>
                </div>
                <Signature signature='Your signature' occupation='Your occupation' status='you'/>
                <Signature signature="Spouse's signature. If a joint return, both must sign." occupation="Spouse's occupation" status='your spouse'/>
                <div className={styles.bottomCont}>
                    <div className={styles.phoneCont}>
                        <p className={styles.phone}>Phone no.</p>
                        <input type='text' className={styles.input}/>
                    </div>
                    <div className={styles.emailCont}>
                        <p className={styles.email}>Email address</p>
                        <input type='text' className={styles.einput}/>
                    </div>
                </div>
            </div>
        </div>
    )
}