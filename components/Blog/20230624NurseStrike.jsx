import Image from 'next/image'

import styles from "./BlogPost.module.css"

import nursechart from "@/public/images/nursechart1.jpg"

function NurseStrikeArticle(props) {
    return (
    <>  
        <div className={styles.title}>
            <h1>Nurse Strikes Across America</h1>
            <h2>Implications for Patients and Healthcare</h2>
            <p>Date: June 24, 2023</p>
            <div className={styles.bannerImg}>
                <div className={styles.imageContainer}>
                    <Image 
                        fill
                        style={{objectFit:'contain'}}
                        src={nursechart}
                        alt="nurse in green scrubs looking at clipboard with patient information"/> 
                </div>
            </div>
        </div>
        <div className={styles.section}>
            <p>Nurses across the United States have been making headlines as they embark on strikes to demand better working conditions, improved patient care, fair compensation, and protection against union-busting tactics. Explore why nurses are striking, the implications for employment and healthcare, the effects on hospital patients and individuals outside the hospital, the impact on patients receiving medications, and what patients can do in the event of a nursing strike.</p>
        </div>
        <div className={styles.section}>
            <h2>Negotiating for Change:</h2>
            <p>Nurses are striking across the country due to concerns about nurse burnout, understaffing, inadequate resources, and unsafe patient-to-nurse ratios. They are demanding improvements in working conditions, increased staffing levels, fair wages, and protections against union-busting tactics by healthcare organizations.</p>
        </div>
        <div className={styles.section}>
            <h2>Nurses&apos; Struggles Reflecting Larger Issues:</h2>
            <p>The nationwide nurse strikes underscore the challenges faced by healthcare workers in the United States. These strikes highlight issues such as inadequate staffing, insufficient resources, long working hours, and limited support for mental health. They reflect the need for systemic changes within the healthcare industry to ensure better working conditions and quality patient care.</p>
        </div>
        <div className={styles.section}>
            <h2>Hospital Patient Concerns:</h2>
            <p>Nurse strikes directly affect hospital patients by causing potential disruptions in care. Reduced nursing staff may result in longer wait times, delayed procedures, and compromised patient safety. While hospitals prioritize emergencies, non-emergency cases may face delays or rescheduling.</p>
        </div>
        <div className={styles.section}>
            <h2>Community Impact:</h2>
            <p>Nursing strikes can also have ripple effects beyond the hospital walls. Home healthcare services, outpatient clinics, and rehabilitation centers may experience disruptions or reduced services. This can impact individuals who rely on these facilities for ongoing care and treatments.</p>
        </div>
        <div className={styles.section}>
            <h2>Ensuring Medication Access:</h2>
            <p>During nurse strikes, the distribution and administration of medications may be affected. With reduced nursing staff, delays or challenges in administering medications may arise, particularly for patients with regular or time-sensitive medication regimens. Hospitals typically have contingency plans in place to ensure essential medications are provided.</p>
        </div>
        <div className={styles.section}>
            <h2>Patient Empowerment:</h2>
            <p>Although most persons who are not in a facility or hospital aren&apos;t affected, patients can still take proactive steps to address their situation and prevent any complications. It is crucial to stay informed by contacting healthcare providers and hospitals for updates on services and potential disruptions. Patients should discuss any concerns or explore alternative care arrangements with healthcare professionals to ensure continuity of care.</p>
        </div>
        <div className={styles.section}>
            <h2>In summary,</h2>
            <p>The nationwide nurse strikes reflect the urgent need for addressing employment and healthcare challenges faced by nurses in the United States. These strikes shed light on the systemic issues within the industry and emphasize the importance of prioritizing the well-being of both healthcare professionals and patients. Patients should stay informed, communicate with healthcare providers, and seek alternative care arrangements when necessary during nursing strikes. By recognizing and addressing the concerns raised by nurses, the healthcare system can work towards a better future that values the vital role of nurses and ensures quality care for all.</p>
        </div>
    </>
  )
}

NurseStrikeArticle.title = "Nurse Strikes Across America";
NurseStrikeArticle.subtitle = "Implications for Patients and Healthcare";
NurseStrikeArticle.image = nursechart;
NurseStrikeArticle.postId = "20230624";

export default NurseStrikeArticle
