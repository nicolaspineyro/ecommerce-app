import { useEffect, useState } from 'react';
import BannerMenuItem from './BannerMenuItem';

interface Banner {
    title: string;
    imageUrl: string;
    id: number;
    size?: string;
}

const BannerMenu = () => {
    const [sections, setSections] = useState<Banner[]>([]);

    useEffect(() => {
        setTimeout(() => setSections([
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5
            }
        ]), 1000)
    }, [])

    if (!sections || sections.length === 0) {
        return null;
    }
    return (
        <div>
            {sections.map(({title, imageUrl, id}) => <BannerMenuItem key={id} imageUrl={imageUrl} title={title} />)}
        </div>
    )
}

export default BannerMenu;