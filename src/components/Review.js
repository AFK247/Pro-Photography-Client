import React from 'react';

const Review = ({feed}) => {
    //Feedback
    const {image,customer,review}=feed;
    return (
        <div  className='col mt-4 '>
            <div style={{backgroundColor:"#fceff8",fontStyle:"italic"}} className='border border-primary rounded-4 p-3'>
            <div className='d-flex '>
            <img style={{height:"30px"}} className='img-fluid rounded-3 me-3' src={image} alt="" />
            <h3>{customer}</h3>
            </div>
            
            <ul class="list-inline small">
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
                    </ul>
            <p >"{review}"</p>
            </div>
        </div>
    );
};

export default Review;