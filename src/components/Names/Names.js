import styles from './names.module.css'

import TextInput from '../TextInput/TextInput'
import CheckBox from '../CheckBox/CheckBox'
import SocialTextInput from '../SocialTextInput/SocialTextInput'

export default function Names (){
    const labels = [
        "Your first name and middle name",
        "Last name",
        "If joint return, spouse's first name and middle initial",
        "Last name"
    ]
    const nameDetails = labels.map((label, i) => <TextInput key={i} label={label} style={{width: '50%', borderRight: '1px solid #000', borderBottom: '1px solid #000'}}/>)
    
    const social = [
        "Your social security number",
        "Spouse's social security number"
    ]
    const socialSecurity = social.map((label, i) => <SocialTextInput key={i} label={label} style={{borderBottom: '1px solid #000', width: '100%', height: '100%'}}/>)
    
    return (
        <div className={styles.name}>
            <div className={styles.nameTop}>
                <div className={styles.nameCont}>
                    {nameDetails}
                </div>
                <div style={{width: '230px', display: 'flex', flexDirection: 'column'}}>
                    {socialSecurity}
                </div>
            </div>
            <div className={styles.nameTopCont}>
                <div>
                    <div className={styles.nameTop}>
                        <TextInput 
                            label="Home address (number and street). If you have a P.O. box, see instructions."
                            style={{borderBottom: '1px solid #000', borderRight: '1px solid #000', width: '600px'}}
                        />
                        <TextInput 
                            label="Apt: no."
                            style={{borderBottom: '1px solid #000', borderRight: '1px solid #000', width: '83px'}}
                        />
                    </div>
                    <div className={styles.nameTop}>
                        <TextInput 
                            label="City, town, or post office. If you have a foreign address, also complete spaces below."
                            style={{borderBottom: '1px solid #000', borderRight: '1px solid #000', width: '443px'}}
                        />
                        <TextInput 
                            label="State"
                            style={{borderBottom: '1px solid #000', borderRight: '1px solid #000', width: '120px'}}
                        />
                        <TextInput 
                            label="ZIP code"
                            style={{borderBottom: '1px solid #000', borderRight: '1px solid #000', width: '120px'}}
                        />
                    </div>
                    <div className={styles.nameTop}>
                        <TextInput 
                            label="Foreign country name"
                            style={{borderRight: '1px solid #000', width: '363px'}}
                        />
                        <TextInput 
                            label="Foreign province/state/county"
                            style={{borderRight: '1px solid #000', width: '200px'}}
                        />
                        <TextInput 
                            label="Foreign postal code"
                            style={{borderRight: '1px solid #000', width: '120px'}}
                        />
                    </div>
                </div>
                <div className={styles.bottomTxt}>
                    <h6>Presidential Election Campaign</h6>
                    <p className={styles.text}>Check here if you, or your <br/> spouse if filing jointly, want $3 <br/> to go to this fund. Checking a<br/> box below will not change <br/> your tax or refund.</p>
                    <div className={styles.check}>
                        <CheckBox label="You"/>
                        <CheckBox label="Spouse"/>
                    </div>
                </div>
            </div>
        </div>
    )
}