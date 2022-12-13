import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from './AuthProvider';
import MyReviewDetails from './MyReviewDetails';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/useTitle';

const Myreview = () => {
    useTitle("Myreview");
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const notify = () => toast("Succesfully Deleted");

    useEffect(() => {
        fetch(`https://photography-server-side.vercel.app/myreview/${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setData(data);
            })
            .catch(er => console.error(er));
    }, [user?.uid]);

    const handleDelete = id => {
        console.log("id clicked",id);
        const proceed = window.confirm('Are you sure, you want to delete the review');
        console.log(data);
        if (proceed) {
            fetch(`https://photography-server-side.vercel.app/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(newData => {
                    if (newData.deletedCount > 0) {
                        notify();
                        const remaining = data.filter(review => review._id !== id);
                        setData(remaining);
                        console.log(remaining);
                    }
                })
        }
    }
    
    
    //Pixel problem fixed with 510px min Height
    return (
        <div style={{minHeight:"510px"}}>  
        <ToastContainer />
        {data?.length?

        data.map(detail => <MyReviewDetails handleDelete={handleDelete}
            detail={detail}></MyReviewDetails>)
        : 
        <h2  className='text-center mt-2'>No reviews were added</h2> }
            
        </div>
    );
};

export default Myreview;