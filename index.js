var ffmpeg = require('ffmpeg')
var fs = require("fs");
const contents = fs.readFileSync("./data.json");
const arr = JSON.parse(contents);
for (let i = 0; i < arr.en.length; i++) {
    let url = './resource/en/' + arr.en[i]
    let out = './data/en/' + arr.en[i]
    out = out.replace('.wav', '.pcm')
    out = out.replace('.WAV', '.pcm')
    try {
        var process = new ffmpeg(url);
        process.then((audio) => {
            audio.addCommand("-y")
            audio.addCommand("-f", "s16le")
            audio.addCommand("-ac", "1")
            audio.addCommand("-ar", "16000")
            audio.save(out, (error, file) => {
                if (!error)
                    console.log('Audio file: ' + file);
            })

        }, function (err) {
            console.log('Error: ' + err);
        });
    } catch (e) {
        console.log("Exception:", url);
        console.log("Exception:", e.code);
        console.log("Exception:", e.msg);
    }

}
for (let i = 0; i < arr.cn.length; i++) {
    let url = './resource/cn/' + arr.cn[i]
    let out = './data/cn/' + arr.cn[i]
    out = out.replace('.wav', '.pcm')
    out = out.replace('.WAV', '.pcm')

    try {
        var process = new ffmpeg(url);
        process.then((audio) => {
            audio.addCommand("-y")
            audio.addCommand("-f", "s16le")
            audio.addCommand("-ac", "1")
            audio.addCommand("-ar", "16000")
            audio.save(out, (error, file) => {
                if (!error)
                    console.log('Audio file: ' + file);
            })
        }, function (err) {
            console.log('Error: ' + err);
        });
    } catch (e) {
        console.log("Exception:", url);
        console.log("Exception:", e.code);
        console.log("Exception:", e.msg);
    }
}