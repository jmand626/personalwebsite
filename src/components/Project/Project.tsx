import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/jmand626/PyTorchMLEngine-Custom-Dataset-Project" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Custom PyTorch Dataset Loader and Convolutional Neural Network</h3>
              <p> A fundamentals-focused project working with the built-in FGVC Dataset and a basic implementation of the TinyVGG computer vision detection model. This CNN model and training engine form a robust pipeline that allows for flexible experimentation with different architectures, hyperparameters, and datasets. This project combines state-of-the-art deep learning techniques with practical utilities like visualization and numerical operations, providing an excellent framework for tackling a variety of computer vision challenges. </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>Numpy</li> <li>Matplotlib</li> </ul> </footer>
          </div>

          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/jmand626/Flashcard-App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Flashcard App</h3>
              <p>
              The Flashcard App is a feature-rich, interactive application built using a modern tech stack, including React.js, TypeScript, JavaScript, and Node.js. Designed to help high school and university students enhance their learning experience, the app allows users to create, manage, and share customizable flashcard decks, with added features to track their progress over time.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>

          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/jmand626/C-Memory-Allocator" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>C Memory Allocator</h3>
              <p>
              The Custom Memory Allocator project was developed using C, Bash, and UNIX to create a slightly optimized version of the standard malloc function. This project focuses on understanding and improving memory management in low-level programming, and gave hands-on experience with the intricacies of computer architecture and system-level memory operations.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>C</li>
                <li>Bash</li>
                <li>Unix</li>
              </ul>
            </footer>
          </div>

      </div>
    </Container>
  );
}