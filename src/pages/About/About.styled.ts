import styled from 'styled-components';
import generalBackgroundImage from '@/assets/general-background.png';

export const AboutPageBackground = styled.div`
	background: url(${generalBackgroundImage}) no-repeat center/cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

export const AboutPage = styled.section`
	position: relative;
	overflow: hidden;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: -10%;
		bottom: -10%;
		width: 420px;
		opacity: 0.25;
		filter: blur(0.2px);
		pointer-events: none;
	}
	&::before { left: -60px; }
	&::after { right: -60px; transform: scaleX(-1); }
`;

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 88px 24px 120px;
	max-width: 1120px;
`;

export const Title = styled.h1`
	margin: 0 0 48px;
	text-align: center;
	font-weight: 800;
	font-size: clamp(28px, 4vw, 48px);
	line-height: 1.15;
	background: linear-gradient(90deg, #ba3e0a 0%, #ff945d 45%, #ba3e0a 90%);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	text-shadow: 0 2px 0 rgba(0,0,0,0.06);
`;

export const Section = styled.section`
	position: relative;
	margin: 28px 0 40px;
	padding-left: 6px;
`;

export const SectionHeading = styled.h2<{ $index: number }>`
	display: flex;
	align-items: baseline;
	gap: 10px;
	margin: 0 0 12px;
	font-size: clamp(18px, 2.4vw, 26px);
	font-weight: 800;
	color: #b25b00;
	text-shadow: 0 1px 0 rgba(0,0,0,0.05);

		&::before {
			content: counter(itemNumber) '. ';
			counter-increment: itemNumber;
		}
`;

export const ListWrap = styled.div`
	counter-reset: itemNumber var(--about-start, 0);
`;

export const SectionNote = styled.span`
	font-size: 14px;
	font-weight: 600;
	color: #3a8e00;
`;

export const Body = styled.p`
	margin: 0;
	color: #5a3b19;
	font-size: clamp(14px, 1.5vw, 16px);
	line-height: 1.75;
	opacity: 0.95;
`;

export const ValueList = styled.ul`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 16px;
	margin: 12px 0 0;
	padding: 0;
	list-style: none;

	@media (min-width: 720px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

export const ValueItem = styled.li`
	background: rgba(255, 255, 255, 0.5);
	border: 1px solid rgba(255, 255, 255, 0.6);
	border-radius: 16px;
	padding: 16px 18px;
	box-shadow: 0 6px 24px rgba(186, 62, 10, 0.1);

	strong { color: #b25b00; }
`;


