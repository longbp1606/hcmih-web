import styled from "styled-components";

export const FloatingContainer = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ToggleButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(17, 25, 40, 0.65);
  backdrop-filter: blur(8px);
  color: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(17, 25, 40, 0.75);
  }
`;

export const Panel = styled.div`
  width: 280px;
  border-radius: 14px;
  margin-top: 8px;
  padding: 12px;
  color: #fff;
  background: rgba(17, 25, 40, 0.65);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  opacity: 0.95;
  position: relative;
  overflow: hidden; /* container for marquee */
`;

export const MarqueeRow = styled.div`
  display: inline-flex;
  white-space: nowrap;
  align-items: center;
  gap: 32px; /* space between duplicates */
  will-change: transform;
  animation: marquee-x 16s linear infinite;

  @keyframes marquee-x {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const CloseBtn = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
  padding: 2px;
  line-height: 0;
  border-radius: 6px;
  transition: opacity 0.15s ease, background 0.15s ease;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 8px;
  row-gap: 6px;
  align-items: center;
`;

export const PlayBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const Time = styled.div`
  font-size: 12px;
  opacity: 0.85;
`;

export const Slider = styled.input`
  width: 100%;
`;

export const Progress = styled.input`
  grid-column: 1 / -1;
  width: 100%;
`;
