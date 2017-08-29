import React, { Component } from 'react';
import './App.css';
import resume from "./resume.json";
import Experience from "./experience";
import Project from "./projects";
import Skills from "./skills";
import Education from "./education";
import Languages from './languages';
class App extends Component {
  renderExperiences(){
    var array=[];
    resume.experiences.map((item,i)=>{
      array.push(<Experience item={item} key={i} />)
    });
    return array;
  }
 renderProjects(){
   var array=[];
   resume.projects.map((item,i)=>{
     array.push(<Project item={item} key={i}/>)
   });
   return array;
 }

renderSkills(){
  var array=[];
  resume.skills.map((item,i)=>{
  array.push(<Skills item={item} key={i} />)
});
  return array;
}
renderEducation(){
  var array=[];
  resume.education.map((item,i)=>{
  array.push(<Education item={item} key={i} />)
});
  return array;
}
renderLanguages(){
  var array=[];
  resume.languages.map((item,i)=>{
  array.push(<Languages item={item} key={i} />)
});
  return array;
}
renderInterests(){
  var array=[];
  resume.interests.map((item,i)=>{
  array.push(<li key={i}>{item}</li>)

});

  return array;


}
  render() {
  return (
      <div className="wrapper">
          <div className="sidebar-wrapper">
              <div className="profile-container">
                  <img className="profile" src={resume.image} alt="" />
                  <h1 className="name">{resume.name}</h1>
                  <h3 className="tagline">{resume.what}</h3>
              </div>

              <div className="contact-container container-block">
                  <ul className="list-unstyled contact-list">
                      <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                      <li className="phone"><i className="fa fa-phone"></i><a href="tel:073-886-98116">{resume.phone}</a></li>
                      <li className="linkedin"><i className="fa fa-linkedin"></i><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>
                      <li className="github"><i className="fa fa-github"></i><a href={resume.github} target="_blank">{resume.github}</a></li>
                      <li className="twitter"><i className="fa fa-twitter"></i><a href={resume.twitterURL} target="_blank">{resume.twitter}</a></li>
                  </ul>
              </div>
              <div className="education-container container-block">
                  <h2 className="container-block-title">Education</h2>
                  <div>{this.renderEducation()}</div>
                </div>

              <div className="languages-container container-block">
                  <h2 className="container-block-title">Languages</h2>
                  <div>{this.renderLanguages()}</div>
              </div>

              <div className="interests-container container-block">
                  <h2 className="container-block-title">Interests</h2>
                  <ul className='list-unstyled interests-list'>
                    {this.renderInterests()}
                  </ul>

              </div>

          </div>

          <div className="main-wrapper">

              <section className="section summary-section">
                  <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                  <div className="summary">
                      <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                  </div>
              </section>

              <section className="section experiences-section">
                  <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
                     <div>{this.renderExperiences()}</div>
              </section>

              <section className="section projects-section">
                  <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                    <div>{this.renderProjects()}</div>
              </section>

              <section className="skills-section section">
                  <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                  <div className='skillset'>{this.renderSkills()}



                  </div>

              </section>

          </div>
      </div>
    );
  }
}

export default App;
