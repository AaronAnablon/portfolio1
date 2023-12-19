import Image from "next/image";


const StoriesCards = ({ navigateTo, srcImage, width, height, alt }) => {
    return (
        <a href={navigateTo} className="z-30">
            <Image src={srcImage} width={width} height={height} alt={alt} />
        </a>
    );
}

export default StoriesCards;