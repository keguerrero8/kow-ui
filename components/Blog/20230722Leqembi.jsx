import Image from 'next/image'

import styles from "./BlogPost.module.css"

import leqembi from "@/public/images/providerandelderly1.jpg"

function LeqembiArticle(props) {
    return (
    <>  
        <div className={styles.title}>
            <h1>Advancing Alzheimer&apos;s Care</h1>
            <h2>Leqembi Receives Full FDA Approval</h2>
            <p>Date: July 22, 2023</p>
            <div className={styles.bannerImg}>
                <div className={styles.imageContainer}>
                    <Image 
                        fill
                        style={{objectFit:'contain'}} 
                        src={leqembi}
                        alt="provider in white coat checking on confused elderly woman"/> 
                </div>
            </div>
        </div>
        <div className={styles.section}>
            <p>In a landmark decision, the U.S. Food and Drug Administration (FDA) recently granted full approval for the novel Alzheimer&apos;s drug, Leqembi. This approval is a significant milestone in the field of Alzheimer&apos;s treatment and has far-reaching implications for patients, caregivers, and the medical community. Leqembi, developed by Eisai and Biogen, offers new hope for those living with Alzheimer&apos;s disease, a condition that has long been challenging to treat effectively. </p>
        </div>
        <div className={styles.section}>
            <h2>A Breakthrough Treatment</h2>
            <p>The FDA&apos;s full approval of Leqembi represents a breakthrough in Alzheimer&apos;s treatment. Until now, available medications only provided temporary symptomatic relief without addressing the underlying disease progression. Leqembi offers a different approach by targeting the amyloid plaques believed to contribute to Alzheimer&apos;s cognitive decline. This groundbreaking mechanism of action has sparked immense excitement among researchers, patients, and the pharmaceutical industry alike. It signals a shift towards disease-modifying therapies, aiming to slow the progression of Alzheimer&apos;s and improve patients&apos; quality of life.</p>
        </div>
        <div className={styles.section}>
            <h2>Potential for More Medications to Follow</h2>
            <p>Leqembi&apos;s approval opens the door for other potential Alzheimer&apos;s medications in the pipeline. Researchers and pharmaceutical companies are actively exploring various treatment approaches, including targeting tau protein tangles and inflammation. According to experts, more promising drugs are currently undergoing clinical trials and may receive approval in the near future. For example, Eli Lilly has also been conducting their clinical studies and trials for their drug donanemab to show it can also slow worsening Alzheimer’s. This bodes well for patients and families, providing hope for additional options to combat this devastating disease.</p>
        </div>
        <div className={styles.section}>
            <h2>Leqembi’s Role in Alzheimer’s Care</h2>
            <p>For patients living with Alzheimer&apos;s, Leqembi offers the potential to slow disease progression and preserve cognitive function. By targeting amyloid plaques, the drug aims to reduce their accumulation in the brain, thereby preventing further damage and cognitive decline. Clinical trials have shown promising results, demonstrating that Leqembi can help patients maintain their cognitive abilities for longer periods. This translates to enhanced independence, improved quality of life, and reduced burden on caregivers.</p>
        </div>
        <div className={styles.section}>
            <h2>Widening Access to Leqembi</h2>
            <p>With the FDA&apos;s approval, Leqembi will become available to a broader group of patients. Medicare, the government health insurance program for seniors, will cover the cost of this medication, making it more accessible to older adults with Alzheimer&apos;s. However, the availability of Leqembi will depend on the manufacturing and distribution process. Patients should discuss their eligibility and access options with their healthcare providers and insurance companies.</p>
        </div>
        <div className={styles.section}>
            <h2>Patience and Anticipation</h2>
            <p>The exact timeline for Leqembi&apos;s availability may vary. Upon FDA approval, pharmaceutical companies typically work to bring the medication to the market as soon as possible. As with any newly approved drug, there might be some time before it is widely available in pharmacies and healthcare facilities. Patients should stay in touch with their healthcare providers and follow updates from the manufacturers to learn when and where Leqembi will be accessible.</p>
        </div>
        <div className={styles.section}>
            <h2>In summary,</h2>
            <p>The FDA&apos;s approval of Leqembi marks a momentous step forward in the treatment of Alzheimer&apos;s disease. This revolutionary medication offers hope for patients and families, providing the potential to slow disease progression and preserve cognitive function. As we eagerly await the availability of Leqembi, it is essential to stay informed about updates and consult with healthcare providers to understand how this medication can benefit individual patients. With Leqembi paving the way for more advanced Alzheimer&apos;s treatments, there is newfound optimism in the fight against this devastating condition.</p>
        </div>
    </>
  )
}

LeqembiArticle.title = "Advancing Alzheimer's Care";
LeqembiArticle.subtitle = "Leqembi Receives Full FDA Approval";
LeqembiArticle.image = leqembi;
LeqembiArticle.postId = "20230722";

export default LeqembiArticle
