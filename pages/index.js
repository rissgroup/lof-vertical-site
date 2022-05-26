import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Fullscroll from '../components/Fullscroll';
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";


const override = css`
  display: flex;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 45%;
  left:45%
  // text-align: center;
  // alifn-items: center;
  // justify-content: center;
  
`;

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
setLoading(true)
setTimeout(()=>{
setLoading(false)
}, 7000)
  },[])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src='/smoke.js' type='text/javascript'></script>
      </Head>
      {
        loading ?
        <RingLoader color={'#d8aaf8'} loading={loading} css={override} size={150} />               
        :
<Fullscroll/>
      }
    </>
  )
}