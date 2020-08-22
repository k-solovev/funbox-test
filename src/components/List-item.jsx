import React from 'react';

function ListItem({ item }) {
  const [isSelected, setIsSelected] = React.useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  const classConstructor = () => {
    let str = 'cat-food__item list-item ';
    if (isSelected) {
      str += 'list-item--selected';
    }
    if (item.disabled) {
      str += 'list-item--disabled';
    }
    return str;
  };

  const isDisabled = () => {
    let str = '';

    if (item.disabled) {
      str = 'Печалька,' + item.taste + ' закончился.';
    } else if (!isSelected){
      str = 'Чего сидишь? Порадуй котэ, ';
    }
    return str;
  };

  return (
    <li onClick={clickHandler} className={classConstructor()}>
      <span className='list-item__text'>Сказочное заморское яство</span>
      <h3 className='list-item__header'>
        Нямушка<span className='list-item__subheader'>{item.taste}</span>
      </h3>
      <p className='list-item__text-dose'>
        {item.dose} порций
        <br />
        {item.mouses} в подарок
        <br />
      </p>
      <span className='list-item__weight'>
        {item.weight}
        <br />
        кг
      </span>
      <span className='list-item__link'>
        {isDisabled()}
        {!item.disabled && !isSelected ? <a onClick={clickHandler} href='https://funbox.ru/'> купи</a> : ''}
        {isSelected ? item.footnote : ''}
      </span>
    </li>
  );
}

export default ListItem;
