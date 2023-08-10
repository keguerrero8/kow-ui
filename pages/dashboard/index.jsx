import pharmacyService from '@/lib/pharmacyService';
import DashboardSection from '@/components/DashboardSection/DashboardSection.jsx';

import * as cookie from 'cookie'

export const getServerSideProps = async (context) => {
  const parsedCookies = cookie.parse(context.req.headers.cookie);
  const pharmacies = await pharmacyService.getPharmacies(parsedCookies.access)
  return { props: { pharmacies } }
}

export default function DashboardPage({ pharmacies }) {

  return (
    <>
      <DashboardSection pharmacies={pharmacies}/>
    </>
  );
}
