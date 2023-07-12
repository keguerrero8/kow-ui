import React from 'react'

function ProviderOptInText({ isModal = false }) {
  return (
    <>
        <div className='intro'>
            {isModal? null : <h2>Provider User Opt-In Agreement</h2>}
            <p>Effective Date: January 1, 2023</p>
            <p>Welcome to KOW, an online prescription management and intermediary company (the
                “Services”) made available by Fillable, LLC, d/b/a FillableRx, a/k/a Kindly Oblige With (KOW)
                (“KOW”, “the Company”, “we” “us”, or “our”). You can access our services (“Services”)
                through our website www.KOWmeds.com (the “Site”) and via SMS text messaging. This
                document creates an agreement between you, the licensed medical provider (“You”) and KOW.
                Once accepted, the terms and conditions set forth herein become binding legal obligations,
                representations, covenants, conditions, and responsibilities between You and KOW. This
                agreement incorporates the terms of the terms of use agreement (“Terms of Use”) and privacy
                policy (“Privacy Policy”), including all future amendments or modifications thereto (collectively,
                the “Agreement”). To the extent the terms herein conflict with any terms of the Terms of Use or
                Privacy Policy, this document shall control. If You do not agree to these terms, are not a licensed
                medical provider, or are younger than eighteen (18) years old, do not use the Services.</p>
            <p>By using the Services in any way, including without limitation, browsing the Services, using any
                information, or submitting any information via the Services, You agree to and are bound by the
                terms, conditions, policies, and notices contained in these terms, including conducting this
                transaction electronically, certain third-party terms and conditions, disclaimers of warranties,
                damage and remedy exclusions and limitations, binding arbitration, venue selection, and a choice
                of New York law. You represent and warrant that You are at least eighteen (18) years old and
                possess the legal right to agree to these terms.</p>
        </div>
        <div className='section-1'>
            <h2>1. Representations and Warranties</h2>
            <h3>(a)  Licensed Medical Provider</h3>
            <p>You hereby represent and warrant that You are a licensed medical provider, in good standing
                with any and all applicable medical boards or any other governing body which regulates Your
                licensure in the state in which You are accessing the Services and further have the legal and
                medical authority to prescribe the medication for which you are utilizing the Services. You have
                obtained the requisite authorizations and waivers to access the Services, either on Your behalf or
                on behalf of and for the benefit of a third party, including any patients. You further represent and
                warrant that the performance of Your obligations hereunder do not conflict with or are impeded
                by any private contract or further violate any applicable laws and do not violate any obligation or
                duty to which You are bound, whether arising out of contract, operation of law, or otherwise.
                You agree not to submit any controlled substance prescriptions through the Services.</p>
            <h3>(b) HIPAA Authorizations</h3>
            <p>To the extent applicable, if any, and to the extent the information which You disclose is
                identified as an individual’s protected health information (“PHI”) as defined under the Health
                Insurance Portability and Accountability Act’s Privacy Law (“HIPAA”), You hereby represent
                and warrant that You have full and express authority to disclose such information in connection
                with access and use of the Services. By using the Services, and clicking below, You hereby so
                represent.</p>
        </div>
        <div className='section-2'>
            <h2>2. Indemnity</h2>
            <p>You hereby agree to indemnify, defend and hold harmless KOW and its officers, directors,
                employees and agents, from and against any claims, disputes, demands, liabilities, damages,
                losses, and costs and expenses, including, without limitation, reasonable legal and accounting
                fees, arising out of or in any way connected with this Agreement, and (i) Your access to or use of
                the Services, or (ii) Your violation of these Terms, and any breach of Your representations and
                warranties, and Your failure to comply with Your obligations under any and all laws, rules or
                regulations, and applicable governing and regulatory bodies. You and the Company agree that
                this indemnification obligation clause shall be interpreted to provide the Company the maximum
                amount of indemnification permitted under the law of the applicable State.</p>
        </div>
        <div className='section-3'>
            <h2>3. Proprietary Rights and Licenses</h2>
            <p>KOW, its affiliates, and licensors, if any, exclusively own all right, title and interest in and to the
                Services, including all associated intellectual property rights (hereinafter, the “KOW Brand
                Features”). You acknowledge that the Services and KOW Brand Features are protected by the
                laws of the United States and any applicable jurisdictions. You agree not to remove, alter or
                obscure any copyright, trademark, service mark, or other proprietary rights notice, notice which
                demonstrates KOW’s ownership of proprietary information, incorporated in or accompanying
                the Services. Neither this Agreement nor Your use of the Services transfers any right, title or
                interest in the Services, the of the Services, or intellectual property rights to You, and KOW and
                its third-party licensors, if any, retain all respective right, title, and interest to the Services.</p>
        </div>
        <div className='section-4'>
            <h2>4. Contact Information</h2>
            <p>Please contact KOW at help@KOWmeds.com with any questions regarding this Agreement.</p>
        </div>
    </>
  )
}

export default ProviderOptInText
