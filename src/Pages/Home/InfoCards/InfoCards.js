import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import call from "../../../assets/icons/phone.svg";
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardInfo = [
        {
            id: 1,
            name: "Opening hours",
            description: "opening from 9.00 pm to 5.00 pm",
            icon:clock,
            bgColor:"bg-gradient-to-r from-secondary to-primary"
        },
        {
            id: 2,
            name: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            icon:location,
            bgColor:"bg-accent"
        },
        {
            id: 3,
            name: "Contact us now",
            description: "+000 123 456789",
            icon:call,
            bgColor:"bg-gradient-to-r from-secondary to-primary"
        }
    ]
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
            {cardInfo.map(card => <InfoCard key={card.id} card={card}></InfoCard>)}
        </div>
    );
};

export default InfoCards;