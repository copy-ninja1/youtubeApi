const cheerio = require('cheerio')
export default async function handler(req, res) {
    console.log({ r: req.query.q })
    // let data = await fetch(`https://mail.naijagreen.com.ng/s/${req.query.q != 'undefined' ? req.query.q : 'Wizkid, Davido, Mr.Eazi, Burna Boy ,2baba,Naira Marley,Sinach,Flavor'}`)
    //     .then(response => response.text())
    //     .then(data => data).catch((error) => {
    //         return res.status(500).send(error.message || error);
    //     })

    // const $ = cheerio.load(data);
    // var _videos = []

    // $('div.card.card-cascade').each(function (i, element) {
    //     var $ele = $(element)
    //     var id = $ele.find('a').attr('href').split('/')[1]
    //     var img = $ele.find('img')
    //     console.log({ element: img.attr('alt') })

    //     _videos.push({
    //         id: i + 1,
    //         uid: id,
    //         title: img.attr('alt'),
    //         imageSrc: img.attr('src')
    //     })
    // });
    // res.status(200).json({ videos: _videos })

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
    // 
    // 



    try { // 4
        const response = await fetch(`https://mail.naijagreen.com.ng/s/${req.query.q != 'undefined' ? req.query.q : 'Wizkid, Davido, Mr.Eazi, Burna Boy ,2baba,Naira Marley,Sinach,Flavor'}`)
        const htmlString = await response.text()
        const $ = cheerio.load(htmlString)
        var _videos = []

        $('div.card.card-cascade').each(function (i, element) {
            var $ele = $(element)
            var id = $ele.find('a').attr('href').split('/')[1]
            var img = $ele.find('img')
            console.log({ element: img.attr('alt') })

            _videos.push({
                id: i + 1,
                uid: id,
                title: img.attr('alt'),
                imageSrc: img.attr('src')
            })
        });
        res.statusCode = 200
        return res.json({ videos: _videos })
    } catch (e) { // 5
        res.statusCode = 500
        return res.json({
            error: e,
        })
    }
    // 

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
