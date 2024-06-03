import { Badge } from "@radix-ui/themes";
import Image from "next/image";
import { Figure } from "../figure";
import { StyledExternalLink } from "../styled-external-link";
import { Section } from "../tailwind-sections/section-template";

export const Nitrosip = () => {
  return (
    <Section id='nitro-sip' title='Nitro sip - e-commerce coffee subscription'>
      <div className='flex gap-2'>
        <Badge className='w-fit'>Launched: Friday, May 31st 2024</Badge>
        <StyledExternalLink href='https://nitrosip.com'>
          nitrosip.com
        </StyledExternalLink>
      </div>
      <p className='leading-8'>
        This is the most recent project of mine. Start to finish, this was launched in
        2 weeks.
      </p>
      <Figure caption='Nitro sip website'>
        <div
          className='relative max-w-lg mx-auto'
          style={{ aspectRatio: "637/412" }}
        >
          <Image
            src='https://media.graphassets.com/5F2cgHSTGm5NTQgHWoYX'
            alt='Nitro sip screenshot'
            fill
            className='rounded-xl mx-auto'
            placeholder='blur'
            blurDataURL='data:image/webp;base64,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'
          />
        </div>
      </Figure>
      <p className='leading-8'>
        There is an incredible yet often inaccessible coffee scene in NYC. I
        have a theory that I&apos;m not the only one that feels the same.
      </p>
      <p className='leading-8 font-bold'>
        Regarding actually designing and building the project, I&apos;m using:
      </p>
      <ul className="list-['—_'] marker:text-mint-10 list-inside space-y-px">
        <li className='text-sage-10'>
          <StyledExternalLink href='https://medusajs.com/'>
            Medusa.js
          </StyledExternalLink>{" "}
          for the e-commerce infrastructure
        </li>
        <li className='text-sage-10'>
          <StyledExternalLink href='https://nextjs.org/'>
            Next.js
          </StyledExternalLink>{" "}
          to build the site
        </li>
        <li className='text-sage-10'>
          styled with{" "}
          <StyledExternalLink href='https://tailwindcss.com/'>
            Tailwind
          </StyledExternalLink>
        </li>
      </ul>

      <p className='leading-8'>
        I wanted to embody the warmth of coffee, and the regality of lady
        liberty with the color choice. As a first foray into delivering these
        boxes, I wanted the receivable to be tangible and first sketched out
        some ideas. Afterwards I used a 3D modelling tool to visualize the box.
      </p>

      <Figure caption='Ideation sketches'>
        <div
          className='relative max-w-lg mx-auto'
          style={{ aspectRatio: "800/400" }}
        >
          <Image
            src='https://media.graphassets.com/EnHW6m0zSEabAEBdt8FN'
            alt='Ideation sketches'
            fill
            className='rounded-xl mx-auto'
            placeholder='blur'
            blurDataURL='data:image/webp;base64,UklGRioFAABXRUJQVlA4WAoAAAAgAAAAGgIADQEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggPAMAALA7AJ0BKhsCDgE+7W6vUz+3KaKlVLsT8B2JaW7gCC+VF0bj/aYpG4J9BC+PGB22s5F9G6eHDh9VgO7Wci+l+6RmZu7Wihl54VDG3JIY4DsyJuANDbz8AqvgIuAH6ktQUY9hjyA6rC7+lm0XKjQOzJJlRoHBk2pKp8L6tcA/UsuU+o7MkmVGgdmSTKWPYaCr0lWGwBpcqNA6SZcqNA7MkmVF4a/ilYreRi14KMew0FXpY+mSStDQOzHZNDVhr+KVit5GLXgnzM3yDNiygB+pZcqM/ALXgox7DQVej5g+rUpACq4qtkTA4VMpZqecCKxW8jFrwT5mb5BcL2oCXtF0C2TufdhoKs+VYa/ilYrd/OMH1g8ZvEoyBhkkrWqAr0B6wvSVYa/ilYreRi136CVgSmS1hLaaTMtR8A7bVkiBa8FGPYaCF0lQEmAkwD0M+qNXKj/cpCh22s405yK3kYteCjHsJhfsL8Qi0M2cnNS513azkX0uXeqM1SDJtSVYD0oulFxrEDL9EEe2l7WCHFZyL6X7ARsX7C/YYCCr0fMH1alH1SUDCpaS+UrGgK9Aj4sIzUJVyyY1CKIAEmA14KLGiTPvATik+PGB22s5F9L9kn9jX0a89RJ6y65Nc2ePGB22s5F9L9j2AAD+8I9TYXUg9r7lHuxynKBHEfiD+v8EFAvlNH3c+E/DAjsT8Qf1/dnByZfDKBfTmX1uhyXHhvm4HbG+mYzgSDFUx2TSBkIPZQMtVCZpanKuDZlB2CiFoW3Kyvlw49gx0uiPh+WzQUU7PzgmUavsp6wKdPcFIT7Axhu5qy31VEmOSxZx15Jj3q1zeyhmO3S/U7xyCF8+UL1Os1B5bF4mJf2/5hfRZcTJ9OWKA8CXNEByjU5a9vENjhUCDqGa9Znoi7hX4epe0GiZ+Zzvivb/zXtaw/KxXCsNFIr6gH6QCmEoS3ss2SI0yhksJEkmosOQbB5qKdXQpJkmvSX54P2N+yfipFUuFjAAw876UzhDKPL86pTbWn481li3exYkB6XiaXVK4QAA03H4YB3vc69kNfBk7SUjDh3LPKQstDbKL+ahgACfAnsam8HS658Q4FOrBxUZdYAAAA=='
          />
        </div>
      </Figure>

    </Section>
  );
};
