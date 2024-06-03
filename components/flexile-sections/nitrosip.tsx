import { Badge } from "@radix-ui/themes";
import Image from "next/image";
import { Figure } from "../figure";
import { StyledExternalLink } from "../styled-external-link";
import { Section } from "../tailwind-sections/section-template";

export const Nitrosip = () => {
  return (
    <Section id='nitro-sip' title='Nitro sip - coffee curation'>
      <div className='flex gap-2'>
        <Badge className='w-fit'>Launched: Friday, May 31st 2024</Badge>
        <StyledExternalLink href='https://nitrosip.com'>
          nitrosip.com
        </StyledExternalLink>
      </div>
      <p className='leading-8'>
        A big passion of mine is specialty coffee. I&apos;m immensely
        inspired by the craft and intention that goes into growing,
        roasting, and brewing coffee. Start to finish, this was launched
        in 2 weeks.
      </p>
      <Figure caption='Nitro sip website'>
        <div className='relative' style={{ aspectRatio: "637/412" }}>
          <Image
            src='https://media.graphassets.com/5F2cgHSTGm5NTQgHWoYX'
            alt='Nitro sip screenshot'
            fill
            className='rounded-xl mx-auto'
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRt4GAABXRUJQVlA4WAoAAAAgAAAAGgIAXAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg8AQAANBHAJ0BKhsCXQE+7XayVKmtL6MhtKn58B2JaW7gC22PLUEG60CwDil+vGP0AgbW6hz/5IENoB1CrTqtqCVDvYc9yx2GNNP1kNL3Iy9O4HwnIQCnEe/h72FFXk+GmPmGguiHVI8IeEQarQ71KEcP6G6h/Ds7wMZPWef9WcPHHjjxyScvWZcjmmO2zagPsUegOpsH1rEdaaD26dNg/yRT/Z3/YPs2mD7FHllLWJLEl5Gb+8Vnn/VoLIUYry9lscwfYkpVRqo1VDf+CDU9wa6mvZOXxFP7tBZPWYOPHKL90u6XdLul3UIz1pL49i8nIGhJx/k9FBDHLFNcGh+HSTfGzxNB7dQimhHfsUegaEkKEnBZgswollMOZsQir97kXYxmPG6j+7Ri/u89AFHpcQ8HrTSyog0HBhn4wpXRF676WCKEK9aHhU5OQG90u6XdK1KbivjtkMdy+Mcg52921abd/4ioRRx4477hO4qLkl3NNIOqCr4zf16Hg+VbypjM7pWpcOZrK1KZqr/dgheO6jXcgOpsH2bXafqTLKi83gvCPIi0g1g+/EFdyA6m3f+HH6kyyouTIbqxRR6F7sEGtZUsynn/VlPzOSUmWWJETLCVFnBdKhojBh8s7SqWHqg/u89Eq/in6wtxzWCEZ440yUX0c7wId2XJYvJyIWPrUvbXBe03iAYmJjfRvBQfFViqb/3e6Djn36YT/rbB3Mb6Lsx0EMMMRmp+OeKV2136bHnbMRnjjTDum2iZ8+EXIBWxTzvTY87ZiM8cZkAA/uwAB7t9IPa4ioWw007tWz/WvCfMkoSzSqXCsskWtnjRgJBK1IweouCiMRB0tMyKMfTnabUYkedEb0U5leakqbns+griOBsCzmUxUHZd/9YIRv4pVNlet+IUKGNbeB4EPAer06AuRnGIxngHQBgJ7BHjgNHYAAADYcDUiZird5nQkoR73Ul2rhQZWFm3fuNIpuhOEgLWsMBL12AuIW2mCbx0ozlYullCkh9OEMl/bi80wp4DeCPq4eaFsyCfAOs+0fukDAPPgldOaTP78ov0M0NcDUn4FXQp4ZUoK9Of9AcfCda8idabLoKAwHVYDx0BWxAnR+22IuZ75dvE+SjZce+OedaifjMrJrajXA8nK0qvZzjg0cEBIUFhg0LXd5Tt+VXiBFg40JJND3NI3nDDWy38b7s7VS/KArG6PWlEHGBZ4y/t/WgKGcC4yoDrVx0con1rkpDRRCotOg9FgDTzui7kFjVZjAJxC4nyBiUpbf/cMCzaD6QtLga3D0VwcrGYscLOANjYkzORI7kZmcAW1K2mAKkqux2VSaoHARtGRjEDHwSLQ1+Nl9lC41VuP3KOujPMzbZnLc84wedAoJhlpdjHeZ0COzO9HoiRKFkGYLl342GOq+WGmjXN/ODstRqsyCDsmE2bSJEeFuWokl6Tz+/xsUHGpzQS7Cfsu7wuGEZjNBU8iX5c+dJnVKNKVA2nyJDY4QyXw/+jRZh73Ks4DNFEl6IBbWtGXAJvd4KSP3fmGaSF34jqkntiszrtICVvRbWxhscxjp5n7gEuxAf6OFfuNpyLsg2NIezcxlXXHaCjAAkaFxoiJ8BCy4CVLBflQICvWTw8+TVXeYAAQWW37PkyIinDEgmtZ+NS/4MYvINPEoAAGLyygGi+hff7oLi58bNUIAAAAAA="
          />
        </div>
      </Figure>
      <p className='leading-8'>
        After moving to NYC 3 months ago, I rapidly realized how
        incredible the coffee scene is here. I also noticed that most of
        the accessible coffee is commoditized and the scene that is truly
        innovating and crafting is obscure and hard to source. I have a
        theory that I&apos;m not the only one in NYC that feels the same.
        I want to help others enjoy the most incredible brews the city has
        to offer.
      </p>
      <p className='leading-8 font-bold'>
        Regarding actually designing and building the project, I&apos;m
        using:
      </p>
      <ul className="list-['—_'] marker:text-mint-10 list-inside space-y-px">
        <li className="text-sage-10">
          <StyledExternalLink href='https://medusajs.com/'>
            Medusa.js
          </StyledExternalLink>{" "}
          for the e-commerce infrastructure
        </li>
        <li className="text-sage-10">
          <StyledExternalLink href='https://nextjs.org/'>
            Next.js
          </StyledExternalLink>{" "}
          to build the site
        </li>
        <li className="text-sage-10">
          styled with{" "}
          <StyledExternalLink href='https://tailwindcss.com/'>
            Tailwind
          </StyledExternalLink>
        </li>
      </ul>

      <p className='leading-8'>
        Most of my focus is going into the physical product and the
        experience of receiving these coffees. I also knew the brand would
        be a big aspect of people relating to the project or not.
      </p>
      <p className='leading-8'>
        My inspiration for the brand was multi-fold. I was inspired by the
        artful hand-painted signs found throughout NYC but condensed in
        Brooklyn.
      </p>
      <Figure caption='Hand-painted NYC signage'>
        <div className='relative' style={{ aspectRatio: "1460/1000" }}>
          <Image
            src='https://media.graphassets.com/J5ss34MwQSGevijBAPV0'
            alt='Hand-painted NYC signage'
            fill
            className='rounded-xl mx-auto'
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRtwHAABXRUJQVlA4WAoAAAAgAAAAGgIAcAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg7gUAANBMAJ0BKhsCcQE+7XayVD+ztKMiVLqj8B2JaW7ha3qj0theHf9qPjKaBGHTHmW6d9gE3SFB4bdXNyWA6f4y9OlDgB8ub9SgAzp8XB6dK/v4RPDhqLAyV+rz9g7fNXt4D3OKvfEpCxrN7YognGfLNcSW/jPl1YYpT/fI+wH40JhrBBhDGR0vyNXwEv15zMh/LVAiOlLUXoDpfEpdhL1/ANKJxnyIXm5dPJHTHAyPGAJz/wSl8Sl2DShOamGR1A1YE36YAZemDu3sO11icL1wG+o93EGJpfEpd6Ezjv4BpQm/S//fV+Ty3G+XN+cD0LGR1OJLfwDShOZj5L2g33feE7QOoO+aNQpi5re2czIfwDT18A0oMRJ7GvJpFiGwMKDdXN+Z8rsGlCc2HYtSsl7my0Ck0KebRT3Aix49OG3VyqbIfxoh2LRtPEjq+r6vt0npXzdbACR9IP8A3P9s5sOUmAGWbd4/lJd1WXbSDmfPfww26ub83+dzbfHe16nt/Gtr193PATyfSD/ASPpB/gHlMdAhsSEPykLHTEW1cMNurm/OG3Vz2nRP6tnNAjqKTYZvzht1c35w26ub9bwOd2DUazt/J9IP8BI+kH+AkfSLI5C7lrfDtwEj6Qf4CR9IP8BI+m/nFoQWVQf4CR9IP8BI+kH+Akfg+iy/1hRc35w26ub84bdXN+YhMXKceOcuV0aOGG3VzfnDbq5vzhtkhQoAvgcZCVUFZUKYtXDDbq5vzht1ctykrra1YIER9IP8BI+kH+AkfSD+2Sa57R5BIwuE+kH+AkfSD/ASPpB/a49RnPLjbLauGG3VzfnDbq5vzf4AAP76gKlP4OtdUZ9SoTB+gCDbY1AP4nqYsFp6PxXNVl6B6kiRMnkZjx+8mWSco7CR+IbJFSuSjLb7dAYXsVJjLvEPmTNIsifmUnMWFPkO7bUFZYR4GOIzXPm7AVEKfCaNmHGvO5TG4Szx6lIOsvu8TaDldN225VmvpEc9pfpd9T24iABQ/WQdvFxzh5tDaTFISfELjuHyA+LeiFDj7Bh1jGctH+g5zCnqrq9Sg2JrQYMLjgNvWoCTIqfCSKil5vMmd3xaLUMrk5dGkGrgChv+L7+dqcS/o2yswjHzY5Ma2EFg6r0FspfN8eD5HDS1Mb/I/3sNb4TX081GZ7cucnosFyb/CAGtrdxnzX8AuakhvARTVvo8QJXDuP+1Ftx6uC0bO+0lrwHxPIZaFUk5LDc2hzbWTDsrRobhGy08H8Ga3siXTu23ypsRCwToMlxIijpC4WuaTURld7ybKUeA7EeZckpGX3MOy6ICZG9ETyz9GQz0dnKcsbn/s/V0197ohweB8M6CQNxy/SC0Z05NygxmiOiHJorz73EpHuknjvCqZUE0cfX3nrHO5xWmqchKEeRTOotteian+4rFV9uOA9rKknrreOUwgWoRWJWV2q9C45GnZtMiawQJH9W/NYGguu5t+ChjvYekIBW5uhWYAAAJjOXh6UrVebvggArxcBENlTsKXez3LDuUHdXcFrgvUXHUyP/gWoXLIQACF9eHDGV81OtbPrRoA2SfXr8LC4DINH5O9c7AkDmM5S6cTcR+XtlCAAAA0sh9KXNrCoJD9Pv1Jb5vyaRlIiqsjA4htZLgP0R6rpOuVGlU+OApsqbLBO75dRZhsiAABxlVAsN4/1jsxk2VO+IUH/Hn1qBObRiriX4tSHNQSATS56uqAAACb7bnB7YaPPj5or7fhQNKyeBqvssitZ5B/iEHsAABUnPyWFK50ufdMtGVEI569MT7FSpK3EpLhvoUuJ8AAAH4xqkQhhrmYSFrZNMjvpJA63nUAAAGxP5IVTTrB2OK6TYXRSfAepMAAAAAw0pP9gkMY2hNBOg929NwAAANjkjswz0fNx+HNnNayYRb9b1bBjMbAAAAdVJZJoDLxQPDtDKofdY0+CZL6xYAAACsLcgDcuZqUWnZ3x1BoTzBH0LHCoAAAArrAY8Pukgc6uV4DwabBHIAAACZFahUJjsWV0AAAAAAAA==data:image/webp;base64,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"
          />
        </div>
      </Figure>

      <p className='leading-8'>
        I wanted to embody the warmth of coffee, and the regality of lady liberty with the color choice. As a first foray into delivering these boxes, I wanted the receivable to be tangible and first sketched out some ideas. Afterwards I used a 3D modelling tool to visualize the box, which is what I ended up launching with.
      </p>

      <Figure caption='Ideation sketches'>
        <div className='relative max-w-lg mx-auto' style={{ aspectRatio: "800/400" }}>
          <Image
            src="https://media.graphassets.com/EnHW6m0zSEabAEBdt8FN"
            alt='Ideation sketches'
            fill
            className='rounded-xl mx-auto'
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRioFAABXRUJQVlA4WAoAAAAgAAAAGgIADQEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggPAMAALA7AJ0BKhsCDgE+7W6vUz+3KaKlVLsT8B2JaW7gCC+VF0bj/aYpG4J9BC+PGB22s5F9G6eHDh9VgO7Wci+l+6RmZu7Wihl54VDG3JIY4DsyJuANDbz8AqvgIuAH6ktQUY9hjyA6rC7+lm0XKjQOzJJlRoHBk2pKp8L6tcA/UsuU+o7MkmVGgdmSTKWPYaCr0lWGwBpcqNA6SZcqNA7MkmVF4a/ilYreRi14KMew0FXpY+mSStDQOzHZNDVhr+KVit5GLXgnzM3yDNiygB+pZcqM/ALXgox7DQVej5g+rUpACq4qtkTA4VMpZqecCKxW8jFrwT5mb5BcL2oCXtF0C2TufdhoKs+VYa/ilYrd/OMH1g8ZvEoyBhkkrWqAr0B6wvSVYa/ilYreRi136CVgSmS1hLaaTMtR8A7bVkiBa8FGPYaCF0lQEmAkwD0M+qNXKj/cpCh22s405yK3kYteCjHsJhfsL8Qi0M2cnNS513azkX0uXeqM1SDJtSVYD0oulFxrEDL9EEe2l7WCHFZyL6X7ARsX7C/YYCCr0fMH1alH1SUDCpaS+UrGgK9Aj4sIzUJVyyY1CKIAEmA14KLGiTPvATik+PGB22s5F9L9kn9jX0a89RJ6y65Nc2ePGB22s5F9L9j2AAD+8I9TYXUg9r7lHuxynKBHEfiD+v8EFAvlNH3c+E/DAjsT8Qf1/dnByZfDKBfTmX1uhyXHhvm4HbG+mYzgSDFUx2TSBkIPZQMtVCZpanKuDZlB2CiFoW3Kyvlw49gx0uiPh+WzQUU7PzgmUavsp6wKdPcFIT7Axhu5qy31VEmOSxZx15Jj3q1zeyhmO3S/U7xyCF8+UL1Os1B5bF4mJf2/5hfRZcTJ9OWKA8CXNEByjU5a9vENjhUCDqGa9Znoi7hX4epe0GiZ+Zzvivb/zXtaw/KxXCsNFIr6gH6QCmEoS3ss2SI0yhksJEkmosOQbB5qKdXQpJkmvSX54P2N+yfipFUuFjAAw876UzhDKPL86pTbWn481li3exYkB6XiaXVK4QAA03H4YB3vc69kNfBk7SUjDh3LPKQstDbKL+ahgACfAnsam8HS658Q4FOrBxUZdYAAAA=="
          />
        </div>
      </Figure>

      <p className='leading-8'>
        Ultimately, Nitro sip is quite divergent from my typical type of work. I&apos;m extremely passionate about the project though and have already dove into a few skill sets I don&apos;t typically flex. I think this is a great representation of my ability to take initiative, learn new skills, and deliver a product from concept to launch.
      </p>
    </Section>
  )
};