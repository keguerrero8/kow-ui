import pharmacyService from '@/lib/pharmacyService';
import DashboardSection from '@/components/DashboardSection/DashboardSection.jsx';

export const getStaticProps = async () => {
// export const getServerSideProps = async (context) => {
  const pharmacies = await pharmacyService.getPharmacies()
  return { props: { pharmacies } }
}

export default function DashboardPage({ pharmacies }) {

  return (
    <>
      <DashboardSection pharmacies={pharmacies}/>
    </>
  );
}
