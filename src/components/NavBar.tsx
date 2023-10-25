import Image from 'next/image'
import Link from 'next/link'

export default function NavBar () {
  const navBarLinks = {
    left: [
      {
        route: '#',
        name: 'Inicio'
      },
      {
        route: '#',
        name: 'Academia de barismo'
      },
      {
        route: '#',
        name: 'Tienda'
      },
    ],
    right: [
      {
        route: '#',
        name: 'Nosotros'
      },
      {
        route: '#',
        name: 'Contacto'
      },
    ]
  }

  return (
    <nav className='uppercase flex mx-auto flex-row flex-nowrap items-center justify-center bg-transparent fixed top-0 left-[calc((-189px+32px)/2)] z-10 w-screen'>
      <ul className='flex flex-row flex-nowrap gap-10'>
        {navBarLinks.left.map(({name, route}, index) => (
          <li
            className='block'
            key={index}
          >
            <Link
              href={route}
              rel='noreferrer'
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Image
        src='/Logo-Oficial-Plantula-3.png'
        width={189}
        height={159}
        alt='logo-oficial-plantula'
        className='mx-4'
      />
      <ul className='flex flex-row flex-nowrap gap-10'>
        {navBarLinks.right.map(({name, route}, index) => (
          <li
            className='block'
            key={index}
          >
            <Link
              href={route}
              rel='noreferrer'
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
