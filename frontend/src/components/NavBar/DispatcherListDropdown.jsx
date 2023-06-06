import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function DispatcherList() {
    const [list, setList] = useState([]); 


    const getDispatcherNames = () => {
        axios.get('http://127.0.0.1:5000/api/dispatcherlist')
        .then((response) => {
            console.log(response.data)
            setList(response.data);
        }).
        catch((error) => {
            console.error(error);
        })
    }

    function ListOfDispatchers() {
        return (
            <div>
                <h2>List of Dispatchers</h2>
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
        getDispatcherNames()
    }, []);

    return (
        <div>
            {ListOfDispatchers()}
            <Link to="/dispatcherlist">Dispatcher's In Server</Link>    
        
        </div>)
}
export default DispatcherList