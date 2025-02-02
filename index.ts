import {readdirSync, writeFileSync} from 'fs';

const list = new Array<string>();

readdirSync('/Users/andrey.karasev/Sources/andrey-karasev/andrey-karasev.github.io/music/RobDouganFilmsPastAndFuture2018')  
  .forEach((file) => {
    list.push(`https:/andrey-karasev.github.io/music/RobDouganFilmsPastAndFuture2018/${encodeURIComponent(file)}`)
  });

 writeFileSync('RobDouganFilmsPastAndFuture2018.m3u', list.join('\n'));
