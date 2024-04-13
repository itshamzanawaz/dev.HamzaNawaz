'use client';
import React from 'react'
import { Carousel } from "antd";
import Image from "next/image";
import client from './client';
import { useQuery, gql } from '@apollo/client';


const MY_QUERY = gql`
query MyQuery {
    aboutHamzas {
      myImages {
        url
      }
      quotes
    }
  }
  
`

const LandingPage = () => {
    const { loading, error, data } = useQuery(MY_QUERY, { client });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;
    return (
        <div className='flex justify-around items-center size-h-w'>
            <div >
                <h1 className='yellow'>About</h1>
                <h1 className='blue'>Hamza</h1>
                <ul><li>Hamza Knows only About Values and Promises.</li>
                    <li>Everything + Nothing = Something</li></ul>
            </div>
            <div>
                <Carousel autoplay autoplaySpeed={3000} dots={true} className='w-80 h-80'>
                    {data.aboutHamzas[0].myImages.map((url) =>{
                    return(                  

                        <Image src={url.url} key={url.url} width={250} height={250} alt='hamza nawaz picture rounded-md'/>
                    )})
                }</Carousel>
            </div>
        </div>
    )
}

export default LandingPage