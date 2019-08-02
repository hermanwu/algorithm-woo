const keys = require("../../config/keys");

module.exports = survey => {
  return `
    <html>
        <body>
            <div style="text-algin: center;">
            <p> Please answer the following questions:</p>
             <div>
              <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/yes">Yes</a>
             </div>

             <div>
              <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/no">No</a>
            </div>
            </div
        </body>
    </html>
  `;
};
