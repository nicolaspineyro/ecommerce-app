import Styles from 'src/styles/card-item.module.scss'; 

interface CardItemProps {
    key: number;
    imageUrl: string;
    name: string;
    price: number;
}

const CardItem = ({ imageUrl, name, price }: CardItemProps) => {

    return (
        <div className={Styles['item-container']}>
            <img src={imageUrl} className={Styles['item-image']} />
            <div className={Styles['item-info']}>
                <span>{name}</span>
                <span>${price}</span>
            </div>
        </div>
    )
}

export default CardItem;