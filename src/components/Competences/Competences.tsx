import "./Competences.css";
import React, { useState, useEffect } from "react";

const Competences = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div id="competences">
			<h2>Mes Compétences techniques</h2>
			<div className="competence-system">
				{/* Front-end */}
				<div className="atom" id="front-end">
					<svg className="lines">
						<line x1="50%" y1="50%" x2="10%" y2="50%" />
						<line x1="50%" y1="50%" x2="50%" y2="0%" />
						<line x1="50%" y1="50%" x2="20%" y2="90%" />
						<line x1="50%" y1="50%" x2="90%" y2="30%" />
						<line x1="50%" y1="50%" x2="70%" y2="70%" />
					</svg>
					<div className="atom-center">
						<h3>Front-end</h3>
					</div>
					<div className="orbit">
						<figure
							className="skill"
							style={
								isMobile
									? { top: "-15%", left: "30%" }
									: { top: "5%", left: "40%" }
							}
						>
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
								alt="HTML5"
							/>
							<figcaption>HTML5</figcaption>
						</figure>
						<figure
							className="skill"
							style={
								isMobile
									? { top: "40%", left: "-30%" }
									: { top: "47%", left: "0%" }
							}
						>
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
								alt="CSS3"
							/>
							<figcaption>CSS3</figcaption>
						</figure>
						<figure
							className="skill"
							style={
								isMobile
									? { top: "15%", left: "90%" }
									: { top: "25%", left: "90%" }
							}
						>
							<img src="src/assets/typescript.png" alt="typescript.js" />
							<figcaption>Typescript</figcaption>
						</figure>
						<figure
							className="skill"
							style={
								isMobile
									? { top: "90%", left: "0%" }
									: { top: "90%", left: "10%" }
							}
						>
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
								alt="JavaScript"
							/>
							<figcaption>JavaScript</figcaption>
						</figure>
						<figure
							className="skill"
							style={
								isMobile
									? { top: "80%", left: "60%" }
									: { top: "75%", left: "70%" }
							}
						>
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
								alt="React"
							/>
							<figcaption>React</figcaption>
						</figure>
					</div>
				</div>

				{/* Back-end */}
				<div className="atom" id="back-end">
					<svg className="lines">
						<line x1="50%" y1="50%" x2="10%" y2="50%" />
						<line x1="50%" y1="50%" x2="50%" y2="0%" />
						<line x1="50%" y1="50%" x2="70%" y2="70%" />
					</svg>
					<div className="atom-center">
						<h3>Back-end</h3>
					</div>
					<div className="orbit">
						<figure
							className="skill"
							style={
								isMobile
									? { top: "-10%", left: "30%" }
									: { top: "5%", left: "40%" }
							}
						>
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
								alt="MySQL"
							/>
							<figcaption>MySQL</figcaption>
						</figure>
						<figure
							className="skill"
							style={
								isMobile
									? { top: "42%", left: "-30%" }
									: { top: "47%", left: "0%" }
							}
						>
							<img src="src/assets/pngwing.com.png" alt="Express.js" />
							<figcaption>Express.js</figcaption>
						</figure>
						<figure
							className="skill"
							style={
								isMobile
									? { top: "75%", left: "60%" }
									: { top: "75%", left: "70%" }
							}
						>
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
								alt="Node.js"
							/>
							<figcaption>Node.js</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Competences;
