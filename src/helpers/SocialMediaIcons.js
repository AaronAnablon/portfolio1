import Image from "next/image";
import Link from "next/link";


const SocialMediaIcons = ({ navigateTo, srcImage, alt, width, height }) => {
    return (
        <>
            <a href={navigateTo} className='z-30'>
                <Image height={height} width={width} src={srcImage} alt={alt} />
            </a>
        </>
    );
}

export default SocialMediaIcons;