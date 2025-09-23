import styled from "styled-components";
import backgroundImage from '../../assets/bacground.svg';
import paperBg from '../../assets/paper-wrap-bg.png';

export const HomeWrapper = styled.div`
    margin: 0 auto;
    text-align: center;

    & .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    & .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    & .logo.react:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
    }

    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        a:nth-of-type(2) .logo {
            animation: logo-spin infinite 20s linear;
        }
    }

    & .logo-container {
        display: flex;
        justify-content: center
    }

    & .card {
        padding: 2em;
        display: flex;
        flex-direction: column;
        gap: 16px;

        & button {
            color: #fff
        }
    }

    & .read-the-docs {
        color: #888;
    }
`;

export const HeaderBackground = styled.div`
    background: url(${backgroundImage}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

export const HeroSection = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end; /* right align */
    min-height: clamp(640px, 40vh, 520px);
    padding: clamp(16px, 4vw, 64px) clamp(16px, 5vw, 80px);
    z-index: 1;
`;

export const HeroTitle = styled.h1`
    margin: 0;
    max-width: 800px;
    text-align: right; /* right aligned text */
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: 0.2px;
    font-size: clamp(28px, 4vw + 1rem, 64px);
    
    background: linear-gradient(285deg, #D98200 -0.92%, #995900 46.98%, #FDB750 92.39%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 18px rgba(255, 191, 0, 0.25);
    z-index: 10;
`;

export const FilmStrip = styled.img`
    width: 130%;
    max-width: none;
    position: relative;
    left: -30%;
    bottom: 100px;
    z-index: 2;
    transition: bottom 0.3s ease-out;

    @media (max-width: 1024px) {
        width: 120%;
        left: -10%;
    }

    @media (max-width: 768px) {
        transform: rotate(-6deg);
        top: -20px;
        width: 130%;
        left: -15%;
    }
`;

export const SummarySection = styled.section`
    position: relative;
    margin-top: 48px;
    padding: 216px 56px;
    z-index: 1;
    background: #830000;
`;

export const SectionTitle = styled.h2`
    margin: 0 0 24px;
    text-align: left;
    font-weight: 800;
    font-size: clamp(20px, 2vw + 0.5rem, 32px);
    letter-spacing: 0.2px;
    background: linear-gradient(285deg, #D98200 -0.92%, #995900 46.98%, #FDB750 92.39%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const TopicsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const TopicCard = styled.article`
    position: relative;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 12px;
    padding: 20px 20px 18px;
    text-align: left;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 24px rgba(0,0,0,0.15);
        border-color: rgba(255, 185, 70, 0.6);
    }
`;

export const TopicIndex = styled.div`
    font-weight: 900;
    font-size: 24px;
    letter-spacing: 1px;
    margin-bottom: 8px;
    background: linear-gradient(285deg, #D98200 -0.92%, #995900 46.98%, #FDB750 92.39%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const TopicTitle = styled.h3`
    margin: 0 0 6px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
`;

export const TopicDesc = styled.p`
    margin: 0;
    color: #e8e8e8;
    font-size: 14px;
    line-height: 1.5;
`;

// Research section
export const ResearchSection = styled.section`
    position: relative;
    width: 100%;
    padding: clamp(240px, 3vw, 32px);
    border-radius: 16px;
    z-index: 99;

    background: url(${paperBg}) center/cover no-repeat;
    background-size: 140% auto;
    box-shadow: 0 10px 24px rgba(0,0,0,0.15);

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
    }
`;

export const ResearchInner = styled.div`
    position: relative;
    z-index: 1;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ResearchTitle = styled.h2`
    margin: 0 0 8px;
    text-align: left;
    font-weight: 800;
    font-size: clamp(20px, 2vw + 0.5rem, 32px);
    letter-spacing: 0.2px;
    background: linear-gradient(90deg, #600B0B 0%, #B01212 49.18%, #FF5B1F 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
`;

export const SearchBar = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const SearchInput = styled.input`
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.12);
    outline: none;
    background: rgba(255,255,255,0.9);
    font-size: 14px;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;

    &:focus {
        border-color: rgba(255, 185, 70, 0.7);
        box-shadow: 0 0 0 3px rgba(255, 185, 70, 0.25);
    }
`;

export const SearchButton = styled.button`
    padding: 12px 18px;
    border-radius: 10px;
    border: 1px solid rgba(153, 89, 0, 0.5);
    background: linear-gradient(285deg, #D98200 -0.92%, #995900 46.98%, #FDB750 92.39%);
    color: #1b1000;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.2s ease, filter 0.2s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 18px rgba(0,0,0,0.18);
        filter: brightness(1.02);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const TagsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const Tag = styled.button`
    border: 1px solid rgba(0,0,0,0.15);
    background: #FF00006A;
    color: #FFE2C5;
    padding: 8px 12px;
    border-radius: 999px;
    cursor: pointer;
    font-size: 13px;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.1s ease;

    &:hover {
        background: rgba(255,255,255,0.95);
        border-color: rgba(255, 185, 70, 0.7);
        transform: translateY(-1px);
    }
