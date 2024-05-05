import Link from 'next/link';
import Image from 'next/image';

import { Gutter } from '@/components/ui/gutter';

export function Header() {
  return (
    <div className="fixed left-1/2 top-10 z-[1000] w-auto -translate-x-1/2 transform">
      <Gutter className="flex h-20 items-center gap-[50px] rounded-full bg-background px-16 py-4 shadow-lg">
        <div style={{ width: 190, height: 40 }}>
          <Link href="/">
            <Image
              src="https://placehold.co/190x40/png"
              height="40"
              width="190"
              alt="Logo"
            />
          </Link>
        </div>

        <nav className="flex">
          <Link
            href="/"
            className="rounded-full px-7 py-2 text-neutral-900 hover:bg-neutral-50"
          >
            Home
          </Link>
          <Link
            href="/"
            className="rounded-full px-7 py-2 text-neutral-900 hover:bg-neutral-50"
          >
            Services
          </Link>
          <Link
            href="/"
            className="rounded-full px-7 py-2 text-neutral-900 hover:bg-neutral-50"
          >
            Projects
          </Link>
          <Link
            href="/"
            className="rounded-full px-7 py-2 text-neutral-900 hover:bg-neutral-50"
          >
            Contact
          </Link>
        </nav>
      </Gutter>
    </div>
  );
}
