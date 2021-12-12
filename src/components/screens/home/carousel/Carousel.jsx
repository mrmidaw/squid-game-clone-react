import React, { useState } from 'react';
import { Controls } from './Controls';
import { VideosLine } from './videosLine/VideosLine';

import t1Img from '../../../../assets/images/thumbnails/thumbnail-1.jpg';
import t2Img from '../../../../assets/images/thumbnails/thumbnail-2.jpeg';
import t3Img from '../../../../assets/images/thumbnails/thumbnail-3.jpeg';
import t4Img from '../../../../assets/images/thumbnails/thumbnail-4.jpeg';
import t5Img from '../../../../assets/images/thumbnails/thumbnail-5.jpeg';

const initialSlides = [
    {
        _id: 'wef2we',
        thumbnailPath: t1Img,
        videoUrl: 'https://www.youtube.com/watch?v=oqxAJKy0ii4',
    },
    {
        _id: '123fqw',
        thumbnailPath: t2Img,
        videoUrl: 'https://www.youtube.com/watch?v=SobEZfJWCZ0',
    },
    {
        _id: '43gsw',
        thumbnailPath: t3Img,
        videoUrl: 'https://www.youtube.com/watch?v=Rh6Tk59vg_Y',
    },
    {
        _id: '53uyi5k',
        thumbnailPath: t4Img,
        videoUrl: 'https://www.youtube.com/watch?v=_yutqKodHcw',
    },
    {
        _id: 'w*#fgr',
        thumbnailPath: t5Img,
        videoUrl: 'https://www.youtube.com/watch?v=lJ-74glXQ4I',
    },
];

export const Carousel = () => {
    const [slides] = useState(initialSlides);
    const [currentIdx, setCurrentIdx] = useState(0);

    return (
        <div className='mt-24'>
            <div className='flex items-center mb-5'>
                <div className='text-white opacity-90 text-lg font-medium mr-20'>
                    1 series
                </div>
                <Controls slidesLength={slides.length} setCurrentIdx={setCurrentIdx} currentIdx={currentIdx} />
            </div>
            <VideosLine slides={slides} setCurrentIdx={setCurrentIdx} currentIdx={currentIdx} />
        </div>
    );
};