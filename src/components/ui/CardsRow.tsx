import CardItem from './CardItem';
import Styles from 'src/styles/cards-row.module.scss';
import { useHistory } from 'react-router';

interface CardsRowProps {
    key: number;
    title?: string;
    routeName?: string;
    items: Array<any>;
}

const CardsRow = ({ title, items }: CardsRowProps) => {
    const history = useHistory();
    const state = {
        title, items
    }
    console.log(state)
    const onClickTitle = () => history.push(`/shop/${title?.toLowerCase()}`, state);

    return (
        <div>
            {title && <h1 className={Styles['title']} onClick={onClickTitle}>{title}</h1>}
            <div className={Styles['cards-container']}>

                {items.map(({ id, name, imageUrl, price }) => {
                    const cardItemProps = {
                        key: id,
                        imageUrl,
                        name,
                        price
                    }
                    return (<CardItem {...cardItemProps} />)
                })}
            </div>
        </div>
    )
}

export default CardsRow;