import "./Competences.css";

function Competences() {
	return (
		<div id="competences">
			<h2>Mes Compétences techniques</h2>
			<div className="cartecompétence">
				<section>
					<h3>Front-end</h3>
					<div className="frontbackend">
						<figure>
							<div className="logo">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
							</div>
							<figcaption>HTML 5</figcaption>
						</figure>
						<figure>
							<div className="logo">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
							</div>
							<figcaption>CSS 3</figcaption>
						</figure>
						<figure>
							<div className="logo">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
							</div>
							<figcaption>Javascript</figcaption>
						</figure>
						<figure>
							<div className="logo">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
							</div>
							<figcaption>React</figcaption>
						</figure>
						<figure>
							<div className="logo">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
							</div>
							<figcaption>Node.js</figcaption>
						</figure>

						<figure>
							<div className="logo">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
							</div>
							<figcaption>Typescript</figcaption>
						</figure>
					</div>
				</section>

				<section>
					<h3>Back-end</h3>
					<div className="frontbackend">
						<figure>
							<div className="logo">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
							</div>
							<figcaption>SQL</figcaption>
						</figure>
						<figure>
							<div className="logo">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
							</div>
							<figcaption>MySQL</figcaption>
						</figure>
						<figure>
							<div className="logo">
								<img src="src\assets\pngwing.com.png" />
							</div>
							<figcaption>Express.js</figcaption>
						</figure>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Competences;
