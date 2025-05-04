
import fs from 'fs'
import ytdl from 'ytdl-core';


//__directory of the document
//corrigir o erro do __Dirname
import path, { format } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default  async function ppk(a, b, c){

  const url = a;
  const quality = b;
  const formato = c;
  console.log(`\nURL obtida do link digitado: ${url}\nQualidade definida: ${quality}\nFormato definido: ${formato}\n`);

  const id = ytdl.getURLVideoID(url);
  console.log(`ID do video: ${id}`);

  // formato de video
  let info = ytdl.getInfo(url)
  console.log(info);

  // 
  //tentativa de download
  ytdl(url, ({filter: format => format.container === 'mp4', quality: 'highestvideo', filter: 'videoandaudio'})).pipe(fs.createWriteStream(`${info.title}.mp4`));





  //


  const filepath = path.resolve(__dirname, 'info.json');

  const infos = ytdl.getInfo(id).then(info => {
    console.log('title:', info.videoDetails.title);
    console.log('rating:', info.player_response.videoDetails.averageRating);
    console.log('uploaded by:', info.videoDetails.author.name);
    const json = JSON.stringify(info, null, 2)
      // eslint-disable-next-line max-len
      .replace(/(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/ig, '$10.0.0.0');
    fs.writeFile(filepath, json, err2 => {
      if (err2) throw err2;
    });
  });
};

//vai sair