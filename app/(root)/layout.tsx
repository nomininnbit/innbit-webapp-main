import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import HeaderBox from "@/components/HeaderBox";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="flex h-screen w-full font-notoSans">
      <Sidebar user={{
        firstName: "",
        lastName: ""
      }} />
      {children}
    </main>
  );
}
