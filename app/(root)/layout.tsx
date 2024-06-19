import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: 'Max',
    lastName: 'Mustermann',
  };
  return (
    <main className="flex h-screen w-full font-notoSans">
      <Sidebar user={loggedIn} />



      {/* <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/innbitLogo.svg" width={30} height={30} alt="logo" />
        </div>
        <div>
          <MobileNav user={loggedIn} />
        </div> 
        
        
      </div>*/}
      {children}
    </main>
  );
}
