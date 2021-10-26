import Styles from 'src/styles/banner-menu-item.module.scss'
import { useHistory } from 'react-router-dom';

interface BannerMenuItemProps {
    key: number;
    imageUrl: string;
    title: string;
    size?: string;
}

const BannerMenuItem = ({ title, imageUrl, size }: BannerMenuItemProps) => {
    const history = useHistory();
    return (
        <div className={Styles['item-container']} onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>
            <img src={imageUrl} className={Styles['background-image']} />
            <div className={Styles['item-content']}>
                <h1>{title.toUpperCase()}</h1>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}


export default BannerMenuItem