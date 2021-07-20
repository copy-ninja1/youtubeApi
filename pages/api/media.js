const cheerio = require('cheerio')
const axios = require('axios')

export default async function handler(req, res) {
    //  // console.log({ query: req.query })
    //  // let _query = !req.query && !!req.query.q ? req.query.q : 'trending%20songs'
    //  // console.log({ q: typeof req.query.q })

    // console.log({ r: req.query.q })
    // let data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${req.query.q != 'undefined' ? req.query.q : 'Wizkid, Davido, Mr.Eazi, Burna Boy ,2baba,Naira Marley,Sinach,Flavor'}&type=video&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8`)
    //     .then(response => response.json())
    //     .then(data => data);
    // if (data.items) {
    //     console.log(data.iems)
    //     res.status(200).json({ videos: data.items })
    // } else {
    //     res.status(200).json({ videos: [] })

    // }

    const html = await fethHtml(`https://mail.naijagreen.com.ng/s/${req.query.q != 'undefined' ? req.query.q : 'Wizkid, Davido, Mr.Eazi, Burna Boy ,2baba,Naira Marley,Sinach,Flavor'}/`);
    const $ = cheerio.load(html);
    var _videos = []
    $('div.card.card-cascade').each(function (i, element) {
        var $ele = $(element)
        var id = $ele.find('a').attr('href').split('/')[1]
        var img = $ele.find('img')
        _videos.push({
            id: i + 1,
            uid: id,
            title: img.attr('alt'),
            imageSrc: img.attr('src')
        })
    });
    res.status(200).json({ videos: _videos })

}

const fethHtml = async url => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch {
        console.error(
            `ERROR: An error occurred while trying to fetch the URL: ${url}`
        );
    }
};
