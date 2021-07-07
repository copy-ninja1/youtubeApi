export default async function handler(req, res) {
    // console.log({ query: req.query })
    // let _query = !req.query && !!req.query.q ? req.query.q : 'trending%20songs'
    // console.log({ q: typeof req.query.q })
    console.log({ r: req.query.q })
    let data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${req.query.q != 'undefined' ? req.query.q : 'Wizkid, Davido, Mr.Eazi, Burna Boy ,2baba,Naira Marley,Sinach,Flavor'}&type=video&key=AIzaSyCEQJwLB3oFqEdtSU7FhryuYRhslybWLno`)
        .then(response => response.json())
        .then(data => data);
    if (data.items) {
        console.log(data.iems)
        res.status(200).json({ videos: data.items })
    } else {
        res.status(200).json({ videos: [] })

    }

}