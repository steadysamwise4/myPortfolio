import React from 'react';
import familyImage from '../../assets/images/family.jpg';

function About() {
  return (
    <section className='container'>
      <h1>Bio</h1>
      <img
        src={familyImage}
        className='my-2'
        style={{ width: '100% ' }}
        alt='my family'
      />
      <h6>
        Full stack capable web developer with unconventional background,
        learning new things daily, and loving it. Since completing the coding
        bootcamp at The University of Kansas in March of 2022, I have spent the
        last two plus years working as a full stack developer/junior software
        engineer at Big Blue Swim School. Newly developed skills include
        TypeScript, Vue.js, AngularJs, NestJS, TypeOrm, postgreSQL, mySQL,
        Node.js, Express.js, Flutter/Dart, and Sequelize. Known for being very
        thoughtful, practical, and meticulous. Passionate about solving problems
        and excited to stretch the limits of my abilities while contributing my
        efforts in the service of an excellent future employer. At Big Blue, I
        was instrumental in pushing forward on a very large (multi-year) and
        complicated backend service update. This included countless manual tests
        and bugfixes, as well as design and implementation of major software
        features. I also worked to improve the Big Blue mobile app using the
        Flutter framework. I worked on a small team, and was able to learn and
        work effectively with each member, carefully respecting their time while
        seeking assistance or collaboration. My experience and training are
        mostly JavaScript based, but I am very willing to dive into any
        programming language confidently. I’m very excited to continue gaining
        more knowledge, learning and adopting best practices, and further honing
        my skills as a member of a fast-paced, quality-driven team.
      </h6>
    </section>
  );
}

export default About;
