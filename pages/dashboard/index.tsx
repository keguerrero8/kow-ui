import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import pharmacyService, { GetPharmacyResponse } from '@/lib/pharmacyService';
import DashboardSection from '@/components/DashboardSection/DashboardSection.jsx';

import * as cookie from 'cookie'

type DashboardPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const parsedCookies: Partial<ParsedCookies> = cookie.parse(context.req.headers.cookie ?? '');
    const access: string | false = parsedCookies.access ?? false

    if (!access) {
      throw new Error('access token not found');
    }

    const pharmacies: GetPharmacyResponse[] | [] = await pharmacyService.getPharmacies(access)
    return { props: { pharmacies } }
  } catch (error) {
    return { props: { pharmacies: []}}
  }
}

const DashboardPage: NextPage = ({ pharmacies }: DashboardPageProps) => {

  return (
    <>
      <DashboardSection pharmacies={pharmacies}/>
    </>
  );
}

export default DashboardPage
