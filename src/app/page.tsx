'use client'

import Image from 'next/image';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import './globals.css'
import * as d3Logo from '@/../public/d3.png';
import * as reactLogo from '@/../public/react.png';

export default function Home() {
  return (
    <main>
      <ParallaxProvider>
        <section className='h-screen sec-1'>
          <h1 className='title-1'>Conrad Kuzmick</h1>
          <Parallax>
            <div className='div-1'>
              <p className='para-1'>Here's some things I've worked with:</p>
            </div>
            <div className='container-1'>
              <ul className='list-1'>
                <li>React</li>
                <li>NextJS</li>
                <li>ThreeJS</li>
                <li>D3</li>
                <li>JavaScript</li>
                <li>Python</li>
              </ul>
            </div>
          </Parallax>
        </section>
        <section className='h-screen'>

        </section>
      </ParallaxProvider>
    </main>
  )
};