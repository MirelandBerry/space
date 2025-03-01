const sounds = {
    'bit': 'bit.mp3',
    'bat': 'bat.mp3',
    'bet': 'bet.mp3',
    'boat': 'boat.mp3',
    'boot': 'boot.mp3',
    'but': 'but.mp3',
    'bait': 'bait.mp3',
    'beat': 'beat.mp3',
    'bert': 'bert.mp3',
    'bart': 'bart.mp3'
};

// 播放对应单词的音频
function playSound(word) {
    const audio = new Audio(`sounds/${sounds[word]}`);
    audio.play();
}

// 播放音频序列
function playSequence() {
    const sequence = document.getElementById('input-numbers').value.split('');
    const delay = parseInt(document.getElementById('delay').value);
    
    // 隐藏数字输入框
    document.getElementById('input-numbers').style.display = 'none';
    
    sequence.forEach((num, index) => {
        setTimeout(() => {
            const word = getWordByIndex(num);
            playSound(word);
        }, index * delay);
    });
}

// 根据数字索引获取对应单词
function getWordByIndex(index) {
    const wordList = ['bit', 'bat', 'bet', 'boat', 'boot', 'but', 'bait', 'beat', 'bert', 'bart'];
    return wordList[index - 1];
}
