import React from 'react';
import icon from '../../../assets/img/Icon.svg'
import s from './SearchInput.module.css'
import { ReactComponent as Icon } from '../../../assets/img/Icon.svg';

const SearchInput = () => {
    return (
        <div className={s.inputWrapper}>
            <Icon className={s.iconInput} />
            <input
                placeholder='Filter by Name'
            type='search'
                className={s.input}
            />
        </div>
    );
};

export default SearchInput;