const words = ['pride', 'prejudice', 'sense', 'sensibility', 'lovesick', 'demian', 'metamorphosis', 'stranger',
                'rebecca', 'clockwork', 'orange', 'crime', 'punishment'];
const elements = ['.guillotine1', '.guillotine2', '.guillotine3', '.guillotine4', '.head',
                    '.body', '.arm1', '.arm2', '.leg1', '.leg2', '.guillotine5'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let correctCount = 0;   // 맞은 개수
let wrongCount = 0;     // 틀린 개수
let wordSet = null;     // 정답 단어의 set
let correctSet = null;  // 내가 맞힌 글자의 set

function initialize() {
    // 변수 초깃값으로 되돌림
    selectedWord = words[Math.floor(Math.random() * words.length)];
    correctCount = 0;
    wrongCount = 0;
    wordSet = new Set(selectedWord);
    correctSet = new Set();
    console.log(wordSet);

    // elements들 다시 안 보이게 설정
    for (let i = 0; i < 11; i++) {
        document.querySelector('.wordUnderBar'+i).style.display = 'none';
        document.querySelector('.c'+i).style.display = 'none';
    }
    for (let i = 0; i < elements.length; i++) {
        document.querySelector(elements[i]).style.display = 'none';
    }

    // word underbar 해당 단어 길이만큼만 표시
    console.log(selectedWord)
    for (let i = 0; i < selectedWord.length; i++) {
        document.querySelector('.wordUnderBar'+i).style.display = 'block';
    }
}

initialize();

window.addEventListener('keydown', (e) => {
    switch(e.key){
        // 예외처리
        case "Down":
        case "ArrowDown":
        case "Up":
        case "ArrowUp":
        case "Left":
        case "ArrowLeft":
        case "Right":
        case "ArrowRight":
        case "Enter":   // 여긴 return이 아니군..
        case "Esc":
        case "Escape":
        case "Control":
        case "Shift":
        case "Alt":
        case ";":
        case "'":
        case "`":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            break;
        default:
            let pos = selectedWord.indexOf(e.key);
            if (pos != -1)  isCharacterInWord(selectedWord, e.key, pos);
            else    isCharacterNotInWord()
    }
})


function isCharacterInWord(selectedWord, c, pos) {
    do {    // 해당 알파벳이 여러 자리에 있을 수도 있으므로 do-while 문
        const q = document.querySelector('.c'+pos);
        q.textContent = c.toUpperCase();
        q.style.display = 'block';
        pos = selectedWord.indexOf(c, pos + 1);
        correctSet.add(c);
        console.log(correctSet);
    } while(pos != -1);
    if (correctSet.size == wordSet.size){
        (async ()=>{    // 바로 alert를 출력하면 마지막 단어가 표시가 안되고 출력되는 현상 발생 -> alert 출력을 지연시킴
            await sleep(100);
                alert('Congratulations!\n단어를 성공적으로 맞히셨습니다!');
                initialize();
        })();
    }
}

function isCharacterNotInWord() {
    document.querySelector(elements[wrongCount++]).style.display = 'block';
    // 단어 맞추기 실패 -> 메세지 출력
    if (wrongCount == 11){  // 11 == elements.length
        (async ()=>{    // 출력 지연
            await sleep(100);
                alert('아쉽네요...\n다시 도전해보세요!');
                initialize();
        })();
    }
}

function sleep(msec){
    return new Promise(resolve => setTimeout(resolve, msec));
}