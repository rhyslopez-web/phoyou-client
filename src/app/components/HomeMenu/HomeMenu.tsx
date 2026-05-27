'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import Paragraph from '../Paragraph/Paragraph'
import BentoFoodCard from '../BentoFoodCard/BentoFoodCard'
import Button from '../Button/Button'
import { supabase } from '@/lib/supabase'

// The three categories to feature, in display order
const FEATURED_CATEGORIES = ['Phở - Noodle Soup', 'Mì - Egg Noodle', 'Banh Mi']

type FeaturedItem = {
  id: string
  name: string
  description: string | null
  image_url: string
  category: string
}

const HomeMenu = () => {
  const { data: items = [], isLoading } = useQuery<FeaturedItem[]>({
    queryKey: ['featured-menu'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('menu_with_category')
        .select('id, name, description, image_url, category')
        .in('category', FEATURED_CATEGORIES)
        .not('image_url', 'is', null)
        .order('sort_order', { ascending: true })

      if (error) throw error

      // Pick exactly one item per category, in the specified order
      return FEATURED_CATEGORIES
        .map(cat => (data ?? []).find(item => item.category === cat))
        .filter((item): item is FeaturedItem => !!item)
    },
  })

  return (
    <section className='py-20 lg:py-40 px-3'>
      <div className='max-w-[1400px] mx-auto flex flex-col gap-20'>

        <div className='flex flex-col items-center gap-5'>
          <SecondaryHeading className='text-primary'>
            Try Our Personal
            <span className='text-stroke'> Favourites</span>
          </SecondaryHeading>
          <Paragraph>Explore a taste of what we&apos;re all about, then dive into the full menu for more.</Paragraph>
        </div>

        {/* Cards */}
        {isLoading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {[0, 1, 2].map(i => (
              <div key={i} className='aspect-[3/4] rounded-3xl border-2 border-primary bg-white/5 animate-pulse' />
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {items.map(item => (
              <BentoFoodCard
                key={item.id}
                title={item.name}
                description={item.description ?? ''}
                image={item.image_url}
              />
            ))}
          </div>
        )}

        <div className='flex justify-center'>
          <Button href='/Menu'>View Whole Menu</Button>
        </div>

      </div>
    </section>
  )
}

export default HomeMenu
