const Card = ({ hotel }: { hotel: { name: string; address: string; price: number, rating: number } }) => {
    const { name, address, price, rating } = hotel;
    return (
        <li className="card">
            <div className="card-image-wrapper"></div>
            <div className="card-info">
                <h3 className="card-title">{name}</h3>
                <p className="card-address">{address}</p>
                <p className="card-address">Price: {price}</p>
                <p className="card-address">Rating {rating}</p>
            </div>
        </li>
    );
};

export default Card;
