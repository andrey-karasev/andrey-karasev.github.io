import {readdirSync, writeFileSync} from 'fs';

let result = '#EXTM3U\n';
readdirSync('/Users/andrey.karasev/Sources/andrey-karasev/andrey-karasev.github.io/music/RobDouganFilmsPastAndFuture2018')  
  .forEach((file) => {
    result += 
    `#EXTINF:123, ${file.replace('.mp3','')}
  https:/andrey-karasev.github.io/music/RobDouganFilmsPastAndFuture2018/${encodeURIComponent(file)}
  
  `;
    
  });

  


  writeFileSync('RobDougan.m3u', result);
