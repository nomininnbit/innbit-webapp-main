// pages/index.tsx
import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import RetailerCard from '@/components/RetailerCard';

const retailers = [
  {
    name: 'METASYS Medizintechnik GmbH',
    category: 'Dental Equipment',
    products: 25,
    orders: 500,
    email: 'info@metasys.com',
    phone: '+43 512 205420 – 510',
    address: 'Florianistraße 3, 6063 Rum, Austria',
    website: 'http://www.metasys.com',
    logo: '/metasys-logo.png',  // Replace with actual logo URL
    bgColor: '#FF0000'  // Example background color
  },
  {
    name: 'MGF Compressors',
    category: 'Dental Equipment',
    products: 25,
    orders: 500,
    email: 'info@mgfcompressors.it',
    phone: '+39 02 9019180',
    address: '20081 ABBIATEGRASSO (MI) - ITALY, VIA PASCOLI, 15',
    website: 'http://www.mgfcompressors.it',
    logo: '/mgf-logo.png',  // Replace with actual logo URL
    bgColor: '#CCCCCC'  // Example background color
  },
  {
    name: 'ULTRADENT',
    category: 'Dental Equipment',
    products: 25,
    orders: 500,
    email: 'kundendienst@ultradent.de',
    phone: '+49 89 420-992-60',
    address: 'Eugen-Sänger-Ring 10 D-85649 Brunnthal',
    website: 'http://www.ultradent.de',
    logo: '/ultradent-logo.png',  // Replace with actual logo URL
    bgColor: '#0000FF'  // Example background color
  }
];

const Retailers: React.FC = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox />
        </header>
        <main className="flex flex-wrap justify-center space-x-4 p-4">
          {retailers.map((retailer, index) => (
            <RetailerCard key={index} retailer={retailer} />
          ))}
        </main>
      </div>
    </section>
  );
};

export default Retailers;
