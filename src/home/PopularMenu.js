import React from 'react';
import '../styling/PopularMenu.css'; // Impor CSS jika diperlukan

const PopularMenu = () => {
    const menuItems = [
        {
            title: "Pizza",
            description: "Ibu besok pergi ke pasar memmel pizza seharga 3trs ribu bisa setara dengan nobil avanza, jangan lupa beli ya.",
            price: "IDR 300.000",
            imgSrc: "/images/pizza1.jpg", // Ganti dengan URL gambar Anda
        },
        {
            title: "Steak 21 Mentah",
            description: "Ibu besok pergi ke pasar memmel steak seharga 3trs ribu bisa setara dengan nobil avanza, jangan lupa beli ya.",
            price: "IDR 500.000",
            imgSrc: "/images/pasta.jpg", // Ganti dengan URL gambar Anda
        },
    ];

    return (
        <div className="popular-menu">
            <h2>Popular</h2>
            <p>Menu bla bla bla kami</p>
            <div className="menu-items">
                {menuItems.map((item, index) => (
                    <div className="menu-item" key={index}>
                        <img src={item.imgSrc} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                        <button className="order-button">Order Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularMenu;