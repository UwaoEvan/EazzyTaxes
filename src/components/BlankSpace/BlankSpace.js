import styles from './blank.module.css'

export default function BlankSpace ({ style }){
    return (
        <div className={styles.cont} >
            <div className={styles.dark}></div>
            <div className={styles.light} style={style}></div>
        </div>
    )
}