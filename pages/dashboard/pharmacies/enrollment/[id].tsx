import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import * as cookie from 'cookie'

import pharmacyService from '@/lib/pharmacyService';
import PharmacyEnrollmentForm from '@/components/PharmacyEnrollmentForm/PharmacyEnrollmentForm.jsx';

type PharmacyEnrollmentPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const parsedCookies: ParsedCookies = cookie.parse(context.req.headers.cookie ?? '');
    const access: string | false = parsedCookies.access ?? false

    if (!access) {
      throw new Error('access token not found');
    }

    const pharmacy = await pharmacyService.getPharmacy(context.params.id as string, access)
    return { props: { pharmacy } }
  } catch (error) {
    return { props: { pharmacy: {}}}
  }
}
 
const PharmacyEnrollmentPage: NextPage = ({ pharmacy }: PharmacyEnrollmentPageProps) => {
  return <PharmacyEnrollmentForm pharmacy={pharmacy}/>
}

export default PharmacyEnrollmentPage