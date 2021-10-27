import { useEffect, useState } from 'react';
import BannerMenuItem from 'src/components/home-page/BannerMenuItem';
import Styles from 'src/styles/banner-menu.module.scss';
import { BANNER_MENU_DATA } from 'src/utils/bannerMenuData';

interface Banner {
    title: string;
    imageUrl: string;
    id: number;
    size?: string;
}

const BannerMenu = () => {
    const [sections, setSections] = useState<Banner[]>([]);

    useEffect(() => {
        setTimeout(() => setSections(BANNER_MENU_DATA), 1000)
    }, [])

    if (!sections || sections.length === 0) {
        return null;
    }
    return (
        <div className={Styles['banner-container']}>
            {sections.map(({ title, imageUrl, id, size }) =>
                <BannerMenuItem
                    key={id}
                    imageUrl={imageUrl}
                    title={title}
                    size={size}
                />)}
        </div>
    )
}

export default BannerMenu;