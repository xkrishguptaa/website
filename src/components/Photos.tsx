import Image1 from '@/images/photos/1.jpg'
import Image2 from '@/images/photos/2.jpg'
import Image3 from '@/images/photos/3.jpg'
import Image4 from '@/images/photos/4.jpg'
import Image5 from '@/images/photos/5.jpg'
import clsx from 'clsx'
import Image from 'next/image'


export function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  const images = [
    {
      image: Image1,
      desc: 'On the Open Stage at Hack This Fall Gurugram 2023'
    },
    {
      image: Image2,
      desc: 'Talking about Libraries and Frameworks at fastn Delhi 2023'
    },
    {
      image: Image3,
      desc: 'Working on something special at Hack The Mountains 2023'
    },
    {
      image: Image4,
      desc: 'Talking about Containers at WeMakeDevs 2023'
    },
    {
      image: Image5,
      desc: 'At the WeMakeDevs Delhi Meetup 2023'
    }
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map(({ image, desc }, i) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[i % rotations.length],
            )}
          >
            <Image
              src={image}
              alt={desc}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
