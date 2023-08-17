import React from 'react';
import './LoadingSkeleton.css'

const LoadingSkeleton = () => {
    return (
        <div>
            <div class="card loading">
                <div class="image">

                </div>
                <div class="content">
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>
                    <h4></h4>
                    {/* <div class="description">

                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default LoadingSkeleton;