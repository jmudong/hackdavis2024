import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApartmentList() {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        async function fetchApartments() {
            try {
                const response = await axios.get('/api/apartment');
                setApartments(response.data);
            } catch (error) {
                console.error('Error fetching apartments:', error);
            }
        }

        fetchApartments();
    }, []);

    return (
        <div>
            <h1>Apartment List</h1>
            <ul>
                {apartments.map(apartment => (
                    <li key={apartment._id}>
                        <h2>{apartment.text}</h2>
                        <p>Price: ${apartment.price}</p>
                        <p>Link: <a href={apartment.link}>{apartment.link}</a></p>
                        <p>Available: {apartment.available ? 'Yes' : 'No'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ApartmentList;
