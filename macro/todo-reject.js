// Sakura Editor Macro
var Sakura = function () {};
Sakura.REPLACE_ALL_FLAG_WORDS = 0x0001; // 0000 0000 0000 0001 単語単位で探す
Sakura.REPLACE_ALL_FLAG_CASES = 0x0002; // 0000 0000 0000 0010 英大文字と小文字を区別する
Sakura.REPLACE_ALL_FLAG_REGEX = 0x0004; // 0000 0000 0000 0100 正規表現
Sakura.REPLACE_ALL_FLAG_SHOWM = 0x0008; // 0000 0000 0000 1000 見つからないときにメッセージを表示
Sakura.REPLACE_ALL_FLAG_CLOSE = 0x0010; // 0000 0000 0001 0000 置換ダイアログを自動的に閉じる
Sakura.REPLACE_ALL_FLAG_HEADS = 0x0020; // 0000 0000 0010 0000 先頭（末尾）から再検索する
Sakura.REPLACE_ALL_FLAG_CLIPB = 0x0040; // 0000 0000 0100 0000 0=ファイル全体 / 1=選択範囲
Sakura.REPLACE_ALL_FLAG_SELEC = 0x0080; // 0000 0000 1000 0000 0=ファイル全体 / 1=選択範囲
Sakura.REPLACE_ALL_FLAG_BEGIN = 0x0100; // 0000 0001 0000 0000 00=選択文字 / 01=選択始点挿入 / 10=選択終点追加
Sakura.REPLACE_ALL_FLAG_ENDAD = 0x0200; // 0000 0010 0000 0000 00=選択文字 / 01=選択始点挿入 / 10=選択終点追加
Sakura.ReplaceAll = function (search, replace, flags) {
  Editor.ReplaceAll(search, replace, flags);
};

var GO_LINE_TOP_FLAG_IGNORESPACES = 0x1; // 0001
var GO_LINE_TOP_FLAG_NOUSE        = 0x2; // 0010
var GO_LINE_TOP_FLAG_ADDSELECTION = 0x4; // 0100
var GO_LINE_TOP_FLAG_EACHLINE     = 0x8; // 1000
Editor.GoLineTop(GO_LINE_TOP_FLAG_IGNORESPACES | GO_LINE_TOP_FLAG_EACHLINE);
Editor.GoLineEnd_Sel();


(function($) {
  $.ReplaceAll("^([\\s\u3000]*)\u2610", "\\1\u2612", $.REPLACE_ALL_FLAG_REGEX | $.REPLACE_ALL_FLAG_SELEC);
})(Sakura);
