import { useEffect, useState } from "react";
import { CardsRow } from 'src/components/ui';
import { SHOP_DATA } from 'src/utils/shopData'

interface SectionPreview {
    id: number;
    title: string;
    routeName: string;
    items: Array<any>;
}

const Shop = () => {
    const [shopContent, setShopContent] = useState<SectionPreview[]>([]);
    useEffect(() => {
        setTimeout(() => setShopContent(SHOP_DATA), 1000)
    }, []);

    if (!shopContent || shopContent.length === 0) {
        return null;
    }
    return (
        <div>
            <h1>Collections</h1>
            {shopContent.map(({ id, title, items }) => {
                const cardsProps = {
                    key: id,
                    title,
                    items
                }
                return (<CardsRow {...cardsProps} />)
            })}
        </div>
    )
}

export default Shop;