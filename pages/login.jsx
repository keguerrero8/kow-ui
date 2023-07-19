import Head from 'next/head'

import LoginForm from '@/components/LoginForm/LoginForm.jsx';


export default function LoginPage() {

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
