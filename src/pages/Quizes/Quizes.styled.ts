import styled from 'styled-components';
import { Card, Row, Typography } from 'antd';
import background from '@/assets/background.png';

export const PageBg = styled.div`
	background: url(${background}) no-repeat center/cover;
	position: fixed;
  top: 0;
  left: 0;
	inset: 0;
	z-index: 0;
`;

// Page wrappers
export const QuizPage = styled.div`
  background-color: #f7f2e7;
  background-image:
    radial-gradient(72rem 24rem at 85% -10%, rgba(139, 31, 16, 0.08), transparent 40%),
    radial-gradient(36rem 18rem at 0% 100%, rgba(243, 193, 75, 0.15), transparent 35%);
  min-height: 100vh;
  padding: 32px 24px;
`;

export const QuizDetailPageWrap = styled(QuizPage)`
  background-image:
    radial-gradient(80rem 28rem at 85% -10%, rgba(139, 31, 16, 0.08), transparent 40%),
    radial-gradient(40rem 20rem at 0% 100%, rgba(243, 193, 75, 0.15), transparent 35%);
  padding: 24px;
`;

// Containers
export const QuizContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const QuizDetailContainer = styled(QuizContainer)`
  max-width: 1200px;
`;

// Hero & headings
export const QuizHero = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const QuizTitleGradient = styled(Typography.Title)`
  background: linear-gradient(90deg, #7b2e20, #c5792a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  position: relative;
  z-index: 1;
`;

export const QuizDetailTitleGradient = styled(Typography.Title)`
  background: linear-gradient(90deg, #7b2e20, #c5792a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
`;

export const QuizSubtitle = styled(Typography.Text)`
  color: #7b2e20 !important;
  opacity: 0.8;
  letter-spacing: 0.2px;
`;

// Quizes list
export const QuizCardsRow = styled(Row)`
  display: contents;
`;

export const QuizArrow = styled.span`
  color: #7b2e20;
  font-size: 28px;
  transition: transform 200ms ease;
`;

export const QuizCard = styled(Card)`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  transform: translateY(0) scale(1);
  transition: transform 220ms ease, box-shadow 220ms ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 12px 30px rgba(123, 46, 32, 0.18), 0 2px 6px rgba(0, 0, 0, 0.06);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(123, 46, 32, 0.35), rgba(197, 121, 42, 0.35));
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: -150%;
    left: -50%;
    width: 50%;
    height: 300%;
    background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%);
    transform: rotate(15deg);
    opacity: 0;
    transition: transform 600ms ease, opacity 300ms ease;
    pointer-events: none;
  }

  &:hover::after {
    transform: translateX(300%) rotate(15deg);
    opacity: 1;
  }

  &:hover ${QuizArrow} {
    transform: translateX(4px);
  }
`;

export const QuizBadge = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 12px;
  background: linear-gradient(180deg, #a8402f, #7b2e20);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 20px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 10px 24px rgba(123, 46, 32, 0.25);
`;

export const QuizChipRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const QuizChip = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(123, 46, 32, 0.08);
  color: #7b2e20;
  border: 1px solid rgba(123, 46, 32, 0.16);
`;

export const QuizCTA = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  background: linear-gradient(180deg, #a8402f, #7b2e20);
  color: #fff;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(123, 46, 32, 0.28);
`;

// Quiz Detail specific
export const QuizDetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const QuizDetailProgressWrap = styled.div`
  margin: 8px auto 18px;
  max-width: 800px;
`;

export const QuizDetailProgressBar = styled.div`
  position: relative;
  height: 10px;
  border-radius: 999px;
  background: rgba(123, 46, 32, 0.15);
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.08);
`;

export const QuizDetailProgressInner = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #a8402f, #c5792a);
  border-radius: inherit;
  transition: width 300ms ease;
`;

export const QuizDetailProgressText = styled.div`
  text-align: center;
  color: #7b2e20;
  font-size: 13px;
  margin-top: 6px;
  opacity: 0.85;
`;

export const QuizDetailShell = styled.div`
  background: #e9dcc5;
  padding: 24px;
  border-radius: 14px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
`;

export const QuestionCard = styled(Card)`
  background: linear-gradient(180deg, #8f2216, #742015);
  border: none !important;
  border-radius: 14px !important;
  margin-bottom: 20px;
`;

export const AnswerBadge = styled.div`
  width: 34px;
  height: 34px;
  background: #f3c14b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  margin-right: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
`;

export const AnswerCard = styled(Card)<{ $selected?: boolean; $correct?: boolean; $wrong?: boolean; }>`
  cursor: pointer;
  border-radius: 14px !important;
  background: #f7e9d6 !important;
  border: none !important;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04) !important;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(123, 46, 32, 0.12) !important;
  }

  ${(p) => p.$selected && `box-shadow: 0 0 0 2px #a73a2a inset !important;`}
  ${(p) => p.$correct && `background: #e6fffb !important; box-shadow: 0 0 0 2px #13c2c2 inset !important;`}
  ${(p) => p.$wrong && `background: #fff1f0 !important; box-shadow: 0 0 0 2px #ff4d4f inset !important;`}
`;

export const QuizDetailActions = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const QuizDetailFeedback = styled(Typography.Text)`
  color: #7b2e20 !important;
  font-weight: 700;
`;

// Reduced motion safety
export const ReducedMotion = styled.div`
  @media (prefers-reduced-motion: reduce) {
    ${QuizCard} { transition: none !important; }
    ${QuizCard}::after, ${QuizCard}::before { transition: none !important; }
    ${QuizArrow} { transition: none !important; }
    ${QuizDetailProgressInner} { transition: none !important; }
    ${AnswerCard} { transition: none !important; }
  }
`;

