const https = require('https');

exports.handler = async (event) => {
    const apiKey = process.env.NEWS_API_KEY; // User needs to set this env var
    const topic = event.queryStringParameters?.topic || 'Artificial Intelligence';

    if (!apiKey) {
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,GET"
            },
            body: JSON.stringify({ error: 'News API Key is missing in Lambda environment variables.' })
        };
    }

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(topic)}&sortBy=publishedAt&language=en&apiKey=${apiKey}`;

    try {
        const data = await new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let body = '';
                res.on('data', (chunk) => body += chunk);
                res.on('end', () => resolve(JSON.parse(body)));
            }).on('error', (e) => reject(e));
        });

        // Transform to match dashboard format
        const news = data.articles?.slice(0, 5).map((article, index) => ({
            id: index,
            title: article.title,
            category: article.source.name,
            time: new Date(article.publishedAt).toLocaleDateString(),
            description: article.description,
            image: article.urlToImage
        })) || [];

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,GET"
            },
            body: JSON.stringify({ news })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,GET"
            },
            body: JSON.stringify({ error: error.message })
        };
    }
};
