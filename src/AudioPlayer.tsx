import React, { useState, useEffect} from 'react';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
// import FaHeadphones from 'react-icons/lib/fa/headphones';
import './App.css';
// export interface IAudioPlayer {
//   audioLists: Object[],
//   theme: string,
//   autoPlayInitLoadPlayList?: boolean,
//   isTrackColor: string,
//   glassBg?: boolean,
//   defaultPosition?: {},
//   playModeText : {
//     order: string,
//     orderLoop: string,
//     singleLoop: string
//     shufflePlay: string
//   },
//   openText: string,
//   closeText: string,
//   checkedText: string,
//   notContentText: string,
//   panelTitle: string,
//   defaultPlayMode: string,
//   mode:string,
//   autoPlay: boolean,
//   drag: boolean,
//   controllerTitle: React.Component,
//   showPlayMode: boolean,
//   showThemeSwitch: boolean,
//   showDestroy: boolean,
//   defaultVolume: number,
//   autoHiddenCover: boolean,

// }
export interface IAudioPlayer {
  colorValue: string
}
const AudioPlayer: React.FC<IAudioPlayer> = ({
  colorValue
}) => {
  const lyric = [
    "[ti:高尚]",
    "[ar:薛之谦]",
    "[al:高尚]",
    "[by:]",
    "[offset:0]",
    "[00:01.35]高尚 - 薛之谦",
    "[00:03.11]词：薛之谦",
    "[00:04.34]曲：周以力",
    "[00:07.55]",
    "[00:09.18]在阴郁的地方 积攒能量",
    "[00:15.77]",
    "[00:18.71]人交出了什么 能变个样",
    "[00:25.37]",
    "[00:28.67]奇形怪状 的人在生长",
    "[00:35.37]",
    "[00:38.63]我躲在人群中 头在晃",
    "[00:44.78]",
    "[00:48.73]刺破我的心脏 样本不算肮脏",
    "[00:54.45]别恐慌",
    "[00:57.09]",
    "[00:58.63]你看我虚荣模样 你该怎么补偿",
    "[01:04.53]",
    "[01:07.40]我多高尚 向自尊开了枪",
    "[01:16.00]",
    "[01:17.26]你同情的眼光 我特别的欣赏",
    "[01:22.49]",
    "[01:23.15]哀而不伤",
    "[01:26.42]",
    "[01:27.17]我多慌张 怕人闯入我围墙",
    "[01:35.62]",
    "[01:36.88]窥探五官不详 见我原本模样",
    "[01:42.01]",
    "[01:42.53]还能 模仿 任何形状",
    "[01:49.15]",
    "[02:00.55]越恶劣的情况 越要想象",
    "[02:07.31]",
    "[02:10.24]狼藏起反犬旁 像从了良",
    "[02:17.47]",
    "[02:20.72]张牙舞爪 的人在散谎",
    "[02:27.20]",
    "[02:29.92]愿形容我的词 别太荒唐",
    "[02:36.26]",
    "[02:40.88]贪念表现恰当 就像索要嫁妆",
    "[02:45.90]在情理上",
    "[02:48.80]",
    "[02:49.79]请当我孤芳自赏 还规矩条条框框",
    "[02:57.32]",
    "[02:59.28]我多高尚 向自尊开了枪",
    "[03:07.35]",
    "[03:08.86]你异样的眼光 我特别的欣赏",
    "[03:14.08]",
    "[03:14.71]让人难忘",
    "[03:18.63]我多风光 你别闯入我围墙",
    "[03:27.12]",
    "[03:28.33]你要什么真相 不就图个皮囊",
    "[03:33.42]",
    "[03:34.07]不如 让我 留在橱窗",
    "[03:40.09]",
    "[03:52.49]我多难忘 像秀色可餐的模样",
    "[04:00.91]",
    "[04:01.97]感谢你又打赏 你用词越恰当",
    "[04:07.87]我越膨胀",
    "[04:11.44]",
    "[04:11.99]我的疯狂 连我自己都看不上",
    "[04:20.44]",
    "[04:21.35]阴里怪气的愿望 那屈辱的轻伤",
    "[04:27.15]谁能给我 发个奖章",
    "[04:34.85]",
    "[04:43.45]我多向往 有个美丽的地方",
    "[04:52.21]",
    "[04:53.41]我最初的模样 没痛也不会痒",
    "[04:59.88]",
    "[05:00.96]能把赏赐 都烧光",
    "[05:10.86]制作人：周以力",
    "[05:11.93]编曲：周以力",
    "[05:12.73]大提琴：郎莹",
    "[05:13.53]鼓：尹森",
    "[05:14.43]贝斯：陈然然",
    "[05:14.63]吉他：张凇",
    "[05:14.80]Vocal录音室：江苏广电总台录音室",
    "[05:15.26]乐器录音室：北京录顶技录音室",
    "[05:15.72]乐器录音师：王晓海/鲍锐（鼓）",
    "[05:16.22]混音工程师：鲍锐@录顶技Studio",
    "[05:16.65]母带工程师：Friedemann Tishmeyer@Hambug Studio"
  ].join("\n");
  const audioList1 = [
    {
      name: "高尚",
      singer: "薛之谦",
      cover: "//cdn.lijinke.cn/nande.jpg",
      musicSrc: "//cdn.lijinke.cn/gaoshang.mp3",
      lyric
    },
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc: () => {
        return Promise.resolve(
          "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
        );
      }
    }
  ] as any;
  
  const [play, setPlay] = useState(false);
  const [audioInstance, setAudioInstance] = useState();
  const getAudioInstance = (instance: any) => {
    console.log("Getting audio instance", instance);
    setAudioInstance(instance);
  };
  const onPlayHandler = () => setPlay(true);
  const onPauseHandler = () => setPlay(false);

  useEffect(() => {
    console.log("Updated audio instance", audioInstance);
  }, [audioInstance]);
  return (

    <div>
      <ReactJkMusicPlayer
        className={'audio-player'}
        audioLists={audioList1}
        defaultPlayIndex={0}
        theme={'dark'}
        bounds={'body'}
        remove={true}
        showDownload={false}
        showLyric={true}
        isTrackColor={colorValue}
        playModeText = {{
          order: 'Play in Order',
          orderLoop: 'List loop',
          singleLoop: 'Single cycle',
          shufflePlay: 'Shuffle Playlist',
        }}
        drag={true}
        openText= {"Show Player"}
        showDestroy= {true}
        closeText= {"Close Player"}
        checkedText= {"open"}
        unCheckedText= {"Switch"}
        notContentText= {"暂无音乐"}
        panelTitle= {"Playlist"}
        getAudioInstance={getAudioInstance}
        onAudioPlay={onPlayHandler}
        onAudioPause={onPauseHandler}
        autoHiddenCover= {false}
      />
    </div>
  );
};
export default AudioPlayer;


