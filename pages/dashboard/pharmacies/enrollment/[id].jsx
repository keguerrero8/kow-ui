import pharmacyService from '@/lib/pharmacyService';
import PharmacyEnrollmentForm from '@/components/PharmacyEnrollmentForm/PharmacyEnrollmentForm.jsx';

export async function getStaticPaths() {
    const pharmacies = await pharmacyService.getPharmacies()
    const paths = pharmacies.map((pharmacy) => (
        { params: { id: pharmacy.id.toString() } }
    ))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const pharmacy = await pharmacyService.getPharmacy(params.id)
    return { props: { pharmacy  } }
}
 
export default function PharmacyPage({ pharmacy }) {
  return <PharmacyEnrollmentForm pharmacy={pharmacy}/>
}