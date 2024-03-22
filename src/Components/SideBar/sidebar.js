import React, { useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faMobile,faCalendarDay,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineLinkedin  } from "react-icons/ai";
const Sidebar = ({userData}) => {

  
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Render nothing if userData is null
  if (!userData) {
    return null;
  }
  const {social_handles} = userData.user;

  const iconMap = {
    Facebook: BsFacebook,
    Twitter: AiOutlineTwitter,
    Instagram: AiOutlineInstagram,
    LinkedIn: AiOutlineLinkedin 
  };


  return (
    <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`} data-sidebar>

      <div class="sidebar-info">

        <figure class="avatar-box">
          <img src={userData.user.about.avatar.url} alt="Richard hanrick" style={{width:"80"}} />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Richard hanrick">{userData.user.about.name}</h1>

          <p class="title">{userData.user.about.title}</p>
        </div>

        <button class="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div class="sidebar-info_more">

        <div class="separator"></div>

        <ul class="contacts-list">

          <li class="contact-item">

            <div class="icon-box">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffdb70" }} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>

              <a href="mailto:richard@example.com" class="contact-link">{userData.user.email}</a>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
            <FontAwesomeIcon icon={faMobile} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+12133522795" class="contact-link">{userData.user.about.phoneNumber}</a>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
            <FontAwesomeIcon icon={faCalendarDay} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Birthday</p>

              <time datetime="1982-06-23">June 23, 1982</time>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
            <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>{userData.user.about.address}</address>
            </div>

          </li>

        </ul>

        <div class="separator"></div>

        <ul class="social-list">

        {social_handles.map((handle, index) => {
        const IconComponent = iconMap[handle.platform]; // Get the corresponding icon component

        return (
          <li className="social-item" key={index}>
            <a href={handle.url} className="social-link">
              <IconComponent style={{ color: "#8a8a8a" }} />
            </a>
          </li>
        );
      })}

        </ul>

      </div>

    </aside>

  )
}

export default Sidebar