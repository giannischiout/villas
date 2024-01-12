 
export async function POST(req, res) {
    const { extraParameter } = req.body;
    res.setHeader('Set-Cookie', `extraParameter=${extraParameter};`);
    return new Response('set locale parameter', {
      status: 200,
    })
}