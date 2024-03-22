import React from 'react'
import { BsBook } from "react-icons/bs";
const Resume = ({userData}) => {

  const { timeline } = userData.user;
  const {skills} = userData.user;

  // Helper function to format dates
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
<article className='resume active' data-page="resume">

   <header>
   <h2 class="h2 article-title">Resume</h2>
    </header>

    <section class="timeline">

      <div class="title-wrapper">
        <div class="icon-box">
        <BsBook style={{color: "hsl(45, 100%, 72%)"}}/>
        </div>

        <h3 class="h3">Education</h3>
      </div>

      <ol class="timeline-list">

        <li class="timeline-item">

          <h4 class="h4 timeline-item-title">University school of the arts</h4>

          <span>2007 — 2008</span>

          <p class="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
            quas molestias
            exceptur.
          </p>

        </li>

        <li class="timeline-item">

          <h4 class="h4 timeline-item-title">New york academy of art</h4>

          <span>2006 — 2007</span>

          <p class="timeline-text">
            Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
            omnis..
          </p>

        </li>

        <li class="timeline-item">

          <h4 class="h4 timeline-item-title">High school of art and design</h4>

          <span>2002 — 2004</span>

          <p class="timeline-text">
            Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
            magni dolores
            eos.
          </p>

        </li>

      </ol>

    </section>

    <section class="timeline">

      <div class="title-wrapper">
        <div class="icon-box">
        <BsBook style={{color: "hsl(45, 100%, 72%)"}}/>
        </div>

        <h3 class="h3">Experience</h3>
      </div>

      <ol className="timeline-list">
          {timeline?.map((item, index) => ( // Use optional chaining here
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.jobTitle} at {item.company_name}</h4>
              <span>{formatDate(item.startDate)} — {formatDate(item.endDate)}</span>
              <p className="timeline-text">{item.summary}</p>
              <ul className='timeline-text'>
                {item.bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        {skills?.map((item, index) => (
          <li className="skills-item" key={index}>
            <div className="title-wrapper">
              <h5 className="h5">{item.name}</h5>
              <data value={item.percentage}>{item.percentage}%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: `${item.percentage}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </article>
  )
}

export default Resume