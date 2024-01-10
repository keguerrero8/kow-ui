import Link from 'next/link'

import styles from './FrequentRequests.module.css'

interface DataColumn {
  req: number
  name: string
}

interface ReqListProps {
  data: DataColumn[]
}

const FrequentRequests: React.FC = () => {
    const dataColumn1 = [
        { req: 1, name: 'Aprepitant 125mg-80mg' },
        { req: 2, name: 'Lidocaine-Prilocaine 2.5%-2.5%' },
        { req: 3, name: 'Granisetron 1mg' },
      ];
    const dataColumn2 = [
        { req: 1, name: 'Megestrol 40mg/mL' },
        { req: 2, name: 'Tamoxifen 20mg' },
        { req: 3, name: 'Anastrozole 1mg' },
      ];
    const dataColumn3 = [
        { req: 1, name: 'Cefdinir 300mg' },
        { req: 2, name: 'Lidocaine Viscous Solution 2%' },
        { req: 3, name: 'Exemestane 25mg' },
      ];

    return (
            <div className={styles.recentContainer}>
                <h2>Most Frequent Requests:</h2>
                <h3>{"Week of 8/28/23"}</h3>
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

const ReqList: React.FC<ReqListProps> = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <li className={styles.requestList} key={item.req}>{item.name}</li>
      ))}
    </ul>
  );
}

export default FrequentRequests

