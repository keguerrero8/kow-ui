import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import ExhibitModal from '../ExhibitModal/ExhibitModal'

import './TerminationNotice.css';

function TerminationNotice(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className='document-container'>
            <div className='body-text'>
                <h1>Termination and Fee Schedule Notice</h1>
                <p>You, the Enrolled Pharmacy, are receiving this notice (this “Notice”) pursuant to Section 1.b. of
                    the Subscription Agreement with KOW and the applicable fee schedule and pricing terms of our
                    Terms of Use. All capitalized terms have the meaning ascribed to them in the Subscription
                    Agreement and Terms of Use, which are incorporated herein by reference, (Subscription
                    Agreement and Terms of Use being, collectively, the “Agreements”). Pursuant to the relevant
                    provisions of the Agreements, namely Section 1 of the Subscription Agreement, we hereby notify
                    You that the Initial Testing Period has now closed and the Initial Rate is no longer in effect.
                    Accordingly, the Fee Schedule in the Agreements, which Fee Schedule was negotiated and
                    agreed to between You and KOW for good and valuable consideration the sufficiency of which is
                    acknowledged, will be going into full force and effect.  You will be charged at full rate 
                    of the network selection You made at the time of enrollment.</p>
                <p>You will have ten (10) days from receipt of this Notice to provide KOW written notice to
                    legal@KOWmeds.com that You will be opting-out of and terminating the Subscription
                    Agreement and Your relationship with KOW altogether, which will end your ability to access the
                    Services or use the Site (the period of time to respond being the “Opt-Out Noticing Period” and
                    the notice sent being the “Opt-Out Notice”). If KOW does not receive a properly served Opt-Out
                    Notice within the Opt-Out Noticing Period, the Initial Rate will no longer be in effect and the
                    Fee Schedule annexed hereto as
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
                    and additionally annexed to the Subscription
                    Agreement as {<Link className='link-exhibit' to=''> Exhibit A </Link>}, which are one and the same, (collectively, the “Fee Schedule”), shall
                    immediately become operative. Any subsequent fees that become due and owing, by way of
                    Your subscription, or otherwise, shall be renewed automatically on an annual basis in accordance
                    with the terms in the Fee Schedule, this Agreement and the Subscription Agreement.</p>
                <p>KOW shall have the right (but not the obligation) to amend or modify the Fee Schedule, from
                    time to time, in its sole, yet reasonable discretion. KOW shall provide You thirty (30) days’
                    written notice of any such amendment or modification. Upon receipt of any such notice, You
                    will have ten (10) days to deliver written notice to KOW rejecting the Fee Schedule amendment
                    or modification and terminating the Agreements, which termination shall not cause You to incur
                    any liquidated damages pursuant to the liquidated damages provision of Section 1(c) of the
                    Subscription Agreement.</p>
                <p>Your acknowledgment of and consent to this Notice and execution of the Subscription
                    Agreement authorizes KOW, at KOW’s option that may be exercised in its sole and absolute
                    discretion, to issue You invoices as applicable, and/or charge a credit card on file, which You
                    previously provided, in approximately [30-day intervals,] for the amounts due pursuant to the
                    Fee Schedule. If for any reason the Fee or any other charges, expenses, or fees due to KOW
                    remain unpaid for a period exceeding fifteen (15) calendar days or the credit card information
                    your provided no longer works, Your subscription and access to the Services will be immediately
                    suspended until the account is brought current. It is solely Your responsibility to ensure that
                    payment is made pursuant to the terms and conditions of the Terms of Use, the Subscription
                    Agreement, and the Fee Schedule and to notify KOW via legal@KOWmeds.com, of any
                    modification or amendment of billing instructions and/or if you cancel or wish to change the
                    notification method and/or address for our billing purposes.</p>
                <p>Please contact KOW at help@KOWmeds.com with any questions regarding this Notice.</p>
                <p>This Notice is without prejudice to any of KOW’s rights, powers, privileges, remedies, and
                    defenses, now existing or hereafter arising, all of which are hereby expressly reserved.</p>
            </div>
        </div>
    );
}

export default TerminationNotice;