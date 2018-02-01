const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Test survey email content! </h3>
                    <p>Please answer the questions</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};