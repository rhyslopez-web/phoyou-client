import React from 'react'
import Paragraph from '../Paragraph/Paragraph';

type MenuContentProps = {
  title: string;
  description?: string;
  price: number;
};

const MenuContent = ({title, price, description} : MenuContentProps) => {
  return (
    <article className='flex justify-between py-5 border-b'>
        <div className='flex flex-col gap-5'>
            <h2 className='text-xl font-bold text-primary'>{title}</h2>
            <Paragraph>{description}</Paragraph>
        </div>

        <span className='text-xl text-primary'>{price}</span>
    </article>
  )
}

export default MenuContent