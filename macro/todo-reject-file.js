// Sakura Editor Macro

var GO_LINE_TOP_FLAG_IGNORESPACES = 0x1; // 0001
var GO_LINE_TOP_FLAG_NOUSE        = 0x2; // 0010
var GO_LINE_TOP_FLAG_ADDSELECTION = 0x4; // 0100
var GO_LINE_TOP_FLAG_EACHLINE     = 0x8; // 1000

var REPLACE_ALL_FLAG_REGEXP = 0x04; // 0000 0100 単語単位で探す
var REPLACE_ALL_FLAG_SELECT = 0x80; // 1000 0000 0=ファイル全体 / 1=選択範囲
Editor.ReplaceAll("^([\\s\u3000]*)\u2610", "\\1\u2612", REPLACE_ALL_FLAG_REGEXP);

