import styled from 'styled-components';
import background from '@/assets/background.png';

export const PageBg = styled.div`
	background: url(${background}) no-repeat center/cover;
	position: fixed;
	inset: 0;
	z-index: 0;
`;

export const Page = styled.section`
	position: relative;
	min-height: calc(100vh - 381px);
	overflow: hidden;
`;

export const Container = styled.div`
	position: relative;
	z-index: 1;
	max-width: 1120px;
	margin: 0 auto;
	padding: 72px 24px 120px;
`;

export const Title = styled.h1`
	text-align: center;
	font-weight: 900;
	font-size: clamp(26px, 4vw, 42px);
	margin: 0 0 24px;
	color: #b21b0a;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 24px;

	@media (min-width: 900px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

export const Card = styled.article`
	background: rgba(255, 241, 226, 0.9);
	border: 1px solid rgba(255, 255, 255, 0.8);
	border-radius: 14px;
	padding: 18px;
	box-shadow: 0 10px 26px rgba(178, 91, 0, 0.14);
`;

export const Image = styled.div`
	height: 200px;
	border-radius: 8px;
	background: #f3f3f3;
	border: 2px dashed #d2d2d2;
	margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
	margin: 0 0 6px;
	font-weight: 800;
	color: #8d5a06;
`;

export const Desc = styled.p`
	margin: 0;
	color: #6b4a1f;
	line-height: 1.6;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ViewDetail = styled.button`
	appearance: none;
	border: none;
	background: transparent;
	color: #b21b0a;
	font-weight: 700;
	cursor: pointer;
	padding: 0;
	margin-top: 8px;
	text-decoration: underline;
	&:hover { opacity: 0.85; }
`;

export const BackButton = styled.button`
	appearance: none;
	border: none;
	background: rgba(255, 241, 226, 0.8);
	color: #5a3b2e;
	font-size: 13px;
	padding: 8px 12px;
	border-radius: 999px;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
	box-shadow: 0 2px 10px rgba(178, 91, 0, 0.15);

	&:hover {
		background: rgba(255, 241, 226, 1);
		transform: translateY(-1px);
		box-shadow: 0 6px 18px rgba(178, 91, 0, 0.22);
	}

	&:active {
		transform: translateY(0);
		box-shadow: 0 3px 12px rgba(178, 91, 0, 0.18);
	}

	&::before {
		content: '←';
		display: inline-block;
		font-size: 14px;
		line-height: 1;
	}
`;
