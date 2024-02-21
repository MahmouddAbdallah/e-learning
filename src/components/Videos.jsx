import axios from 'axios';
import { useEffect, useState } from 'react';
import Video from './Video';

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const fetchVideos = async () => {
        try {
            const { data } = await axios.get('../public/Data/videos.json');
            setVideos(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchVideos();
    }, [])
    return (
        <div className='px-5 lg:px-44'>
            <div className='space-y-5'>
                <div>
                    <h3 className='text-lg font-bold'>Recommended for you</h3>
                    <p className='text-gray-500 text-sm'>Based on your viewing history and preferences.</p>
                </div>
                <div className='grid grid-cols-12 gap-4'>
                    {
                        videos.map(video =>
                            video.section == 'recommended' &&
                            <Video key={video.id} {...video} />
                        )
                    }
                </div>
            </div>
            <div className='space-y-5 py-10'>
                <div>
                    <h3 className='text-lg font-bold'>Trending courses</h3>
                    <p className='text-gray-500 text-sm'>Based on your viewing history and preferences.</p>
                </div>
                <div className='grid grid-cols-12 gap-4'>
                    {
                        videos.map(video =>
                            video.section == 'trend' &&
                            <Video key={video.id} {...video} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Videos