import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='px-5 lg:px-44 bg-zinc-800 pt-10 pb-20 text-white'>
                <div className='flex flex-wrap gap-10'>
                    <div className='space-y-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-10 h-10 rounded-full bg-green-500 flex justify-center items-center text-white font-bold'>
                                M
                            </div>
                            <span className='font-bold'>
                                MyCourse.io
                            </span>
                        </div>
                        <input className='py-2 px-2 w-full rounded-md' placeholder='Enter your Email' type="text" />
                    </div>
                    <ul>
                        <li className='text-sm'>Web programming</li>
                        <li className='text-sm'>Mobile programming</li>
                        <li className='text-sm'>java Beginner</li>
                        <li className='text-sm'>PHP Beginner</li>
                    </ul>
                    <ul>
                        <li className='text-sm'>Adobe Illustrator</li>
                        <li className='text-sm'>Adobe Photoshop</li>
                        <li className='text-sm'>Design Logo</li>
                    </ul>
                    <ul>
                        <li className='text-sm'>Writing Course</li>
                        <li className='text-sm'>Photgraphy</li>
                        <li className='text-sm'>video Making</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer