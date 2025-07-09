'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query';
import MenuContent from '../MenuContent/MenuContent';

const MenuSection = () => {

type MenuItem = {
  id: number;
  Title: string;
  Price: number;
};

type MenuResponse = {
  data: MenuItem[];
};

// Tanstack Data Fetching
const { data, error, isLoading } = useQuery<MenuResponse>({
  queryKey: ['menu'],
  queryFn: async () => {
    const res = await fetch('https://brilliant-light-a878c60a5a.strapiapp.com/api/menus?populate=*', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
  });

    if (!res.ok) throw new Error('Could not fetch data');
    return res.json();
  },
});

if (isLoading) return <p>Loading Data...</p>;
if (error) return <p>Error: {error.message}</p>;

  return (
    <section className='py-10 lg:py-10 px-3'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {data?.data?.map((menu, index) => (
                <MenuContent key={index} title={menu.Title} price={menu.Price}/>
            ))}
        </div>
    </section>
  )
}

export default MenuSection