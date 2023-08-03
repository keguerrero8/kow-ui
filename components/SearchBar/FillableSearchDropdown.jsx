import { useState } from 'react';

import styles from './FillableSearchDropdown.module.css'

const FillableSearchDropdown = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const handleFocus = () => setShowDropdown(true);

    const handleSearch = (event) => {
        const {value} = event.target;
        setSearchTerm(value);
    };

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownItemClick = (item) => {
        setSearchTerm(item);
        setShowDropdown(false);
    };



    const dropdownItems = ['Acyclovir', 'Amoxicillin', 'Aprepitant'];

    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.textInput}
                value={searchValue}
                onChange={handleSearch}
                type='text'
                placeholder='Search Medication'
                onClick={handleDropdownToggle}
                onFocus={handleFocus}
            />
            {showDropdown && (
                <div className={styles.dropdown}>
                    <ul>
                        {dropdownItems.map((item) => (
                            <li 
                                key={item}
                                onClick={() => handleDropdownItemClick(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default FillableSearchDropdown;