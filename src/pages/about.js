import * as React from 'react';
import Nav from '../components/nav';
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <Nav></Nav>

      <h1>About Me</h1>

      <p>Lets Go Mets. Ravens Flock. Go Sharks Chomp Chomp.</p>

      <img src="https://i.pinimg.com/originals/7a/55/d7/7a55d7f53fee65b86f3edbd50e42217e.png" alt="" height="150"/>
      <img src="https://logos-world.net/wp-content/uploads/2020/05/Baltimore-Ravens-logo.png" alt="" height="150"/>
      <img src="https://cms.nhl.bamgrid.com/images/assets/binary/301041748/binary-file/file.svg" alt="" height="150" />
      
      <StaticImage alt="kitten" src="https://placekitten.com/800/600"/>
    </main>
  )
}

export default AboutPage;