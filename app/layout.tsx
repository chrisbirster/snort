import '@/styles/globals.css';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Next.js App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <div className="flex">
          <div className="w-40 mx-2 flex flex-col divide-y divide-slate-500">
          <div>
            <p className="px-4 py-2 font-bold text-lg text-white">
              SNOT
            </p>
          </div>
          <GlobalNav />
          </div>
          <div className="flex flex-auto flex-col space-y-6">
            <AddressBar />
            <div className="rounded-xl border border-zinc-800 bg-black p-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
