import React, { useState, useEffect } from "react";
import axios from "axios"
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import ReviewList from "./ReviewList";

const CreateReview = () => {
    const [user, token] = useAuth();
    const [comment, setComment] = useState('');

    async function createReview(review) {
        try {
            let response = await axios.post(`http://127.0.0.1:5000/api/postuserreview`, { comment: comment, review_about_id: user.review_about_id }, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            })
            console.log("Thanks for the Review!!!")
        } catch (error) {
            console.log(error.response)
        }

    }
   

    function handleSubmit(e) {
        let newReview = {
            comment: comment,

        }
        e.preventDefault()
        createReview(newReview)
    }

    const handleNewReview = (review) => {

    }


    return (
        <>
        <ReviewList></ReviewList>
        <form onSubmit={handleSubmit}>
            <lablel>Review</lablel>
            <input type="text" value={comment} onChange={(event) => setComment(event.target.value)} data-test="comment"></input>
            <button type="submit" data-testid="submit btn">Submit</button>
          
        </form>
       <Link to= "/reviewlist/:id"> </Link>
    
        </>)
};

export default CreateReview;
