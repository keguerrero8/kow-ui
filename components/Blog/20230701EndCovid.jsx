import Image from 'next/image'

import styles from "./BlogPost.module.css"

import maskedwoman from "@/public/images/maskedperson1.jpg"

function EndCovidArticle(props) {
    return (
    <>  
        <div className={styles.title}>
            <h1>COVID State of Emergency Ends</h1>
            <h2>Navigating the Transition of Healthcare</h2>
            <p>Date: July 1, 2023</p>
            <div className={styles.bannerImg}>
                <div className={styles.imageContainer}>
                    <Image 
                        fill
                        style={{objectFit:'contain'}}
                        src={maskedwoman}
                        alt="long-haired woman in beanie hat with white facemask and earbuds seen walking"/> 
                </div>
            </div>
        </div>
        <div className={styles.section}>
            <p>As the COVID-19 pandemic reaches a new phase, the state of emergency that has been in effect in the United States is coming to an end. This state of emergency, which provided various benefits and protections, is set to change healthcare policies, impacting patients across the nation.</p>
        </div>
        <div className={styles.section}>
            <h2>An Overview of the COVID State of Emergency</h2>
            <p>The COVID-19 state of emergency was declared to grant authorities additional powers and flexibility in responding to the pandemic. It allowed for the mobilization of resources and funding to address the public health crisis, enabling healthcare facilities and providers to swiftly respond to the surge in COVID-19 cases.</p>
        </div>
        <div className={styles.section}>
            <h2>Safeguards and Supports During the Emergency Period</h2>
            <p>During the COVID-19 state of emergency, several benefits and protections were provided to patients. These included expanded access to telemedicine services, coverage of COVID-19 testing and treatment costs, and eased restrictions on prescription medication refills. The state of emergency facilitated greater accessibility to healthcare services, especially for individuals in remote areas or those unable to visit healthcare facilities in person.</p>
        </div>
        <div className={styles.section}>
            <h2>Changes in Healthcare Benefits</h2>
            <p>With the end of the COVID-19 state of emergency, there will be significant changes to healthcare benefits and policies. For instance, the expanded access to telemedicine services may be limited, and patients may need to return to traditional in-person visits for some medical consultations. The coverage of COVID-19 testing and treatment costs under emergency provisions may also be altered, impacting insurance coverage for these services.</p>
            <p>There is also the potential for changes to Medicaid eligibility and benefits, although the specific impact may vary from state to state. For example, in Georgia, residents may be required to reapply for Medicaid once the COVID-19 emergency concludes, suggesting that eligibility criteria or enrollment processes may undergo adjustments. Similarly, the Michigan Health and Hospital Association anticipates changes to Medicaid policies and coverage as the public health emergency ends, though specific details were not provided. It is crucial for individuals to stay informed through official channels such as their state&apos;s Medicaid website or local healthcare authorities to grasp how these changes may impact their coverage and eligibility.</p>
        </div>
        <div className={styles.section}>
            <h2>How the Post-Emergency Landscape Impacts You</h2>
            <p>Patients will experience changes in service accessibility and healthcare costs due to the end of the state of emergency. Some individuals who relied on telemedicine for remote consultations may now need to make arrangements for in-person visits, potentially causing inconvenience, especially for those in rural or underserved areas. Additionally, there may be adjustments to insurance coverage for COVID-19 testing and treatment, leading to potential out-of-pocket expenses for patients.</p>
        </div>
        <div className={styles.section}>
            <h2>What Can Patients Do?</h2>
            <p>As the COVID-19 state of emergency ends, patients can take several proactive steps to navigate these changes. Firstly, patients should stay informed about updates from their healthcare providers, insurers, and government agencies regarding policy changes and healthcare benefits. Understanding any modifications to telemedicine services and insurance coverage will help patients plan their future healthcare needs effectively.</p>
            <p>Patients can also reach out to their healthcare providers to discuss alternative options if in-person visits become challenging. Exploring available resources and support services, such as community health clinics and telehealth platforms, can provide valuable alternatives for patients seeking medical care.</p>
            <p>Individuals enrolled in Medicaid should also remain proactive in seeking information and guidance from local resources to ensure they have continued access to their benefits.  How patients will be affected by changes to Medicaid will vary by state so it’s important to understand what next steps can be taken when their Medicaid policies change.</p>
        </div>
        <div className={styles.section}>
            <h2>In summary,</h2>
            <p>The end of the COVID-19 state of emergency will bring about significant changes in healthcare benefits and policies. Patients should stay informed and be proactive in seeking medical care, considering alternative options if needed. By staying engaged and aware of these changes, patients can continue to prioritize their health and well-being in this new phase of the pandemic response.</p>
        </div>
    </>
  )
}

EndCovidArticle.title = "COVID State of Emergency Ends";
EndCovidArticle.subtitle = "Navigating the Transition of Healthcare";
EndCovidArticle.image = maskedwoman;
EndCovidArticle.postId = "20230701";

export default EndCovidArticle
