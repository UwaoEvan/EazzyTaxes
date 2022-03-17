import styles from './header.module.css'

export default function Header (){
    return (
        <div className={styles.headerCont}>
          <div className={styles.header}>
            <div className={styles.leftHeader}>
              <p className={styles.formTxt}>Form</p>
              <h1 className={styles.serial}>1040</h1>
            </div>
            <div className={styles.rightHeader}>
              <div className={styles.centerContent}>
                <div className={styles.centerTop}>
                  <p>Department of Treasury - Internal Revenue Service</p>
                  <p>(99)</p>
                </div>
                <h5 className={styles.headerTitle}>U.S. Individual Income Tax Return</h5>
              </div>
              <div className={styles.centerCenter}>
                <h4 className={styles.year}><span className={styles.yearSpan}>20</span>20</h4>
                
                  <p className={styles.yearLeft}>OMB No. 1545-0074 </p>
              
                <p className={styles.leftText}>IRS Use Only-Do not write or staple in this space.</p>
              </div>
            </div>
          </div>
        </div>
    )
}