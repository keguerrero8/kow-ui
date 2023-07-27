import Image from 'next/image'
import Link from 'next/link'
import styles from "./BlogPost.module.css"

import televisit from "@/public/images/televisit1.jpg"

export default function DrugShortagesArticle(props) {
    return (
    <>  
        <div className={styles.title}>
            <h1>"Backordered": The Silent Crisis</h1>
            <h2>How Drug Shortages Jeopardize Patient Treatment</h2>
            <p>Date: May 13, 2023</p>
            <div className={styles.bannerImg}>
                <div className={styles.imageContainer}>
                    <Image 
                        fill
                        style={{objectFit:'contain'}}
                        src={televisit}
                        alt="woman in a facemask having a virtual meeting with a doctor on her laptop"/> 
                </div>
            </div>
        </div>
        <div className={styles.section}>
            <h2>Decoding the Crisis: A Closer Look at Drug Shortages</h2>
            <p>Drug shortages are characterized by the insufficient availability of certain medications in the 
                market. These shortages can result from various factors, including manufacturing issues, 
                regulatory challenges, supply chain disruptions, and increased demand. Patients relying on 
                medications for chronic conditions or life-threatening illnesses often bear the brunt of these 
                shortages, as access to crucial treatments becomes uncertain. Especially in recent months, the 
                country has experienced numerous shortages of Adderall, Ozempic, Albuterol, and even chemotherapy 
                drugs.</p>
        </div>
        <div className={styles.section}>
            <h2>The Ripple Effect: How Drug Shortages Impact Patients and Providers</h2>
            <p>Patients facing drug shortages encounter significant difficulties in obtaining the medications 
                they need. This can lead to delayed or interrupted treatments, compromised health outcomes, and 
                increased healthcare costs. Healthcare providers also grapple with the consequences, as they must 
                navigate alternative treatment options, spend additional time coordinating patient care, and cope 
                with the ethical dilemmas posed by limited resources.</p>
        </div>
        <div className={styles.section}>
            <h2>Paving the Way: Strategies for Seeking Appropriate Treatment</h2>
            <p>Amidst drug shortages, patients are encouraged to take an active role in seeking adequate treatment 
                options. Here are some steps they can take:</p>
            <h3>1. Communication:</h3>
            <p>Openly communicate with healthcare providers about the challenges faced due to drug shortages. They 
                can provide guidance on alternative medications or explore potential solutions.</p>
            <h3>2. Prescription Management:</h3>
            <p>Stay proactive in managing prescriptions, ensuring timely refills, and discussing potential 
                substitutions with healthcare providers if needed.</p>
            <h3>3. Patient Assistance Programs:</h3>
            <p>Explore patient assistance programs offered by pharmaceutical companies or nonprofit organizations, 
                which may provide access to medications at reduced costs or free of charge.</p>
            <h3>4. Pharmacist Consultation:</h3>
            <p>Consult with pharmacists, who possess extensive knowledge of medications and may offer insights on 
                alternative options or availability.</p>
            <h3>5. Learn More about Kindly Oblige With (KOW)&trade;:</h3>
            <p>Here at Kindly Oblige With (KOW)&trade;, our Fillable search tool also can help connect you with 
                nearby pharmacies that may have your medication in stock.  If your original pharmacy is experiencing 
                inventory issues or to prevent a delay in your treatment, using another pharmacy can be a 
                resourceful solution.  If you need to speak to a pharmacist, one of our KOW pharmacists can contact 
                you and help answer any questions you may have.  Just leave a message with us in our 
                {<Link className='link' href="/contact-us"> Contact Us </Link>} form.</p>
        </div>
        <div className={styles.section}>
            <h2>In summary,</h2>
            <p>Drug shortages pose significant challenges to patients and healthcare providers, jeopardizing access 
                to essential medications. By understanding the problem, actively seeking solutions, and advocating 
                for reforms, we can work towards ensuring reliable access to vital treatments.  Kindly Oblige With 
                (KOW)&trade; will continue to be a resource for connecting patients with the medications they need, 
                when they need it most. Together, we can navigate the complexities of drug shortages and strive for a 
                healthcare system that prioritizes the well-being of all patients.</p>
        </div>
    </>
  )
}

DrugShortagesArticle.title = "\"Backordered\": The Silent Crisis";
DrugShortagesArticle.subtitle = "How Drug Shortages Jeopardize Patient Treatment";
DrugShortagesArticle.image = televisit;
DrugShortagesArticle.postId = "20230513";

