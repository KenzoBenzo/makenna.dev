import { yearsSince } from '@/utils/years-since';
import Image from 'next/image';

export const Personal = () => (
  <section className='mt-24'>
    <h2 className='text-lg text-sage-10 mb-6 mx-auto w-fit'>Personal</h2>

    <div className='flex items-center gap-12 mb-8 flex-col md:flex-row'>
      <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-4 w-full'>
        <Image
          src='/spela-eini.png'
          alt='Spela and Eini'
          className='col-span-1 h-full bg-sage-8 rounded-md md:max-h-40 w-full bg-cover hover:scale-125 hover:rotate-[15deg] transition-all ease-in-out object-cover'
          width={200}
          height={200}
        />
        <Image
          src='/via-ferrata.png'
          alt='Makenna on Via Ferrata'
          className='col-span-1 row-span-2 h-full bg-mint-8 rounded-md w-full max-h-96 md:max-h-80 bg-cover hover:scale-125 hover:rotate-[-15deg] transition-all ease-in-out object-cover'
          width={200}
          height={200}
        />
        <Image
          src='/slovenia-airport.png'
          alt='Ljubljana airport'
          className='col-span-1 h-full bg-sage-8 rounded-md md:max-h-36 w-full bg-cover hover:scale-105 hover:rotate-[5deg] transition-all ease-in-out object-cover'
          width={200}
          height={200}
        />
      </div>
      <ul className="list-inside list-['—_'] marker:text-mint-10  space-y-3">
        <li>Grew up in the Midwest USA</li>
        <li>
          I lived with my wife, Špela, and cat, Einštein, in Slovenia for 8
          years
        </li>
        <li>Earth-day Birth-day (I&apos;m {yearsSince("1997-04-22")})</li>
        <li>I jump at any chance I get to travel</li>
      </ul>
    </div>

    <div className='flex gap-12 flex-col md:flex-row'>
      <ul className="list-inside list-['—_'] marker:text-mint-10 space-y-3">
        <li>
          Beverages make me tick! Ask me about Filter Coffee, Maté(!!!) or
          Croatian White Wine.
        </li>
        <li>
          I&apos;m a massive fan of Women&apos;s Soccer, specifically
          you&apos;ll find me rooting for the USWNT in the upcoming summer
          Olympics in Paris.
        </li>
        <li>
          Friends would describe my hobbies with likeness to &rdquo;an old
          dude&ldquo; 😅. I dig Golf, Squash, Padel, Sailing, and Via
          Ferrata.
        </li>
      </ul>

      <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-4 w-full'>
        <Image
          src='/croatia-sailing.png'
          alt='Sailboats in the Adriatic Sea'
          className='col-span-1 row-span-2 h-full bg-sage-8 rounded-md max-h-40 w-full bg-cover hover:scale-125 hover:rotate-[15deg] transition-all ease-in-out object-cover'
          width={200}
          height={200}
        />
        <Image
          src='/sailing.png'
          alt='Makenna Sailing in Croatia'
          className='col-span-1 row-span-2 h-full bg-sage-8 rounded-md max-h-40 w-full bg-cover hover:scale-125 hover:rotate-[-30deg] transition-all ease-in-out object-cover'
          width={200}
          height={200}
        />
      </div>
    </div>
  </section>
);