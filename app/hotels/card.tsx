import Image from "next/image";

const Card = ({ hotel }: { hotel: { name: string; address: string } }) => {
    const { name, address } = hotel;
    return (
        <li className="card">
            <div className="card-info">
                <h3 className="card-title">{name}</h3>
                <p className="card-address">{address}</p>
            </div>
        </li>
    );
};

export default Card;
