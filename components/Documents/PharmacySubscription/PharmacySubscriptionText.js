import React from 'react'
import { Link } from 'react-router-dom';

import ExhibitModal from '../ExhibitModal/ExhibitModal'
import larry_signature from '../../../images/larry_signature.png'

function PharmacySubscriptionText({ isModal = false, pharmacy, enrollmentData }) {
    const today = new Date();
    const pharmacySignedDate = new Date(pharmacy.signed_agreement_stamp)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDateToday = today.toLocaleDateString('en-US', options);
    const formattedDatePharmacySigned = pharmacySignedDate.toLocaleDateString('en-US', options);

  return (
    <>
        <div className='parties'>
            {isModal? null : <h3>ENROLLED PHARMACY SUBSCRIPTION AGREEMENT</h3>}
            <p>THIS SUBSCRIPTION AGREEMENT (this "Agreement") is made as of {isModal? formattedDateToday: formattedDatePharmacySigned} ("the Effective Date") between Fillable, 
             LLC, d/b/a FillableRx, a/k/a Kindly Oblige With (KOW) (hereinafter referred to as "KOW") on the one hand, and you, an enrolled pharmacy (hereinafter referred to as "You", "Your", or "Enrolled Pharmacy", together with KOW, the "Parties", each being a "Party"), on the other.</p>
        </div>
        <div className='recitals'>
            <h3>RECITALS:</h3>
            <p>Whereas, KOW serves as an online referral service and prescription management
                company, through www.KOWmeds.com, (the “Site”), that enables its users to locate pharmacies
                in their area that carry certain medications in their inventory (the “Services”); and</p>
            <p> Whereas, Enrolled Pharmacy is a duly licensed pharmacy and/or pharmacy and
                prescription services provider in the State of New York; and</p>
            <p> Whereas, Enrolled Pharmacy desires to become part of and subscribe to KOW’s network
                of pharmacies and prescription holders to obtain the benefits thereof and, in return for which, is
                willing to abide by the obligations, licenses, and fee agreements, which are more thoroughly set
                forth below.</p>
            <p> NOW, THEREFORE, for good and valuable consideration of the mutual covenants,
                promises and conditions, the Parties agree as follows:</p>
            <p> The above recitals are hereby incorporated herein by reference.</p>
        </div>
        <div className='section-1'>
            <h3>1. SUBSCRIPTION AND PRICING TERMS</h3>
            <p>a. As part of this subscription and in exchange and consideration for the agreed-upon
                subscription fee payable to KOW (the “Fee”), Enrolled Pharmacy becomes, so long as this
                Agreement is in full force and effect, part of KOW’s network of pharmacies and may utilize the
                Services. KOW in no way guarantees Enrolled Pharmacy a profit for use of its Services.</p>
            <p>b. The Enrolled Pharmacy is charged pursuant to the Fee Schedule, which is annexed hereto as
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
                to between the Parties for good and valuable consideration. For a specified term beginning on the
                Effective Date and ending on Your receipt of the Termination and Fee Schedule Notice (as
                hereinafter defined) (the “Initial Testing Period”), KOW will permit access to and enrollment in
                its Services at the agreed upon monthly rate of ${isModal? enrollmentData["initial_rate"] : pharmacy.initial_rate} which shall be the Initial Rate. 
                The Initial Rate represents a promotional rate based on the Enrolled Pharmacy's network 
                selection at the time of enrollment and offered by KOW during KOW's Initial Testing Period. 
                The duration of the Initial Testing Period shall be fixed by KOW in its sole and absolute 
                discretion. Upon termination of the Initial Testing Period, KOW shall serve You with a notice 
                advising You of the following:</p>
                <div className='subtext-b'>
                    <p>(i) the Initial Testing Period has ended; and</p>
                    <p>(ii) the Fee Schedule in the Agreement, will now be going into full force and effect (the
                        “Termination and Fee Schedule Notice”).</p>
                </div>
            <p>You will have ten (10) days from receipt of the Termination and Fee Schedule Notice to provide
                KOW written notice to legal@KOWmeds.com, that You will be opting-out of and terminating
                this Agreement (the period of time to respond being the “Opt-Out Noticing Period” and the
                notice sent being the “Opt-Out Notice”). If You do not properly deliver and KOW does not
                receive the Opt-Out Notice within the Opt-Out Notice Period, the Initial Rate will no longer be
                in effect and Your network selection at the time of Your enrollment pursuant to the Fee Schedule 
                annexed hereto as
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
                shall immediately become operative.
                Any subsequent fees that become due and owing, by way of Your subscription, or otherwise,
                shall be renewed automatically on an annual basis in accordance with the terms in the Fee
                Schedule and this Agreement.</p>
            <p>KOW shall have the right (but not the obligation) to amend or modify the Fee Schedule, from
                time to time, in its sole yet reasonable discretion. KOW shall provide You thirty (30) days'
                written notice of any such amendment or modification. Upon receipt of any such notice, You
                will have ten (10) days to deliver written notice to KOW rejecting the Fee Schedule amendment
                or modification and terminating this Agreement, which termination shall not cause You to incur
                any liquidated damages.</p>
            <p>Your execution of this Agreement authorizes KOW to issue You invoices as applicable, and/or
                charge a credit card on file, which You previously provided, in approximately [30-day intervals,]
                for the amounts due pursuant to the Fee Schedule. If for any reason the Fee or any other charges,
                expenses, or fees due to KOW remain unpaid for a period exceeding fifteen (15) calendar days,
                Your subscription and access to the Services will immediately terminate. It is solely Your
                responsibility to ensure that payment is made pursuant to the terms and conditions of this
                Agreement and the Fee Schedule and to notify KOW via legal@KOWmeds.com, of any
                modification or amendment of billing instructions and/or if you cancel or wish to change the
                notification method and/or address for our billing purposes.</p>
            <p>c. Either Party may terminate this Agreement for failure to comply with its terms, conditions, or
                obligations upon thirty (30) days’ written notice to the other, non-terminating Party.
                Additionally, either Party may terminate this Agreement for convenience upon ninety (90) days’
                written notice to the other, non-terminating Party. In the event the Enrolled Pharmacy wishes to
                terminate this Agreement for convenience or if KOW terminates this Agreement due to Enrolled
                Pharmacy’s failure to comply with the terms of the Agreement, it shall pay to KOW, as
                liquidated damages, an amount equal to six (6) months of the Fee. Lastly, either Party may
                terminate this Agreement by giving written notice of the intent to terminate the Agreement no
                more than one hundred twenty (120) and no less than thirty (30) days before the expiration of the
                Initial Term or any subsequent Renewal Term (as hereinafter defined). Immediately upon
                termination, Enrolled Pharmacy will no longer have any rights associated with the Services, all
                interest in and to any licenses, grants, or subscriptions provided under this Agreement to the
                Enrolled Pharmacy shall immediately terminate, and the Parties will not have any further
                obligations to one another except those obligations that by their express terms survive the
                termination of this Agreement. The provisions of this paragraph shall survive the termination of
                this Agreement.</p>
            <p>d. Enrolled Pharmacy may not assign or transfer this Agreement, whatsoever, without the prior
                written consent of KOW, which shall be in KOW’s sole and absolute discretion. Any such
                attempted assignment or transfer will be null and void. KOW may terminate this Agreement for
                cause in the event of any such attempted assignment or transfer.</p>
            <p>e. By accepting this Agreement and purchasing this subscription, Enrolled Pharmacy represents
                and warrants that, if a natural person, Enrolled Pharmacy is at least 18 years of age and/or is
                otherwise legally able to enter into a binding contract. If Enrolled Pharmacy is a business entity,
                the signatory hereto represents that (s)he has the requisite authority and capacity to bind said
                business entity hereto. Enrolled Pharmacy further represents and warrants: (i) that it is a licensed
                pharmacy and/or pharmacist, in good standing with any and all applicable accreditation councils
                and the legal, governmental, or governing body which regulates its licensure in the state(s) in
                which Enrolled Pharmacy conducts business and is entering into this Agreement; (ii) it has the
                legal and medical authority to issue and fill medical prescriptions; and (iii) the performance of its
                obligations hereunder does not conflict with or is in violation of any private contract, any
                applicable laws, court orders, or regulations, and further does not violate any obligation or duty
                to which Enrolled Pharmacy is bound, whether arising out of contract, operation of law, court
                order, decree, or otherwise.</p>
            <p>You further represent and warrant that to the extent applicable, if any, and to the extent the
                information which You disclose is identified as an individual’s protected health information
                (“PHI”) as defined under the Health Insurance Portability and Accountability Act’s Privacy Law
                (“HIPAA”), that You have full and express authority to disclose such information in connection
                with access and use of the Services.</p>
            <p>f. The initial term of this Agreement and the corresponding subscription and/or license to utilize
                the Services granted hereunder will be for a period of one (1) year from the Effective Date (the
                “Initial Term”). This Agreement will automatically renew for successive one (1) year renewal
                terms (each being a “Renewal Term”), unless the Agreement is terminated pursuant to its terms.
                Any annual increase in the Fee shall not exceed [7%] of the Fee paid during the immediately
                preceding term, be it the Initial Term or any Renewal Term. Any proposed increase of the Fee
                shall be delivered in accordance with the provisions of this Agreement.</p>
            <p>g. KOW does not grant refunds under any circumstances and no refunds, reimbursements, or
                credits shall be provided, whatsoever, for any reason.</p>
            <p>h. Notifications pursuant to this agreement shall be delivered via: (i) certified mail, return receipt
                requested; (ii) nationally recognized overnight mail delivery service, with tracking information
                provided; (iii) personal delivery; or (iv) electronic mail transmission to the email addresses
                below-listed:</p>
                <div className='subtext-h'>
                    <h3>If to KOW:</h3>
                    <p>KOW</p>
                    <p>Attn: Larry Chen</p>
                    <p>P.O. Box 505</p>
                    <p>Valley Stream, New York 11582</p>
                    <p>Email: legal@KOWmeds.com</p>
                    <h3>with a copy to:</h3>
                    <p>KI Legal</p>
                    <p>Attn: Kyriaki Christodoulou, Esq.</p>
                    <p>40 Wall St., 49th Floor</p>
                    <p>New York, New York 10005</p>
                    <p>Email: Kyriaski@kilegal.com</p>
                    <h3>If to Enrolled Pharmacy:</h3>
                    <p>{pharmacy.name}</p>
                    <p>{enrollmentData["contact_name"]}</p>
                    <p>{pharmacy.address}</p>
                    <p>{enrollmentData["contact_email"]}</p>
                </div>
        </div>
        <div className='section-2'>
            <h3>2. LICENSE GRANT AND TERMS</h3>
            <p>a. During either the Initial Term or any subsequent Renewal Term of this Agreement, but subject
                to continuing and uninterrupted payment of the Fee, as set forth herein, and compliance with the
                terms of use (‘Terms of Use”) and privacy policy (“Privacy Policy”), which are herein
                incorporated and made a part hereof, and to the extent Enrolled Pharmacy becomes a user of
                KOW’s Services as therein described, Enrolled Pharmacy will have a limited, non-exclusive,
                revocable, non-transferrable, and non-sublicensable license to use and access to KOW’s
                Services.</p>
            <p>b. KOW grants and Enrolled Pharmacy accepts a limited, non-exclusive, revocable, non-
                transferable and non-sublicensable license for use solely in connection with enrollment and
                subscription to its network of Enrolled Pharmacies. KOW reserves all rights in and to the
                Services not expressly granted to You under these terms. The Services are licensed, not sold. The
                license confers no title to or ownership in the Services and should not be construed as a sale of
                any rights in or to the Services.</p>
            <p>c. KOW, its affiliates, subsidiaries, if any, and licensors, if any, exclusively own all right, title
                and interest in and to the Services, including all associated intellectual property rights
                (hereinafter, the “KOW Brand Features”). You acknowledge that the Services and KOW Brand
                Features are protected by the laws of the United States and any and all applicable jurisdictions.
                You agree not to remove, alter, damage, or obscure any copyright, trademark, service mark, any
                other proprietary rights notice, or any notice which demonstrates KOW’s ownership of
                proprietary information, incorporated into or accompanying the Services. Neither this Agreement
                nor Your use of the Services shall transfer any right, title or interest in the Services, or
                intellectual property rights to You. KOW and its third-party licensors, if any, retain all
                respective right, title, and interest to the Services and KOW Brand Features.</p>
            <p>d. Enrolled Pharmacy may not: (i) copy, modify, or create derivative works based on the
                Services; (ii) distribute, transfer, sublicense, lease, lend or rent the Services to any third party;
                (iii) reverse engineer, decompile or disassemble the Services; or (iv) make the functionality of
                the Services available to multiple users through any means.</p>
            <p>e. Enrolled Pharmacy agrees that the Services and this Agreement, including, without limitation,
                the Fee Schedule and any notices sent pursuant to this Agreement, contain proprietary
                information including trade secrets, know how and confidential information that is the exclusive
                property of KOW. During the period this Agreement is in effect, including any and all Renewal
                Terms, and at all times after its termination, Enrolled Pharmacy and its employees and agents
                shall maintain the confidentiality of this information and not sell, license, publish, display,
                distribute, disclose or otherwise make available this information to any third party nor use such
                proprietary information concerning the Services and Application Program Interfaces (“API”s) to
                persons not an employee of Enrolled Pharmacy without the prior written consent of KOW. If
                Enrolled Pharmacy breaches any of these terms:(i) this Agreement and the license granted to
                Enrolled Pharmacy hereunder, automatically terminates without notice; (ii) the Enrolled
                Pharmacy shall indemnify and hold KOW harmless from any and all claims, losses, damages,
                fees, and costs, including attorney’s fees, KOW incurs as a result of the Enrolled Pharmacy’s
                breach of the provisions of this paragraph; and (iii) KOW shall have available to it all legal
                remedies at law or equity, including injunctive relief. The provisions and obligations in this
                paragraph shall survive the termination of this Agreement.</p>
        </div>
        <div className='section-3'>
            <h3>3. DISCLAIMERS, LIMITAITONS, AND INDEMNITIES</h3>
            <p>a. TO THE EXTENT ALLOWED BY LAW, THESE SERVICES ARE PROVIDED TO YOU
                "AS IS" WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, WHETHER ORAL
                OR WRITTEN, EXPRESS OR IMPLIED. KOW SPECIFICALLY DISCLAIMS ANY
                IMPLIED WARRANTIES, NON-INFRINGEMENT, TITLE, ACCURACY OF
                INFORMATIONAL CONTENT. NO ORAL OR WRITTEN INFORMATION OR ADVICE
                GIVEN BY KOW OR KOW’S AUTHORIZED REPRESENTATIVES SHALL CREATE A
                WARRANTY. KOW DOES NOT REPRESENT THAT THE SERVICES WILL BE
                OPERATIONAL AT ALL TIMES OR WILL BE FUNCTIONING PROPERLY WHEN YOU
                OR OTHERS WISH TO ACCESS THE FUNCTIONALITY OF THE SERVICES. THE
                SERVICES MAY BE UNAVAILABLE AT TIMES FOR MAINTENANCE OR FOR A
                VARIETY OF OTHER REASONS. KOW IS NOT LIABLE TO YOU FOR ANY PERIODS
                OF UNAVAILABILITY AND YOU WILL NOT BE ENTITLED TO ANY REFUNDS FOR
                THOSE PERIODS WHEN THE SERVICES ARE NOT AVAILABLE OR ARE NOT
                FUNCTIONING PROPERLY. KOW DOES NOT WARRANT, REPRESENT OR
                OTHERWISE GUARANTEE ENROLLED PHARMACY A PROFIT FROM USE OF OR
                ENROLLMENT IN AND SUBSCRIPTION TO THE SERVICES.</p>
            <p>b. EXCEPT TO THE EXTENT PROHIBITED BY LAW, IN NO EVENT WILL KOW OR ITS
                SUBSIDIARIES, AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS,
                CONTRACTORS OR SUPPLIERS BE LIABLE FOR DIRECT, INDIRECT, SPECIAL,
                INCIDENTAL, CONSEQUENTIAL, PUNITIVE, OR OTHER DAMAGES (INCLUDING
                LOST PROFIT, LOST DATA, OR DOWNTIME COSTS), ARISING OUT OF THE USE,
                INABILITY TO USE, OR THE RESULTS OF USE OF THE SERVICES, WHETHER BASED
                IN WARRANTY, CONTRACT, TORT OR OTHER LEGAL THEORY, AND WHETHER OR
                NOT KOW WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            <p>c. YOU HEREBY AGREE TO INDEMNIFY, DEFEND AND HOLD HARMLESS KOW AND
                ITS OFFICERS, DIRECTORS, EMPLOYEES AND AGENTS, FROM AND AGAINST ANY
                CLAIMS, DISPUTES, DEMANDS, LIABILITIES, DAMAGES, LOSSES, AND COSTS AND
                EXPENSES, INCLUDING, WITHOUT LIMITATION, REASONABLE LEGAL AND
                ACCOUNTING FEES, ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS
                AGREEMENT, AND (I) YOUR ACCESS TO OR USE OF THE SERVICES, OR (II) YOUR
                VIOLATION OF THESE TERMS, AND ANY BREACH OF YOUR REPRESENTATIONS
                AND WARRANTIES, AND YOUR FAILURE TO COMPLY WITH YOUR OBLIGATIONS
                UNDER ANY AND ALL LAWS, RULES OR REGULATIONS, AND APPLICABLE
                GOVERNING AND REGULATORY BODIES, INCLUDING WITHOUT LIMITATION, THE
                DRUG ENFORCEMENT ADMINISTRATION (“DEA”) . YOU AND THE COMPANY
                AGREE THAT THIS INDEMNIFICATION OBLIGATION CLAUSE SHALL BE
                INTERPRETED TO PROVIDE THE COMPANY THE MAXIMUM AMOUNT OF
                INDEMNIFICATION PERMITTED UNDER THE LAW OF THE APPLICABLE STATE.</p>
        </div>
        <div className='section-4'>
            <h3>4. PRIVACY POLICY</h3>
            <p>KOW takes information security seriously. KOW in no way guarantees that its reasonable efforts
                to prevent unauthorized third-party access to Your information will prevent every unauthorized
                attempt to access, use, or disclosure of Your information, including information of others stored
                and maintained by you, personal, protected health information (“PHI”), or otherwise. The terms
                of KOW’s {<Link className='link-privacy' to='/privacy-policy'>Privacy Policy</Link>} are incorporated herein by reference and made a part hereof.</p>
        </div>
        <div className='section-5'>
            <h3>5. GENERAL PROVISIONS</h3>
            <p>a. This Agreement and any disputes arising hereunder shall be governed by the laws of the State
                of New York, United States of America, without regard to conflicts of laws principles. Enrolled
                Pharmacy hereby expressly consents to the jurisdiction and venue in State and Federal Courts
                located within the State of New York over any disputes arising from or related in any manner to
                this Agreement.</p>
            <p>b. If any term or provision herein is determined to be illegal or unenforceable, the validity or
                enforceability of the remainder of the terms or provisions herein will remain in full force and
                effect. Failure or delay in enforcing any right or provision of this Agreement shall not be deemed
                a waiver of such right or provision with respect to any subsequent breach.</p>
            <p>c. This Agreement, including the annexed Exhibit(s), is the final, complete and exclusive
                agreement between the Parties relating to the subject matter hereof, and supersedes any previous
                communications, representations or agreements between the Parties, whether oral or written,
                regarding transactions hereunder. Enrolled Pharmacy’s additional or different terms and
                conditions will not apply. This Agreement may not be changed except by an amendment signed
                by an authorized representative of each party.</p>
            <p>d. Because KOW’s granting of the Subscription Agreement to Enrolled Pharmacy is unique, and
                because Enrolled Pharmacy had access to and has or will become by virtue of this Agreement,
                acquainted with the Proprietary Information of KOW, and because any breach by Enrolled
                Pharmacy of any of the restrictive covenants contained in this Agreement would result in
                irreparable injury and damage for which money damages would not provide an adequate remedy,
                KOW shall have the right to enforce the obligations set forth in this Agreement by injunction,
                specific performance or other equitable relief, without bond and without prejudice to any other
                rights and remedies that KOW may have for a breach, or threatened breach, of the provisions of
                this Agreement. Enrolled Pharmacy agrees that in any action in which KOW seeks injunction,
                specific performance or other equitable relief, Enrolled Pharmacy will not assert or contend that
                any of the provisions of this Agreement are unreasonable or otherwise unenforceable. In the
                event of a dispute between the Parties, KOW as prevailing party, shall be entitled to collect
                attorneys’ fees from Enrolled Pharmacy. In the event Enrolled Pharmacy breaches any of the
                confidentiality provisions of section 2, it shall pay to KOW, as liquidated damages, an amount
                equal to five hundred thousand dollars and no cents ($500,000.00).</p>
            <p>e. Except as otherwise provided in this Agreement, in the event any provision of this Agreement
                is in conflict with, or inconsistent with, any provision of the Terms of Use, Privacy Policy, opt-in
                agreement, or any other agreement, the provision contained in this Agreement shall govern and
                control.</p>
            <p>f. This Agreement may be executed in counterparts, each of which shall be deemed an original,
                but all of which taken together shall constitute one and the same agreement. A facsimile copy of
                this Agreement signed by either Party transmitted to the other, DocuSign, or electronic .pdf
                signature shall constitute a binding signature.</p>
        </div>
        <div className='signatures'>
            <h3>[SIGNATURE PAGE FOLLOWS]</h3>
            <p>IN WITNESS WHEREOF, the Parties have duly executed this Agreement as of the date
                first above written. By signing below, You acknowledge that you have read the Company’s
                Privacy Policy and agree to the terms contained therein.</p>
            <div className='subtext-sig'>
                <h2>FILLABLE, LLC A/K/A KOW:</h2>
                <h3>By:
                    <img className='larry-sig' alt='larry chens signature' src={larry_signature}/>
                </h3>
                <p>Name: Larry Chen</p>
                <p>Title: Managing Member</p>
                <h2>Pharmacy: {pharmacy.name}</h2>
                <h3>By: </h3>
                <p>Name: {enrollmentData["contact_name"]}</p>
                <p>Title: {enrollmentData["contact_title"]}</p>
                {isModal? null : <p className='sig-timestamp'>Electronically Signed: {formattedDatePharmacySigned}</p>}
            </div>
        </div> 
    </>
  )
}

export default PharmacySubscriptionText