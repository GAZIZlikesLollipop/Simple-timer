import React, {useState} from "react";
import styles from './page.module.css';

function NumberRangeTextField({ min, max, placeHolder}) {
    // Состояние для значения поля ввода
    const [value, setValue] = useState(0);
    // Состояние для сообщения об ошибке валидации

    // Обработчик изменения поля ввода (фильтруем ввод по формату - 1 или 2 цифры)
    const handleChange = (event) => {
        const newValue = event.target.value;
        const twoDigitsRegex = /^\d{0,2}$/;
        const firstZeroDigit = /^0[1-9]$/;
        if (twoDigitsRegex.test(newValue) && newValue >= min && newValue <= max) {
            setValue(newValue);
        }
        if(newValue.length < 1) {
            setValue(0)
        }
        if(firstZeroDigit.test(newValue)) {
            setValue(newValue[1])
        }

    };

    return (
        <div>
            <input
                id="numberRangeInput"
                type="text" // Используем text для полного контроля
                value={value} // Значение из состояния
                onChange={handleChange} // Обработчик изменения (формат)
                className={styles.textField}
            />
            <span>{placeHolder}</span>
        </div>
    );
}

export default NumberRangeTextField;