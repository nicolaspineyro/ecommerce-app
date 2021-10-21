import { useEffect, useState } from "react";
import { CardsRow } from 'src/components/ui';
import { SHOP_DATA } from './shopData';

interface SectionPreview {
    id: number;
    title: string;
    routeName: string;
    items: Array<Object>;
}

const Shop = () => {
    const [shopContent, setShopContent] = useState<SectionPreview[]>([]);
    useEffect(() => {
        setTimeout(() => setShopContent(SHOP_DATA), 1000)
    }, []);

    if (!shopContent || shopContent.length === 0) {
        return null;
    }

    console.log(shopContent)

    return (
        <div>
            {/* {shopContent.map(({ id, title, items }) => <CardsRow key={id} title={title} items={items} />)} */}
        </div>
    )
}

export default Shop;