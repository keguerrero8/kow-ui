import pharmacyService from '@/lib/pharmacyService';
import PharmacySignedAgreement from '@/components/PharmacySignedAgreement/PharmacySignedAgreement.jsx';

import * as cookie from 'cookie'

export async function getServerSideProps(context) {
  try {
    const parsedCookies = cookie.parse(context.req.headers.cookie ?? '');
    const access = parsedCookies.access ?? false

    if (!access) {
      throw new Error('access token not found');
    }

    const pharmacy = await pharmacyService.getPharmacy(context.params.id, access)
    return { props: { pharmacy } }
  } catch (error) {
    return { props: { pharmacy: {}}}
  }
}
 
export default function PharmacyPage({ pharmacy }) {
  return <PharmacySignedAgreement pharmacy={pharmacy}/>
}