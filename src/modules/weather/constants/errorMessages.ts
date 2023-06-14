import type ErrorInfo from "../models/ErrorInfo";

export const NO_INTERNET_CONNECTION: ErrorInfo = {
	code: -1,
	message: "Error : no internet connection"
};
export const BAD_REQUEST: ErrorInfo = {
	code: 400,
	message: "Error : Please enter correct values"
};
export const INTERNAL_SERVER_ERROR: ErrorInfo = {
	code: 500,
	message: "Error : Our data provider has an issue, please try again later.."
};
export const UNDEFINED_ERROR: ErrorInfo = {
	code: -100,
	message: "Error : Something happened, please try again later.."
};
