export default class CsvParser {
    /**
     *
     * @param {string} csv
     * @param {string[]} headers
     */
    constructor(csv, headers) {
        this._csv = csv;
        this._fields = headers;
    }

    /**
     * Validate headers. Then returns array of rows
     * @returns {*[]}
     */
    parse() {
        let headersValidated = false;
        let parsedData = [];

        for(let row of this._csv.split('\n')) {
            let values = row.split(',');

            if(!headersValidated) {
                if(values.length !== this._fields.length) {
                    throw new Error(`Expected number of values: ${this._fields.length} but instead found ${values.length}`);
                }

                for(let i = 0; i < values.length; i++) {
                    if(values[i].toLowerCase() !== this._fields[i].toLowerCase()) {
                        throw new Error(`Expected header value: ${this._fields[i]} but instead received ${values[i]}`);
                    }
                }

                headersValidated = true;
                continue;
            }

            parsedData.push(values);
        }

        return parsedData;
    }
}