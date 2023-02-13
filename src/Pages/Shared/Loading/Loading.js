import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-24'>
            <div className=" bg-gradient-to-r from-secondary to-primary animate-spin w-10 h-10 rounded-md "></div>
        </div>
    );
};

export default Loading;