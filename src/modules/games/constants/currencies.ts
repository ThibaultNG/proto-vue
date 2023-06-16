import Currency from "../models/currency";

/* SOURCE : https://fastspring.com/blog/how-to-format-30-currencies-from-countries-all-over-the-world */

const AUD: Currency = new Currency("Australian Dollar", "AUD", "$", true, true, 1.48);

const CAD: Currency = new Currency("Canadian Dollar", "CAD", "$", true, false, 1.33);

const CNY: Currency = new Currency("Yuan Renminbi", "CNY", "¥", true, false, 7.15);

const EUR: Currency = new Currency("Euro", "EUR", "€", false, true, 0.93);

const JPY: Currency = new Currency("Yen", "JPY", "¥", true, false, 139.92);

const NZD: Currency = new Currency("New Zealand Dollar", "NZD", "$", true, false, 1.63);

const GBP: Currency = new Currency("Pound Sterling", "GBP", "£", true, false, 0.79);

const USD: Currency = new Currency("US Dollar", "USD", "$", true, false, 1);

export const currencies = new Map<string, Currency>([
	["USD", USD],
	["EUR", EUR],
	["AUD", AUD],
	["CAD", CAD],
	["CNY", CNY],
	["GBP", GBP],
	["JPY", JPY],
	["NZD", NZD]
]);
