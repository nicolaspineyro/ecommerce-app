import { BannerMenu } from '../../components/home-page';
import Styles from '../../styles/home-page.module.scss';

const HomePage = () => {

    return (
        <div className={Styles['home-page']}>
            <BannerMenu />
        </div>
    )
}

export default HomePage;