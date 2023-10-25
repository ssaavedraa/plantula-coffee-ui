import { GalleryCardProps } from '@/types';

export default function GalleryCard ({
  text,
  imageUrl,
  clickThrough,
  onHover
}: GalleryCardProps) {
  return (
    <div
      className='bg-black bg-opacity-50 hover:bg-opacity-20 h-full p-8 flex flex-col items-center justify-end transition-all duration-300 hover:pb-12'
      onMouseEnter={() => onHover(imageUrl)}
      onMouseLeave={() => onHover('/cafes-especiales.jpg')}
    >
      <strong className='text-3xl mb-4 font-semibold w-4/5 whitespace-pre'>{text}</strong>
      {clickThrough && <a
        href={clickThrough?.value}
        className='block min-w-1/2 mx-auto bg-orange-500 rounded-sm px-3 py-2 text-lg'
      >
        {clickThrough?.text}
      </a>}
    </div>
  )
}
