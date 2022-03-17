import styles from './footer.module.css'

export default function Footer (){
    return (
        <div className={styles.footer}>
            <p className={styles.text}>Go to <em>www.irs.gov/Form1040</em> for instructions and the latest information</p>
            <p className={styles.text}>Form <strong>1040 &nbsp;</strong> (2020)</p>
        </div>
    )
}