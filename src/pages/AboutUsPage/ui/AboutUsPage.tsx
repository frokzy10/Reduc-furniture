import React from 'react';
import cls from "./AboutUs.module.scss"
const AboutUsPage = () => {
    return (
        <div className={cls.about}>
            <h2>Нурдин Бакытбеков</h2>
            <p>15 Лет .Город Бишкек</p>
            <a target="_blank" href="https://t.me/nurdinStack">Написать мне</a>
        </div>
    );
};

export default AboutUsPage;