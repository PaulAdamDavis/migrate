const path = require('path');
const
// const {normalizeCSVFileToJSON} = require('../lib/converter');
// Switch these lines once there are useful utils
// const testUtils = require('./utils');
require('./utils');

describe.skip('Converts Substack CSV to Ghost CSV formats', function () {
    it.skip('Reads CSV and converts it to normalized JSON', async function () {
        const result = await normalizeCSVFileToJSON({
            path: path.resolve('./test/fixtures/fixtures_signup_emails.csv'),
            columnsToMap: [{
                from: 'email_disabled',
                to: 'subscribed_to_emails',
                negate: true
            }, {
                from: 'stripe_connected_customer_id',
                to: 'stripe_customer_id'
            }],
            columnsToExtract: [{
                name: 'email',
                lookup: /^email/i
            }, {
                name: 'name',
                lookup: /name/i
            }, {
                name: 'note',
                lookup: /note/i
            }, {
                name: 'subscribed_to_emails',
                lookup: /subscribed_to_emails/i
            }, {
                name: 'stripe_customer_id',
                lookup: /stripe_customer_id/i
            }, {
                name: 'complimentary_plan',
                lookup: /complimentary_plan/i
            }]
        });

        result.length.should.equal(22);
        console.log('result', result);
        // Object.keys(result[0]).should.deepEqual(['email', 'subscribed_to_emails', 'stripe_customer_id']);
        // result[0].should.deepEqual({email: 'member+substack_1@example.com', subscribed_to_emails: true, stripe_customer_id: 'cus_GbbIQRd8TnFqHq'});
        // result[1].should.deepEqual({email: 'member+substack_2@example.com', subscribed_to_emails: false, stripe_customer_id: undefined});
    });
});
