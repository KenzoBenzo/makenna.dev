import { HoverCard } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MapPinLineIcon } from "./icons";
import { ThemeSwitcher } from "./theme-switcher";

export const Navbar = () => {
  const router = useRouter()
  const currentPath = router.asPath;

  return (
    <nav className='flex items-center gap-2 w-full justify-between mt-14 max-w-screen-lg mb-20 mx-auto'>
      <div className='flex items-center gap-4'>
        <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image
              src='/profile.jpeg'
              alt='Makenna Smutz Selfie'
              width={32}
              height={32}
              className='rounded-full border border-sage-9'
              priority
            />
            <p className='text-xl	font-extrabold text-sage-12 leading-4'>MCS</p>
          </div>
        </Link>

        <HoverCard.Root>
          <HoverCard.Trigger className="cursor-help">
            <div className='hidden items-center gap-1 sm:flex'>
              <MapPinLineIcon size={16} className='text-sage-10' />
              <p>BK, NY</p>
            </div>
          </HoverCard.Trigger>
          <HoverCard.Content className='max-w-xl' size="1">
            <Image
              src='/location-600x400@2x.png'
              alt='Map location dark'
              width={600}
              height={400}
              className="rounded-lg hidden dark:block"
            />
            <Image
              src='/location-light-600x400@2x.png'
              alt='Map location light'
              width={600}
              height={400}
              className="rounded-lg block dark:hidden"
            />
          </HoverCard.Content>
        </HoverCard.Root>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Link href="/projects" className={"transition-color hover:text-mint-11"}>Projects</Link>
        <Link href="/blog" className="transition-color hover:text-mint-11">Blog</Link>
        <a
          href='/resume.pdf'
          download='makenna-smutz_resume' className="transition-color hover:text-mint-11"
        >
          CV
        </a>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
