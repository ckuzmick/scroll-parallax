'use client'

import Image from 'next/image';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import * as Purdy from '@/../public/purdy-1.png'
import * as Levis from '@/../public/levis.jpeg'
import * as BG from '@/../public/49ers.jpeg'
import './globals.css'

export default function Home() {
  return (
    <main>
      <ParallaxProvider>
        <section className='h-screen sec-1'>
          <Parallax speed={-20}>
            <h1 className='title-1'>Conrad Kuzmick</h1>
          </Parallax>
        </section>
        <section className='h-screen'>

        </section>
      </ParallaxProvider>
    </main>
  )
};