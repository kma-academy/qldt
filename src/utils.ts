import cheerio from 'cheerio';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
const selector = {
    select: 'select',
    checkbox: 'input[type!="submit"][type!="checkbox"]'
};
const api: AxiosInstance = axios.create({
    baseURL: `http://qldt.actvn.edu.vn/`,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/76.0.114 Chrome/70.0.3538.114 Safari/537.36',
        "Content-Type": "application/x-www-form-urlencoded"
    },
    transformResponse: [function (data: AxiosResponse) {
        console.log(data)
        return data;
    }]
});
api
.get(`/`)
.then(console.log)
interface FormValue {
    [name: string]: string;
}
function parseInitialFormData($: CheerioStatic): FormValue {
    const data = {} as FormValue;
    const form: Cheerio = $('form');
    const select = form.find(selector.select);
    const input = form.find(selector.checkbox);
    input.each((i, elem) => {
        const name = $(elem).attr('name');
        if (name) data[name] = $(elem).attr('value') || '';
    });

    select.each((i, elem) => {

        const name = $(elem).attr('name');
        if (name) data[name] = $(elem).find($('[selected="selected"]')).attr('value') || '';
    });
    return data;
}
function parseSelector($: CheerioStatic): FormValue {
    const data = {} as FormValue;
    const form = $('form');
    const select = form.find(selector.select);
    select.each((i, elem) => {
        let options = $(elem).find($('option[selected]'))[0];
        // let cooked_options = options.find((option) => $(option).attr('selected') ? true: false)[0];
        const name = $(elem).attr('name');
        if (name) data[name] = options && $(options).attr('value') || "";
    });
    return data;
}

function parseString(str: string): string {
    return str;
}

export default {
    api
};