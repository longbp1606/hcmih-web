import styled from 'styled-components';
import background from '@/assets/background.png';

export const IdeologyBackground = styled.div`
    background: url(${background}) no-repeat center/cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

export const Page = styled.section`
	position: relative;
	min-height: calc(100vh - 381px);
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(1000px 400px at 50% -150px, rgba(255,255,255,0.45), rgba(255,255,255,0) 60%);
		pointer-events: none;
	}

	&::after {
		content: '';
		position: absolute;
		left: -60px;
		right: -60px;
		bottom: -200px;
		height: 520px;
		opacity: 0.15;
		pointer-events: none;
	}
`;

export const Container = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 72px 24px 120px;
`;

export const Title = styled.h1`
	text-align: center;
	font-weight: 900;
	font-size: clamp(28px, 4vw, 48px);
	margin: 0 0 28px;
	color: #b21b0a;
	text-shadow: 0 6px 0 rgba(0,0,0,0.06);
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 28px;

	@media (min-width: 900px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

export const Card = styled.article`
	background: rgba(255, 241, 226, 0.9);
	border: 1px solid rgba(255, 255, 255, 0.8);
	border-radius: 14px;
	padding: 24px;
	box-shadow: 0 10px 26px rgba(178, 91, 0, 0.18);
`;

export const ImageBox = styled.div`
	border-radius: 8px;
	background: #f5f5f5;
	height: 280px;
	margin-bottom: 16px;
	border: 2px dashed #d2d2d2;
`;

export const CardFooter = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const IndexBadge = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 38px;
	height: 32px;
	border-radius: 8px;
	font-weight: 800;
	color: #8d5a06;
	background: #f2c383;
`;

export const CardTitle = styled.h3`
	margin: 0;
	font-size: 20px;
	font-weight: 800;
	color: #8d5a06;
`;

