const cheerio = require('cheerio');

// Keys we've seen so far
// Profile
// Display name
// Email address
// Medium user ID
// Created at
// Twitter
// Twitter account ID
// Facebook display name
// Facebook account ID
// Google email
// Google display name
// Google account ID

const mediumToGhost = {
    'email address': 'email',
    'created at': 'created_at',
    twitter: 'twitter'
};

module.exports = (html) => {
    let $ = cheerio.load(html);
    let profile = {
        url: $('.u-url').attr('href'),
        data: {
            name: $('.p-name').text(),
            image: $('.u-photo').attr('src')
        }
    };

    $('ul li').each((i, el) => {
        let [item, value] = $(el).text().split(': ');
        let key = mediumToGhost[item.toLowerCase()] || null;

        if (key) {
            profile.data[key] = value;
        }
    });

    return profile;
};