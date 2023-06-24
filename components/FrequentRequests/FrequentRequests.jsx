import Link from 'next/link'

import styles from './FrequentRequests.module.css'

export default function FrequentRequests() {
    const dataColumn1 = [
        { req: 1, name: 'Aprepitant 125mg-80mg' },
        { req: 2, name: 'Exemestane 25mg' },
        { req: 3, name: 'Lidocaine Viscous Solution 2%' },
      ];
    const dataColumn2 = [
        { req: 1, name: 'Eliquis 5mg' },
        { req: 2, name: 'Anastrozole 1mg' },
        { req: 3, name: 'Deferasirox 360mg' },
      ];
    const dataColumn3 = [
        { req: 1, name: 'Stimate 0.15mg' },
        { req: 2, name: 'Zarxio 300mcg/0.5mL' },
        { req: 3, name: 'Enoxaparin 30mg/0.3mL' },
      ];

    return (
            <div className={styles.recentContainer}>
                <h2>Most Frequent Requests:</h2>
                <h3>{"Week of 6/12/23"}</h3>
                <div className={styles.requestGroups}>
                    <ReqList data={dataColumn1}/>
                    <ReqList data={dataColumn2}/>
                    <ReqList data={dataColumn3}/>
                </div>
                <div className={styles.pharmacyReach}>
                    <h3>Are you a pharmacy that has these medications?</h3>
                    <Link href='/contact-us' className={styles.contactLink}>Join our pharmacy network!</Link>
                </div>
            </div>
    );
}

function ReqList({ data }) {
    return (
      <ul>
        {data.map(item => (
          <li className={styles.requestList} key={item.req}>{item.name}</li>
        ))}
      </ul>
    );
  }
