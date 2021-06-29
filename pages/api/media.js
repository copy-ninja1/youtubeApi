export default async function handler(req, res) {
    // console.log({ query: req.query })
    if (req.query.q) {
        let data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${req.query.q}&type=video&key=AIzaSyCEQJwLB3oFqEdtSU7FhryuYRhslybWLno`)
            .then(response => response.json())
            .then(data => data);
        res.status(200).json({ videos: data.items })
    } else {
        res.status(200).json({ videos: [] })

    }
}