import React from 'react';

const VideoDescription = ({ description }) => (
    <div>
        <h6 className="lg:text-2xl font-bold">Deskripsi Video</h6>
        <p className="text-neutral-2 mt-4">{description}</p>
    </div>
);

export default VideoDescription;
