
const BeAGuestCards = ({ navigateTo, icon, text }) => {
    return (
        <a href={navigateTo} target="blank" 
        className='flex rounded-xl bg-gray-800 px-4 border-gray-600 items-center border-2 gap-2 z-40'>
            {icon}
            <div className='grid'>
                <p className='text-[10px] '>Skilled in</p>
                <p className='text-lg font-medium '>{text}</p>
            </div>
        </a>
    );
}

export default BeAGuestCards;