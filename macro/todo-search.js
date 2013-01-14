// Sakura Editor Macro 

var main = function () {
  var GREP_FLAG_0001 = 0x0001; // 0000 0001 �T�u�t�H���_�������������
  var GREP_FLAG_0002 = 0x0002; // 0000 0010 - No Use -
  var GREP_FLAG_0004 = 0x0004; // 0000 0100 �p�啶���Ə���������ʂ���
  var GREP_FLAG_0008 = 0x0008; // 0000 1000 ���K�\��
  var GREP_FLAG_0010 = 0x0010; // 0001 0000 �����R�[�h�Z�b�g�����I��
  var GREP_FLAG_0020 = 0x0020; // 0010 0000 0=�Y������ / 1=�Y���s
  var GREP_FLAG_0040 = 0x0040; // 0100 0000 0=�m�[�}�� / 1=�t�@�C����
  var GREP_FLAG_0080 = 0x0080; // 1000 0000 �����R�[�h�Z�b�g
  var GREP_FLAG_0000 = 0x0000; // 0000 0000 Shift_JIS
  var GREP_FLAG_0100 = 0x0100; // 0000 0001 JIS
  var GREP_FLAG_0200 = 0x0200; // 0000 0010 EUC
  var GREP_FLAG_0300 = 0x0300; // 0000 0011 Unicode
  var GREP_FLAG_0400 = 0x0400; // 0000 0100 UTF-8
  var GREP_FLAG_0500 = 0x0500; // 0000 0101 UTF-7
  var GREP_FLAG_0600 = 0x0600; // 0000 0110 UnicodeBE
  var GREP_FLAG_6300 = 0x6300; // 0110 0011 �����I��
  
  var query = "^[\s\u3000]*\u2610";
  var file = "*.txt";
  var dir = "C:\\logs";
  var flag = GREP_FLAG_0001 | GREP_FLAG_0008 | GREP_FLAG_0010 | GREP_FLAG_0020;
  Editor.Grep(query, file, dir, flag);
};

main();

