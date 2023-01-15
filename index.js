import CsvParser from "./src/csv-parser.js";

export default class Index {
    /**
     * @returns {Index}
     */
    constructor() {
    }

    /**
     *
     * @param {string} csv
     * @param {string[]} headers
     * @returns {*[]}
     */
    static parse(csv, headers) {
       let parser = new CsvParser(csv, headers);
       return parser.parse();
    }
}