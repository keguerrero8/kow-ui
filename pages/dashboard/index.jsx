import pharmacyService from '@/lib/pharmacyService';
import DashboardSection from '@/components/DashboardSection/DashboardSection.jsx';

import * as cookie from 'cookie'

export const getServerSideProps = async (context) => {
  try {
    const parsedCookies = cookie.parse(context.req.headers.cookie ?? '');
    const access = parsedCookies.access ?? false

    if (!access) {
      throw new Error('access token not found');
    }

    const pharmacies = await pharmacyService.getPharmacies(access)
    return { props: { pharmacies } }
  } catch (error) {
    return { props: { pharmacies: []}}
  }
}

export default function DashboardPage({ pharmacies }) {

  return (
    <>
      <DashboardSection pharmacies={pharmacies}/>
    </>
  );
}
