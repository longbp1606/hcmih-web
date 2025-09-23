import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    CaretDownOutlined,
    CaretUpOutlined,
    CloseOutlined,
    PauseCircleFilled,
    PlayCircleFilled,
    SoundOutlined,
} from "@ant-design/icons";
import {
    CloseBtn,
    Controls,
    FloatingContainer,
    Header,
    Panel,
    PlayBtn,
    Progress,
    Slider,
    Time,
    Title,
    MarqueeRow,
    ToggleButton,
} from "./AudioPlayer.styled";

export type AudioPlayerProps = {
    src?: string; // Optional audio src; if omitted, controls are disabled until provided
    title?: string;
    autoOpen?: boolean;
};

function formatTime(sec: number) {
    if (!isFinite(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
        .toString()
        .padStart(2, "0");
    return `${m}:${s}`;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title = "Audio", autoOpen = false }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [open, setOpen] = useState(autoOpen);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.9);

    const canPlay = useMemo(() => Boolean(src && src.length > 0), [src]);

    useEffect(() => {
        const a = audioRef.current;
        if (!a) return;
        const onTime = () => setCurrentTime(a.currentTime);
        const onLoaded = () => setDuration(a.duration || 0);
        const onEnded = () => setPlaying(false);
        a.addEventListener("timeupdate", onTime);
        a.addEventListener("loadedmetadata", onLoaded);
        a.addEventListener("ended", onEnded);
        a.volume = volume;
        return () => {
            a.removeEventListener("timeupdate", onTime);
            a.removeEventListener("loadedmetadata", onLoaded);
            a.removeEventListener("ended", onEnded);
        };
    }, [volume, src]);

    const togglePlay = () => {
        const a = audioRef.current;
        if (!a) return;
        if (playing) {
            a.pause();
            setPlaying(false);
        } else {
            a
                .play()
                .then(() => setPlaying(true))
                .catch(() => setPlaying(false));
        }
    };

    const onSeek: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const a = audioRef.current;
        if (!a) return;
        const t = Number(e.target.value);
        a.currentTime = t;
        setCurrentTime(t);
    };

    const onVolume: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const v = Number(e.target.value);
        setVolume(v);
        if (audioRef.current) audioRef.current.volume = v;
    };

    return (
        <FloatingContainer>
            <ToggleButton aria-label={open ? "Hide audio player" : "Show audio player"} onClick={() => setOpen((v) => !v)}>
                {open ? <CaretDownOutlined /> : <CaretUpOutlined />}
            </ToggleButton>
            {open && (
                <Panel role="dialog" aria-label="Audio player">
                    <Header>
                        <Title aria-label={title} title={title}>
                            <MarqueeRow>
                                <span>{title}</span>
                                <span aria-hidden="true">{title}</span>
                            </MarqueeRow>
                        </Title>
                        <CloseBtn aria-label="Close" onClick={() => setOpen(false)}>
                            <CloseOutlined />
                        </CloseBtn>
                    </Header>
                    <Controls>
                        <PlayBtn onClick={togglePlay} aria-label={playing ? "Pause" : "Play"} disabled={!canPlay}>
                            {playing ? <PauseCircleFilled /> : <PlayCircleFilled />}
                        </PlayBtn>
                        <Time>{formatTime(currentTime)}</Time>
                        <Time>{formatTime(duration)}</Time>
                        <Progress
                            type="range"
                            min={0}
                            max={duration || 0}
                            step={0.01}
                            value={Math.min(currentTime, duration || 0)}
                            onChange={onSeek}
                            aria-label="Seek"
                            disabled={!canPlay}
                        />
                        <span style={{ display: "inline-flex", alignItems: "center", opacity: 0.8 }}>
                            <SoundOutlined />
                        </span>
                        <Slider type="range" min={0} max={1} step={0.01} value={volume} onChange={onVolume} aria-label="Volume" />
                    </Controls>
                </Panel>
            )}
            {/* Keep audio mounted so it continues playing when panel is hidden */}
            <audio ref={audioRef} src={src} preload="metadata" />
        </FloatingContainer>
    );
};

export default AudioPlayer;
