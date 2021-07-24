// 月日初期設定
window.onload = function init() {
    // 月の初期設定
    const selectMonth = document.getElementById('selectMonth');
  
    // 月の選択肢をセット
    for (let m = 1; m <= 12; m++) { 
      const option = document.createElement('option');
      option.value = m;
      option.innerText = m + "月";
      selectMonth.appendChild(option);
    }
  
    // 日の初期設定
    const selectDay = document.getElementById('selectDay');
    changeMonth();
  }

  // 月を選択したら日の選択肢を生成する
function changeMonth() {
    const selectedDay = parseInt(document.getElementById('selectDay').value,10);
    let maxDay = 31;
    const selectedMonth = parseInt(document.getElementById('selectMonth').value,10);
    if([2, 4, 6, 9, 11].includes(selectedMonth)) {
      // 小の月は30日
      maxDay = 30;
      // 2月の場合28日
      if(selectedMonth == 2) {
        maxDay = 28;
      }
    }
  
    const selectDay = document.getElementById('selectDay');
    selectDay.innerHTML = '';
    for(let d=1; d<=maxDay; d++) {
      const option = document.createElement('option');
      option.value = d;
      option.innerText = d + "日";
      selectDay.appendChild(option);
    }
    // 選択日が月の最終日以前なら選択日、超過なら最終日をセットする
    selectDay.value = selectedDay <= maxDay ? selectedDay : maxDay;
  }

  // 誕生日→星座を取得
function uranau(month,day) {
    var seiza = ""
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) seiza = "牡羊座"
    if ((month == 4 && day >= 20) || (month == 5 && day <=20)) seiza = "牡牛座"
    if ((month == 5 && day >= 21) || (month == 6 && day <=21)) seiza = "双子座"
    if ((month == 6 && day >= 22) || (month == 7 && day <=22)) seiza = "蟹座"
    if ((month == 7 && day >= 23) || (month == 8 && day <=22)) seiza = "獅子座"
    if ((month == 8 && day >= 23) || (month == 9 && day <=22)) seiza = "乙女座"
    if ((month == 9 && day >= 23) || (month == 10 && day <=23)) seiza = "天秤座"
    if ((month == 10 && day >= 24) || (month == 11 && day <=21)) seiza = "蠍座"
    if ((month == 11 && day >= 22) || (month == 12 && day <=21)) seiza = "射手座"
    if ((month == 12 && day >= 22) || (month == 1 && day <=19)) seiza = "山羊座"
    if ((month == 1 && day >= 20) || (month == 2 && day <=18)) seiza = "水瓶座"
    if ((month == 2 && day >= 19) || (month == 3 && day <=20)) seiza = "魚座"

    // 運勢一覧
  unsei = [
    "超ラッキー",
    "まあまあラッキー",
    "可もなく不可もなく",
    "ちょっとブルー",
    "不運な予感",
    "大殺界",
]
// ラッキーアイテム一覧
item = [
  "サングラス",
  "水筒",
  "トートバッグ",
  "スニーカー",
  "日傘",
  "自転車",
]
// ラッキーメニュー一覧
menu = [
  "カレーライス",
  "ラーメン",
  "ハンバーグ",
  "焼き肉",
  "唐揚げ",
  "お寿司",
]

uranaiKekka.innerHTML = "";

  todays_unsei = unsei[Math.floor(Math.random() * unsei.length)];
  lucky_item = item[Math.floor(Math.random() * item.length)];
  lucky_menu = menu[Math.floor(Math.random() * menu.length)];
  
  message = seiza + "のあなたの今日の運勢は、\n\n 『" + todays_unsei + "』\n\n" + 
  lucky_item + "を持っていると運気が上がるかも。\n" + 
  "今日のラッキーメニューは" + lucky_menu + "です。";
  uranaiKekka.innerHTML = message;
}
