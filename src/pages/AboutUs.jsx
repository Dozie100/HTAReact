const AboutUs = () => {
  return (
    <div className="house">
      <div className="cont1">
        <div className="bio">
          <h3 className="int">
            I am Self-motivated Edtech professional and Web Developer with over
            a decade of teaching experience. Passionate about working on
            multiple projects and mentorship programmes, demonstrating a high
            level of commitment and dedication to education and technology.
          </h3>
        </div>
        {/* <div class="image">
                <img class="img" src="../images/undraw_developer_activity_re_39tg.svg" alt="dev guy">
            </div> */}

        <h1 className="ab">Key Qualifications</h1>
        <section className="sec2">
          <div className="bio2">
            <div className="cont2">
              <h1 className="teach">Teaching Experience</h1>
              <h3>
                {" "}
                Over a decade years of experience in educating students and
                professionals.
              </h3>
            </div>
            {/* <div class="image2">
                    <img class="img" src="../images/undraw_professor_re_mj1s.svg" alt="professor">
                </div> */}
          </div>
        </section>

        <section className="sec3">
          <div className="bio3">
            {/* <div>
                    <img class="img2" src="../images/undraw_web_developer_re_h7ie.svg" alt=""></div>
                <div> */}
            <h1 className="web">Web Development Expertis</h1>
            <h3>
              Proficient in various web development languages, frameworks, and
              tools, with a track record of delivering high-quality projects.
            </h3>
          </div>
        </section>
        <section className="sec4">
          <div className="bio4">
            <div className="cont4">
              <h1 className="ment">Mentorship</h1>
              <h3>
                {" "}
                Experienced in guiding and mentoring individuals, fostering
                growth and development in their web development careers.{" "}
              </h3>
            </div>
            {/* <div class="image4">
                    <img class="img2" src="../images/undraw_engineering_team_a7n2.svg" alt="">
                </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs