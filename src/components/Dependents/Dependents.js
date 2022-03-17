import styles from './depend.module.css'

import TextInput from '../TextInput/TextInput'
import SocialTextInput from '../SocialTextInput/SocialTextInput'
import CheckBox from '../CheckBox/CheckBox'
import Arrow from '../Arrow/Arrow'

export default function Dependents (){
    return (
        <div className={styles.cont}>
            <div className={styles.sideBar}>
                <h5>Dependents</h5>
                <p className={styles.sideTxt}>
                    If more<br/> than four<br/> dependents,<br/> see instructions<br/> and check
                </p>
                <div className={styles.checkB}>
                    <p className={styles.sideTxt}>here</p>
                    <div className={styles.checkB}>
                        <Arrow/>
                        <input type='checkbox' style={{marginLeft: '5px'}}/>
                    </div>
                </div>
            </div>
            <div className={styles.innerCont}>
                <div className={styles.instructions}>
                    <div>
                        <div className={styles.tableHead}>
                            <p>(see instructions):</p>
                            <div style={{display: 'flex'}}>
                                <p><span style={{fontWeight: 'bold'}}>(1)</span>First name</p>
                                <p style={{marginLeft: 50}}>Last name</p>
                            </div>
                        </div>
                        <div>
                            <TextInput style={{borderBottom: '1px solid #000', borderTop: '1px solid #000'}}/>
                            <TextInput style={{borderBottom: '1px solid #000'}}/>
                            <TextInput style={{borderBottom: '1px solid #000'}}/>
                            <TextInput />
                        </div>
                    </div>
                </div>
                <div className={styles.instructions} style={{width: '100px'}}>
                    <div>
                        <div className={styles.socialNumber}> 
                            <p><span style={{fontWeight: 'bold'}}>(2)</span>Social security <br/> number</p>
                        </div>
                        <div style={{borderRight: '1px solid #000', borderLeft: '1px solid #000', height: '100%'}}>
                            <SocialTextInput style={{borderBottom: '1px solid #000', borderTop: '1px solid #000'}}/>
                            <SocialTextInput style={{borderBottom: '1px solid #000'}}/>
                            <SocialTextInput style={{borderBottom: '1px solid #000'}}/>
                            <SocialTextInput/>
                        </div>
                    </div>
                </div>
                <div className={styles.instructions} style={{width: '100px'}}>
                    <div>
                        <div className={styles.socialNumber}> 
                            <p><span style={{fontWeight: 'bold'}}>(3)</span>Relationship <br/> to you</p>
                        </div>
                        <div style={{borderRight: '1px solid #000',  height: '100%'}}>
                            <TextInput style={{borderBottom: '1px solid #000', borderTop: '1px solid #000'}}/>
                            <TextInput style={{borderBottom: '1px solid #000'}}/>
                            <TextInput style={{borderBottom: '1px solid #000'}}/>
                            <TextInput />
                        </div>
                    </div>
                </div>
                <div className={styles.instructions} style={{width: '150px'}}>
                    <div>
                        <div className={styles.socialNumber}> 
                            <p><span style={{fontWeight: 'bold'}}>(4)</span>Qualifies for<br/> Child tax credit</p>
                        </div>
                        <div className={styles.check}>
                            <CheckBox/>
                            <CheckBox/>
                            <CheckBox/>
                            <CheckBox/>
                        </div>
                    </div>
                </div>
                <div className={styles.instructions} style={{width: '150px'}}>
                    <div>
                        <div className={styles.socialNumber} style={{width: '100%'}}> 
                            <p>(see instructions):</p>
                            <p>Credit for other dependents</p>
                        </div>
                        <div className={styles.check}>
                            <CheckBox/>
                            <CheckBox/>
                            <CheckBox/>
                            <CheckBox/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}