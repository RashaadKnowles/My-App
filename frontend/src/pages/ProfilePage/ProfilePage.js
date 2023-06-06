import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

function ProfilePage() {
  const [profilePic, setProfilePic] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [bio, setBio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tierLevel, setTierLevel] = useState('');
  const [email, setEmail] = useState('');
  const [likedTrucks, setLikedTrucks] = useState('');
  const [name, setName] = useState('');
  const [user,token] = useAuth();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    async function newProfile() {
      try {
          let response = await axios.put('http://127.0.0.1:5000/api/getuserinfo', {name: name, profilePic: profilePic,company_name: companyName,bio: bio,phone_number: phoneNumber,tier_level: tierLevel,email: email,liked_trucks: likedTrucks},{
              headers: {
                  Authorization: "Bearer " + token,
              }
          })
          console.log(response.data)
          console.log("Updated Profile!!")
      } catch (error) {
          console.log(error)
      }

  }
  
   newProfile()
    } 

  ;

  return (
    <div>
      <h1> Profile Info </h1>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Profile Picture:
          <input type="file" value={profilePic} onChange={(event) => setProfilePic(event.target.value)} />
        </label>
        <label>
          Company Name:
          <input type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
        </label>
        <label>
          Bio:
          <textarea value={bio} onChange={(event) => setBio(event.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        </label>
        <label>
          Tier Level:
          <input type="number" value={tierLevel} onChange={(event) => setTierLevel(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Liked Trucks:
          <input type="text" value={likedTrucks} onChange={(event) => setLikedTrucks(event.target.value)} />
        </label>
        <button type="submit">Save Profile</button>
        <button tpye="submit">Private</button>
    
      </form>
    </div>
  );
}

export default ProfilePage;