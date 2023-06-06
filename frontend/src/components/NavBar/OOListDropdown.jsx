import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function OOList() {
    const [list, setList] = useState([]); 


    const getOONames = () => {
        axios.get('http://127.0.0.1:5000/api/pulloolist')
        .then((response) => {
            console.log(response.data)
            setList(response.data);
        }).
        catch((error) => {
            console.error(error);
        })
    }

    function ListOfOO() {
        return (
            <div>
                <h2>List of Owner Operators</h2>
                {list.map((user) => (
                    <div 
                    key={user.id}>
                    <p>{user.company_name}</p>
                    <Link to = {`/showprofile2/${user.id}`}> 
                    <p>{user.email}</p>
                    <div key= {user.id}>  </div>
                      </Link>
                    
                    <p>{user.is_owner_operator}</p>
                    <p>{user.liked_trucks}</p>
                    <p>{user.phone_number}</p>
                    <p>{user.tier_level}</p>
                
                    </div>
                ))}
            </div>
        );
    }
    useEffect(() => {
        getOONames()
    }, []);

    return (
        <div>
            {ListOfOO()}
            <Link to="/oolist">OO in Server</Link>    
        
        </div>)
}
export default OOList