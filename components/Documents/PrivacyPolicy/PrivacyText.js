import React from 'react'

function PrivacyText({ isModal = false }) {
  return (
    <>  
        <div className='intro'>
            {isModal? null : <h3>Privacy Policy</h3>}
            <p>Effective Date: January 1, 2023</p>
            <p>This Privacy Policy applies to information collected by Fillable, LLC, d/b/a FillableRx, a/k/a
                Kindly Oblige With (KOW) and its parents, subsidiaries, and affiliates (collectively, “KOW,”
                “we,” “our” or “us”), in connection with the services that KOW offers. This includes information
                collected online through our website www.KOWmeds.com (the “Site”), mobile application(s), if
                any, SMS Text messaging, and any other online, or other communications (collectively, our
                “Services”).</p>
            <p>This Privacy Policy explains how information may be collected, used, or disclosed through our
                Services. This Privacy Policy is incorporated into the Terms of Use of our Services. By using our
                Services, You are accepting the Privacy Policy and Terms of Use. Additional terms may apply
                depending on the user portal (“You” or “Your”) through which You elect to proceed.</p>
            <p>We do not use Your information for direct marketing purposes. Yet, under the applicable privacy
                laws of the States of California, Colorado, Connecticut, Utah, and Virginia, and any other
                applicable state laws of which You are a resident, You are or may be, depending on your state of
                residence, entitled to request a copy of all personally identifiable information (“PII”) disclosed
                for direct marketing purposes, have it deleted, and opt-out of such information being sold to third
                parties. Send such requests to PO Box 505, Valley Stream, New York 11582.</p>
        </div>
        <div className='section-1'>
            <h2>1. What information do we collect about You?</h2>
            <p>The information we collect about You does not include PII, except Your phone number,
                protected health information (“PHI”) or electronic protected health information (“ePHI”). To the
                extent we collect PII, PHI or ePHI, we will seek the required waiver(s) and/or authorization(s) as
                set forth in applicable laws, including the Health Insurance Portability and Accountability Act’s
                Privacy Law (“HIPAA”).</p>
            <p>The information may include the following categories:</p>
            <div className='subtext-1-0'>
                <h3>Personal Identifier and Other Information:</h3>
                <p>Your name, date of birth, postal and
                    email address, phone number, driver’s license or other government identification
                    number, username, and password.</p>
                <h3>Commercial Information:</h3>
                <p>Your purchase and usage history, goods and service
                    preferences, insurance information, demographic information, interest information,
                    payment and account information, and communications with us.</p>
                <h3>Prescription Information:</h3>
                <p>Your pharmacy insurance card information, specifically,
                    the BIN, PCN, and RxGroup.</p>
                <h3>Internet/Electronic Activity, Device Information, Usage Information:</h3>
                <p>Your
                    geolocation information, Internet Protocol (IP) address information that may identify
                    Your computer, mobile device, tablet or other device or browser, information about
                    Your operating system and browser, including the hardware model and mobile
                    network information web/app browsing and search history related to our Services, and 
                    information regarding Your interaction(s) with the Services or KOW advertising may
                    be collected by us or other companies we work with. Our URLs, pages, screens, and
                    content may include drug names and information and condition names and
                    information. In addition to other uses described herein, we and other companies may
                    use this information to, among other things, provide the Services, help diagnose
                    problems with our servers, analyze trends, track users’ web page, email, and mobile
                    application movements/activities, help identify or gather demographic information,
                    and target and retarget online and mobile advertisements to You across computers or
                    devices You may use.</p>
                <h3>Profile Inferences:</h3>
                <p>Inferences that we draw from the above categories of information
                    and web activity to create a personalized profile so we can better identify goods and
                    services that may be of interest to You.</p>
                <h3>Professional Information:</h3>
                <p>For healthcare providers, your National Provider Number
                    (“NPI”), medical specialty or other professional credential information.</p>
            </div>
            <p>There are several ways we may obtain information about You, including from:</p>
            <p>(1) You, when You provide us information to use our Services;</p>
            <p>(2) You, when You interact with certain technologies that power our Services that are
                automatically or passively collected;</p>
            <p>(3) You, through the device You may use to access or use our Site or Services; and</p>
            <p>(4) Third parties.</p>
            <h3>A. Information You Provide to Us</h3>
            <p>When You use the Services, we ask You to provide certain information to use the Services. For
                example, due to the nature of the Services, we may ask for the medication name, strength, and
                quantity, which You are requesting. Furthermore, we may ask You for Your pharmacy insurance
                card information, specifically, the BIN, PCB, and RxGroup, as well as phone number at which to
                receive SMS text notifications. We may also ask for information when You register to create an
                account, update Your information, sign up for price alerts or promotions, email or text Yourself a
                coupon, request a discount card or coupon, sign up for a pharmaceutical manufacturer’s copay
                card program, access healthcare provider services, purchase products or services, participate in
                promotions, or otherwise communicate with us.</p>
            <h3>B. Information We Collect Automatically</h3>
            <p>In addition to any information that You may provide to us, we and the third parties we work with
                may use a variety of technologies that automatically (or passively) collect information when You
                use the Services. We may automatically collect certain information from You, including Your IP
                address, device information for the computer, mobile device, tablet or other device, including the
                hardware model and mobile network information, browser type, operating system, products or
                services You purchase or access, content, screens or pages viewed and interactions with content, 
                screens or pages, URL and the preceding page views or websites visited, what third party
                referred You to our Services, and mobile device configurations. Our URLs, pages, screens, and
                content may include drug names and information and condition names and information. We may
                also automatically collect information about Your use of the Services, including the date and
                time You visit the Services; use or click through to any of the Services; the information, content,
                or advertisements You view, hover over, or click on; the amount of time You spend viewing or
                using the Services; the number of times You return to the Services; other click-stream or site
                usage data; and emails that You open, forward or click-through to our Services. In addition to
                other uses described herein, we and other companies may use this information to, among other
                things, provide the Services, help diagnose problems with our servers, analyze trends, track
                users’ web page, email, and mobile application movements/activities, help identify or gather
                demographic and interest information, and target and retarget online and mobile advertisements
                to You across computers or devices You may use.</p>
            <div className='subtext-1b'>
                <h3>Third-Party Technologies:</h3>
                <p>We may use other companies’ analytics, tracking and
                    provided tools that receive information when You use our Services, including
                    technology from Google, Facebook and others, to help us track, segment, and analyze
                    usage of the Services, and to help us or those companies serve more targeted
                    advertising on the Services and across the Internet. These tools may use technology
                    such as cookies, tags, pixels, SDKs, and similar technologies to track online activity.
                    The companies may also combine information they collect from Your interaction with
                    the Services with information they collect from other sources. We may not have
                    access to information these companies collect using cookies or other tracking
                    technologies.</p>
            </div>
            <h3>C. Information We Collect from Third Parties</h3>
            <p>We also may receive Your information and Your household information from third parties to
                enhance our Services, either due to our intentional acquisition of such information, or as a result
                of a third party’s automatic collection and storage of such information, to the extent such
                information is stored, and/or interacts with our server.</p>
            <div className='subtext-1c'>
                <h3>Third-Party API:</h3>
                <p>The KOW server interfaces with a third-party application
                    programming interface company (“API”) in order to translate Your queries to enrolled
                    pharmacies (“Enrolled Pharmacies”). The API may collect certain information,
                    including without limitation information regarding IP address, device location, and
                    screens or pages viewed, etc.</p>
                <h3>Healthcare Professionals:</h3>
                <p>KOW may obtain patient information from a patient’s
                    healthcare provider.</p>
                <h3>Marketing Partners:</h3>
                <p>We may work with third parties to conduct marketing
                    campaigns, collect data and/or identify users or potential users of our Services or other
                    products or services. Such third parties may collect and provide us with information
                    about You such as name, contact information, medical information (such as condition
                    and prescription), demographic information, interest information, information
                    regarding online activities across devices and online platforms and offline activities
                    such as purchase history.</p>
                <h3>Data Partners:</h3>
                <p>We may enhance Your information with information from third
                    parties, including professional and contact information, medical information (such as
                    condition and prescription), demographic information, interest information,
                    information regarding online activities across devices and online platforms and offline
                    activities such as purchase history.</p>
            </div>
            <p>We may combine the various information we collect about You, including, identifying
                information, usage information, internet information, as well as information collected offline,
                across other computers or devices that You may use, and from third-party sources.</p>
        </div>
        <div className='section-2'>
            <h2>2. How do we use information about You?</h2>
            <p>We may use Your information to provide our Services and for a variety of related business
                activities, which may include:</p>
            <div className='subtext-2'>
                <h3>Creating, Updating or Managing User Profiles and Accounts:</h3>
                <p>We may use Your
                    information to create user profiles and accounts, or otherwise manage Your account.</p>
                <h3>Communicating With You:</h3>
                <p>We may use Your information to communicate with You
                    on websites, mobile applications, and third-party platforms, as well as via text
                    messages, emails, direct mail, and other forms of advertising.</p>
                <h3>Advertising and Marketing:</h3>
                <p>We may use Your information to advertise and market
                    to You on websites, mobile applications, and third-party platforms, as well as via text
                    messages, emails, direct mail, and other forms of advertising. This may include
                    retargeting You on third-party platforms. We may use and share Your information to
                    send advertising and marketing of our Services and other services we believe You
                    may find interesting and may share information with advertisers and other third
                    parties. We may also use and share Your information to measure the effectiveness of
                    advertising and marketing, to predict effectiveness of advertising and marketing, to
                    find audience for advertising and marketing and other analytics and operations related
                    to advertising and marketing.</p>
            </div>
            <p>We may also permit third parties to collect Your information over time, Your interactions with
                KOW or across third-party websites, mobile applications and/or online services, including those
                that assist us in operating our Services, including to serve ads or provide messaging to You on
                our own websites and mobile applications or on third-party platforms.</p>
            <p>We may also use third-party advertising companies to serve and load ads on certain parts of our
                Services, including an ad server to provide advertising when You use our website. These
                companies may use internet or electronic information about our Services and other websites and
                mobile applications in order to provide advertisements about goods and services of interest to
                You.</p>
            <div className='subtext-2'>
                <h3>Business Operations:</h3>
                <p>We may use Your information to understand Your use of our
                    Services in order to consider improving them, including to provide, change, market, or
                    optimize our services and products, to perform analytics and to create new services
                    and products. We also may use Your information to determine whether applicable
                    policies and terms are being violated.</p>
                <h3>Reviews:</h3>
                <p>We may use Your information to obtain user surveys, recommendations,
                    and reviews of the Services.</p>   
                <h3>Security and Auditing:</h3>
                <p>We may use Your information to audit interactions with You,
                    count ad impressions, detect security incidents, protect against fraud or other
                    malicious activity, and identify and repair errors that may arise.</p>
                <h3>Complying with Law:</h3>
                <p>We may use Your information to comply with applicable laws,
                    including as required by judicial or administrative proceedings.</p>
            </div>
            <p>We may also use Your information for other purposes as disclosed at the time You provide Your
                information, or otherwise with Your consent.</p>
        </div>
        <div className='section-3'>
            <h2>3. How do we share information with others?</h2>
            <p>We may share or sell Your information to companies that work for or provide services to us,
                only in the ways described below.</p>
            <h3>A. Affiliates and Subsidiaries</h3>
            <p>We may share or sell information with our subsidiaries and affiliated companies for business and
                operational purposes.</p>
            <h3>B. Service Providers and Third Parties</h3>
            <p>We may share Your information with the following service providers and third parties to perform
                services on our behalf such as:</p>
            <div className='subtext-3'>
                <p>Data warehouses, servers, and storage providers</p>
                <p>Data analytic, data connectivity and customer data providers and platforms</p>
                <p>Customer engagement or relationship management platforms</p>
                <p>Advertising networks, advertising software tools, advertising servers, advertisers,
                    sponsors and partners that market and advertise to You and measure performance of
                    marketing and advertisements</p>
                <p>Cloud computing providers</p>
                <p>Survey and customer feedback providers and platforms</p>
                <p>Printers</p>
                <p>Mailing houses and delivery services</p>
                <p>Data providers</p>
                <p>Software development tools</p>
                <p>Referral program platforms</p>
                <p>Pharmacies, healthcare providers, pharmaceutical manufacturers, copay card
                    providers, insurance plans and other entities in the healthcare ecosystem</p>
                <p>Data providers, email delivery, and analytics software</p>
                <p>Text delivery and analytics platform</p>
                <p>Customer service software</p>
                <p>Patient advocacy support providers to handle Your requests</p>
                <p>Privacy management platform, such as to manage deletion requests</p>
                <p>Prepaid card and gift card vendor</p>
                <p>Information security, fraud detection and prevention providers</p>
                <p>Identity and professional credential verification providers</p>
                <p>Auditors, third parties conducting security assessments and services, law firms, staff
                    augmentation firms and other professional services providers</p>
            </div>
            <h3>C. For Corporate Transactions</h3>
            <p>We may transfer Your information if we are involved, whether in whole or in part, in a merger,
                sale, acquisition, divestiture, restructuring, reorganization, dissolution, bankruptcy, or other
                change of ownership or control. If another entity acquires us or any of our assets, information we
                have collected about You may be transferred to such entity. In addition, if any bankruptcy or
                reorganization proceeding is brought by or against us, such information may be considered an
                asset of ours and may be sold or transferred to third parties. Should such a sale or transfer occur,
                we will use reasonable efforts to try to require that the transferee use information provided
                through the Services in a manner that is consistent with this Privacy Policy.</p>
            <h3>D. For Legal Obligations/Safety</h3>
            <p>We may be required by law to comply with a valid legal process, such as a subpoena, court
                order, or search warrant, or where there is a lawful request, to disclose Your information without
                Your consent or notice. We may also be required to disclose Your information to a third party or
                governmental entity in response to a court order. We may disclose Your information to protect
                the security of our Services, servers, network systems, and databases.</p>
            <h3>E. To Enforce Legal Rights</h3>
            <p>We may also share Your information to protect our customers, employees (if applicable), or
                property; in emergency situations; to investigate, prevent, or take other action regarding
                suspected illegal activity, fraud, or other wrongdoing; and to enforce our rights under our terms
                of service and policies, in court or elsewhere.</p>
        </div>
        <div className='section-4'>
            <h2>4. What choices do You have?</h2>
            <h3>A. Cookies and Do Not Track</h3>
            <p>We, or other parties we do business with, may place or recognize unique cookies or other similar
                technologies on Your browser when You visit our Website to use our Services to collect
                information about Your use of the Services and Your other online activities over time and across
                different websites and apps, and may use that information to serve interest-based advertisements
                to You as You browse the Internet.</p>
            <p>You may adjust Your device or Internet browser settings to limit certain tracking or to decline
                cookies, but by doing so, the performance of Your device or browser may prevent You from 
                being automatically recognized upon revisiting and You may not be able to use certain features
                of the Service or take full advantage of all of our offerings. Please refer to Your device’s settings
                or Your Internet browser’s “Help” section for more information on how to delete and/or disable
                Your device or browser from receiving cookies or controlling Your tracking preferences.</p>
            <p>At this time, we do not respond to browser “Do Not Track” signals.</p>
            <h3>B. Your Privacy Rights</h3>
            <p>You may choose to limit certain collection or disclosure of Your information as follows:</p>
            <div className='subtext-4b'>
                <p>To have Your information deleted, You can submit a verifiable consumer request by
                    emailing help@KOWmeds.com. Please note that prior to fulfilling Your request, we
                    will need to verify Your identity, which may require additional pieces of information.
                    This information is strictly used for verification purposes.</p>
            </div>
        </div>
        <div className='section-5'>
            <h2>5. Additional privacy disclosures</h2>
            <h3>A. European Union Visitors</h3>
            <p>Please do not use the Services if You are not a resident of the United States. The Services are
                intended for use only by residents of the United States. Use by visitors from the European
                Economic Area (“EEA”) is prohibited.</p>
        </div>
        <div className='section-6'>
            <h2>6. Children’s privacy</h2>
            <p>The Services are only for users of the age of 18 or older. If You are under the age of 18, please
                do not attempt to register with us or provide any personal or other information about Yourself to
                us at any time for the Services. We do not knowingly collect personal information from
                individuals under the age of 13 and we do not direct our services to individuals under the age of
                13.</p>
        </div>
        <div className='section-7'>
            <h2>7. Third-party services and websites</h2>
            <p>When You access or engage with a third-party service, application, or website, even when doing
                so through KOW equipment or applications, You are entering that service, application, or
                website and governed by its policies. Many third parties have their own privacy policies that
                differ from ours. This privacy policy only covers our Services and does not cover any other third
                parties. KOW may also collect usage information related to those third-party products, services,
                applications, or websites if they are accessed through KOW equipment, websites, or applications.</p>
        </div>
        <div className='section-8'>
            <h2>8. How do we protect Your information?</h2>
            <p>KOW takes information security seriously. We use commercially reasonable efforts to prevent
                unauthorized third-party access to Your information. However, we cannot guarantee that these
                practices will prevent every unauthorized attempt to access, use, or disclosure of Your 
                information. Please note that we cannot ensure or warrant the security of any information You
                transmit to us over the internet or other electronic means (such as text messages). You use the
                Services and provide us with Your information at Your own risk, and we accept no liability for
                unintentional disclosure.</p>
        </div>
        <div className='section-9'>
            <h2>9. What about changes to this notice?</h2>
            <p>We may modify this Privacy Policy at any time. When we do so, we will post the revised Privacy
                Policy on our website.</p>
        </div>
        <div className='section-10'>
            <h2>10. Who can You contact with questions or concerns?</h2>
            <p>Please address comments or questions to us about this Privacy Policy to:</p>
            <div className='subtext-10'>
                <p>KOW</p>
                <p>P.O. Box 505</p>
                <p>Valley Stream, New York 11582</p>
                <p>Email: help@KOWmeds.com</p>
            </div>
        </div>
    </>
  )
}

export default PrivacyText
