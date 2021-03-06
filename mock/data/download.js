module.exports = [{
    request: {
        url: '/api/download/:filename',
        method: 'get'
    },
    response: {
        delay: 2000,
        headers: {
            'Content-Type': 'text/plain',
            'Content-Disposition': 'attachment;filename=sample.txt;'
        },
        body: '<static>/sample.txt'
    }
}];
