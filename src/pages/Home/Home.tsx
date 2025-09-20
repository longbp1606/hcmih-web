import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { HomeWrapper } from './Home.styled'
import { useDocumentTitle } from '@/hooks'
import { useTranslation } from '@/lang/LanguageProvider'

const Home = () => {
    const { i18n } = useTranslation();
    // Compose title from translations so it updates when locale changes
    useDocumentTitle(`${i18n.t('appName')} | ${i18n.t('navigation.home')}`);
    const [count, setCount] = useState(0);

    return (
        <>
            <HomeWrapper>
                <div className='logo-container'>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/pages/Home</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </HomeWrapper>
        </>
    )
}

export default Home;