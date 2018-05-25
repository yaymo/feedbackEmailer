const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <h2>Hi!</h2>
                <div style="text-align: center;">
                    <h3>${survey.body}</h3>
                    <p>Please click 'Yes' if you enjoyed our product :)</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};