import styles from './pin.module.css'

export default function Pin ({ style }){
    return (
        <div className={styles.cont} style={style}>
            <input type='text' className={styles.input} style={{borderLeft:'none'}}/>
            <input type='text' className={styles.input}/>
            <input type='text' className={styles.input}/>
            <input type='text' className={styles.input}/>
            <input type='text' className={styles.input}/>
        </div>
    )
}