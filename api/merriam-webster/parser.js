const libxmljs = require("libxmljs");

/**
 * Parses xml data related to dictionary term results and returns the util info in JSON format
 * @param xmlData xml info from Merriam Webter
 * @returns result in the following format {term: "", definition: ""}
 */
function parse(xmlData) {

    let xmlDoc = libxmljs.parseXml(xmlData);

    var entries = xmlDoc.get('//entry');

    if (entries == null) {
        console.log("no results");
        return null;
    }

    //console.log(entries.toString());

    try {
        //remove unnecessary info
        if(entries.get('.//ca') !== undefined)
            entries.get('.//ca').remove();
    }catch(err){
        console.log(err.toString());
    }

    let result = {
        term: entries.get('.//ew').text(),
        definition: entries.get('.//dt').text()
    };

    return result;
}
module.exports = {parse};