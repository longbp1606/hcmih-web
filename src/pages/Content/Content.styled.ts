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
	margin: 0 0 12px;
	color: #b21b0a;
	font-weight: 900;
	font-size: clamp(22px, 4vw, 36px);
`;

export const SubTitle = styled.h2`
	margin: 0 0 18px;
	color: #8d5a06;
	font-weight: 800;
	font-size: clamp(18px, 3vw, 22px);
`;

export const ContentCard = styled.article`
	background: rgba(255, 241, 226, 0.95);
	border: 1px solid rgba(255, 255, 255, 0.8);
	border-radius: 14px;
	padding: 18px;
	box-shadow: 0 10px 26px rgba(178, 91, 0, 0.14);
	margin-bottom: 24px;
`;

export const HeroImage = styled.div`
	height: 240px;
	border-radius: 10px;
	background: #f3f3f3;
	border: 2px dashed #d2d2d2;
	margin-bottom: 12px;
`;

export const Body = styled.div`
	color: #5a3b2e;
	line-height: 1.7;
	font-size: 16px;
	white-space: pre-line;
`;

export const RelatedTitle = styled.h3`
	margin: 24px 0 12px;
	color: #8d5a06;
	font-weight: 800;
`;

export const RelatedGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 16px;

	@media (min-width: 900px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

export const RelatedItem = styled.button`
	appearance: none;
	border: none;
	background: rgba(255, 241, 226, 0.8);
	color: #5a3b2e;
	text-align: left;
	padding: 14px 16px;
	border-radius: 12px;
	box-shadow: 0 6px 18px rgba(178, 91, 0, 0.14);
	cursor: pointer;
	transition: transform 0.1s ease, box-shadow 0.2s ease, background 0.2s ease;

	&:hover {
		transform: translateY(-1px);
		background: rgba(255, 241, 226, 1);
		box-shadow: 0 10px 26px rgba(178, 91, 0, 0.2);
	}
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
	&:active { transform: translateY(0); }
	&::before { content: '←'; font-size: 14px; }
`;
