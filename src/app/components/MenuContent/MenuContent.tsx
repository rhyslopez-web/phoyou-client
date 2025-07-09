import React from 'react'
import Paragraph from '../Paragraph/Paragraph';

type MenuContentProps = {
  title: string;
//   description: string;
  price: number;
};

const MenuContent = ({title, price} : MenuContentProps) => {
  return (
    <article className='flex justify-between py-5 border-b'>
        <div className='flex flex-col gap-5'>
            <h2 className='text-xl'>{title}</h2>
            <Paragraph>Thhis is will be the short description</Paragraph>
        </div>

        <span className='text-xl text-primary'>{price}</span>
    </article>
  )
}

export default MenuContent