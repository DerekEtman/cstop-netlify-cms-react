import React from 'react';
import { Link } from 'react-router-dom';
import Content from './Content';
import './Cta.sass';

export default function Cta(props) {
  const {title,body,buttonText} = props;
  // console.log(props)


  const titleTemp = "Minimize the risk of Covid-19 on your projects";
  const bodyTemp = "With our informed leaders and trained Covid-19 teams, You can minimize the risk of bringing an infection home.";
  const buttonTextTemp = "Ask Our Team";

  return (
    <>
      <div className="container">
        <div className="cta-wrap" >
          {/* {backgroundImage && <BackgroundImage src={backgroundImage} opacity="0.5" />} */}
          <div className="cta-text">
            <div className="heading-jumbo-small">
              {title? title: titleTemp}
              <br />
            </div>
            <div className="paragraph-bigger cc-bigger-light">
              <Content source={body? body : bodyTemp} />
              
              <br />
            </div>
          </div>
		  
          <Link to="/quote" className="Button">
            <div>{buttonText? buttonText : buttonTextTemp}</div>
          </Link>
        </div>
      </div>
    </>
  )
}
