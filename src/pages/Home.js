import React from "react";
import { HeaderBG, InfoBG, IntroBG, IntroDetalhes } from "./StyledHome";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToSignUp } from "../routes/Coordinator";
import logo from "../assets/logo.svg";
import edit from "../assets/edit.svg";
import user from "../assets/user.svg";
import time from "../assets/time.svg";

export const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			<HeaderBG>
				<div>
					<img src={logo} alt="" width="200" />
					<nav>
						<ul>
							<li>
								<a href="#sobre">Sobre</a>
							</li>
							<li>
								<a href="#planos">Planos</a>
							</li>
							<li>
								<a href="#blog">Blog</a>
							</li>
							<li>
								<a href="#contato">Contato</a>
							</li>
							<li>
								<button
									className="btn-login"
									onClick={() => goToLogin(navigate)}
								>
									Sou aluno
								</button>
							</li>
							<li>
								<button
									className="btn-cadastro"
									onClick={() => goToSignUp(navigate)}
								>
									Experimente agora
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</HeaderBG>

			<IntroBG>
				<div>
					<h1>Aprenda de verdade com o curso de francês da Tairys Nery!</h1>

					<div>
						<button
							onClick={() => {
								goToSignUp(navigate);
							}}
						>
							Comece agora
						</button>
						<button
							onClick={() => {
								goToLogin(navigate);
							}}
						>
							Já tenho uma conta
						</button>
					</div>
				</div>
			</IntroBG>

			<IntroDetalhes>
				<li>
					<img src={edit} />
					Aulas práticas e diretas
				</li>
				<li>
					<img src={user} /> Grupos de conversação
				</li>
				<li>
					<img src={time} /> Horário flexível para estudar
				</li>
			</IntroDetalhes>

			<InfoBG>
				Chegou a hora de falar francês! Aprenda com os melhores professores.
			</InfoBG>
		</div>
	);
};
