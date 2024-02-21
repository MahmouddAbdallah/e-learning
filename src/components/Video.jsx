import { MdOutlinePerson, MdOutlineStarPurple500 } from "react-icons/md";
import Proptypes from 'prop-types'


const Video = ({ image, title, author, description, rating, price, oldPrice }) => {
    return (
        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3' >
            <div>
                <img className='rounded-md' src={image} alt="" />
            </div>
            <div>
                <h4 className='font-semibold'>{title}</h4>
                <div className='inline-flex items-center gap-3 '>
                    <MdOutlinePerson size={22} />
                    <span className='text-xs font-semibold text-green-600'>{author}</span>
                </div>
                <div>
                    <span className='text-sm'>
                        {description}
                    </span>
                </div>
                <div className='flex gap-1'>
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => <MdOutlineStarPurple500 key={i} className='text-yellow-400' />)
                    }
                </div>
                <div className='space-x-2'>
                    <span className='font-bold text-sm'>
                        ${price}
                    </span>
                    <span className='text-sm relative text-gray-400 before:content-[""] before:w-full before:h-[1.5px] before:bg-gray-400 before:absolute before:mt-3'>
                        {oldPrice}
                    </span>
                </div>
            </div>
        </div>
    )
}
Video.propTypes = {
    image: Proptypes.string,
    title: Proptypes.string,
    author: Proptypes.string,
    description: Proptypes.string,
    rating: Proptypes.number,
    price: Proptypes.string,
    oldPrice: Proptypes.string
}

export default Video