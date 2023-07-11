import Image from 'next/image'
import Link from 'next/link'
import styles from "./BlogPost.module.css"

import specialtybanner from "../../public/images/specialtybanner1.jpg"

export default function SpecialtyDrugsArticle(props) {
    return (
    <>  
        <div className={styles.title}>
            <h1>Understanding Specialty Drugs</h1>
            <h2>What They Are and How to Access Them</h2>
            <p>Date: May 20, 2023</p>
            <div className={styles.bannerImg}>
                <Image 
                    src={specialtybanner}
                    alt="view from above, looking at man holding tablet and glass of water"/> 
            </div>
        </div>
        <div className={styles.section}>
            <h2>What is a Specialty Drug?</h2>
            <p>Specialty drugs, as defined by various organizations and insurance companies, are high-cost 
                prescription medications designed to treat rare, chronic, or complex conditions. They often 
                require special handling, administration, monitoring, and have specific storage requirements. 
                Specialty drugs encompass a wide range of therapeutic areas, including oncology, rheumatology, 
                neurology, and more.</p>
        </div>
        <div className={styles.section}>
            <h2>Where Can I Get a Specialty Drug?</h2>
            <p>Specialty drugs are typically not available at traditional retail pharmacies. Most insurances, 
                but not all, require that these medications are dispensed through specialty pharmacies. There 
                are some exceptions, so you {<Link className={styles.link} href="/contact-us">Contact Us </Link>}  
                or speak to your doctor to verify which pharmacy you can use. These specialized pharmacies have 
                the expertise, infrastructure, and resources to handle the unique needs of specialty drugs. They 
                provide comprehensive support to patients, including medication education, coordination with 
                healthcare providers, and assistance with insurance coverage and financial aspects.</p>
        </div>
        <div className={styles.section}>
            <h2>How Do I Fill My Prescription for a Specialty Drug?</h2>
            <h3>1. Diagnosis and Prescription:</h3>
            <p>A healthcare provider, often a specialist, will diagnose your condition and determine if a 
                specialty drug is the appropriate treatment. If so, they will prescribe the medication.</p>
            <h3>2. Insurance Coverage:</h3>
            <p>Since specialty drugs can be costly, it is crucial to understand your insurance coverage. Check 
                with your health insurance provider to determine if the medication is covered, and if so, what 
                copayments or prior authorization requirements exist.  Insurance companies like Caremark, Humana, 
                Optum, and Express Scripts typically require a prior authorization and will limit which pharmacies 
                can dispense these medications.</p>
            <h3>3. Specialty Pharmacy Coordination:</h3>
            <p>Once the prescription is issued, it usually must be sent to the specialty pharmacy covered by your 
                insurance network. The pharmacy will then verify your insurance coverage, 
                assist with any necessary paperwork, and arrange for the delivery or pickup of your medication.  
                Depending on your insurance coverage, some prescriptions may be covered but will still amount to a 
                high copay.  Speak to your doctor or specialty pharmacist to ask if there are any copay assistance 
                programs related to the medication or your diagnosis that you may be qualified for.</p>
        </div>
        <div className={styles.section}>
            <h2>Can Kindly Oblige With (KOW)&trade; Help Me Find My Specialty Drug?</h2>
            <p>Kindly Oblige With (KOW)&trade;’s Fillable search tool will notify you if the medication you selected is considered a Specialty 
                Drug.  Most of these medications aren’t available at community pharmacies because their insurance 
                agreements won’t cover the high cost of ordering these drugs.  However, there are some exceptions; 
                there are some Specialty Drugs that you can pick up or have delivered by your local pharmacy.  
                Whether you can or cannot is entirely dependent on the medication and your insurance, so everyone’s 
                situation is different.</p>  
            <p>You can still continue to request the Specialty Drug in the Fillable search tool, however, the 
                pharmacies that have the medication may be very few.  If your results are very limited, Kindly Oblige With (KOW)&trade; has 
                pharmacists available who can answer some of your questions and perhaps direct you to which specialty 
                pharmacies you can use.</p>
        </div>
        <div className={styles.section}>
            <h2>How Do I Contact the Specialty Pharmacy?</h2>
            <p>Most Specialty Pharmacies can be reached by phone.  Your pharmacy insurance card often has a Member 
                Services phone number which you can call to find out what Specialty Pharmacy to use.  Your insurance 
                company can provide the pharmacy's phone number for you to call or the pharmacy's address for where 
                your prescriber can send your prescription.  The contact information is also available for the 
                following Specialty Pharmacies:</p>
            <div className={styles.subsection}>
                <h3>Accredo Specialty Pharmacy:</h3>
                <p>1640 Century Center Parkway, Memphis, TN 38134</p>                
                <p>Phone: 844.516.3319</p>
                <p>Fax: 888.302.1028</p>
            </div>
            <div className={styles.subsection}>
                <h3>AllianceRx Walgreens Specialty Pharmacy:</h3>
                <p>130 Enterprise Drive, Pittsburgh, PA 15275</p>
                <p>Phone: 888.347.3416</p>
                <p>Fax: 877.231.8302</p>
            </div>
            <div className={styles.subsection}>
                <h3>Centerwell Humana Specialty Pharmacy:</h3>
                <p>9843 Windisch Road, West Chester, OH 45069</p>
                <p>Phone: 800.486.2668</p>
                <p>Fax: 877.405.7940</p>
            </div>
            <div className={styles.subsection}>
                <h3>CVS Specialty Pharmacy:</h3>
                <p>800 Biermann Court, Mount Prospect, IL 60056</p>
                <p>Phone: 877.408.9742</p>
                <p>Fax: 877.408.9743</p>
            </div>
            <div className={styles.subsection}>
                <h3>Optum Specialty Pharmacy:</h3>
                <p>1050 Patrol Road, Jeffersonville, IN 47130</p>
                <p>Phone: 855.427.4682</p>
                <p>Fax: 877.342.4596</p>
            </div>
            <div className={styles.footnote}>
                <p>There may also be a specialty pharmacy in your local area.</p>
                <p>{<Link className={styles.link} href="/contact-us"> Contact Us </Link>} and one of our pharmacists can 
                    help connect you with a specialty pharmacy in your area.</p>
            </div>

        </div>
        <div className={styles.section}>
            <h2>Patient Education and Support:</h2>
            <p>Specialty pharmacies often offer personalized support and education to patients. They help explain 
                the medication's administration, potential side effects, and provide guidance on managing the 
                treatment plan.</p>
        </div>
        <div className={styles.section}>
            <h2>Ongoing Monitoring and Refills:</h2>
            <p>Specialty drugs usually require close monitoring for treatment effectiveness and potential side effects. 
                Your healthcare provider and specialty pharmacy will work together to track your progress and ensure 
                timely refills of the medication.</p>
        </div>
        <div className={styles.section}>
            <h2>In summary,</h2>
            <p>Specialty drugs have revolutionized the treatment landscape for many complex conditions. They offer hope 
                and improved outcomes for patients facing challenging health conditions. Understanding what specialty 
                drugs are, where to obtain them, and the prescription-filling process is vital for patients and their 
                caregivers. By working closely with healthcare providers and specialty pharmacies, patients can access 
                these specialized medications and receive the comprehensive support needed to manage their condition 
                effectively.  Kindly Oblige With (KOW)&trade; will also continue to be a resource for you to find your medication at a nearby 
                pharmacy, if possible, or connect you with a specialty pharmacy.</p>
        </div>
    </>
  )
}

SpecialtyDrugsArticle.title = "Understanding Specialty Drugs";
SpecialtyDrugsArticle.subtitle = "What They Are and How to Access Them";
SpecialtyDrugsArticle.image = specialtybanner;
SpecialtyDrugsArticle.postId = "20230520";
