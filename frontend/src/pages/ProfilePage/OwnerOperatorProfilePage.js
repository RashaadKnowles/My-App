import React, { useState } from 'react';

function OOProfilePage() {
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [bio, setBio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tierLevel, setTierLevel] = useState('');
  const [email, setEmail] = useState('');
  const [trucksOperated, setTrucksOperated] = useState('');
  const [likedCities, setLikedCities] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the profile info, like send it to a server
  };

  return (
    <div>
      <h1>Owner Operator Profile</h1>
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
          <input type="text" value={trucksOperated} onChange={(event) => setTrucksOperated(event.target.value)} />
        </label>
        <label>
          Liked Cities:
          <input type="text" value={likedCities} onChange={(event) => setLikedCities(event.target.value)} />
        </label>
        <button type="submit">Save Profile</button>
        <button tpye="submit">Private</button>
        
      </form>
    </div>
  );
}

export default OOProfilePage;