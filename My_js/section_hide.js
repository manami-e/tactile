//ボタン要素を取得
let hideBtn = document.getElementById('btn-min');
let showBtn = document.getElementById('btn-max');

//表示・非表示を切り替える要素を取得
let section1 = document.getElementById('section_draw');
let section2 = document.getElementById('section_stamp');
let section3 = document.getElementById('section_braille');
let section4 = document.getElementById('section_setting');
let section5 = document.getElementById('section_layer');

//styleのdisplayを非表示に変更する関数
let hideElement = (el) => {
    el.style.display = 'none';
}

//styleのdisplayを表示に変更する関数
let showElement = (el) => {
    el.style.display = '';
}

//リボン最小化関数をボタンクリック時に実行
hideBtn.addEventListener('click', () => {
    hideElement(section1);
    hideElement(section2);
    hideElement(section3);
    hideElement(section4);
    hideElement(section5);
}, false);

//リボン最大化関数をボタンクリック時に実行
showBtn.addEventListener('click', () => {
    showElement(section1);
    showElement(section2);
    showElement(section3);
    showElement(section4);
    showElement(section5);
}, false);