import React from 'react'

import styles from "./CarDetails.module.css";

const CarDetails = ({ brand, km, color }) => {
    return (
        <div className={styles.car_container}>
            <h2>Marca: <span className={styles.car_container_brand}>{brand}</span></h2>
            <h3>Km: {km}</h3>
            <h3>Cor: {color}</h3>
        </div>
    )
}

export default CarDetails;