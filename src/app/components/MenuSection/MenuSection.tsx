'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query';
import MenuContent from '../MenuContent/MenuContent';
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading';

const MenuSection = () => {

  type CategoryItem = {
  id: number;
  Category: string;
};

type MenuItem = {
  id: number;
  Title: string;
  Price: number;
  Description?: string;
  menu_categories: CategoryItem[];
};

type MenuResponse = {
  data: MenuItem[];
};

// Tanstack Data Fetching
const { data, error, isLoading } = useQuery<MenuResponse>({
  queryKey: ['menu'],
  queryFn: async () => {
    const res = await fetch('https://brilliant-light-a878c60a5a.strapiapp.com/api/menus?populate=*&pagination[limit]=100', {
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
    <section className='py-10 lg:py-20 px-3 flex flex-col gap-40'>
      <div className='flex flex-col gap-10 max-w-[1400px] mx-auto '>
        <SecondaryHeading>Appetizer</SecondaryHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {data?.data
            ?.filter((menu) =>
              menu.menu_categories?.some((cat) => cat.Category === 'Appetizer')
            )
            .map((menu, index) => (
              <MenuContent
                key={index}
                title={menu.Title}
                price={menu.Price}
                description={menu.Description}
              />
            ))}
        </div>
      </div>

      <div className='flex flex-col gap-10 max-w-[1400px] mx-auto '>
        <SecondaryHeading>Egg Noodle</SecondaryHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {data?.data
            ?.filter((menu) =>
              menu.menu_categories?.some((cat) => cat.Category === 'Egg Noodle')
            )
            .map((menu, index) => (
              <MenuContent
                key={index}
                title={menu.Title}
                price={menu.Price}
                description={menu.Description}
              />
            ))}
        </div>
      </div>

      <div className='flex flex-col gap-10 max-w-[1400px] mx-auto '>
        <SecondaryHeading>Rice</SecondaryHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {data?.data
            ?.filter((menu) =>
              menu.menu_categories?.some((cat) => cat.Category === 'Rice')
            )
            .map((menu, index) => (
              <MenuContent
                key={index}
                title={menu.Title}
                price={menu.Price}
                description={menu.Description}
              />
            ))}
        </div>
      </div>

      <div className='flex flex-col gap-10 max-w-[1400px] mx-auto '>
        <SecondaryHeading>Soup</SecondaryHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {data?.data
            ?.filter((menu) =>
              menu.menu_categories?.some((cat) => cat.Category === 'Soup')
            )
            .map((menu, index) => (
              <MenuContent
                key={index}
                title={menu.Title}
                price={menu.Price}
                description={menu.Description}
              />
            ))}
        </div>
      </div>

      <div className='flex flex-col gap-10 max-w-[1400px] mx-auto '>
        <SecondaryHeading>Vermicelli</SecondaryHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {data?.data
            ?.filter((menu) =>
              menu.menu_categories?.some((cat) => cat.Category === 'Vermicelli')
            )
            .map((menu, index) => (
              <MenuContent
                key={index}
                title={menu.Title}
                price={menu.Price}
                description={menu.Description}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection