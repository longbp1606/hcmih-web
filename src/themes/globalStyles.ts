import { createGlobalStyle } from "styled-components";
// import { theme } from ".";

const GlobalStyles = createGlobalStyle`
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

        /* === Quiz & Quiz Detail Shared Styles (migrated from CSS modules) === */
        .quiz-page, .quizdetail-page {
                background-color: #f7f2e7;
                background-image:
                    radial-gradient(72rem 24rem at 85% -10%, rgba(139, 31, 16, 0.08), transparent 40%),
                    radial-gradient(36rem 18rem at 0% 100%, rgba(243, 193, 75, 0.15), transparent 35%);
                min-height: 100vh;
                padding: 32px 24px;
        }

        .quizdetail-page {
                background-image:
                    radial-gradient(80rem 28rem at 85% -10%, rgba(139, 31, 16, 0.08), transparent 40%),
                    radial-gradient(40rem 20rem at 0% 100%, rgba(243, 193, 75, 0.15), transparent 35%);
                padding: 24px;
        }

        .quiz-container, .quizdetail-container { max-width: 1280px; margin: 0 auto; }
        .quizdetail-container { max-width: 1200px; }

        .quiz-hero { text-align: center; margin-bottom: 20px; }
        .quiz-title-gradient, .quizdetail-title-gradient {
                background: linear-gradient(90deg, #7b2e20, #c5792a);
                -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .quiz-subtitle { color: #7b2e20; opacity: .8; letter-spacing: .2px; }

        .quiz-cardsRow { display: contents; }
        .quiz-card {
                position: relative; border-radius: 14px; overflow: hidden;
                transform: translateY(0) scale(1);
                transition: transform 220ms ease, box-shadow 220ms ease;
                box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }
        .quiz-card:hover { transform: translateY(-3px) scale(1.01); box-shadow: 0 12px 30px rgba(123,46,32,0.18), 0 2px 6px rgba(0,0,0,0.06); }
        .quiz-card::before { content:""; position:absolute; inset:0; padding:1px; border-radius:inherit; background:linear-gradient(135deg, rgba(123,46,32,.35), rgba(197,121,42,.35)); -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0); mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0); -webkit-mask-composite:xor; mask-composite:exclude; pointer-events:none; }
        .quiz-card::after { content:""; position:absolute; top:-150%; left:-50%; width:50%; height:300%; background:linear-gradient(120deg, transparent 0%, rgba(255,255,255,.35) 50%, transparent 100%); transform:rotate(15deg); opacity:0; transition:transform 600ms ease, opacity 300ms ease; pointer-events:none; }
        .quiz-card:hover::after { transform:translateX(300%) rotate(15deg); opacity:1; }

        .quiz-badge { width:54px; height:54px; border-radius:12px; background:linear-gradient(180deg,#a8402f,#7b2e20); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:20px; box-shadow:inset 0 1px 0 rgba(255,255,255,.25), 0 10px 24px rgba(123,46,32,.25); }
        .quiz-arrow { color:#7b2e20; font-size:28px; transition:transform 200ms ease; }
        .quiz-card:hover .quiz-arrow { transform: translateX(4px); }
        .quiz-chipRow { display:flex; gap:8px; flex-wrap:wrap; margin-top:8px; }
        .quiz-chip { font-size:12px; padding:4px 10px; border-radius:999px; background:rgba(123,46,32,.08); color:#7b2e20; border:1px solid rgba(123,46,32,.16); }
        .quiz-cta { display:inline-flex; align-items:center; gap:8px; padding:10px 14px; border-radius:10px; background:linear-gradient(180deg,#a8402f,#7b2e20); color:#fff; font-weight:700; box-shadow:0 6px 18px rgba(123,46,32,.28); }

        /* Quiz Detail specific */
        .quizdetail-header { display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .quizdetail-progressWrap { margin:8px auto 18px; max-width:800px; }
        .quizdetail-progressBar { position:relative; height:10px; border-radius:999px; background:rgba(123,46,32,0.15); overflow:hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,0.08); }
        .quizdetail-progressInner { height:100%; background:linear-gradient(90deg,#a8402f,#c5792a); border-radius:inherit; transition:width 300ms ease; }
        .quizdetail-progressText { text-align:center; color:#7b2e20; font-size:13px; margin-top:6px; opacity:.85; }
        .quizdetail-shell { background:#e9dcc5; padding:24px; border-radius:14px; box-shadow: inset 0 0 20px rgba(0,0,0,0.05); }
        .quizdetail-questionCard { background:linear-gradient(180deg,#8f2216,#742015); border:none; border-radius:14px !important; margin-bottom:20px; }
        .quizdetail-answerBadge { width:34px; height:34px; background:#f3c14b; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; margin-right:12px; box-shadow:0 6px 14px rgba(0,0,0,0.08); }
        .quizdetail-answerCard { cursor:pointer; border-radius:14px !important; background:#f7e9d6 !important; border:none !important; transition:transform 160ms ease, box-shadow 160ms ease, background 160ms ease; box-shadow:0 1px 0 rgba(0,0,0,0.04) !important; position:relative; }
        .quizdetail-answerCard:hover { transform:translateY(-2px); box-shadow:0 10px 20px rgba(123,46,32,0.12) !important; }
        .quizdetail-selected { box-shadow:0 0 0 2px #a73a2a inset !important; }
        .quizdetail-correct { background:#e6fffb !important; box-shadow:0 0 0 2px #13c2c2 inset !important; }
        .quizdetail-wrong { background:#fff1f0 !important; box-shadow:0 0 0 2px #ff4d4f inset !important; }
        .quizdetail-actions { margin-top:16px; display:flex; align-items:center; gap:12px; }
        .quizdetail-feedback { color:#7b2e20; font-weight:700; }
        @media (prefers-reduced-motion: reduce) {
            .quiz-card, .quiz-card::after, .quiz-card::before, .quiz-arrow, .quizdetail-progressInner, .quizdetail-answerCard { transition:none !important; }
        }

    a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
    }
        
    a:hover {
        color: #535bf2;
    }

    body {
        margin: 0;
        min-width: 320px;
        min-height: 100vh;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    button:hover {
        border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
        :root {
            color: #213547;
            background-color: #ffffff;
        }
        a:hover {
            color: #747bff;
        }
        button {
            background-color: #f9f9f9;
        }
    }
`;

export default GlobalStyles;