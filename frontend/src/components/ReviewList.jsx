
import React, { useState, useEffect } from "react";
import axios from "axios"
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';




function ReviewList() {
    const [reviews, setReviews] = useState([]);
    const [user, token] = useAuth();
    const {id} = useParams();
    const [comment, setComment] = useState('');
    //functions for component
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const getReviews = () => {
        axios.get(`http://127.0.0.1:5000/api/review/${id}`, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
            .then((response) => {
                console.log(response.data)
                setReviews(response.data);
            })
            .catch((error) => {
                console.error(error);
                

            });
    }
    function MapList() {
        return (
            <div>
                <h2>Leave Review</h2>
                {reviews.map((review) => (
                    <div key={review.id}>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        );
    }

    function handleSubmit(e) {
        let newReview = {
            comment: comment,

        }
        e.preventDefault()
        (newReview)
    }


    useEffect(() => {
        getReviews()
    }, []);

    //JSX or Visable components
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (

        <div>
            {MapList()}
            <Link to="/review">Leave A Review!</Link>    
        <form onSubmit={handleSubmit}>
            <lablel>Review</lablel>
            <input type="text" value={comment} onChange={(event) => setComment(event.target.value)} data-test="comment"></input>
            <button type="submit" data-testid="submit btn">Submit</button>
          
        </form>
        </div>)

}

export default ReviewList;