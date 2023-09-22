import Link from 'next/link'
import styles from './Terms.module.css';

import ExhibitModal from '@/components/Documents/ExhibitModal/ExhibitModal.jsx'

export default function TermsText({ isModal = false }) {

    return (
        <div className={styles.bodyText}>
            {isModal? null : <h1>Terms of Use</h1>}
            <p>Effective Date: January 1, 2023</p>
            <p>Welcome to Kindly Oblige With (KOW)&trade;, an online referral service and prescription management
                company (the &quot;Services&quot;) made available by Fillable, LLC (&quot;KOW&quot;, &quot;the Company&quot;, and
                collectively, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). You, a patient end-user (the &quot;Patient&quot;), healthcare provider
                end-user (the &quot;Provider&quot;), and/or enrolled pharmacy as hereinafter and in a separate subscription
                agreement defined (the &quot;Enrolled Pharmacy&quot;) (individually and collectively, &quot;You&quot; or &quot;Your&quot;)
                can access our Services through our website, www.KOWmeds.com (the &quot;Site&quot;) and text
                messaging. Please read these Terms of Service (the &quot;Terms&quot;) carefully because they create an
                agreement between You and KOW. Once accepted, they become binding legal obligations,
                covenants, warranties, conditions, and responsibilities between You and KOW. This document
                incorporates the terms of the privacy policy (the &quot;Privacy Policy&quot;), including all future
                amendments or modifications thereto (collectively, the &quot;Agreement&quot;). If You do not agree to
                these Terms or are younger than eighteen (18) years old, You are to immediately cease the use of
                the Services.</p>
            <p>By accessing or using the Services in any way, including without limitation, browsing the
                Services, using any information, or submitting any information, personal or otherwise, via the
                Services, You agree to and are bound by the terms, conditions, policies, promises and notices
                contained in these Terms, including conducting this transaction electronically, certain third-party
                terms and conditions, disclaimers of warranties, damage and remedy exclusions and limitations,
                binding arbitration, venue selection, and a choice of New York law. You represent and warrant
                that You are at least eighteen (18) years old and possess the legal capability to consent to and be
                bound by these terms.</p>
            <h3>KOW is an Online Referral Service and Prescription Management Platform</h3>
            <p>KOW enables You, the Patient and/or Provider, to locate one (1) or more of Your prescription
                medication needs by submitting a request for Your medication through our Site, (&quot;Request&quot;) and
                acts as a prescription locator only. After submitting a Request, the Services reach out to KOW&apos;s
                network of pharmacies, (each an &quot;Enrolled Pharmacy&quot;, and collectively the &quot;Enrolled
                Pharmacies&quot;), to identity which of the Enrolled Pharmacies carry the Requested Medication, as
                hereinafter defined, in stock in order to refer You to that Enrolled Pharmacy. Each medication
                that You request through KOW must be based on a valid prescription issued for a legitimate
                medical purpose by a medical professional acting in the usual course of his/her professional
                practice. You understand that submitting a query for the Requested Medication only identifies
                and locates an Enrolled Pharmacy which carries the Requested Medication. Following KOW&apos;s
                referral, You understand that it is solely Your responsibility to ensure that the Enrolled Pharmacy
                receives Your prescription, which it will then dispense accordingly. KOW in no way guarantees
                that the Requested Medication will be prepared and ready for pickup by You. The Services are
                not a substitute for professional medical advice, diagnosis or treatment and shall not be used as 
                such. Additionally, the Services do not constitute medical or other professional advice. For the
                avoidance of doubt, KOW is not a pharmacy and is not giving You any medical advice
                whatsoever. KOW does not recommend or endorse any specific tests, physicians, products,
                procedures, opinions, or other information that may be mentioned on the Services or by any
                other electronic means. Reliance on any information provided by KOW is solely at Your own
                risk and is disseminated strictly for informational purposes. The information provided through
                KOW&apos;s Services is designed to support, not replace, the relationship that exists between
                patient/site-visitor and his/her physician. Never disregard professional medical or pharmaceutical
                advice or delay in seeking it because of something You have read or seen on our Services. In the
                event of any medical emergency, please cease using the Services and immediately dial 9-1-1 and
                seek the assistance of a medical professional.</p>
            <h3>KOW Privacy Policy</h3>
            <p>Please refer to our {<Link className={styles.linkPrivacy} href="/privacy-policy"> Privacy Policy </Link>} for information on how we collect, use and disclose
                information from our users. By using our Services and clicking below, You are accepting the
                Privacy Policy and Terms of Use.</p>
            <h3>Order Fulfillment by Pharmacy</h3>
            <p>When You, the Patient and/or Provider, submit a Request through KOW, we transmit Your
                Request to KOW&apos;s network of Enrolled Pharmacies to enable You to ascertain the availability of
                requested, prescribed medication in the amounts and dosages stated on Your valid prescription
                (&quot;Requested Medication&quot;). Please note that You must have a valid, legal prescription for the
                Requested Medication that a licensed medical professional has provided to You. By utilizing the
                Services, You are submitting a Request that is transmitted to the Enrolled Pharmacies to
                determine if any of the Enrolled Pharmacies possess the Requested Medication in their
                inventory. If an Enrolled Pharmacy has the Requested Medication in stock at the time of Your
                inquiry, You will be immediately notified via SMS text messaging: (i) which Enrolled Pharmacy
                can fill Your prescription, if any; (ii) the location of the Enrolled Pharmacy; and (iii) the time
                Your Requested Medication will be ready for pick up, after which You can pick it up. However,
                You acknowledge and agree that KOW does not guarantee that Your Requested Medication will
                be ready for pickup at the Enrolled Pharmacy. You understand and agree that it is Your
                responsibility to ensure that the Enrolled Pharmacy has received Your valid prescription to
                subsequently dispense to You, after you have submitted Your request for the Requested
                Medication through our Services.</p>
            <p>Again, You acknowledge and agree that KOW is not a pharmacy nor do we provide any medical
                advice whatsoever. You further acknowledge and agree that we do not fill prescriptions
                ourselves, nor do we manufacture, prepare, dispense or provide medications of any kind. You
                also acknowledge and agree that, although we may select certain pharmacies to work with based
                on various metrics we apply, our decision to work with a specific pharmacy should not be
                deemed an endorsement of, or a warranty regarding the quality of services provided by, such
                Enrolled Pharmacy. If, for any reason, You are not satisfied with the manner in which the 
                Enrolled Pharmacy processed Your prescription order, You agree to address this issue with the
                Enrolled Pharmacy directly.</p>
            <p>You also acknowledge and agree that we do not provide any medical advice, opinion, diagnosis
                or treatment, and that that no pharmacy-patient relationship or doctor-patient relationship is, or
                will be, established between KOW and You as a result of Your use of the Services or otherwise.
                It is imperative that You check product information (including package inserts) regarding
                dosages, precautions, warnings, interactions and contraindications before administering or using
                any medications. If You have any questions regarding Your prescriptions, You should consult
                Your healthcare professional or pharmacist, whose contact information may be listed on the
                prescription or the packaging of Your prescription medicine. KOW cannot and will not answer
                any inquiries regarding the aforementioned.</p>
            <h3>IF YOU ARE HAVING A MEDICAL EMERGENCY, DO NOT USE OUR SERVICES –
                CALL 911.</h3>
            <h3>Using Our Services</h3>
            <p>If You access or use the Services on behalf of a company, principal, patient, or other entity, You
                represent, warrant, covenant, and agree that You have authority to bind such entity and its
                affiliates to the Agreement and that it is fully binding upon them. KOW is relying on the veracity
                of the directly preceding sentence. In such case, the term “You” will refer to You, as an
                individual or to each such entity and its affiliates on whose behalf You are accessing or using the
                Services. If You do not have authority, or if You do not agree with the terms of the Agreement,
                You shall not access or use the Services and further should immediately exit any existing access
                to the Services. You should read and keep a copy of each component of the Agreement for Your
                records. In the event of a conflict among them, the terms of this document will control and be
                binding.</p>
            <h3>Changes</h3>
            <p>KOW reserves the right to modify or revise the Agreement, including without limitation this
                Terms of Use, at any time in its sole and absolute discretion without notice to You. Your use of
                the Services will constitute Your acceptance of and agreement to such changes. IF YOU DO
                NOT WISH TO BE BOUND TO THE TERMS, DO NOT USE THE SERVICES.</p>
            <h3>SMS Text Messaging</h3>
            <p>By using our Services, You are agreeing to be contacted by us via SMS Text Messaging. By
                using our Services, You authorize us and our partners and service providers to use auto-dialer
                and non-auto-dialer technology to send text messages to the mobile phone number associated
                with Your opt-in (i.e., the mobile device phone number You provided when submitting Your
                Request). You confirm that You are the subscriber to the relevant phone number or that You are
                the customary user of that number on a family or business plan and that You are authorized to 
                opt in. By using our Services, You agree to the standard message and data rates that may apply
                and that You may be charged the same in connection with Your use of the Services. You further
                release us from any and all liability associated with SMS Text Messaging including but not
                limited to any potential interception of the SMS Text Messages whether by bad actors, poor or
                unsecured wi-fi encryption, security and the like.</p>
            <h3>Mobile Security</h3>
            <p>Most communication with the Company occurs through Your mobile device, computer, laptop,
                tablet, or other similar device (&quot;Devices&quot;). Therefore, Your Devices likely contain Protected
                Health Information (&quot;PHI&quot;), such as pictures of Your prescriptions, medical insurance cards, and
                other vulnerable information. As a result, it is of the utmost importance that You keep Your
                Devices secure at all times. If You are using public Wi-Fi or email applications on Your Devices,
                You are likely using unsecure networks, putting PHI at risk of interception.
                The best ways to protect Devices from security breaches is to maintain password protection, 2
                Factor Authentication, encryption, and/or to install a remote wiping/disabling program into them.
                Remote wiping/disabling program allows users to quickly clear and disable a lost or stolen
                mobile device, which can possibly prevent or reduce the magnitude of the breach.
                While KOW takes the utmost care in protecting Your confidential information, it cannot protect
                information stored in Your Devices. By using KOW, You agree to indemnify and hold KOW
                harmless for all loss, damage, claims, or legal actions resulting from any data breaches occurring
                from theft/misplacement or any third-party intervention with any and all of Your Devices.</p>
            <h3>Third-Party API</h3>
            <p>By using the Services, You agree with our use of a third party application programming interface
                company (&quot;API&quot;) with which the KOW server will interact to submit Your Request to the
                Enrolled Pharmacies and connect You to the Requested Medication. Services provided by the
                Third-Party API are incorporated without limitation in the KOW Services, as defined above and
                hereinafter. By utilizing the Services You consent to and agree to be bound by, to the extent
                applicable, the Third-Party API provider&apos;s terms and conditions of service to the extent the same
                are not in conflict with this Agreement.</p>
            <h3>Proprietary Rights and License</h3>
            <p>KOW, its affiliates, and licensors, if any, exclusively own all right, title and interest in and to the
                Services, including all associated intellectual property rights (hereinafter, the &quot;KOW Brand
                Features&quot;). You acknowledge that the Services and KOW Brand Features are protected by the
                laws of the United States and any applicable jurisdictions. You agree not to remove, alter or
                obscure any copyright, trademark, service mark, or other proprietary rights notice, notice which
                demonstrates KOW&apos;s ownership of proprietary information, incorporated in or accompanying
                the Services. Neither these Terms nor Your use of the Services transfers any right, title or interest
                in the Services, or intellectual property rights to You, and KOW and its third-party licensors, if
                any, retain all respective right, title, and interest to the Services.</p>
            <h3>Rights Granted by KOW</h3>
            <p>Subject to the terms set forth in this Agreement and any other agreements that may be entered
                into between the parties, KOW grants You a limited, non-exclusive, revocable, non-transferable
                and non-sublicensable license solely in connection with Your permitted use of the Services and
                solely for Your own personal and non-commercial purposes. Except as expressly permitted in
                these Terms, You may not: (i) copy, modify or create derivative works based on the Services; (ii)
                distribute, transfer, sublicense, lease, lend or rent the Services to any third party; (iii) reverse
                engineer, decompile or disassemble the Services; or (iv) make the functionality of the Services
                available to multiple users through any means. KOW reserves all rights in and to the Services not
                expressly granted to You under these Terms. The Services are licensed, not sold. The license
                confers no title to or ownership in the Services and should not be construed as a sale of any
                rights in or to the Services.</p>
            <p>General Prohibitions</p>
            <p>By using our Services, You agree not to do any of the following:</p>
            <div className={styles.rightsList}>
                <p>1. Use, display, mirror or frame the Services, or any individual element within the Services,
                    KOW&apos;s names, any KOW trademark, logo or other proprietary information, or the layout
                    and design of any page or form contained on a page, without KOW&apos;s express written
                    consent;</p>
                <p>2. Delete, modify, hack or attempt to change or alter any of the Services;</p>
                <p>3. Attempt to access, tamper with, or use non-public areas of the Services, KOW&apos;s
                    computer systems or networks connected to any of our servers, or the technical delivery
                    systems of KOW&apos;s providers;</p>
                <p>4. Attempt to probe, scan, or test the vulnerability of any KOW system or network or breach
                    any security or authentication measures;</p>
                <p>5. Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any
                    technological measure implemented by KOW or any of KOW&apos;s providers, if any, or any
                    other third party (including another user) to protect the Services;</p>
                <p>6. Attempt to access or search the Services through the use of any engine, software, tool,
                    agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the
                    like) other than the software and/or search agents provided by KOW or other generally
                    available third party web browsers;</p>
                <p>7. Send any unsolicited or unauthorized advertising, promotional materials, email, junk
                    mail, spam, chain letters or other form of solicitation;</p>
                <p>8. Use any meta tags or other hidden text or metadata utilizing any KOW names, service
                    marks, trademarks, logos, URLs or product names without KOW&apos;s express written
                    consent;</p>
                <p>9. Use any material or information, including images or photographs, which are made
                    available through the Services in any manner that infringes any copyright, trademark,
                    patent, trade secret, or other proprietary right of any party;</p>
                <p>10. Use the Services for any commercial purpose or for the benefit of any third party or in
                    any manner not permitted by these Terms;</p>
                <p>11. Forge any TCP/IP packet header or any part of the header information in any email or
                    newsgroup posting, or in any way use the Services to send altered, deceptive or false
                    source-identifying information;</p>
                <p>12. Attempt to decipher, decompile, disassemble or reverse engineer any of the software used
                    to provide the Services;</p>
                <p>13. Use any device, software or routine intended to damage or otherwise interfere with, or
                    attempt to interfere with, the proper functioning of the Services or servers or networks
                    connected to the Services, or take any action that interferes with the access of any user,
                    host or network, including, without limitation, uploading files that contain viruses,
                    sending a virus, overloading, flooding, spamming, or mail-bombing the Services;</p>
                <p>14. Collect, compile or store any information from the Services or personally identifiable
                    information from other users of the Services without their express permission;</p>
                <p>15. Provide false information, or impersonate or misrepresent Your affiliation with any
                    person or entity;</p>
                <p>16. Use the Services to update or create Your own database of business listing or prescription
                    drug-related information;</p>
                <p>17. Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of any third
                    party;</p>
                <p>18. Violate any applicable law or regulation; or</p>
                <p>19. Encourage or enable any other individual to do any of the foregoing.</p>
            </div>
            <p>YOU AGREE NOT TO SUBMIT ANY CONTROLLED SUBSTANCE PRESCRIPTIONS
                THROUGH THE SERVICES.</p>
            <p>All of the above-listed actions shall be deemed, without limitation, examples of prohibited
                actions. KOW reserves all rights, entitlements, and causes of action concerning prohibited
                actions, including, but not limited to: (i) the right to initiate a suit or action at law to prevent such
                prohibited actions from taking place or being repeated by seeking injunctive or declaratory relief;
                (ii) the right to initiate a suit or action at law to seek redress of damages; and (iii) any and all
                other actions that may be taken at law or equity.</p>
            <h3>Fee Schedule and Pricing Terms</h3>
            <p>Enrolled Pharmacy. You are charged pursuant to the Fee Schedule, which is annexed hereto as
                <ExhibitModal
                    modalName=" Exhibit A "
                    title="Exhibit A"
                    subtitle="Fee Schedule"
                    tier1="Local Community"
                    amount1="30"
                    frequency1="Monthly"
                    tier2="Expanded Delivery"
                    amount2="50"
                    frequency2="Monthly"
                    tier3="DME Limited"
                    amount3="60"
                    frequency3="Monthly"
                    tier4="Specialty"
                    amount4="400"
                    frequency4="Monthly"
                />
                and incorporated herein by reference, which Fee Schedule was negotiated and agreed
                to between the Parties for good and valuable consideration pursuant to the terms of the
                subscription agreement (&quot;Subscription Agreement&quot;) entered into by and between You and KOW,
                which is incorporated herein by reference.</p>
            <p>Pursuant to the Subscription Agreement, for a specified term beginning on the Effective Date of 
                the Subscription Agreement and ending on Your receipt of the Termination and Fee Schedule 
                Notice (as therein defined) (the &quot;Initial Testing Period&quot;), KOW will permit access to and 
                enrollment in its Services at the agreed upon monthly rate of ($______) which shall be the 
                Initial Rate. The Initial Rate represents a promotional rate based on the Enrolled Pharmacy&apos;s 
                network selection at the time of enrollment and offered by KOW during KOW&apos;s Initial Testing 
                Period. The duration of the Initial Testing Period shall be fixed by KOW in its sole and absolute 
                discretion. Upon termination of the Initial Testing Period, KOW shall serve You with a notice 
                advising You of the following:</p>
            <div className={styles.subtextFee}>
                <p>(i) the Initial Testing Period has ended; and</p>
                <p>(ii) the Fee Schedule in the Agreement, will now be going into full force and effect (the
                    &quot;Termination and Fee Schedule Notice&quot;).</p>
            </div>
            <p>You will have ten (10) days from receipt of the Termination and Fee Schedule Notice to provide
                KOW written notice to legal@KOWmeds,com that You will be opting-out of and terminating
                this Agreement and the Subscription Agreement (the period of time to respond being the &quot;Opt-
                Out Noticing Period&quot; and the notice sent being the &quot;Opt-Out Notice&quot;). If You do not properly
                deliver and KOW does not receive the Opt-Out Notice within the Opt-Out Notice Period, the
                Initial Rate will no longer be in effect and the Fee Schedule annexed hereto as
                <ExhibitModal
                    modalName=" Exhibit A "
                    title="Exhibit A"
                    subtitle="Fee Schedule"
                    tier1="Local Community"
                    amount1="30"
                    frequency1="Monthly"
                    tier2="Expanded Delivery"
                    amount2="50"
                    frequency2="Monthly"
                    tier3="DME Limited"
                    amount3="60"
                    frequency3="Monthly"
                    tier4="Specialty"
                    amount4="400"
                    frequency4="Monthly"
                />
                and additionally annexed to the Subscription Agreement as Exhibit A, which are one and the same,
                (collectively, the &quot;Fee Schedule&quot;), shall immediately become operative. Any subsequent fees
                that become due and owing, by way of Your subscription, or otherwise, shall be renewed
                automatically on an annual basis in accordance with the terms in the Fee Schedule, this
                Agreement and the Subscription Agreement.</p>
            <p>KOW shall have the right (but not the obligation) to amend or modify the Fee Schedule, from
                time to time, in its sole yet reasonable discretion. KOW shall provide You thirty (30) days&apos;
                written notice of any such amendment or modification. Upon receipt of any such notice, You
                will have ten (10) days to deliver written notice to KOW rejecting the Fee Schedule amendment
                or modification and terminating this Agreement and the Subscription Agreement, which
                termination shall not cause You to incur any liquidated damages.</p>
            <p>Your acknowledgment of and consent to this Agreement and execution of the Subscription
                Agreement authorizes KOW to issue You invoices as applicable, and/or charge a credit card on
                file, which You previously provided, in approximately [30-day intervals,] for the amounts due
                pursuant to the Fee Schedule. If for any reason the Fee or any other charges, expenses, or fees
                due to KOW remain unpaid for a period exceeding fifteen (15) calendar days, Your subscription
                and access to the Services will immediately terminate. It is solely Your responsibility to ensure
                that payment is made pursuant to the terms and conditions of this Agreement, the Subscription
                Agreement, and the Fee Schedule and to notify KOW via legal@kowmeds.com, of any
                modification or amendment of billing instructions and/or if you cancel or wish to change the
                notification method and/or address for our billing purposes.</p>
            <p style={{textDecoration: "underline"}}>Patient.</p> 
            <p>KOW reserves the exclusive and absolute right to determine and implement a fee
                schedule and pricing terms which it deems appropriate for Your use of and access to its Services.
                KOW further reserves the exclusive and absolute right to change, modify, or alter the fee
                schedule and pricing terms at any time, without notice to You.</p>
            <p style={{textDecoration: "underline"}}>Provider.</p>
            <p>KOW reserves the exclusive and absolute right to determine and implement a fee
                schedule and pricing terms which it deems appropriate for Your use of and access to its Services. 
                KOW further reserves the exclusive and absolute right to change, modify, or alter the fee
                schedule and pricing terms at any time, without notice to You.</p>
            <h3>Reserved Rights; Non-Permitted Purposes; API Restrictions</h3>
            <p>KOW reserves the right to terminate Your access to or use of the Services at any time, without
                notice, for any reason or no reason, in its sole and absolute discretion, including, but not limited
                to if You use the Services in ways that KOW determines, in its sole discretion, to be
                inappropriate, unapproved, or unwanted. Without limitation, any use of the Services that (i) is
                competitive or inconsistent with KOW&apos;s own services, (ii) aggregates, in any way with third
                party content or (iii) fails to attribute the KOW Services appropriately to KOW is expressly
                prohibited. KOW reserves the right to continually review and evaluate any and all uses of the
                Services and will determine whether specific uses are permitted or not permitted in its sole
                discretion. KOW&apos;s failure to immediately terminate Your use of the Services shall in no way be
                construed as a waiver of its ability to terminate Your use of or access to the Services at some
                future time. KOW reserves the right to receive and You provide it the right to demand and
                receive information related to Your use of the Services and Your compliance with this
                Agreement. Failure to timely and completely respond to such request may result in Your
                preclusion from use of the Services.</p>
            <h3>Termination</h3>
            <p>KOW reserves the right, in its sole discretion (for any reason or for no reason) and at any time
                without notice to You, to change, suspend or discontinue and/or suspend, refuse to offer You, or
                terminate Your rights, if any, under this Agreement to access, use and/or display (as applicable)
                the KOW Services. Any termination of this Agreement will also immediately terminate the
                licenses granted to You hereunder. Such change, refusal, suspension or termination pursuant to
                this paragraph, may cause Your existing use of the Services and access to the Site to stop
                functioning properly, and You will no longer have access to the Services.
                KOW shall have no liability or responsibility to You for any damages, refunds, costs, fees,
                amounts, losses or sums incurred by reason of Your termination from the Site or the use of the
                Services. You and KOW hereby agree and covenant that You have no right to use the Site or the
                Services. You acknowledge that KOW owes You no duty, whatsoever, and need not provide
                You access to the Site or Services.</p>
            <p style={{textDecoration: "underline"}}>Enrolled Pharmacy.</p>
            <p>If you are an Enrolled Pharmacy, you are subject to the termination
                provisions set forth in the Subscription Agreement, which are incorporated herein by reference
                and made a part hereof. Either party may terminate this Agreement for failure to comply with its
                terms, conditions, or obligations upon thirty (30) days&apos; written notice to the other, non-
                terminating party. Additionally, either party may terminate this Agreement for convenience upon
                ninety (90) days&apos; written notice to the other, non-terminating party. In the event the Enrolled
                Pharmacy wishes to terminate this Agreement for convenience or if KOW terminates this
                Agreement due to Enrolled Pharmacy&apos;s failure to comply with the terms of the Agreement, it
                shall pay to KOW, as liquidated damages, an amount equal to six (6) months of the Fee. Lastly, 
                either party may terminate this Agreement by giving written notice of the intent to terminate the
                Agreement no more than one hundred twenty (120) and no less than thirty (30) days before the
                expiration of the Initial Term or any subsequent Renewal Term (as hereinafter defined).
                Immediately upon termination, Enrolled Pharmacy will no longer have any rights associated with
                the Services, all interest in and to any licenses, grants, or subscriptions provided under this
                Agreement to the Enrolled Pharmacy shall immediately terminate, and the parties will not have
                any further obligations to one another except those obligations that by their express terms survive
                the termination of this Agreement. The provisions of this paragraph shall survive the termination
                of this Agreement.</p>
            <h3>HIPAA Waiver – Applicable to Patient User</h3>
            <p>To the extent applicable, if any, and to the extent the information herein collected and stored is
                subject to the purview of the Health Insurance Portability and Accountability Act&apos;s Privacy Law
                (&quot;HIPAA&quot;), if any, You hereby give KOW authority to share Your information, which You
                agree You have voluntarily provided on KOW&apos;s Website, with Enrolled Pharmacies for the
                purpose of obtaining the Requested Medication, at Your request. This authorization to share
                Your health information is valid for the limited duration of the transaction to obtain the
                Requested Medication, and each time thereafter, You will use the Services. You hereby release
                and forever discharge KOW, as well as its parents, affiliates, subsidiaries, divisions, officers,
                directors, stockholders, employees, agents, representatives, and respective successors, assigns,
                heirs, and executors, from any and all claims, demands, and causes of action, arising under this
                paragraph, due to any lapse, omission, or error, whether known or unknown, direct or indirect,
                related or unrelated to the Services, accrued, contingent or potential, caused by the Enrolled
                Pharmacy. By using the Services and clicking below, You hereby consent.</p>
            <h3>Indemnity</h3>
            <p style={{textDecoration: "underline"}}>Enrolled Pharmacy Indemnity.</p>
            <p>You, the Enrolled Pharmacy, hereby agree to indemnify, defend
                and hold harmless KOW and its officers, directors, employees and agents, from and against any
                claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including,
                without limitation, reasonable legal and accounting fees, arising out of or in any way connected
                to this Agreement, and (i) Your access to or use of the Services, or (ii) Your violation of these
                Terms, and any breach of Your representations and warranties, and Your failure to comply with
                Your obligations under any and all laws, rules or regulations, and applicable governing and
                regulatory bodies, including without limitation, the Drug Enforcement Administration (&quot;DEA&quot;) .
                You and the Company agree that this indemnification obligation clause shall be interpreted to
                provide the Company the maximum amount of indemnification permitted under the law of the
                applicable State.</p>
            <p style={{textDecoration: "underline"}}>Patient Indemnity.</p> 
            <p>You, the Patient, hereby agree to indemnify, defend and hold harmless KOW
                and its officers, directors, employees and agents, from and against any claims, disputes,
                demands, liabilities, damages, losses, and costs and expenses, including, without limitation,
                reasonable legal and accounting fees, arising out of or in any way connected to this Agreement,
                and (i) Your access to or use of the Services, or (ii) Your violation of these Terms, and any
                breach of Your representations and warranties, and Your failure to comply with Your obligations
                under any and all laws, rules or regulations, and applicable governing and regulatory bodies. You
                and the Company agree that this indemnification obligation clause shall be interpreted to provide
                the Company the maximum amount of indemnification permitted under the law of the applicable
                State.</p>
            <p style={{textDecoration: "underline"}}>Provider Indemnity.</p> 
            <p>You, the Provider, hereby agree to indemnify, defend and hold harmless
                KOW and its officers, directors, employees and agents, from and against any claims, disputes,
                demands, liabilities, damages, losses, and costs and expenses, including, without limitation,
                reasonable legal and accounting fees, arising out of or in any way connected to this Agreement,
                and (i) Your access to or use of the Services, or (ii) Your violation of these Terms, and any
                breach of Your representations and warranties, and Your failure to comply with Your obligations
                under any and all laws, rules or regulations, and applicable governing and regulatory bodies. You
                and the Company agree that this indemnification obligation clause shall be interpreted to provide
                the Company the maximum amount of indemnification permitted under the law of the applicable
                State.</p>
            <h3>No Warranties; No Support</h3>
            <p>THE API, KOW BRAND FEATURES AND KOW SERVICES ARE PROVIDED &quot;AS IS&quot;,
                &quot;WITH ALL FAULTS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY, OF ANY KIND
                AND AT YOUR SOLE RISK. EXCEPT TO THE MINIMUM EXTENT REQUIRED BY
                APPLICABLE LAW, KOW DISCLAIMS ALL WARRANTIES, REPRESENTATIONS,
                CONDITIONS, AND DUTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY,
                REGARDING THE API, KOW BRAND FEATURES AND ANY KOW SERVICES,
                INCLUDING, WITHOUT LIMITATION, ANY AND ALL IMPLIED WARRANTIES OF
                MERCHANTABILITY, ACCURACY, RESULTS OF USE, RELIABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, TITLE, INTERFERENCE WITH QUIET ENJOYMENT AND
                NON-INFRINGEMENT OF THIRD-PARTY RIGHTS. FURTHER, KOW DISCLAIMS ANY
                WARRANTY THAT YOUR USE OF THE API OR ANY API KEY OR THE KOW
                SERVICES WILL BE UNINTERRUPTED, SECURE, TIMELY OR ERROR FREE. FOR THE
                AVOIDANCE OF DOUBT, YOU ACKNOWLEDGE AND AGREE THAT THE
                AGREEMENT DOES NOT ENTITLE YOU TO ANY TECHNICAL OR OTHER SUPPORT
                FOR THE API. NO ADVICE OR INFORMATION, WHETHER ORAL OR IN WRITING,
                OBTAINED BY YOU FROM KOW WILL CREATE ANY WARRANTY NOT EXPRESSLY
                STATED IN THIS AGREEMENT.</p>
            <h3>Disclaimer, Exclusions and Limitation of Liability</h3>
            <p>YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED
                BY LAW, THE ENTIRE RISK ARISING OUT OF YOUR ACCESS TO AND USE OF THE
                SERVICES, AND ANY CONTACT YOU HAVE WITH ENROLLED PHARMACIES,
                WHETHER IN PERSON OR ONLINE, REMAINS WITH YOU. YOU ACKNOWLEDGE
                AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE ENTIRE
                RISK ARISING OUT OF YOUR ACCESS TO AND USE OF THE SERVICES, AND ANY
                CONTACT YOU HAVE WITH PATIENTS, WHETHER IN PERSON OR ONLINE,
                REMAINS WITH YOU. YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM
                EXTENT PERMITTED BY LAW, THE ENTIRE RISK ARISING OUT OF YOUR ACCESS
                TO AND USE OF THE SERVICES, AND ANY CONTACT YOU HAVE WITH PROVIDERS,
                WHETHER IN PERSON OR ONLINE, REMAINS WITH YOU.
                IN NO EVENT SHALL KOW NOR ANY OTHER PARTY INVOLVED IN CREATING,
                PRODUCING, PROVIDING OR DELIVERING THE SERVICES, INCLUDING WITHOUT
                LIMITATION ANY HEALTH-RELATED CONTENT, BE LIABLE FOR ANY
                INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL DAMAGES,
                INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, OR THE COST OF
                SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS
                OR FROM THE USE OF OR INABILITY TO USE THE SERVICES, OR FROM ANY
                COMMUNICATIONS OR INTERACTIONS WITH ANY ENROLLED PHARMACIES
                AND/OR PATIENTS, AND/OR PROVIDERS, WHETHER BASED ON WARRANTY,
                CONTRACT, TORT (INCLUDING NEGLIGENCE AND STRICT LIABILITY), PRODUCT
                LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT KOW HAS
                BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED
                REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL
                PURPOSE. THIS LIMITATION OF LIABILITY APPLIES TO, BUT IS NOT LIMITED TO,
                THE TRANSMISSION OF ANY DISABLING DEVICE OR VIRUSES WHICH MAY
                INFECT YOUR EQUIPMENT OR SYSTEM, UNAUTHORIZED ACCESS, THEFT, BODILY
                INJURY, PROPERTY DAMAGE, OPERATOR STRIKES OR OTHER LABOR PROBLEMS
                OR ANY FORCE MAJEURE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION
                OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES,
                SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
                IN NO EVENT WILL KOW&apos;S TOTAL LIABILITY ARISING OUT OF OR IN
                CONNECTION WITH THESE TERMS, FROM THE USE OF OR INABILITY TO USE THE
                SERVICES, INCLUDING WITHOUT LIMITATION ANY HEALTH-RELATED CONTENT,
                OR FROM ANY COMMUNICATIONS OR INTERACTIONS WITH ANY ENROLLED
                PHARMACIES AND/OR PATIENTS, AND/OR PROVIDERS, EXCEED THE LOWER OF:
                (i) THE AMOUNTS YOU HAVE PAID TO KOW FOR USE OF THE SERVICES IN ONE
                PAY-PERIOD AS FIXED BY KOW OR (ii) EIGHT DOLLARS ($8), IF YOU HAVE NOT
                HAD ANY PAYMENT OBLIGATIONS UNDER THESE TERMS, AS APPLICABLE. KOW
                AND ITS AUTHORIZED AGENTS, EMPLOYEES, OFFICERS, AND CONTRACTORS, IF
                ANY, SHALL NOT BE LIABLE FOR ANY LOSS OR INJURY ARISING OUT OF OR
                RESULTING, IN WHOLE OR IN PART, FROM THEIR ACTS OR OMISSIONS,
                INCLUDING WITHOUT LIMITATION IN SUBMITTING YOUR REQUEST TO
                ENROLLED PHARMACIES. THE DISCLAIMER, EXCLUSIONS AND LIMITATIONS OF
                LIABILITY SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF
                THE BARGAIN BETWEEN KOW AND YOU.
                KOW IN NO WAY GUARANTEES TO ITS USERS THAT A PRESCRIPTION WILL BE
                PROVIDED, RECEIVED, OR FILLED BY AN ENROLLED PHARMACY.</p>
            <h3>Dispute Resolution</h3>
            <p>ARBITRATION NOTICE: UNLESS YOU OPT OUT OF ARBITRATION WITHIN THIRTY
                (30) DAYS OF THE DATE YOU FIRST AGREE TO THESE TERMS BY FOLLOWING THE
                OPT-OUT PROCEDURE SPECIFIED IN THE AGREEMENT TO ARBITRATE BELOW,
                AND EXCEPT FOR CERTAIN TYPES OF DISPUTES DESCRIBED BELOW, YOU AGREE
                THAT ANY DISPUTES BETWEEN YOU AND KOW WILL BE RESOLVED BY BINDING,
                INDIVIDUAL ARBITRATION AND THAT YOU ARE HEREBY WAIVING YOUR RIGHT
                TO A TRIAL BY JURY OR TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN
                ANY PURPORTED CLASS ACTION OR REPRESENTATIVE PROCEEDING.</p>
            <h3>Governing Law</h3>
            <p>These Terms and any action related thereto will be governed by the laws of the State of New
                York without regard to its conflict of laws provisions.</p>
            <h3>Agreement to Arbitrate</h3>
            <p>You and KOW agree that any dispute, claim or controversy arising out of or relating to these
                Terms or the breach, termination, enforcement, interpretation or validity thereof or the use of the
                Services (collectively, &quot;Disputes&quot;) will be settled by binding arbitration, except that each party
                retains the right: (i) to bring an individual action in small claims court and (ii) to seek injunctive
                or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened
                infringement, misappropriation or violation of a party&apos;s copyrights, trademarks, trade secrets,
                patents or other intellectual property rights (the action described in the foregoing clause (ii), an
                &quot;IP Protection Action&quot;). Without limiting the preceding sentence, You will also have the right to
                litigate any other Dispute if You provide KOW with written notice of Your desire to do so by
                email at legal@KOWmeds.com within thirty (30) days following the date You first accept these
                Terms (such notice, an &quot;Arbitration Opt-out Notice&quot;) and KOW agrees. If You don&apos;t provide
                KOW with an Arbitration Opt-out Notice within the thirty (30) day period, You will be deemed
                to have knowingly and intentionally waived Your right to litigate any Dispute except as
                expressly set forth in clauses (i) and (ii) above. The exclusive jurisdiction and venue of any IP
                Protection Action or, if You timely provide KOW with an Arbitration Opt-out Notice, will be the
                state and federal courts located in the state of New York and each of the parties hereto waives
                any objection to jurisdiction and venue in such courts. Unless You timely provide KOW with an
                Arbitration Opt-out Notice, You acknowledge and agree that You and KOW are each waiving
                the right to a trial by jury or to participate as a plaintiff or class member in any purported class
                action or representative proceeding. Further, unless both You and KOW otherwise agree in
                writing, the arbitrator may not consolidate more than one person&apos;s claims and may not otherwise
                preside over any form of any class or representative proceeding. If this specific paragraph is held
                unenforceable, then the entirety of this &quot;Dispute Resolution&quot; section will be deemed void.
                Except as provided in the preceding sentence, this &quot;Dispute Resolution&quot; section will survive any
                termination of these Terms. The preceding sentence, this &quot;Dispute Resolution&quot; section will
                survive any termination of these Terms. You agree that any claim You may have arising out of,
                or related to Your use of our Services must be filed within one (1) year after such claim arose;
                otherwise, Your claim is permanently barred.</p>
            <h3>Arbitration Rules</h3>
            <p>The arbitration will be administered by the American Arbitration Association (&quot;AAA&quot;) in
                accordance with the Commercial Arbitration Rules and the Supplementary Procedures for
                Consumer Related Disputes (the &quot;AAA Rules&quot;) then in effect, except as modified by this
                &quot;Dispute Resolution&quot; section. (The AAA Rules are available at www.adr.org or by calling the
                AAA at 1-800-778-7879.) The Federal Arbitration Act will govern the interpretation and
                enforcement of this Section.</p>
            <h3>Arbitration Process</h3>
            <p>A party who desires to initiate arbitration must provide the other party with a written Demand for
                Arbitration as specified in the AAA Rules. (The AAA provides a form Demand for Arbitration at
                www.adr.org.) The arbitrator will be either a retired judge or an attorney licensed to practice law
                and will be selected by the parties from the AAA&apos;s roster of arbitrators. If the parties are unable
                to agree upon an arbitrator within seven (7) days of delivery of the Demand for Arbitration, then
                the AAA will appoint the arbitrator in accordance with the AAA Rules.</p>
            <h3>Arbitration Location and Procedure</h3>
            <p>Unless You and KOW otherwise agree, the arbitration will be conducted in the New York
                County. If Your claim does not exceed $10,000, then the arbitration will be conducted solely on
                the basis of the documents that You and KOW submit to the arbitrator, unless You request a
                hearing or the arbitrator determines that a hearing is necessary. If Your claim exceeds $10,000,
                Your right to a hearing will be determined by the AAA Rules. Subject to the AAA Rules, the
                arbitrator will have the discretion to direct a reasonable exchange of information by the parties,
                consistent with the expedited nature of the arbitration.</p>
            <h3>Arbitrator&apos;s Decision</h3>
            <p>The arbitrator will render an award within the time frame specified in the AAA Rules. The
                arbitrator&apos;s decision will include the essential findings and conclusions upon which the arbitrator
                based the award. Judgment on the arbitration award may be entered in any court having
                jurisdiction thereof. The arbitrator&apos;s award of damages must be consistent with the terms of the
                &quot;Limitation of Liability&quot; section above as to the types and amounts of damages for which a party
                may be held liable. The arbitrator may award declaratory or injunctive relief only in favor of the
                claimant and only to the extent necessary to provide relief warranted by the claimant&apos;s individual
                claim. KOW will be entitled to recover attorneys&apos; fees and expenses if it prevails in arbitration.</p>
            <h3>Fees</h3>
            <p>Your responsibility to pay any AAA filing, administrative and arbitrator fees will be solely as set
                forth in the AAA Rules.</p>
            <h3>Changes</h3>
            <p>Notwithstanding the provisions of the &quot;Changes to Terms or Services&quot; section above, if KOW
                changes this &quot;Dispute Resolution&quot; section after the date You first accepted these Terms (or
                accepted any subsequent changes to these Terms), You may reject any such change by sending
                us written notice by email to legal@KOWmeds.com within thirty (30) days of the date such
                change became effective, as indicated in the date of KOW&apos;s notice to You regarding such
                change. By rejecting any change, You are agreeing that You will arbitrate any Dispute between
                You and KOW in accordance with the provisions of this &quot;Dispute Resolution&quot; section as of the
                date You first accepted these Terms (or accepted any subsequent changes to these Terms).</p>
            <h3>Limited Relationship</h3>
            <p>Nothing in this Agreement will be construed as creating an employer-employee relationship,
                partnership or joint venture between You and KOW. Although You are permitted to make public
                statements concerning Your use of the Services, You agree not to make any statements, without
                the prior written consent of KOW, implying a different kind of relationship between You and
                KOW, including any express or implied endorsement of Your content, products, or services by
                KOW. You do not have any authority of any kind to bind KOW in any respect whatsoever.</p>
            <h3>Survival</h3>
            <p>Upon any termination, discontinuation or cancellation of Services, all provisions of these Terms
                which by their nature should survive will survive, including, without limitation, ownership
                provisions, warranty disclaimers, limitations of liability, indemnity, and dispute resolution
                provisions.</p>
            <h3>Contact Info and Violations</h3>
            <p>Please contact KOW at help@KOWmeds.com with any questions regarding this Agreement or to
                report any violations of this Agreement.</p>
        </div>
    );
}