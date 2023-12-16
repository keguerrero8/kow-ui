import Head from 'next/head'
import { NextPage } from 'next';

import LoginForm from '@/components/LoginForm/LoginForm.jsx';


const LoginPage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Log In - KOW</title>
        <meta 
            name='description' 
            content='Log in to your account.'
        />   
        <link rel='canonical' href='/login'/>
      </Head>
      <LoginForm />
    </>
  );
}

export default LoginPage