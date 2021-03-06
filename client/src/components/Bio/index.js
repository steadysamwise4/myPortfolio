import React from 'react';
import familyImage from "../../assets/images/family.jpg"

function About() {
  return (
    <section className="container">
      <h1>Bio</h1>
      <img
        src={familyImage}
        className="my-2"
        style={{ width: "100% " }}
        alt="my family"
      />
      <h6>
        Full stack capable web developer with unconventional background,
        learning new things daily, and loving it. Nearing completion of the
        coding bootcamp at The University of Kansas. Newly developed skills
        include JavaScript, CSS, mySQL, MongoDB, Mongoose, Node, Express,
        Sequelize, and React. Known for being very thoughtful, practical, and
        meticulous. Passionate about solving problems and excited to stretch the
        limits of my abilities while contributing my efforts in the service of
        an excellent future employer. In my previous career, I was very
        instrumental in streamlining processes in order to increase factory
        production many fold in the area I was lead over. Recently, I worked on
        a team of five to develop a full stack travel blog site including
        features where users could create an account, post images and
        information about their trips, and view others’ posts. We were able to
        accomplish much and learn a great amount working together in just a few
        weeks of time. I’m very excited to continue gaining more knowledge,
        learning and adopting best practices, and further honing my skills as a
        member of a fast-paced, quality-driven team.
      </h6>
    </section>
  );
}

export default About;