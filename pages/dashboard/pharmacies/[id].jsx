import pharmacyService from '@/lib/pharmacyService';
import PharmacySection from '@/components/PharmacySection/PharmacySection.jsx';

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
  return <PharmacySection pharmacy={pharmacy}/>
}