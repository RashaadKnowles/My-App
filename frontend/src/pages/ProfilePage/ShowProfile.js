import React, { useState, useEffect } from "react";
import axios from "axios"
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

function ShowProfile() {
    const [user, token] = useAuth();
    const [profile, setProfile] = useState([]);

    const newProfileInfo = ( )=> {
        axios.get('http://127.0.0.1:5000/api/getuserinfo', {
            headers: {
            Authorization: "Bearer " + token,
    }})
        .then((response) => {
            console.log(response.data)
            setProfile(response.data);
        }).
        catch((error) => {
            console.error(error);
        })

        
    }  

useEffect(() => {
    newProfileInfo()
}, []);
     return( <div>
         
                  <div
                    key={profile.id}>
                    <p>{profile.company_name}</p>
                    <p>{profile.email}</p>
                    <p>{profile.liked_trucks}</p>
                    <p>{profile.phone_number}</p>
                    <p>{profile.tier_level}</p>
                      <Link to="/review">Leave a Review</Link>  
    </div>

     </div>
     
        )
        
                
            
}export default ShowProfile