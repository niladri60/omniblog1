import React from 'react'
import "./about.css"
import BottomBar from "../../components/bottomBar/BottomBar";
export default function About() {
  return (
    <>
    <div className="about-page">
      
    <h1>About Us</h1>
    <div className='aboutContent'>
    <p>
      We are passionate about sharing our knowledge and experiences with you.
      Our goal is to provide valuable content on a wide range of topics.
    </p>
    <p>
      Whether you're interested in technology, travel, food, or anything in
      between, you'll find something here that piques your interest.
    </p>
    <p>
      Our team of writers is dedicated to delivering high-quality articles,
      guides, and stories that inform, inspire, and entertain.
    </p>
    <p>
      Thank you for visiting our blog. We hope you enjoy reading our posts as
      much as we enjoy creating them.
    </p>
    <p>Happy reading!</p>
    </div>
    
  </div>
  <BottomBar/>
  </>
  )
}
