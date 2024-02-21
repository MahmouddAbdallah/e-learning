import { useRef, useState } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
const Slider = () => {
    const slides = ['../public/images/slide1.png', '../public/images/slide2.png', '../public/images/slide3.png']
    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleLeft = () => {
        const slider = sliderRef.current;
        if (slider) {
            slider.scrollLeft += slider.clientWidth;
            setCurrentSlide(currentSlide == slides.length - 1 ? slides.length - 1 : currentSlide + 1)
        }
    }
    const handleRight = () => {
        const slider = sliderRef.current;
        if (slider) {
            slider.scrollLeft -= slider.clientWidth;
            setCurrentSlide(currentSlide == 0 ? 0 : currentSlide - 1)
        }
    }
    console.log(currentSlide);
    return (
        <div className='px-5 lg:px-44 py-5 flex flex-col items-center gap-3'>
            <div className='relative flex items-center'>
                <div
                    onClick={handleRight}
                    className=' absolute bg-white/20 py-5 px-1 cursor-pointer'>
                    <MdOutlineKeyboardArrowLeft size={22} fill='white' />
                </div>
                <div ref={sliderRef} className='flex items-center overflow-hidden scroll-smooth'>
                    {slides.map((slide) =>
                        <img key={slide} src={slide} alt="" />
                    )}
                </div>
                <div
                    onClick={handleLeft}
                    className=' absolute bg-white/20 py-5 px-1 right-0 cursor-pointer'>
                    <MdOutlineKeyboardArrowRight size={22} fill='white' />
                </div>
            </div>
            <div className='flex gap-3'>
                {
                    Array(slides.length)
                        .fill()
                        .map((_, i) =>
                            <div key={i} className={`w-2 h-2 rounded-full ${currentSlide == i ? 'bg-green-500' : 'bg-gray-200'} `} />
                        )
                }
            </div>
        </div>
    )
}

export default Slider