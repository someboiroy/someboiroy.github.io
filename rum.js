// Radom Gif on refresh

var gifs = [],
index = 0;
gifs[0] = "gifs/0.gif";
gifs[1] = "gifs/1.gif"; gifs[2] = "gifs/2.gif"; gifs[3] = "gifs/3.gif";
gifs[4] = "gifs/4.gif"; gifs[5] = "gifs/5.gif"; gifs[6] = "gifs/6.gif";
gifs[7] = "gifs/7.gif"; gifs[8] = "gifs/8.gif"; gifs[9] = "gifs/9.gif";
gifs[10] = "gifs/10.gif"; gifs[11] = "gifs/11.gif"; gifs[12] = "gifs/12.gif";
gifs[13] = "gifs/13.gif"; gifs[14] = "gifs/14.gif"; gifs[15] = "gifs/15.gif";
gifs[16] = "gifs/16.gif"; gifs[17] = "gifs/17.gif"; gifs[18] = "gifs/18.gif";
gifs[19] = "gifs/19.gif"; gifs[20] = "gifs/20.gif"; gifs[21] = "gifs/21.gif";
gifs[22] = "gifs/22.gif"; gifs[23] = "gifs/23.gif"; gifs[24] = "gifs/24.gif";
gifs[25] = "gifs/25.gif"; gifs[26] = "gifs/26.gif"; gifs[27] = "gifs/27.gif";
gifs[28] = "gifs/28.gif"; gifs[29] = "gifs/29.gif"; gifs[30] = "gifs/30.gif";
gifs[31] = "gifs/31.gif"; gifs[32] = "gifs/32.gif"; gifs[33] = "gifs/33.gif";
gifs[34] = "gifs/34.gif"; gifs[35] = "gifs/35.gif"; gifs[36] = "gifs/36.gif";
gifs[37] = "gifs/37.gif"; gifs[38] = "gifs/38.gif"; gifs[39] = "gifs/39.gif";
gifs[40] = "gifs/40.gif"; gifs[41] = "gifs/41.gif"; gifs[42] = "gifs/42.gif";
gifs[43] = "gifs/43.gif"; gifs[44] = "gifs/44.gif"; gifs[45] = "gifs/45.gif";
gifs[46] = "gifs/46.gif"; gifs[47] = "gifs/47.gif"; gifs[48] = "gifs/48.gif";
gifs[49] = "gifs/49.gif"; gifs[50] = "gifs/50.gif";


index = Math.floor(Math.random() * gifs.length);
indexTotal = gifs.length;
document.body.style.background = "url('"+gifs[index]+"') center";
document.getElementById("download").href = ""+gifs[index]+"";
document.getElementById("download").download = ""+[index]+" of "+[indexTotal];
