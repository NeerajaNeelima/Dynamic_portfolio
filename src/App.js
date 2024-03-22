// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/SideBar/sidebar';
import Maincontent from './Components/MainContent/maincontent';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        const data = await response.json();
        setUserData(data);
        await console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
   <main>
     <Sidebar userData={userData} />
      <Maincontent userData={userData} />
    
  </main>
 
  );
}

export default App;
