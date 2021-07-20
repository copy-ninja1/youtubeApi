const cheerio = require('cheerio')
const axios = require('axios')

export default async function handler(req, res) {
    //  // console.log({ query: req.query })
    //  // let _query = !req.query && !!req.query.q ? req.query.q : 'trending%20songs'
    //  // console.log({ q: typeof req.query.q })

    // console.log({ r: req.query.q })
    let data = await fetch(`https://mail.naijagreen.com.ng/s/${req.query.q != 'undefined' ? req.query.q : 'Wizkid, Davido, Mr.Eazi, Burna Boy ,2baba,Naira Marley,Sinach,Flavor'}`)
        .then(response => response.text())
        .then(data => data).catch((error) => {
            return res.status(500).send(error.message || error);
        })

    const $ = cheerio.load(data);
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

    // const html = await fethHtml(`https://mail.naijagreen.com.ng/s/${req.query.q != 'undefined' ? req.query.q : 'Wizkid, Davido, Mr.Eazi, Burna Boy ,2baba,Naira Marley,Sinach,Flavor'}/`);
    // const $ = cheerio.load(html);
    // var _videos = []
    // $('div.card.card-cascade').each(function (i, element) {
    //     var $ele = $(element)
    //     var id = $ele.find('a').attr('href').split('/')[1]
    //     var img = $ele.find('img')
    //     _videos.push({
    //         id: i + 1,
    //         uid: id,
    //         title: img.attr('alt'),
    //         imageSrc: img.attr('src')
    //     })
    // });
    // res.status(200).json({ videos: _videos })

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
