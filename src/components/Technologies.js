import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3Alt, faJsSquare, faNodeJs, faSass, faLess, faBootstrap, faGulp, faAws, faGit, faNpm } from "@fortawesome/free-brands-svg-icons"

function Technologies() {
  const main = [
    {
      icon: faHtml5,
      text: "HTML 5"
    }, {
      icon: faCss3Alt,
      text: "CSS 3"
    }, {
      icon: faJsSquare,
      text: "ES 6"
    }
  ];
  const secondary = [
    {
      icon: faReact,
      text: "React"
    }, {
      icon: faNodeJs,
      text: "Node"
    }, {
      icon: faSass,
      text: "SCSS"
    }, {
      icon: faLess,
      text: "Less"
    }, {
      icon: faAws,
      text: "AWS"
    }, {
      icon: faGit,
      text: "Git"
    }, {
      icon: faNpm,
      text: "NPM"
    }, {
      icon: faGulp,
      text: "Gulp"
    }, {
      icon: faBootstrap,
      text: "Bootstrap"
    }
    // webpack, pug, newrelic, REST, ContentStack
  ];

  return (
    <div className="Technologies">
      <div className="Technologies-content">
        <h1 className="Technologies-heading">Technologies</h1>
        <div className="Technologies-icons Technologies-icons--main">
          {main.map(icon => {
            return (
              <div className="Technologies-iconContainer">
                <div className="Technologies-icon Technologies-icon--main">
                  <FontAwesomeIcon icon={icon.icon} />
                </div>
                <p className="Technologies-iconText">
                  {icon.text}
                </p>
              </div>
            )
          })}
        </div>
        <div className="Technologies-icons Technologies-icons--secondary">
          {secondary.map(icon => {
            return (
              <div className="Technologies-iconContainer">
                <div className="Technologies-icon Technologies-icon--secondary">
                  <FontAwesomeIcon icon={icon.icon} />
                </div>
                <p className="Technologies-iconText">
                  {icon.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Technologies;