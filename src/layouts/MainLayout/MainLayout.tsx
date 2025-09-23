import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AudioPlayer from "@/components/AudioPlayer";
import { useTranslation } from "@/lang/LanguageProvider";
import declarationAudio from "@/assets/Declaration_of_independence_of_the_Democratic_Republic_of_Vietnam.mp3";

const HomeLayout = () => {
    const { i18n } = useTranslation();
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            {/* Floating bottom-right audio dialog */}
            <AudioPlayer title={i18n.t('audio.declarationTitle')} src={declarationAudio} />
        </>
    )
}

export default HomeLayout;