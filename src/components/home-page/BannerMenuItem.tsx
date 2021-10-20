import 'src/styles/banner-menu-item.scss'

interface BannerMenuItemProps {
    key: number;
    imageUrl: string;
    title: string;
    size?: string;
}

const BannerMenuItem = ({ title, imageUrl, size }: BannerMenuItemProps) => {
    console.log(size)

    return (
        <div className={`item-container`}>
            <img src={imageUrl} className='background-image'/>
            <div className='item-content'>
                <h1>{title.toUpperCase()}</h1>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}


export default BannerMenuItem