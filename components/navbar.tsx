import { HoverCard } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { MapPinLineIcon } from "./icons";
import { ThemeSwitcher } from "./theme-switcher";

export const Navbar = () => {
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
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAACQBQCdASogACAAPm0wlUakIyIhKAqogA2JQBOnKCc6BLNiYzCYVdqVzPZCC7dQeYYCZWNs4AD+rxBfWNI5eh4TN7SpXuPsD85VWo/tjhTMg+bacXkpqF2ltA09MkfH0zq8XcQxovvLHip7J2jmcfEGVm82hAE7YOGEyVYXfmPKQQY7x9twAAAA"
            />
            <p className='text-xl	font-extrabold text-sage-12 leading-4'>MCS</p>
          </div>
        </Link>

        <HoverCard.Root>
          <HoverCard.Trigger className="cursor-help">
            <div className='flex items-center gap-1'>
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
      <div className='flex items-center gap-3 sm:gap-6'>
        <Link
          href='/blog'
          className={`text-link transition-all hover:text-mint-10`}
        >
          Blog
        </Link>
        <a
          href='/resume.pdf'
          download='makenna-smutz_resume'
          className={`text-link transition-all hover:text-mint-10`}
        >
          <span className='hidden sm:inline-block'>Download</span> CV
        </a>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
