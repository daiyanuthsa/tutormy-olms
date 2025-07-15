import React from 'react';

const VideoPlayer = () => (
    <div className="aspect-video bg-black rounded-xl overflow-hidden">
        <video controls className="w-full h-full">
            <source src="/video/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
);

export default VideoPlayer;
