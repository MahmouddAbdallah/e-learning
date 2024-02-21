import { IoSearch } from "react-icons/io5";
import { MdShoppingCart, MdNotifications } from "react-icons/md";


const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between px-5 lg:px-44 py-3 gap-10 lg:gap-52 shadow-sm'>
                <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-full bg-green-500 flex justify-center items-center text-white font-bold'>
                        M
                    </div>
                    <span className='font-bold'>
                        MyCourse.io
                    </span>
                </div>
                <form className='flex-1 relative flex items-center'>
                    <input
                        className='border rounded w-full px-2 py-2'
                        type="text"
                        placeholder="Search courses..." />
                    <div className="absolute right-2">
                        <IoSearch size={20} />
                    </div>
                </form>
                <div className="flex items-center gap-3">
                    <MdShoppingCart size={25} />
                    <MdNotifications size={25} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar