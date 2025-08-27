// 元のscript.jsから問題の配列をコピー
const questions = [
    {
        correctAnswer: "01. 時計じかけの摩天楼",
        songUrl: "audio/01.mp3",
    },
    {
        correctAnswer: "02. 14番目の標的",
        songUrl: "audio/02.mp3",
    },
    {
        correctAnswer: "03. 世紀末の魔術師",
        songUrl: "audio/03.mp3",
    },
    {
        correctAnswer: "04. 瞳の中の暗殺者",
        songUrl: "audio/04.mp3",
    },
    {
        correctAnswer: "05. 天国へのカウントダウン",
        songUrl: "audio/05.mp3",
    },
    {
        correctAnswer: "06. ベイカー街の亡霊",
        songUrl: "audio/06.mp3",
    },
    {
        correctAnswer: "07. 迷宮の十字路",
        songUrl: "audio/07.mp3",
    },
    {
        correctAnswer: "08. 銀翼の奇術師",
        songUrl: "audio/08.mp3",
    },
    {
        correctAnswer: "09. 水平線上の陰謀",
        songUrl: "audio/09.mp3",
    },
    {
        correctAnswer: "10. 探偵たちの鎮魂歌",
        songUrl: "audio/10.mp3",
    },
    {
        correctAnswer: "11. 紺碧の棺",
        songUrl: "audio/11.mp3",
    },
    {
        correctAnswer: "12. 戦慄の楽譜",
        songUrl: "audio/12.mp3",
    },
    {
        correctAnswer: "13. 漆黒の追跡者",
        songUrl: "audio/13.mp3",
    },
    {
        correctAnswer: "14. 天空の難破船",
        songUrl: "audio/14.mp3",
    },
    {
        correctAnswer: "15. 沈黙の15分",
        songUrl: "audio/15.mp3",
    },
    {
        correctAnswer: "16. 11人目のストライカー",
        songUrl: "audio/16.mp3",
    },
    {
        correctAnswer: "17. 絶海の探偵",
        songUrl: "audio/17.mp3",
    },
    {
        correctAnswer: "18. 異次元の狙撃手",
        songUrl: "audio/18.mp3",
    },
    {
        correctAnswer: "19. 業火の向日葵",
        songUrl: "audio/19.mp3",
    },
    {
        correctAnswer: "20. 純黒の悪夢",
        songUrl: "audio/20.mp3",
    },
    {
        correctAnswer: "21. から紅の恋歌",
        songUrl: "audio/21.mp3",
    },
    {
        correctAnswer: "22. ゼロの執行人",
        songUrl: "audio/22.mp3",
    },
    {
        correctAnswer: "23. 紺青の拳",
        songUrl: "audio/23.mp3",
    },
    {
        correctAnswer: "24. 緋色の弾丸",
        songUrl: "audio/24.mp3",
    },
    {
        correctAnswer: "25. ハロウィンの花嫁",
        songUrl: "audio/25.mp3",
    },
    {
        correctAnswer: "26. 黒鉄の魚影",
        songUrl: "audio/26.mp3",
    },
    {
        correctAnswer: "27. 100万ドルの五稜星",
        songUrl: "audio/27.mp3",
    },
    {
        correctAnswer: "28. 隻眼の残像",
        songUrl: "audio/28.mp3",
    },
];

// ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {
    const songListContainer = document.getElementById('song-list-container');
    const audioPlayer = document.getElementById('audio-player');
    let currentlyPlayingButton = null; // 現在再生中のボタンを管理する変数

    // 曲のリストからボタンを生成してページに追加
    questions.forEach(song => {
        const button = document.createElement('button');
        button.textContent = song.correctAnswer;
        
        // ボタンにクリックイベントを追加
        button.addEventListener('click', () => {
            // もしクリックされたボタンがすでに再生中なら、再生を停止
            if (currentlyPlayingButton === button) {
                audioPlayer.pause();
                button.classList.remove('playing');
                currentlyPlayingButton = null;
            } else {
                // 他の曲が再生中であれば、そのボタンのスタイルを元に戻す
                if (currentlyPlayingButton) {
                    currentlyPlayingButton.classList.remove('playing');
                }

                // 新しい曲を再生
                audioPlayer.src = song.songUrl;
                audioPlayer.play().catch(error => console.error("Audio Playback Error:", error));
                
                // クリックされたボタンを再生中としてマーク
                button.classList.add('playing');
                currentlyPlayingButton = button;
            }
        });
        songListContainer.appendChild(button);
    });

    // 曲の再生が自然に終了したときに、ボタンのスタイルを元に戻す
    audioPlayer.addEventListener('ended', () => {
        if (currentlyPlayingButton) {
            currentlyPlayingButton.classList.remove('playing');
            currentlyPlayingButton = null;
        }
    });
});