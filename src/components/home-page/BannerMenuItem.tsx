interface BannerMenuItemProps {
    key: number;
    imageUrl: string;
    title: string;
}

const BannerMenuItem = ({ title, imageUrl, key }: BannerMenuItemProps) => (
    <div>
        {title}
        <img src={imageUrl} />
    </div>
)


export default BannerMenuItem