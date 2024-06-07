import { useState } from 'react';

import styles from './FillableSearchDropdown.module.css'

const FillableSearchDropdown: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const handleFocus = () => setShowDropdown(true);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearchValue(value);
    };

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownItemClick = (item: string) => {
        setSearchValue(item);
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