import TimeUtils from "../utils/TimeUtils";

export default class Config {

    static SERVER_API = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange`;

    // config for time checkBox
    static getConfigTimeSelection = () => {
        return [
            {value: TimeUtils.now(), label: `Today`, id: 100},
            {value: TimeUtils.weekAgo(), label: `7 days ago`, id: 101},
            {value: TimeUtils.monthAgo(), label: `30 days ago`, id: 102},
            {value: TimeUtils.yearAgo(), label: `1 year ago`, id: 103}
        ];
    };

    // config for currency radioButton
    static getConfigCurrency = () => {
        return [
            { label: `USD`, id: 1, required: true },
            { label: `EUR`, id: 2, required: false },
            { label: `GBP`, id: 3, required: false },
            { label: `PLN`, id: 4, required: false },
        ]
    };
}