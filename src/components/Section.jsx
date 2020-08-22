import React from 'react';

import ListItem from './List-item';

function Section() {
  const data = [
    {
      taste: 'с фуа-гра',
      dose: '10',
      mouses: 'мышь',
      weight: '0,5',
      footnote: 'Печень утки разварная с артишоками.',
      disabled: false,
    },
    {
      taste: 'с рыбой',
      dose: '40',
      mouses: '2 мыши',
      weight: '2',
      footnote: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      disabled: false,
    },
    {
      taste: 'с курой',
      dose: '100',
      mouses: '5 мышей заказчик доволен',
      weight: '5',
      footnote: 'Филе из цыплят с трюфелями в бульоне.',
      disabled: true,
    },
  ];

  return (
    <section className='cat-food'>
      <div className='container'>
        <h2 className='cat-food__header'>Ты сегодня покормил кота?</h2>
        <ul className='cat-food__list'>
          {data.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Section;
