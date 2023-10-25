'use client'

import { GalleryCardData } from '@/types'
import GalleryCard from './GalleryCard'
import { CSSProperties, useState } from 'react'
import Image from 'next/image'

const galleryData: GalleryCardData[] = [
  {
    imageUrl: '/cafes-especiales.jpg',
    text: `Cafes\nespeciales`,
    clickThrough: {
      text: 'Ir a la tienda',
      value: '#'
    }
  },
  {
    imageUrl: '/academia-de-baristas.jpg',
    text: `Academia de\nbaristas`,
    clickThrough: {
      text: 'Ir a la academia',
      value: '#'
    }
  },
  {
    imageUrl: '/cafes-plantula.jpg',
    text: `Suscripciones\nde cafe`,
    clickThrough: {
      text: 'Suscribete',
      value: '#'
    }
  },
  {
    imageUrl: '/cafes-especiales.jpg',
    text: `Blog\nPlantula`,
    clickThrough: {
      text: 'Ir al blog',
      value: '#'
    }
  },
]

export default function Gallery () {
  const [background, setBackground] = useState<string>(galleryData[0].imageUrl)

  const createOnHoverHandler = (newBackground: string) => {
    setBackground(newBackground)
  }

  return (
    <section
    style={{ '--image-url': `url('${background}')` } as CSSProperties}
      className='w-full h-[60vh] grid grid-cols-4 gap-0 text-center relative overflow-y-clip bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center transition-all duration-300'
    >
      {/* <Image
        src={background}
        alt={'test'}
        width={1024}
        height={956}
        className='w-screen h-auto absolute -z-10 -top-1/4'
        priority
      /> */}
      {
        galleryData.map(({imageUrl, text, clickThrough}, index) => (
          <GalleryCard
            imageUrl={imageUrl}
            text={text}
            clickThrough={clickThrough}
            key={index}
            onHover={createOnHoverHandler}
          />
        ))
      }
    </section>
  )
}
