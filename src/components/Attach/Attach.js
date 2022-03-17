import styles from './attach.module.css'

import ListView from './ListView/ListView'
import ListView2 from './ListView2/ListView2'
import ListView3 from './ListView3/ListView3'
import BlankSpace from '../BlankSpace/BlankSpace'
import ListView4 from './ListView4/ListView4'
import ListView5 from './ListView5/ListView5'

export default function Attach (){
    return (
        <div className={styles.cont}>
            <div className={styles.sideBar}>
                <div className={styles.sideCont}>
                    <p>Attach <br/> Sch. B if <br/> required.</p>
                </div>
                <div className={styles.sideCont2}>
                    <h6 className={styles.heading}>Standard <br/> Deduction for</h6>
                    <ul>
                        <li>Single or Married filling separately, $12,400</li>
                        <li>Married filling jointly or Qualifying widow(er) $24,800</li>
                        <li>Head of household $18,650</li>
                        <li>If you checked any box under Standard Deduction, <br/> see instructions</li>
                    </ul>
                </div>
                <div className={styles.sideCont3}>
                    <ul>
                        <li>If you have a qualifying child, attach Sch. EIC.</li>
                        <li>If you have nontaxable combat pay, <br/> see instructions</li>
                    </ul>
                </div>
                <div className={styles.border1}></div>
                <div className={styles.border2}></div>
                <div className={styles.border3}></div>
            </div>
            <div className={styles.innerCont}>
                <ListView 
                    label='1'
                    title='Wages, salaries, tips, etc. Attach Form(s) W-2  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView2 
                    style2={{borderTop: '1px solid #000', backgroundColor: '#fff', paddingLeft: '5px'}}
                    label='2a'
                    label2='b'
                    label3='2b'
                    title1='Tax-exempt interest . .  .  .  .  . .'
                    title2='Taxable interest . . . . . . . . . . '
                />
                <ListView2 
                    style2={{borderBottom: '1px solid #000', backgroundColor: '#fff', paddingLeft: '5px'}}
                    label='3a'
                    label2='b'
                    label3='3b'
                    title1='Qualified dividends . . . . . . . . '
                    title2='Ordinary dividends . . . . . . . . '
                />
                <ListView2 
                    label='4a'
                    label2='b'
                    label3='4b'
                    title1='IRA distributions . . . . . . . . . . '
                    title2='Taxable amount . . . . . . . . . '
                />
                <ListView2 
                    label='5a'
                    label2='b'
                    label3='5b'
                    title1='Pensions and annuities . . .'
                    title2='Taxable amount . . . . . . . .  .'
                />
                <ListView2 
                    label='6a'
                    label2='b'
                    label3='6b'
                    title1='Social security benefits . . . '
                    title2='Taxable amount . . . . . . . . . '
                />
                <ListView3
                    check
                    label='7'
                    title='Capital gain or (loss). Attach Schedule D if required. If not required, check here . . . . . . . . . . . .  .  .  . . . . . . '
                />
                <ListView
                    label='8'
                    title='Other income from Schedule 1, line 9 . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView3
                    label='9'
                    title='Add lines 1, 2b, 3b, 4b, 5b, 6b, 7, and 8. This is your total income . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <div className={styles.content}>
                    <div className={styles.details}>
                        <p className={styles.number}>10</p>
                        <p>Adjustments to income:</p>
                    </div>
                    <BlankSpace/>
                </div>

                <ListView4
                    label='a'
                    label2='10a'
                    title='From Schedule 1, line 22 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView4
                    label='b'
                    label2='10b'
                    title='Charitable contributions if you take the standard deduction. See instructions'
                />
                <ListView3
                    label='c'
                    label2='10'
                    title='Add lines 10a and 10b. These are your total adjustments to income . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView3
                    label='11'
                    title='Subtract line 10c from line 9. This is your adjusted gross income . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView
                    style2={{backgroundColor: '#fff', borderBottom: '1px solid #000', borderTop: '1px solid #000', marginLeft: '0', paddingLeft: '8px'}}
                    label='12'
                    title='Standard deduction or itemized deductions (from Schedule A). . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'
                />
                <ListView
                    label='13'
                    title='Qualified business income deduction. Attach Form 8995 or Form 8995-A . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'
                />
                <ListView
                    label='14'
                    title='Add lines 12 and 13 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'
                />
                <ListView
                    label='15'
                    title='Taxable income. Subtract line 14 from line 11. If zero or less, enter -0-  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'
                />
                <ListView5/>
                <ListView
                    label='17'
                    title='Amount from Schedule 2, line 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView
                    label='18'
                    title='Add lines 16 and 17 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . '
                />
                <ListView
                    label='19'
                    title='Child tax credit or credit for other dependents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView
                    label='20'
                    title='Amount from Schedule 3, line 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView
                    label='21'
                    title='Add lines 19 and 20 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView
                    label='22'
                    title='Subtract line 21 from line 18. If zero or less, enter -0- . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView
                    label='23'
                    title='Other taxes, including self-employment tax, from Schedule 2, line 10   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'
                />
                <ListView3
                    label='24'
                    title='Add lines 22 and 23. This is your total tax . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <div className={styles.content}>
                    <div className={styles.details}>
                        <p className={styles.number}>25</p>
                        <p>Federal income tax withheld from:</p>
                    </div>
                    <BlankSpace/>
                </div>
                <ListView4
                    label='a'
                    label2='25a'
                    title='Form(s) W-2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView4
                    label='b'
                    label2='25b'
                    title='Form(s) 1099 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView4
                    label='c'
                    label2='25c'
                    title='Other forms (see instructions) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView
                    label='d'
                    title='Add lines 25a through 25c   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView
                    label='26'
                    title='2020 estimated tax payments and amount applied from 2019 return   . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'
                />
                <ListView4
                    style={{backgroundColor: '#fff', borderBottom: '1px solid #000', borderTop: '1px solid #000', marginLeft: '0', paddingLeft: '8px', paddingRight: '18px'}}
                    label='27'
                    label2='27'
                    title='Earned income credit (EIC) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . '
                />
                <ListView4
                    label='28'
                    label2='28'
                    title='Additional child tax credit. Attach Schedule 8812 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView4
                    label='29'
                    label2='29'
                    title='American opportunity credit from Form 8863, line 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .'
                />
                <ListView4
                    label='30'
                    label2='30'
                    title='Recovery rebate credit. See instructions. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView4
                    label='31'
                    label2='31'
                    title='Amount from Schedule 3, line 13 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
                <ListView3
                    label='32'
                    title='Add lines 27 through 31. These are your total other payments and refundable credits. . . . . . . . . . . . . . . . .'
                />
                <ListView3
                    label='33'
                    title='Add lines 25d, 26, and 32. These are your total payments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '
                />
            </div>
        </div>
    )
}