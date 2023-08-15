import pharmacyService from '@/lib/pharmacyService';
import PharmacySignedAgreement from '@/components/PharmacySignedAgreement/PharmacySignedAgreement.jsx';


export async function getServerSideProps(context) {
    try {
      const parsedCookies = cookie.parse(context.req.headers.cookie);
      const pharmacy = await pharmacyService.getPharmacy(context.params.id, parsedCookies.access)
      return { props: { pharmacy } }
    } catch (error) {
      return { props: { pharmacy: {}}}
    }
  }
 
export default function PharmacyPage({ pharmacy }) {
  return <PharmacySignedAgreement pharmacy={pharmacy}/>
}