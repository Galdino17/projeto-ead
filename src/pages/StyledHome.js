import styled from "styled-components";

export const HeaderBG = styled.header`
	background: #fff;
	padding: 10px;
	border-bottom: 2px solid #e21;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		line-height: 24px;
		color: #888;
	}

	ul {
		display: flex;
		align-items: center;
		gap: 12px;

		li {
			padding: 8px 12px;
			a {
				padding: 8px;
				:hover {
					color: #222;
				}
			}

			.btn-login {
				color: #183682;
				background: none;
				font-size: 1rem;
				font-weight: 500;
			}

			.btn-cadastro {
				color: #183682;
				background: none;
				border: 2px solid currentColor;
				border-radius: 50px;
				padding: 16px 32px;
				font-size: 1rem;
				font-weight: 500;

				:hover {
					color: #fff;
					background: #183682;
				}
			}
		}
	}
`;

export const IntroBG = styled.section`
	color: #fff;
	background: #183682;
	padding: 113px;
	padding-bottom: 160px;
	div {
		h1 {
			text-align: center;
			font-size: 3rem;
			max-width: 907px;
			margin: 0 auto;
			margin-bottom: 64px;
		}

		button {
			width: 260px;
			margin: 0 auto;
			padding: 20px;
			box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

			:first-child {
				background: #2550bc;
				margin-bottom: 24px;
				:hover {
					background: #2d60e0;
				}
			}

			:last-child {
				background: #112967;
				:hover {
					background: #132d6c;
				}
			}
		}
	}
`;

export const IntroDetalhes = styled.ul`
	display: flex;
	justify-content: space-between;
	gap: 40px;
	max-width: 1140px;
	margin: 0 auto;
	position: relative;
	bottom: 59px;

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
		color: #fff;
		background: #dd2e2f;
		border-radius: 10px;
		font-size: 1.25rem;
		height: 231px;
		width: 309px;
	}
`;

export const InfoBG = styled.section``;
