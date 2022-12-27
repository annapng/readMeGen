// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case "Apache 2.0 License":
      return "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  
    case "Creative Commons Attribution 4.0 International License":
      return "![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)";

    case "GNU GPL v3 License":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";

    case "IBM Public License Version 1.0":
      return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";

    case "The MIT License":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg))";

    case "Mozilla Public License 2.0":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

    case "No License":
      return "  " ;
    
    }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case "Apache 2.0 License":
      return "https://www.apache.org/licenses/LICENSE-2.0";
  
    case "Creative Commons Attribution 4.0 International License":
      return "https://creativecommons.org/licenses/by/4.0/";

    case "GNU GPL v3 License":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";

    case "IBM Public License Version 1.0":
      return "https://www.ibm.com/docs/en/linux-on-systems?topic=examples-common-public-license-v10";

    case "The MIT License":
      return "https://opensource.org/licenses/MIT";

    case "Mozilla Public License 2.0":
      return "https://www.mozilla.org/en-US/MPL/2.0/";

    case "No License":
      return "Not Available!";
 
    }}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licBadge = renderLicenseBadge(data.license);
  let licLink = renderLicenseLink(data.license);

  return `# ${data.title}

  ${licBadge}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)


  ## Description

  ${data.description}
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## Contributions

  ${data.contributions}

  ## Tests

  ${data.tests}

  ## License

  This program is licensed by the ${data.license}, and more information may be found at ${licLink}.


  ## Questions/Contact Me

  * Github:   https://www.github.com/${data.github}
  * E-mail:   ${data.email}
  * Best way to reach me with questions:  ${data.questions}

`;
}

module.exports = generateMarkdown;
