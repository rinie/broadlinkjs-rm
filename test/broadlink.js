'use strict';
const broadlink = require('../index.js');

/*

OOK/RF in Nodejs ES6
Formats
Level 0: timings
Level 1: index timings sorted or not
Support constant p, constant s and ps

Level 2: P/S pair timings ? S01T he853 timings Sync P/S, 0 P/S... x P/S en dan Trail P/S
Level 3: Manchester/Kaku etc encodings

Level 7: kaku C3 on
Level 7: rc6 TV on

psi BaseTime Repeat nTicks ticks nPsi psi
Or
p BaseTime, Repeat Count [pulses]

repeat wordt FrameCount om 1 te beginnen

2 lines A B or A | B?, nee psi als string ', ticks als array [] en de andere 2 er voor. p of psi als start
psi ook433 32.84 0 4 [13, 36, 362, 1500] 144 '100101010101010110010101010101011001100101020101011001010101010101100101010101010110011001010201010110010101010101011001010101010101100110010103'
p 32.84 0 144 [36, ...]


device ready rm2 { address: '192.168.178.77', family: 'IPv4', port: 80, size: 128 } <Buffer b4 43 0d c7 34 dd>
get temp 21.6
Data { signalType: 'ook433',
  frameCount: 1,
  count: 342,
  ticks: [ 11, 44, 88, 336, 1500, [length]: 5 ],
  counts: [ 250, 81, 2, 2, 1, [length]: 5 ],
  micros: [ 335, 1340, 2680, 10232, 45680, [length]: 5 ],
  psi: '000001010000010001000100010001010001000100000101000001000100010001000103020001000100010001010001000100000101000001000101000100010001000001010000010001000100010001010001000100000101000001000100010001000103020001000100010001010001000100000101000001000101000100010001000001010000010001000100010001010001000100000101000001000100010001000104',
  psx: '54444511544422 3 44 2 44111144414114444141111144414111110 3 0 2 111144414114444141111144414111110 4' }
Data { signalType: 'ook433',
  frameCount: 1,
  count: 832,
  ticks: [ 10, 44, 89, 338, 1500, [length]: 5 ],
  counts: [ 607, 198, 6, 6, 1, [length]: 5 ],
  micros: [ 305, 1340, 2710, 10293, 45680, [length]: 5 ],
  psi: '00010001000100010100000103020001000100010001010001000100000101000001000101000100010001000001010000010001000100010001010001000100000100010001000100010100000103020001000100010001010001000100000101000001000101000100010001000001010000010001000100010001010001000100000100010001000100010100000103020001000100010001010001000100000101000001000101000100010001000001010000010001000100010001010001000100000100010001000100010100000103020001000100010001010001000100000101000001000101000100010001000001010000010001000100010001010001000100000100010001000100010100000103020001000100010001010001000100000101000001000101000100010001000001010000010001000100010001010001000100000100010001000100010100000103020001000100010001010001000100000101000001000101000100010001000001010000010001000100010001010001000100000100010001000100010100000104',
  psx: '1111410 3 0 2 111144414114444141111144411111410 3 0 2 111144414114444141111144411111410 3 0 2 111144414114444141111144411111410 3 0 2 111144414114444141111144411111410 3 0 2 111144414114444141111144411111410 3 0 2 111144414114444141111144411111410 4' }
^C
C:\temp\node\rinie>node broadlink.js
device ready rm2 { address: '192.168.178.77', family: 'IPv4', port: 80, size: 128 } <Buffer b4 43 0d c7 34 dd>
get temp 21.6
Data { signalType: 'ir',
  frameCount: 1,
  count: 96,
  ticks: [ 22, 53, 73, 142, 297, 1556, 3129, 3333, [length]: 8 ],
  counts: [ 59, 9, 3, 1, 4, 1, 2, 1, [length]: 8 ],
  micros: [ 670, 1614, 2223, 4324, 9045, 47386, 95289, 101502, [length]: 8 ],
  psi: '43000000000000000000000000010000000000000000000000010101010101010105420642064207',
  psx: ' 43 000400055550 542 0 642 0 642 0 7' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 96,
  ticks: [ 20, 54, 73, 145, 295, 1556, 3129, 3333, [length]: 8 ],
  counts: [ 59, 9, 3, 1, 4, 1, 2, 1, [length]: 8 ],
  micros: [ 609, 1644, 2223, 4416, 8984, 47386, 95289, 101502, [length]: 8 ],
  psi: '43000000000000000000000000010000000000000000000000010101010101010105420642064207',
  psx: ' 43 000400055550 542 0 642 0 642 0 7' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 88,
  ticks: [ 20, 54, 72, 144, 295, 1556, 3129, 3333, [length]: 8 ],
  counts: [ 58, 9, 2, 1, 3, 1, 1, 1, [length]: 8 ],
  micros: [ 609, 1644, 2193, 4385, 8984, 47386, 95289, 101502, [length]: 8 ],
  psi: '4300000000000000000000000001000000000000000000000001010101010101010542064207',
  psx: ' 43 000400055550 542 0 642 0 7' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 88,
  ticks: [ 20, 55, 73, 144, 295, 1556, 3129, 3333, [length]: 8 ],
  counts: [ 58, 9, 2, 1, 3, 1, 1, 1, [length]: 8 ],
  micros: [ 609, 1675, 2223, 4385, 8984, 47386, 95289, 101502, [length]: 8 ],
  psi: '4300000000000000000000000001000000000000000000000001010101010101010542064207',
  psx: ' 43 000400055550 542 0 642 0 7' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 80,
  ticks: [ 22, 54, 71, 144, 296, 1556, 3333, [length]: 7 ],
  counts: [ 57, 9, 1, 1, 2, 1, 1, [length]: 7 ],
  micros: [ 670, 1644, 2162, 4385, 9014, 47386, 101502, [length]: 7 ],
  psi: '430000000000000000000000000100000001010000000000000000010101010101054206',
  psx: ' 43 000405005550 542 0 6' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 80,
  ticks: [ 20, 56, 72, 145, 295, 1558, 3333, [length]: 7 ],
  counts: [ 57, 9, 1, 1, 2, 1, 1, [length]: 7 ],
  micros: [ 609, 1705, 2193, 4416, 8984, 47447, 101502, [length]: 7 ],
  psi: '430000000000000000000000000100000000000100000000000101000101010101054206',
  psx: ' 43 000404051550 542 0 6' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 80,
  ticks: [ 20, 56, 74, 147, 292, 1559, 3333, [length]: 7 ],
  counts: [ 57, 9, 1, 1, 2, 1, 1, [length]: 7 ],
  micros: [ 609, 1705, 2254, 4477, 8892, 47477, 101502, [length]: 7 ],
  psi: '430000000000000000000000000100000001000100000000000001000101010101054206',
  psx: ' 43 0004044011550 542 0 6' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 80,
  ticks: [ 20, 56, 74, 146, 293, 1558, 3333, [length]: 7 ],
  counts: [ 57, 9, 1, 1, 2, 1, 1, [length]: 7 ],
  micros: [ 609, 1705, 2254, 4446, 8923, 47447, 101502, [length]: 7 ],
  psi: '430000000000000000000000000100000001000100000000000001000101010101054206',
  psx: ' 43 0004044011550 542 0 6' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 84,
  ticks: [ 16, 30, 45, 87, 2747, 3333, [length]: 6 ],
  counts: [ 64, 8, 4, 2, 1, 1, [length]: 6 ],
  micros: [ 487, 914, 1370, 2649, 83656, 101502, [length]: 6 ],
  psi: '31010000220000000000000000000000100100043101000022000000000000000000000010010005',
  psx: ' 3 50 22 5000028 43 450 22 45000028 5' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 132,
  ticks: [ 17, 31, 89, 2748, 3333, [length]: 5 ],
  counts: [ 105, 15, 3, 2, 1, [length]: 5 ],
  micros: [ 518, 944, 2710, 83686, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000000000013210100000110000000000000000000000000000013210100000110000000000000000000000000000014',
  psx: ' 2 A0C0001 32 A0C0001 32 A0C0001 4' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 84,
  ticks: [ 19, 31, 48, 90, 2745, 3333, [length]: 6 ],
  counts: [ 64, 8, 4, 2, 1, 1, [length]: 6 ],
  micros: [ 579, 944, 1462, 2741, 83595, 101502, [length]: 6 ],
  psi: '31010000220000000000000000000000000011043101000022000000000000000000000000001105',
  psx: ' 3 50 22 5000006 43 350 22 35000006 5' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 44,
  ticks: [ 19, 31, 89, 3333, [length]: 4 ],
  counts: [ 34, 6, 1, 1, [length]: 4 ],
  micros: [ 579, 944, 2710, 101502, [length]: 4 ],
  psi: '210100000110000000000000000000000000001103',
  psx: ' 2 A0C0006 3' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 84,
  ticks: [ 17, 31, 42, 46, 90, 2745, 3333, [length]: 7 ],
  counts: [ 66, 6, 2, 2, 2, 1, 1, [length]: 7 ],
  micros: [ 518, 944, 1279, 1401, 2741, 83595, 101502, [length]: 7 ],
  psi: '41010000320000000000000000000000000010054101000032000000000000000000000000001006',
  psx: ' 4 50 32 5000004 54 250 32 25000004 6' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 88,
  ticks: [ 16, 30, 87, 2747, 3333, [length]: 5 ],
  counts: [ 68, 12, 2, 1, 1, [length]: 5 ],
  micros: [ 487, 914, 2649, 83656, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000000110003210100000110000000000000000000000000110004',
  psx: ' 2 A0C00018 32 A0C00018 4' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 80,
  ticks: [ 17, 31, 45, 89, 2745, 3333, [length]: 6 ],
  counts: [ 58, 10, 4, 2, 1, 1, [length]: 6 ],
  micros: [ 518, 944, 1370, 2710, 83595, 101502, [length]: 6 ],
  psi: '3101000022000000000000000000000000111431010000220000000000000000000000001115',
  psx: ' 3 50 22 5000007 43 3D0 22 3D000007 5' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 88,
  ticks: [ 18, 31, 88, 92, 2745, 3333, [length]: 6 ],
  counts: [ 68, 12, 1, 1, 1, 1, [length]: 6 ],
  micros: [ 548, 944, 2680, 2802, 83595, 101502, [length]: 6 ],
  psi: '310100000110000000000000000000000000100104210100000110000000000000000000000000100105',
  psx: ' 3 A0C00012 42 A0C00012 5' }
Data { signalType: 'ook433',
  frameCount: 1,
  count: 166,
  ticks: [ 13, 36, 363, 1500, [length]: 4 ],
  counts: [ 79, 75, 3, 1, [length]: 4 ],
  micros: [ 396, 1096, 11055, 45680, [length]: 4 ],
  psi: '10010102010101100101010101010110010101010101011001100101020101011001010101010101100101010101010110011001010201010110010101010101011001010101010101100110010103',
  psx: '4A 2 4A5655565556650 2 5655565556650 2 5655565556650 3' }
Data { signalType: 'ook433',
  frameCount: 1,
  count: 132,
  ticks: [ 13, 37, 363, 1500, [length]: 4 ],
  counts: [ 63, 60, 2, 1, [length]: 4 ],
  micros: [ 396, 1127, 11055, 45680, [length]: 4 ],
  psi: '010101010101011001100101020101011001010101010101100101010101010110011001010201010110010101010101011001010101010101100110010103',
  psx: '5556650 2 5655565556650 2 5655565556650 3' }
Data { signalType: 'ook433',
  frameCount: 11,
  count: 52,
  ticks: [ 13, 37, 365, [length]: 3 ],
  counts: [ 25, 24, 1, [length]: 3 ],
  micros: [ 396, 1127, 11116, [length]: 3 ],
  psi: '01010110010101010101011001010101010101100110010102',
  psx: '5655565556650 2' }
Data { signalType: 'ook433',
  frameCount: 1,
  count: 198,
  ticks: [ 13, 37, 364, 1500, [length]: 4 ],
  counts: [ 95, 91, 3, 1, [length]: 4 ],
  micros: [ 396, 1127, 11085, 45680, [length]: 4 ],
  psi: '0101010101011001010101010101100110011002010101100101010101010110010101010101011001100110020101011001010101010101100101010101010110011001100201010110010101010101011001010101010101100110011003',
  psx: '555955594C 2 4C5655565556660 2 5655565556660 2 5655565556660 3' }
Data { signalType: 'ook433',
  frameCount: 1,
  count: 190,
  ticks: [ 13, 37, 365, 1500, [length]: 4 ],
  counts: [ 91, 87, 3, 1, [length]: 4 ],
  micros: [ 396, 1127, 11116, 45680, [length]: 4 ],
  psi: '01011001010101010101100110010102010101100101010101010110010101010101011001100101020101011001010101010101100101010101010110011001010201010110010101010101011001010101010101100110010103',
  psx: '5955594A 2 4A5655565556650 2 5655565556650 2 5655565556650 3' }
C:\temp\node\rinie>node broadlink.js
device ready rm2 { address: '192.168.178.77', family: 'IPv4', port: 80, size: 128 } <Buffer b4 43 0d c7 34 dd>
get temp 22.3
Data { signalType: 'ir',
  frameCount: 1,
  count: 132,
  ticks: [ 16, 30, 88, 2747, 3333, [length]: 5 ],
  counts: [ 102, 18, 3, 2, 1, [length]: 5 ],
  micros: [ 487, 914, 2680, 83656, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000010010003210100000110000000000000000000000010010003210100000110000000000000000000000010010004',
  psx: '2 A0C00048 32 A0C00048 32 A0C00048 4' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 84,
  ticks: [ 15, 30, 45, 89, 2746, 3333, [length]: 6 ],
  counts: [ 64, 8, 4, 2, 1, 1, [length]: 6 ],
  micros: [ 457, 914, 1370, 2710, 83625, 101502, [length]: 6 ],
  psi: '31010000220000000000000000000000100100043101000022000000000000000000000010010005',
  psx: '3 50 22 5000028 43 450 22 45000028 5' }
Data { signalType: 'ir',
  frameCount: 1,
  count: 132,
  ticks: [ 17, 31, 89, 2747, 3333, [length]: 5 ],
  counts: [ 102, 18, 3, 2, 1, [length]: 5 ],
  micros: [ 518, 944, 2710, 83656, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000010010003210100000110000000000000000000000010010003210100000110000000000000000000000010010004',
  psx: '2 A0C00048 32 A0C00048 32 A0C000484' }
^C

rf
rf433
ook433 synonyms

ir

ms wordt us

C:\temp\node\rinie>node broadlink.js
Data { signalType: 'ook433',
  repeat: 0,
  count: 150,
  ticks: [ 13, 36, 362, 1500, [length]: 4 ],
  ms: [ 396, 1096, 11024, 45680, [length]: 4 ],
  psi: '100101010101010110010101010101011001100101020101011001010101010101100101010101010110011001010201010110010101010101011001010101010101100110010103' }
^C
C:\temp\node\rinie>node broadlink.js
device ready rm2 { address: '192.168.178.77', family: 'IPv4', port: 80, size: 128 } <Buffer b4 43 0d c7 34 dd>
get temp 21
Data { signalType: 'ook433',
  repeat: 6,
  count: 52,
  ticks: [ 13, 37, 364, [length]: 3 ],
  ms: [ 396, 1127, 11085, [length]: 3 ],
  psi: '01010110010101010101011001010101010101100110010102' }
Data { signalType: 'ook433',
  repeat: 28,
  count: 52,
  ticks: [ 13, 37, 364, [length]: 3 ],
  ms: [ 396, 1127, 11085, [length]: 3 ],
  psi: '01010110010101010101011001010101010101100110010102' }
Data { signalType: 'ook433',
  repeat: 11,
  count: 52,
  ticks: [ 13, 37, 365, [length]: 3 ],
  ms: [ 396, 1127, 11116, [length]: 3 ],
  psi: '01010110010101010101011001010101010101100110010102' }
Data { signalType: 'ir',
  repeat: 0,
  count: 130,
  ticks: [ 8, 16, 30, 45, 89, 792, 1947, 2747, 3333, [length]: 9 ],
  ms: [ 244, 487, 914, 1370, 2710, 24119, 59293, 83656, 101502, [length]: 9 ],
  psi: '42121111331111111111111111111111111111274212111133111111111111111111111111111126054212111133111111111111111111111111111128' }
Data { signalType: 'ir',
  repeat: 0,
  count: 136,
  ticks: [ 8, 16, 30, 87, 2747, 3201, 3333, [length]: 7 ],
  ms: [ 244, 487, 914, 2649, 83656, 97482, 101502, [length]: 7 ],
  psi: '32121111122111111111111111111111111111112432121111122111111111111111111111111111112432121111122111111111111111111111111111112506' }
Data { signalType: 'ir',
  repeat: 0,
  count: 126,
  ticks: [ 16, 30, 44, 87, 2747, 3333, [length]: 6 ],
  ms: [ 487, 914, 1340, 2649, 83656, 101502, [length]: 6 ],
  psi: '310100002200000000000000000000000000001431010000220000000000000000000000000000143101000022000000000000000000000000000015' }
Data { signalType: 'ir',
  repeat: 0,
  count: 132,
  ticks: [ 16, 30, 88, 2747, 3333, [length]: 5 ],
  ms: [ 487, 914, 2680, 83656, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000000000013210100000110000000000000000000000000000013210100000110000000000000000000000000000014' }
Data { signalType: 'ir',
  repeat: 0,
  count: 84,
  ticks: [ 16, 30, 45, 89, 2747, 3333, [length]: 6 ],
  ms: [ 487, 914, 1370, 2710, 83656, 101502, [length]: 6 ],
  psi: '31010000220000000000000000000000000011043101000022000000000000000000000000001105' }
Data { signalType: 'ir',
  repeat: 0,
  count: 88,
  ticks: [ 16, 30, 87, 2747, 3333, [length]: 5 ],
  ms: [ 487, 914, 2649, 83656, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000000001103210100000110000000000000000000000000001104' }
Data { signalType: 'ir',
  repeat: 0,
  count: 126,
  ticks: [ 16, 30, 44, 87, 2747, 3333, [length]: 6 ],
  ms: [ 487, 914, 1340, 2649, 83656, 101502, [length]: 6 ],
  psi: '310100002200000000000000000000000000100431010000220000000000000000000000000010043101000022000000000000000000000000001005' }
Data { signalType: 'ir',
  repeat: 0,
  count: 132,
  ticks: [ 16, 30, 87, 2747, 3333, [length]: 5 ],
  ms: [ 487, 914, 2649, 83656, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000000001003210100000110000000000000000000000000001003210100000110000000000000000000000000001004' }
Data { signalType: 'ir',
  repeat: 0,
  count: 126,
  ticks: [ 16, 30, 44, 87, 2747, 3333, [length]: 6 ],
  ms: [ 487, 914, 1340, 2649, 83656, 101502, [length]: 6 ],
  psi: '310100002200000000000000000000000000001431010000220000000000000000000000000000143101000022000000000000000000000000000015' }
^C
C:\temp\node\rinie>node broadlink.js
device ready rm2 { address: '192.168.178.77', family: 'IPv4', port: 80, size: 128 } <Buffer b4 43 0d c7 34 dd>
get temp 21.1
Data { signalType: 'ook433',
  repeat: 12,
  count: 52,
  ticks: [ 14, 37, 366, [length]: 3 ],
  counts: [ 25, 24, 1, [length]: 3 ],
  ms: [ 426, 1127, 11146, [length]: 3 ],
  psi: '01010110010101010101011001010101010101100110010102' }
Data { signalType: 'ir',
  repeat: 0,
  count: 88,
  ticks: [ 16, 31, 89, 2746, 3333, [length]: 5 ],
  counts: [ 70, 10, 2, 1, 1, [length]: 5 ],
  ms: [ 487, 944, 2710, 83625, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000000000013
        210100000110000000000000000000000000000014' }
Data { signalType: 'ir',
  repeat: 0,
  count: 88,
  ticks: [ 7, 16, 30, 45, 88, 333, 2747, 3333, [length]: 8 ],
  counts: [ 1, 64, 8, 4, 2, 1, 1, 1, [length]: 8 ],
  ms: [ 213, 487, 914, 1370, 2680, 10141, 83656, 101502, [length]: 8 ],
  psi: '4212111133111111111111111111111111112216421211113311111111111111111111111111221507' }
Data { signalType: 'ir',
  repeat: 0,
  count: 132,
  ticks: [ 16, 30, 87, 2748, 3333, [length]: 5 ],
  counts: [ 102, 18, 3, 2, 1, [length]: 5 ],
  ms: [ 487, 914, 2649, 83686, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000000001103210100000110000000000000000000000000001103210100000110000000000000000000000000001104' }
Data { signalType: 'ir',
  repeat: 0,
  count: 126,
  ticks: [ 17, 30, 45, 87, 2747, 3333, [length]: 6 ],
  counts: [ 96, 12, 6, 3, 2, 1, [length]: 6 ],
  ms: [ 518, 914, 1370, 2649, 83656, 101502, [length]: 6 ],
  psi: '310100002200000000000000000000000000110431010000220000000000000000000000000011043101000022000000000000000000000000001105' }
Data { signalType: 'ir',
  repeat: 0,
  count: 132,
  ticks: [ 16, 30, 88, 2747, 3333, [length]: 5 ],
  counts: [ 105, 15, 3, 2, 1, [length]: 5 ],
  ms: [ 487, 914, 2680, 83656, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000000001003210100000110000000000000000000000000001003210100000110000000000000000000000000001004' }
Data { signalType: 'ir',
  repeat: 0,
  count: 126,
  ticks: [ 16, 30, 44, 87, 2748, 3333, [length]: 6 ],
  counts: [ 99, 9, 6, 3, 2, 1, [length]: 6 ],
  ms: [ 487, 914, 1340, 2649, 83686, 101502, [length]: 6 ],
  psi: '310100002200000000000000000000000000001431010000220000000000000000000000000000143101000022000000000000000000000000000015' }
Data { signalType: 'ir',
  repeat: 0,
  count: 88,
  ticks: [ 16, 30, 87, 2747, 3333, [length]: 5 ],
  counts: [ 68, 12, 2, 1, 1, [length]: 5 ],
  ms: [ 487, 914, 2649, 83656, 101502, [length]: 5 ],
  psi: '210100000110000000000000000000000000001103210100000110000000000000000000000000001104' }
Data { signalType: 'ir',
  repeat: 0,
  count: 126,
  ticks: [ 16, 30, 46, 89, 2747, 3333, [length]: 6 ],
  counts: [ 99, 9, 6, 3, 2, 1, [length]: 6 ],
  ms: [ 487, 914, 1401, 2710, 83656, 101502, [length]: 6 ],
  psi: '310100002200000000000000000000000000100431010000220000000000000000000000000010043101000022000000000000000000000000001005' }
Data { signalType: 'ook433',
  repeat: 23,
  count: 52,
  ticks: [ 13, 37, 365, [length]: 3 ],
  counts: [ 25, 24, 1, [length]: 3 ],
  ms: [ 396, 1127, 11116, [length]: 3 ],
  psi: '01010110010101010101011001010101010101100110010102' }
Data { signalType: 'ook433',
  repeat: 22,
  count: 52,
  ticks: [ 13, 37, 366, [length]: 3 ],
  counts: [ 25, 24, 1, [length]: 3 ],
  ms: [ 396, 1127, 11146, [length]: 3 ],
  psi: '01010110010101010110010101010101010101100110010102' }
Data { signalType: 'ook433',
  repeat: 20,
  count: 52,
  ticks: [ 13, 37, 366, [length]: 3 ],
  counts: [ 25, 24, 1, [length]: 3 ],
  ms: [ 396, 1127, 11146, [length]: 3 ],
  psi: '01010110010101010101010101010101010101100110010102' }

RM mini.
Barbapappa 2x
Philips 2x
Humax 2x
Panasonic 2x
C:\temp\node\rinie>node broadlink.js
device ready rm2 { address: '192.168.178.53', family: 'IPv4', port: 80, size: 128 } <Buffer b4 43 0d cc 03 9a>
get temp 18
Data { signalType: 'ir',
  repeat: 0,
  pulseSpaceCount: 128,
  pulseSpace:
   [ { ps: 17, count: 8, ms: 518, index: 0 },
     { ps: 18, count: 11, ms: 548, index: 0 },
     { ps: 19, count: 12, ms: 579, index: 0 },
     { ps: 20, count: 22, ms: 609, index: 0 },
     { ps: 21, count: 3, ms: 640, index: 0, totalCount: 56 },
     { ps: 54, count: 6, ms: 1644, index: 1 },
     { ps: 55, count: 6, ms: 1675, index: 1 },
     { ps: 56, count: 2, ms: 1705, index: 1 },
     { ps: 57, count: 2, ms: 1736, index: 1, totalCount: 16 },
     { ps: 73, count: 6, ms: 2223, index: 2 },
     { ps: 74, count: 1, ms: 2254, index: 2, totalCount: 7 },
     { ps: 146, count: 1, ms: 4446, index: 3, totalCount: 1 },
     { ps: 303, count: 4, ms: 9227, index: 4 },
     { ps: 304, count: 2, ms: 9258, index: 4 },
     { ps: 305, count: 1, ms: 9288, index: 4 },
     { ps: 308, count: 1, ms: 9380, index: 4, totalCount: 8 },
     { ps: 1308, count: 1, ms: 39833, index: 5, totalCount: 1 },
     { ps: 3147, count: 1, ms: 95837, index: 6 },
     { ps: 3149, count: 4, ms: 95898, index: 6 },
     { ps: 3150, count: 1, ms: 95929, index: 6, totalCount: 6 },
     { ps: 3333, count: 1, ms: 101502, index: 7, totalCount: 1 },
     [length]: 21 ],
  pulseSpace2: '430000000000000000010101010101010100010001000000000100010001010101054206420642064206420642064207' }
  pulseSpace2: '43000000000000000001010101010101010001000100000000010001000101010106420842084208420842084208420842084208420705420709' }

  pulseSpace2: '430000000000000000010101010101010100010001000000000100010001010101054' }
  pulseSpace2: '430000000000000000010101010101010100010001000000000100010001010101064' }

Data { signalType: 'ir',
  repeat: 0,
  pulseSpaceCount: 168,
  pulseSpace:
   [ { ps: 10, count: 1, ms: 305, index: 0 },
     { ps: 11, count: 1, ms: 335, index: 0 },
     { ps: 17, count: 6, ms: 518, index: 0 },
     { ps: 18, count: 14, ms: 548, index: 0 },
     { ps: 19, count: 14, ms: 579, index: 0 },
     { ps: 20, count: 25, ms: 609, index: 0 },
     { ps: 22, count: 1, ms: 670, index: 0, totalCount: 62 },
     { ps: 53, count: 1, ms: 1614, index: 1 },
     { ps: 54, count: 4, ms: 1644, index: 1 },
     { ps: 55, count: 7, ms: 1675, index: 1 },
     { ps: 56, count: 3, ms: 1705, index: 1 },
     { ps: 57, count: 1, ms: 1736, index: 1, totalCount: 16 },
     { ps: 73, count: 11, ms: 2223, index: 2, totalCount: 11 },
     { ps: 147, count: 1, ms: 4477, index: 3, totalCount: 1 },
     { ps: 302, count: 3, ms: 9197, index: 4 },
     { ps: 303, count: 3, ms: 9227, index: 4 },
     { ps: 304, count: 2, ms: 9258, index: 4 },
     { ps: 305, count: 1, ms: 9288, index: 4 },
     { ps: 306, count: 1, ms: 9319, index: 4 },
     { ps: 307, count: 1, ms: 9349, index: 4 },
     { ps: 308, count: 1, ms: 9380, index: 4, totalCount: 12 },
     { ps: 1011, count: 1, ms: 30789, index: 5, totalCount: 1 },
     { ps: 1307, count: 1, ms: 39803, index: 6, totalCount: 1 },
     { ps: 2050, count: 1, ms: 62430, index: 7 },
     { ps: 2127, count: 1, ms: 64775, index: 7, totalCount: 2 },
     { ps: 3148, count: 3, ms: 95868, index: 8 },
     { ps: 3149, count: 5, ms: 95898, index: 8 },
     { ps: 3151, count: 1, ms: 95959, index: 8, totalCount: 9 },
     { ps: 3333, count: 1, ms: 101502, index: 9, totalCount: 1 },
     [length]: 29 ],
  pulseSpace2: '43000000000000000001010101010101010001000100000000010001000101010106420842084208420842084208420842084208420705420709' }
Data { signalType: 'ir',
  repeat: 0,
  pulseSpaceCount: 172,
  pulseSpace:
   [ { ps: 10, count: 1, ms: 305, index: 0 },
     { ps: 12, count: 14, ms: 365, index: 0 },
     { ps: 13, count: 37, ms: 396, index: 0 },
     { ps: 14, count: 9, ms: 426, index: 0 },
     { ps: 15, count: 3, ms: 457, index: 0 },
     { ps: 16, count: 41, ms: 487, index: 0 },
     { ps: 17, count: 23, ms: 518, index: 0 },
     { ps: 19, count: 1, ms: 579, index: 0, totalCount: 129 },
     { ps: 26, count: 1, ms: 792, index: 1 },
     { ps: 27, count: 6, ms: 822, index: 1 },
     { ps: 28, count: 5, ms: 853, index: 1 },
     { ps: 31, count: 4, ms: 944, index: 1, totalCount: 16 },
     { ps: 42, count: 1, ms: 1279, index: 2 },
     { ps: 43, count: 3, ms: 1310, index: 2 },
     { ps: 44, count: 1, ms: 1340, index: 2 },
     { ps: 45, count: 3, ms: 1370, index: 2, totalCount: 8 },
     { ps: 89, count: 4, ms: 2710, index: 3, totalCount: 4 },
     { ps: 943, count: 1, ms: 28718, index: 4, totalCount: 1 },
     { ps: 1792, count: 1, ms: 54573, index: 5, totalCount: 1 },
     { ps: 2744, count: 2, ms: 83564, index: 6, totalCount: 2 },
     { ps: 3333, count: 1, ms: 101502, index: 7, totalCount: 1 },
     [length]: 21 ],
  pulseSpace2: '310100002200000000000000000000001001000631010000220000000000000000000000100100063101000022000000000000000000000010010005043101000022000000000000000000000010010007' }

  pulseSpace2: '
  	3101000022000000000000000000000010010006
  	3101000022000000000000000000000010010006
  	310100002200000000000000000000001001000504
  	3101000022000000000000000000000010010007' }

Data { signalType: 'ir',
  repeat: 0,
  pulseSpaceCount: 176,
  pulseSpace:
   [ { ps: 12, count: 12, ms: 365, index: 0 },
     { ps: 13, count: 41, ms: 396, index: 0 },
     { ps: 14, count: 10, ms: 426, index: 0 },
     { ps: 15, count: 8, ms: 457, index: 0 },
     { ps: 16, count: 48, ms: 487, index: 0 },
     { ps: 17, count: 16, ms: 518, index: 0 },
     { ps: 18, count: 1, ms: 548, index: 0, totalCount: 136 },
     { ps: 26, count: 1, ms: 792, index: 1 },
     { ps: 27, count: 4, ms: 822, index: 1 },
     { ps: 28, count: 10, ms: 853, index: 1 },
     { ps: 29, count: 1, ms: 883, index: 1 },
     { ps: 30, count: 2, ms: 914, index: 1 },
     { ps: 31, count: 6, ms: 944, index: 1, totalCount: 24 },
     { ps: 89, count: 2, ms: 2710, index: 2 },
     { ps: 90, count: 2, ms: 2741, index: 2, totalCount: 4 },
     { ps: 2745, count: 3, ms: 83595, index: 3, totalCount: 3 },
     { ps: 3333, count: 1, ms: 101502, index: 4, totalCount: 1 },
     [length]: 17 ],
  pulseSpace2: '
  	210100000110000000000000000000000010010003
  	210100000110000000000000000000000010010003
  	210100000110000000000000000000000010010003
  	210100000110000000000000000000000010010004' }
Data { signalType: 'ir',
  repeat: 0,
  pulseSpaceCount: 104,
  pulseSpace:
   [ { ps: 16, count: 1, ms: 487, index: 0 },
     { ps: 17, count: 12, ms: 518, index: 0 },
     { ps: 18, count: 17, ms: 548, index: 0 },
     { ps: 19, count: 22, ms: 579, index: 0 },
     { ps: 20, count: 8, ms: 609, index: 0, totalCount: 60 },
     { ps: 53, count: 3, ms: 1614, index: 1 },
     { ps: 54, count: 2, ms: 1644, index: 1 },
     { ps: 55, count: 4, ms: 1675, index: 1, totalCount: 9 },
     { ps: 72, count: 1, ms: 2193, index: 2 },
     { ps: 73, count: 1, ms: 2223, index: 2 },
     { ps: 74, count: 1, ms: 2254, index: 2 },
     { ps: 75, count: 1, ms: 2284, index: 2, totalCount: 4 },
     { ps: 147, count: 1, ms: 4477, index: 3, totalCount: 1 },
     { ps: 292, count: 2, ms: 8892, index: 4 },
     { ps: 293, count: 1, ms: 8923, index: 4 },
     { ps: 294, count: 2, ms: 8953, index: 4, totalCount: 5 },
     { ps: 1556, count: 1, ms: 47386, index: 5, totalCount: 1 },
     { ps: 3131, count: 3, ms: 95350, index: 6, totalCount: 3 },
     { ps: 3333, count: 1, ms: 101502, index: 7, totalCount: 1 },
     [length]: 19 ],
  pulseSpace2: '430000000000000000000000000100000000000000000000000101010101010101054206420642064207' }
Data { signalType: 'ir',
  repeat: 0,
  pulseSpaceCount: 96,
  pulseSpace:
   [ { ps: 16, count: 6, ms: 487, index: 0 },
     { ps: 17, count: 27, ms: 518, index: 0 },
     { ps: 18, count: 1, ms: 548, index: 0 },
     { ps: 19, count: 6, ms: 579, index: 0 },
     { ps: 20, count: 19, ms: 609, index: 0, totalCount: 59 },
     { ps: 56, count: 6, ms: 1705, index: 1 },
     { ps: 57, count: 3, ms: 1736, index: 1, totalCount: 9 },
     { ps: 73, count: 1, ms: 2223, index: 2 },
     { ps: 74, count: 2, ms: 2254, index: 2, totalCount: 3 },
     { ps: 147, count: 1, ms: 4477, index: 3, totalCount: 1 },
     { ps: 292, count: 1, ms: 8892, index: 4 },
     { ps: 293, count: 1, ms: 8923, index: 4 },
     { ps: 294, count: 1, ms: 8953, index: 4 },
     { ps: 296, count: 1, ms: 9014, index: 4, totalCount: 4 },
     { ps: 1559, count: 1, ms: 47477, index: 5, totalCount: 1 },
     { ps: 3126, count: 1, ms: 95198, index: 6 },
     { ps: 3129, count: 1, ms: 95289, index: 6, totalCount: 2 },
     { ps: 3333, count: 1, ms: 101502, index: 7, totalCount: 1 },
     [length]: 18 ],
  pulseSpace2: '43000000000000000000000000010000000000000000000000010101010101010105420642064207' }
Data { signalType: 'ir',
  repeat: 0,
  pulseSpaceCount: 408,
  pulseSpace:
   [ { ps: 12, count: 2, ms: 365, index: 0 },
     { ps: 13, count: 95, ms: 396, index: 0 },
     { ps: 14, count: 87, ms: 426, index: 0 },
     { ps: 15, count: 125, ms: 457, index: 0 },
     { ps: 16, count: 21, ms: 487, index: 0 },
     { ps: 17, count: 2, ms: 518, index: 0, totalCount: 332 },
     { ps: 40, count: 2, ms: 1218, index: 1 },
     { ps: 41, count: 12, ms: 1249, index: 1 },
     { ps: 42, count: 14, ms: 1279, index: 1 },
     { ps: 43, count: 28, ms: 1310, index: 1, totalCount: 56 },
     { ps: 54, count: 1, ms: 1644, index: 2 },
     { ps: 55, count: 2, ms: 1675, index: 2 },
     { ps: 56, count: 1, ms: 1705, index: 2, totalCount: 4 },
     { ps: 114, count: 1, ms: 3472, index: 3 },
     { ps: 116, count: 3, ms: 3533, index: 3, totalCount: 4 },
     { ps: 2445, count: 1, ms: 74459, index: 4 },
     { ps: 2446, count: 1, ms: 74489, index: 4 },
     { ps: 2447, count: 1, ms: 74520, index: 4, totalCount: 3 },
     { ps: 3333, count: 1, ms: 101502, index: 5, totalCount: 1 },
     [length]: 19 ],
  pulseSpace2: '
  3200010000000000000000000000010000000000000001000100000101010000000100010101010000010000000000000104
  3200010000000000000000000000010000000000000001000100000101010000000100010101010000010000000000000104
  3200010000000000000000000000010000000000000001000100000101010000000100010101010000010000000000000104
  3200010000000000000000000000010000000000000001000100000101010000000100010101010000010000000000000105' }
Data { signalType: 'ir',
  repeat: 0,
  pulseSpaceCount: 412,
  pulseSpace:
   [ { ps: 10, count: 1, ms: 305, index: 0 },
     { ps: 11, count: 3, ms: 335, index: 0 },
     { ps: 12, count: 24, ms: 365, index: 0 },
     { ps: 13, count: 84, ms: 396, index: 0 },
     { ps: 14, count: 49, ms: 426, index: 0 },
     { ps: 15, count: 80, ms: 457, index: 0 },
     { ps: 16, count: 69, ms: 487, index: 0 },
     { ps: 17, count: 23, ms: 518, index: 0, totalCount: 333 },
     { ps: 39, count: 4, ms: 1188, index: 1 },
     { ps: 40, count: 16, ms: 1218, index: 1 },
     { ps: 41, count: 17, ms: 1249, index: 1 },
     { ps: 42, count: 13, ms: 1279, index: 1 },
     { ps: 43, count: 6, ms: 1310, index: 1, totalCount: 56 },
     { ps: 56, count: 3, ms: 1705, index: 2 },
     { ps: 57, count: 1, ms: 1736, index: 2, totalCount: 4 },
     { ps: 114, count: 3, ms: 3472, index: 3 },
     { ps: 116, count: 1, ms: 3533, index: 3, totalCount: 4 },
     { ps: 943, count: 1, ms: 28718, index: 4, totalCount: 1 },
     { ps: 1490, count: 1, ms: 45376, index: 5, totalCount: 1 },
     { ps: 2444, count: 1, ms: 74428, index: 6 },
     { ps: 2446, count: 1, ms: 74489, index: 6, totalCount: 2 },
     { ps: 3333, count: 1, ms: 101502, index: 7, totalCount: 1 },
     [length]: 22 ],
  pulseSpace2: '320001000000000000000000000001000000000000000100010000010101000000010001010101000001000000000000010632000100000000000000000000000100000000000000010001000001010100000001000101010100000100000000000001040532000100000000000000000000000100000000000000010001000001010100000001000101010100000100000000000001063200010000000000000000000000010000000000000001000100000101010000000100010101010000010000000000000107' }
*/
let fs = require('fs');

var b = new broadlink();

b.on('deviceReady', (dev) => {
console.log(`device ready Type ${dev.type} Model ${dev.model} Hostt %o Mac %o`, dev.host, dev.mac);
console.log(dev);
        dev.enterLearning();
    var timer = setInterval(function(){
        	dev.checkData();
    }, 3000);

    dev.on('temperature', (temp)=>{
        console.log("get temp "+temp);
        dev.enterLearning();
    });

    dev.on('rawData', (data) => {
			console.log('Data %o', data);
            //clearInterval(timer);
		/*
        fs.writeFile("test1", data, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
            clearInterval(timer);
        });
        */
        dev.enterLearning();
    });
    dev.on('rawRfData', (data) => {
      console.log('RfData %o', data);
    });
    dev.on('rawRfData2', (data) => {
      console.log('RfData2 %o', data);
    });
	    dev.checkTemperature();
//	else {
//	    dev.setPower(1);
//	}

});

b.discover();