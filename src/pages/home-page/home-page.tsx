import { BannerMenu } from 'src/components/home-page';
import  Styles from 'src/styles/home-page.module.scss';
import { useHistory } from 'react-router';

const HomePage = () => {
    const history = useHistory();

    return (
        <div className={Styles['container']}>
            <BannerMenu />
        </div>
    )
}

export default HomePage;