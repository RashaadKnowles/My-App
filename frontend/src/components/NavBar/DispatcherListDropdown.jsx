import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import  "./DispatcherListDropdown.css"


function DispatcherList() {
    const [list, setList] = useState([]); 

    <link rel="stylesheet" type='text/css' href= "styles/styles.css" ></link>
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
            <div >
                <h2>List of Dispatchers</h2>
                {list.map((user) => (
                    <div 
                    
                    key={user.id}>
                    <p className="dispatcherlist">{user.company_name}</p>
                    <Link to = {`/showprofile2/${user.id}`}> 
                    <p className="dispatcherlist">{user.email}</p>
                    <div key= {user.id}>  </div>
                      </Link>
                    
                    <p className="dispatcherlist">{user.is_owner_operator}</p>
                    <p className="dispatcherlist">{user.liked_trucks}</p>
                    <p className="dispatcherlist">{user.phone_number}</p>
                    <p className="dispatcherlist">{user.tier_level}</p>
                
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