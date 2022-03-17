import styles from './style.module.css'

export default function DetailInput ({ label, label2, style }) {
    return (
        <div className={styles.cont} style={style}>
            <div style={{width: '50px', borderRight: '0.5px solid #000', textAlign: 'center', fontWeight: 'bold'}}>
                <label>{label2}{label}</label>
            </div>
            <input type='text' className={styles.input}/>
        </div>
    )
}