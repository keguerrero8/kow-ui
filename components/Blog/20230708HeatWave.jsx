import Image from 'next/image'

import styles from "./BlogPost.module.css"

import beachsun from "@/public/images/beachsun1.jpg"

function HeatWaveArticle(props) {
    return (
    <>  
        <div className={styles.title}>
            <h1>Temperature Rising</h1>
            <h2>Coping with Heat Waves and High Temperatures</h2>
            <p>Date: July 8, 2023</p>
            <div className={styles.bannerImg}>
                <div className={styles.imageContainer}>
                    <Image 
                        fill
                        style={{objectFit:'contain'}}
                        src={beachsun}
                        alt="empty beach with sun setting in the distance"/> 
                </div>
            </div>
        </div>
        <div className={styles.section}>
            <p>As scorching temperatures sweep across the country, heat waves have become a prevalent and concerning phenomenon. It is crucial to understand the impact of extreme heat on our health and access to healthcare, but also how to take necessary precautions to stay safe. </p>
        </div>
        <div className={styles.section}>
            <h2>A Hotter Planet</h2>
            <p>Heat waves have engulfed several regions across the country, like Arizona and California, but also Philadelphia and along the East Coast. These areas are currently experiencing soaring temperatures, setting records and leading to a high alert for heat-related hazards. Reports indicate that millions of Americans are under heat alerts due to the extreme conditions.</p>
        </div>
        <div className={styles.section}>
            <h2>The Dangers of Extreme Temperatures to Our Health</h2>
            <p>Heat waves and extreme heat can be incredibly dangerous, posing risks to both physical and mental well-being. The increased temperatures can cause heat exhaustion, heatstroke, and dehydration, particularly among vulnerable populations, including older adults and individuals with pre-existing medical conditions. These heat-related illnesses may cause individuals to experience fatigue, dizziness, headaches, and rapid heartbeat. Anyone with existing medical conditions like respiratory and cardiovascular diseases may also notice worsening symptoms or complications.</p>
            <p>Extreme heat can affect transportation systems, leading to delays or cancellations of medical appointments or treatments. Public transportation services may experience disruptions, making it challenging for patients to reach healthcare facilities for scheduled appointments or procedures. But also, those who are vulnerable or have mobility limitations, may face challenges in accessing pharmacies. The scorching temperatures can make it difficult for patients to travel or wait outside for their prescriptions. This can result in potential delays in obtaining essential medications and impact their treatment plans.</p>
            <p>Heat waves can increase the demand for electricity, potentially resulting in power outages. Loss of power can impact patients who rely on medical devices or equipment at home, such as oxygen concentrators or refrigeration for medication storage. High temperatures can compromise the effectiveness and stability of certain medications. Heat-sensitive medications may degrade or lose potency if exposed to extreme heat for prolonged periods. Therefore, it is crucial for individuals with specific medical needs to have contingency plans in place to address power outages during extreme heat events.</p>
        </div>
        <div className={styles.section}>
            <h2>What Can Be Done to Protect Ourselves</h2>
            <p>To safeguard against the hazards of extreme heat, it is crucial to take proactive measures. These include staying hydrated by drinking plenty of water, seeking cool environments such as air-conditioned spaces or public cooling centers, wearing lightweight and loose-fitting clothing, and avoiding outdoor activities during the hottest parts of the day. It is also essential to check on vulnerable individuals, including older adults, children, and those with chronic illnesses, to ensure they are adequately protected. Healthcare providers and patients can also plan for proper medication storage, explore alternative prescription pickup options, and have contingency plans for emergencies or power outages. Additionally, staying informed about heat wave warnings and following recommended safety guidelines can be of great help.</p>
        </div>
        <div className={styles.section}>
            <h2>In summary,</h2>
            <p>As we continue to see heat waves sweep across the nation every year, it is vital to prioritize our safety and well-being. Extreme heat poses significant risks to our health, particularly for vulnerable populations. By understanding the dangers, recognizing the signs of heat-related illnesses, and taking preventive measures, we can protect ourselves and others during these challenging conditions. Staying hydrated, seeking cool environments, and minimizing outdoor activities during peak heat hours are essential strategies for mitigating the impact of extreme heat. Let us remain vigilant, support one another, and make informed choices to navigate through the summer heat waves safely.</p>
        </div>
    </>
  )
}

HeatWaveArticle.title = "Temperature Rising";
HeatWaveArticle.subtitle = "Coping with Heat Waves and High Temperatures";
HeatWaveArticle.image = beachsun;
HeatWaveArticle.postId = "20230708";

export default HeatWaveArticle
