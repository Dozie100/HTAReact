import "../assets/styles/home.css"
import "../assets/styles/App.css"

const Home = () => {
  return (
    <div className="homie">
      <section className="content">
        <div>
          <h1 className="int">Two Passions, one purpose</h1>
        </div>
        <div>
          <h3>
            Welcome! I am Chidozie, A Tattoo Artists And A Software Engineer
            Crafting Tech Solutions With Precision And An Edtech Advocate Driven
            To Innovate In Education. Explore How I Bring Both Disciplines
            Together On My Journey.
          </h3>
        </div>
      </section>

      <section className="sec1">
        <div className="cont1">
          <div className="bio">
            <h3 className="int">
              I am Self-motivated Edtech professional and Web Developer with
              over a decade of teaching experience. Passionate about working on
              multiple projects and mentorship programmes, demonstrating a high
              level of commitment and dedication to education and technology.
            </h3>
          </div>
          {/* <div class="image">
                <img class="img" src="../images/undraw_developer_activity_re_39tg.svg" alt="dev guy">
            </div> */}
        </div>
      </section>
      <div className="more">
        <h1 className="mid">My Skills</h1>
        <h2>Languages</h2>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
        </ul>

        <h2>Frameworks</h2>
        <ul>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
        </ul>

        <h2>Productivity Tools</h2>
        <ul>
          <li>Slack</li>
          <li>Jira</li>
          <li>ClickUp</li>
          <li>Microsoft Teams</li>
        </ul>

        <h2>Hosting Platforms</h2>
        <ul>
          <li>Vercel</li>
          <li>Netlify</li>
          <li>Heroku</li>
        </ul>

        <h2>Version Control</h2>
        <ul>
          <li>GitHub</li>
          <li>GitLab</li>
          <li>Bitbucket</li>
        </ul>

        <h2>Content Management System</h2>
        <ul>
          <li>Contentful</li>
          <li>DatoCMS</li>
          <li>Strapi</li>
          <li>Sanity</li>
        </ul>
      </div>
    </div>
  );
}

export default Home