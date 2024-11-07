import { Container } from "./styles";
import ShoulderShot from "../../assets/ShoulderShot.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import cIcon from "../../assets/c.svg";
import CPPIcon from "../../assets/cpp.svg";
import MatplotlibIcon from "../../assets/matplotlib.svg";
import MicrosoftsqlserverIcon from "../../assets/microsoft-sql-server.svg";
import SqlIcon from "../../assets/mysql-icon.svg";
import NumpyIcon from "../../assets/numpy.svg";
import PythonIcon from "../../assets/python.svg";
import PytorchIcon from "../../assets/pytorch.svg";
import TensorflowIcon from "../../assets/tensorflow.svg";
import AzureIcon from "../../assets/azure.svg";
import JavaIcon from "../../assets/java.svg";




export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hello! My name is Joban, and I'm a second year CSE student at the University of Washington Seattle, passionate about using my programming abilites and CS knowledge to radically turn the advent of technology into social change.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I'm proficient with a wide range of languages, tools, frameworks, libraries, and APIs, from Java to SQL++ to PyTorch</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            If you're interested into talking about cool opportunities, from projects to internships to research positions to career paths, lets talk!</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={JavaIcon} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInLeft" delay={0.19 * 1000}>
              <img src={cIcon} alt="C" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInLeft" delay={0.19 * 1000}>
              <img src={CPPIcon} alt="CPP" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInLeft" delay={0.19 * 1000}>
              <img src={AzureIcon} alt="Azure" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInRight" delay={0.19 * 1000}>
              <img src={MatplotlibIcon} alt="Matplotlib" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInRight" delay={0.19 * 1000}>
              <img src={MicrosoftsqlserverIcon} alt="Microsoft-Sequel-Server" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInRight" delay={0.19 * 1000}>
              <img src={SqlIcon} alt="SQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInDown" delay={0.19 * 1000}>
              <img src={NumpyIcon} alt="Numpy" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInDown" delay={0.19 * 1000}>
              <img src={PythonIcon} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInDown" delay={0.19 * 1000}>
              <img src={PytorchIcon} alt="PyTorch" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={TensorflowIcon} alt="TensorFlow" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={ShoulderShot} alt="Joban Mand" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
