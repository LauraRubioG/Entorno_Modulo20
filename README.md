<div align="center">
  <h1 style="color: #ffafcc;">Furry Monster Creator</h1>
  <p style="color: #cdb4db;"><i>A delightful, interactive web application to design and adopt your own furry monster.</i></p>

  <img src="https://img.shields.io/badge/HTML5-ffc8dd?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-ffafcc?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-bde0fe?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript" />
  <img src="https://img.shields.io/badge/AI_Assisted-a2d2ff?style=for-the-badge" alt="AI Assisted" />
</div>

<hr style="border: 1px solid #ffc8dd;">

<h2 style="color: #ffafcc;">Project Overview</h2>

This project was developed as part of the <b>Assignment: AI-Assisted Development and Git Mastery</b>. The main objective was not only to create a functional, aesthetically pleasing, and highly interactive web application but also to demonstrate absolute proficiency in utilizing Generative AI as a collaborative programming partner. Furthermore, it serves as a practical showcase of mastering version control through the Git Command Line Interface (CLI). 

By building a custom Furry Monster Creator, this project bridges the gap between creative front-end web development and strict software engineering practices.

<h2 style="color: #ffafcc;">Phase 1: The AI-Pair Program</h2>

For this phase, I conceptualized and built a dynamic web application utilizing Vanilla Web Technologies (HTML, CSS, and JavaScript). The application allows users to visually assemble a creature by toggling various accessories, selecting limb types, and adjusting the core color while preserving the original artwork's texture.

<b>Key Features:</b>
<ul>
  <li><b>Interactive UI:</b> A start screen with seamless transitions to the main laboratory.</li>
  <li><b>Dynamic Customization:</b> Users can toggle horns, wings, and tails, as well as choose between different arm and leg types.</li>
  <li><b>Advanced CSS Styling:</b> Utilizes absolute positioning, precise <code>z-index</code> layering, and CSS variables to handle the complex overlay of transparent PNGs.</li>
  <li><b>Hue Rotation:</b> A specialized color slider that alters the base color of the monster using <code>filter: hue-rotate()</code> without losing the intricate furry shading.</li>
  <li><b>Adoption System:</b> A generated adoption sequence with randomized pricing.</li>
</ul>

<b>The AI Collaboration Experience:</b><br>
Throughout the development process, an AI assistant (Generative AI) was utilized to act as a pair-programmer. The AI helped to draft complex logic for DOM manipulation, troubleshoot file path errors, and mathematically refine the CSS positioning (adjusting <code>top</code>, <code>left</code>, <code>width</code>, and <code>height</code> properties) to ensure all graphical assets aligned flawlessly. It also assisted in refactoring the codebase to adhere to best practices and translating comments for global readability.

<h2 style="color: #ffafcc;">Phase 2: Git Command Line Integration</h2>

This repository serves as a testament to strict version control practices managed entirely via the integrated terminal. No graphical user interfaces (GUIs) were used for version control, ensuring a deep understanding of core Git mechanics.

<b>Workflow Highlights:</b>
<ul>
  <li><b>Initialization & Tracking:</b> The project began with a clean <code>git init</code> environment. Files were tracked using <code>git status</code> and <code>git add .</code>.</li>
  <li><b>Semantic Committing:</b> Consistent use of <code>git commit -m</code> to track logical milestones in the application's growth, providing a clear history of the development lifecycle.</li>
  <li><b>Branch Management:</b> Features and major styling overhauls were isolated using branches. For example, a <code>feature-update</code> branch was created specifically using <code>git checkout -b feature-update</code> to handle the complex logic of switching limb types and adjusting their CSS coordinates. Once stable, it was merged back into the main branch using <code>git merge feature-update</code>.</li>
  <li><b>Remote Deployment:</b> The local history was successfully pushed to this remote GitHub repository using <code>git push -u origin main</code>.</li>
</ul>

<h2 style="color: #ffafcc;">Deliverables Included in this Submission</h2>

<ol>
  <li><b>The GitHub Repository:</b> Contains the full source code, asset directory, and this documentation.</li>
  <li><b>GitHub Pages Deployment:</b> The project is hosted live and can be accessed via the repository's GitHub Pages link.</li>
  <li><b>The Git Journey Presentation:</b> A comprehensive slide deck documenting the terminal workflow, including visual proof of initialization, file tracking, branch merging, and pushing.</li>
  <li><b>The Git Cheat Sheet:</b> A custom, single-page quick reference guide detailing essential Git CLI commands.</li>
</ol>

<h2 style="color: #ffafcc;">Future Enhancements</h2>

While the current version fulfills all assignment requirements, potential future updates could include:
<ul>
  <li>Adding a functionality to download the final monster as a single composite image using HTML5 Canvas rendering.</li>
  <li>Implementing sound effects for UI interactions to enhance the gaming feel.</li>
  <li>Adding more accessory categories such as eyes, hats, or backgrounds.</li>
</ul>

<hr style="border: 1px solid #ffc8dd;">