import React, { Suspense } from 'react';
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import logo from '../../public/nextjs-icon-light-background.png';
import { delay } from './delay';

async function ShoppingCartCount() {
  // Normally you would fetch data here
  await delay(1500);

  return (
    <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-vercel-pink text-sm font-bold text-white">
      <span>3</span>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-16">
      <div className="flex items-center justify-between rounded-lg bg-zinc-800 px-5 py-4">
        <div className="flex space-x-4">
          <div className="h-10 w-10">
            <Image
              src={logo}
              className="rounded-full"
              alt="Next.js"
              placeholder="blur"
            />
          </div>

          <div className="relative w-56">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-zinc-300" />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              className="block w-full rounded-full border-none bg-zinc-600 pl-10 font-medium text-zinc-200 focus:border-vercel-pink focus:ring-2 focus:ring-vercel-pink"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-zinc-600 text-white">
            <ShoppingCartIcon className="w-6 text-white" />
            <Suspense>
              {/* @ts-ignore */}
              <ShoppingCartCount />
            </Suspense>
          </div>

          <Image
            src="/prince-akachi-LWkFHEGpleE-unsplash.jpg"
            className="rounded-full"
            width={40}
            height={40}
            alt="User"
          />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
