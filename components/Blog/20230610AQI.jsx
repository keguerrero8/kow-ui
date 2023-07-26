import Image from 'next/image'

import styles from './BlogPost.module.css'

import hazecity from "@/public/images/haze1.jpg"

export default function AqiArticle(props) {
    return (
    <>  
        <div className={styles.title}>
            <h1>Clearing the Air</h1>
            <h2>The Significance of Poor Air Quality</h2>
            <p>Date: June 10, 2023</p>
            <div className={styles.bannerImg}>
               <div className={styles.imageContainer}>
                    <Image 
                        fill
                        style={{objectFit:'contain'}}
                        src={hazecity}
                        alt="view of dubai from afar with a foggy haze under the sunlight"/> 
                </div>
            </div>
        </div>
        <div className={styles.section}>
            <p>Recently, smoke and haze from Canadian wildfires have affected the air quality across the eastern United States and concerns about its effects on human health have been mounting. With an increasing number of articles shedding light on the subject, it is crucial to understand the significance of Air Quality Index (AQI), the health implications of poor air quality, and how individuals can safeguard themselves against potential health complications.</p>
        </div>
        <div className={styles.section}>
            <h2>What is AQI?</h2>
            <p>AQI, or Air Quality Index, is a measurement tool used to assess the quality of outdoor air. It provides an indication of the level of pollutants present in the air and helps individuals gauge the potential health risks associated with exposure. AQI values typically range from 0 to 500, with higher values indicating poorer air quality and increased health hazards.  Most recently, the AQI in New York City spiked from a 21 on June 4, 2023 to 195 and 183 on June 6th and June 7th.</p>
        </div>
        <div className={styles.section}>
            <h2>The Impact of Air Quality on Health</h2>
            <p>Air quality plays a significant role in determining our well-being. Poor air quality can result in respiratory issues, cardiovascular problems, allergic reactions, and other health complications. Exposure to pollutants like particulate matter, ozone, carbon monoxide, and nitrogen dioxide can have both short-term and long-term effects on our health, affecting lung function, exacerbating existing conditions, and even leading to premature death.</p>
        </div>
        <div className={styles.section}>
            <h2>Persons at Greatest Risk</h2>
            <p>Certain demographics are more susceptible to developing health complications due to poor air quality. Children, older adults, individuals with pre-existing respiratory or cardiovascular conditions, pregnant women, and those with compromised immune systems are particularly vulnerable. Additionally, individuals living in areas affected by wildfires or areas with high levels of pollution are at an increased risk.</p>
        </div>
        <div className={styles.section}>
            <h2>Protective Measures for Individuals</h2>
            <p>To protect themselves from developing health complications related to poor air quality, individuals can take several proactive steps. These include:</p>
            <div className={styles.subsection}>
                <h3>Monitoring AQI levels: Stay informed about the AQI in your area through reliable sources such as government websites or weather apps.</h3>
            </div>
            <div className={styles.subsection}>
                <h3>Limiting outdoor activities: Minimize exposure to polluted air by reducing time spent outdoors, especially during periods of high AQI.</h3>
            </div>
            <div className={styles.subsection}>
                <h3>Creating a clean indoor environment: Use air purifiers, keep windows closed, and maintain proper ventilation in indoor spaces to reduce exposure to outdoor pollutants.</h3>
            </div>
            <div className={styles.subsection}>
                <h3>Wearing appropriate masks: When air quality is severely compromised, wearing N95, KN95 masks or masks specifically designed to filter out harmful particles can offer some protection.</h3>
            </div>
            <div className={styles.subsection}>
                <h3>Seeking medical advice: Individuals with pre-existing health conditions should consult their healthcare providers for personalized guidance on managing their condition during periods of poor air quality.</h3>
            </div>
        </div>
        <div className={styles.section}>
            <h2>Prescribed Treatments</h2>
            <p>Prescription medications play a crucial role in managing symptoms or complications caused by poor air quality. Bronchodilators are commonly prescribed to relax airway muscles and improve breathing for individuals with asthma or COPD. Inhaled steroids reduce airway inflammation and are used as maintenance therapy. Antihistamines provide relief for allergy symptoms triggered by environmental factors. Ingested or systemic steroids may be prescribed in severe cases to reduce overall inflammation in the body. Rescue, or short-acting, inhalers offer immediate relief during acute respiratory distress. It is important to consult with healthcare professionals for personalized medication recommendations based on individual health needs and symptoms. </p>
        </div>
        <div className={styles.section}>
            <h2>In summary,</h2>
            <p>Air quality has a significant impact on our health, and understanding AQI and its implications is crucial for protecting ourselves and our loved ones. Poor air quality can lead to a range of health complications, with certain demographics being more vulnerable. By staying informed, taking preventive measures, and seeking professional advice when necessary, we can mitigate the risks associated with poor air quality and promote better respiratory health for all. Remember, safeguarding our well-being begins with understanding and taking action in response to the air quality conditions around us.</p>
        </div>
    </>
  )
}

AqiArticle.title = "Clearing the Air";
AqiArticle.subtitle = "The Significance of Poor Air Quality";
AqiArticle.image = hazecity;
AqiArticle.postId = "20230610";