`;

// Timeline section
export const TimelineSection = styled.section`
    position: relative;
    padding: 48px 0 48px;
    background: linear-gradient(180deg, #500202 27.4%, #995900 117.81%);
`;

export const TimelineTitle = styled.h2`
    margin: 0 0 24px;
    text-align: center;
    font-weight: 800;
    font-size: clamp(22px, 2.5vw + 0.5rem, 36px);
    letter-spacing: 0.3px;
    background: linear-gradient(285deg, #D98200 -0.92%, #995900 46.98%, #FDB750 92.39%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const TimelineWrap = styled.div`
    position: relative;
    padding: 12px 0;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        transform: translateX(-50%);
        background: linear-gradient(180deg, rgba(255,185,70,0) 0%, rgba(255,185,70,0.9) 12%, rgba(255,185,70,0.9) 88%, rgba(255,185,70,0) 100%);
        box-shadow: 0 0 12px rgba(255,185,70,0.4);
        pointer-events: none;
    }
`;

export const TimelineList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 56px;
`;

export const TimelineRow = styled.li<{ side: 'left' | 'right' }>`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: clamp(16px, 4vw, 64px);
`;

export const ImageCircle = styled.div`
    width: clamp(110px, 16vw, 160px);
    height: clamp(110px, 16vw, 160px);
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid rgba(255,185,70,0.85);
    box-shadow: 0 10px 24px rgba(0,0,0,0.2), inset 0 0 24px rgba(255,185,70,0.2);
    justify-self: center;
`;

export const TextBox = styled.div<{ side: 'left' | 'right' }>`
    position: relative;
    text-align: ${props => props.side === 'left' ? 'right' : 'left'};
    justify-self: ${props => props.side === 'left' ? 'end' : 'start'};
    max-width: 460px;

    &::after {
        content: '';
        position: absolute;
        top: 42px;
        ${props => props.side === 'left' ? 'right: -150px;' : 'left: -150px;'}
        width: clamp(60px, 10vw, 120px);
        border-top: 2px dashed rgba(255,185,70,0.7);
        filter: drop-shadow(0 0 6px rgba(255,185,70,0.3));
    }
`;

export const AxisDot = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #FFB946;
    box-shadow: 0 0 0 4px rgba(255,185,70,0.25);
`;

export const PeriodRange = styled.h3`
    margin: 0 0 6px;
    font-size: clamp(16px, 1.2vw + 0.6rem, 22px);
    font-weight: 800;
    background: linear-gradient(285deg, #D98200 -0.92%, #995900 46.98%, #FDB750 92.39%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const PeriodDesc = styled.p`
    margin: 0;
    color: #e8e8e8;
    font-size: clamp(13px, 0.8vw + 0.4rem, 16px);
    line-height: 1.5;
`;

// Explore sub-section (inside timeline)
export const ExploreSection = styled.div`
    margin-top: 48px;
    padding: 0 clamp(24px, 6vw, 120px); /* left/right whitespace */
`;

export const ExploreTitle = styled.h3`
    margin: 0 0 20px;
    text-align: center;
    font-weight: 800;
    font-size: clamp(22px, 2.5vw + 0.5rem, 36px);
    letter-spacing: 0.3px;
    background: linear-gradient(285deg, #D98200 -0.92%, #995900 46.98%, #FDB750 92.39%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const ExploreGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(16px, 3vw, 28px);
    max-width: 1100px; /* constrain overall width */
    margin: 0 auto;

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const ExploreCard = styled.article`
    background: #5C0D0D;
    border-radius: 14px;
    padding: clamp(8px, 1.5vw, 12px); /* smaller padding */
    box-shadow: 0 16px 26px rgba(0,0,0,0.32);
    border: 1px solid rgba(0,0,0,0.22);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 22px 34px rgba(0,0,0,0.38);
    }
`;

export const ExploreImage = styled.img`
    width: 100%;
    height: clamp(120px, 14vw, 180px); /* smaller image */
    object-fit: cover;
    border-radius: 10px;
    filter: sepia(0.55) contrast(0.95) brightness(0.95);
    box-shadow: inset 0 0 16px rgba(0,0,0,0.22);
`;

export const ExploreLabel = styled.div`
    margin-top: 12px;
    font-weight: 800;
    color: #C8871A;
    font-size: clamp(16px, 1.2vw + 0.4rem, 22px);
`;