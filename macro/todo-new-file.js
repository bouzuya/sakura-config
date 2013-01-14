
var padLeft = function(s, n, c) {
  var s = s.toString();
  var r = "";
  var i, m;
  for (i = 0, m = n - s.length; i < m; i++) {
    r += c;
  }
  return r + s;
};

var getYYYYMMDD = function () {
  var today = new Date();
  var y = padLeft(today.getYear(), 2, "0");
  var m = padLeft(today.getMonth() + 1, 2, "0");
  var d = padLeft(today.getDate(), 2, "0");
  return y + m + d;
};

var file = "C:\\logs\\" + getYYYYMMDD() + ".txt";
Editor.FileOpen(file);

var FILE_SAVE_AS_FLAG_CHARSET_SHIFT_JIS  = 0;
var FILE_SAVE_AS_FLAG_CHARSET_JIS        = 1;
var FILE_SAVE_AS_FLAG_CHARSET_EUC        = 2;
var FILE_SAVE_AS_FLAG_CHARSET_UNICODE    = 3;
var FILE_SAVE_AS_FLAG_CHARSET_UTF8       = 4;
var FILE_SAVE_AS_FLAG_CHARSET_UTF7       = 5;
var FILE_SAVE_AS_FLAG_CHARSET_UNICODE_BE = 6;
var FILE_SAVE_AS_FLAG_CHARSET_INHERIT    = 99;
var FILE_SAVE_AS_FLAG_NEWLINE_INHERIT    = 0;
var FILE_SAVE_AS_FLAG_NEWLINE_CRLF       = 1;
var FILE_SAVE_AS_FLAG_NEWLINE_LF         = 2;
var FILE_SAVE_AS_FLAG_NEWLINE_CR         = 3;

Editor.FileSaveAs(file, FILE_SAVE_AS_FLAG_CHARSET_UTF8, FILE_SAVE_AS_FLAG_NEWLINE_CRLF);
