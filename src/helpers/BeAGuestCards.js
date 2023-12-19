import Image from "next/image";
import Link from "next/link";


const BeAGuestCards = ({ navigateTo, imageSource, text }) => {
    return (
        <a href={navigateTo} className='relative z-30'>
            <div className='absolute left-11 relative'>
                <p className='text-[10px] absolute -top-1'>Listen on</p>
                <p className='text-lg font-medium absolute -bottom-10'>{text}</p>
            </div>
            <Image src={imageSource} width={200} height={38} alt={text} />
        </a>
    );
}

export default BeAGuestCards;