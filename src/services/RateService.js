import Config from "../config/Config";

export default class RateService {

    getRateForDate = (date, currency) => {
        const url = this.getUrl(date, currency);
        return fetch(url)
            .then(resp => {
                if (!resp.ok) this.handleResponseError(resp);
                return resp.json();
            }).then((rate) => {
                console.log("Rate", rate);
                return rate;
            }).catch(this.handleError)
    };

    getUrl = (date, currency) => {
        return `${Config.SERVER_API}?valcode=${currency}&date=${date}&json`;
    };

    handleResponseError = (response) => {
        throw new Error("HTTP error, status = " + response.status)
    };

    handleError = (error) => console.log(error.message);
}
