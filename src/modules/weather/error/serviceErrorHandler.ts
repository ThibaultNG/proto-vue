import {
	BAD_REQUEST,
	INTERNAL_SERVER_ERROR,
	NO_INTERNET_CONNECTION,
	UNDEFINED_ERROR
} from "../constants/errorMessages";
import type ErrorInfo from "../models/ErrorInfo";

export function setToNoError(errorInfo: ErrorInfo): ErrorInfo {
	errorInfo.code = 0;
	errorInfo.message = "";
	errorInfo.happenedXTimes = 0;
	return errorInfo;
}

export function handleErrorFromService(error: any, errorInfo: ErrorInfo): ErrorInfo {
	let errorCode: number = UNDEFINED_ERROR.code;
	let errorMessage: string = UNDEFINED_ERROR.message;

	if (error.response) {
		// The request was made and the server responded with a status code(!= 2XX)
		if (error.response.status == BAD_REQUEST.code) {
			errorCode = BAD_REQUEST.code;
			errorMessage = BAD_REQUEST.message;
		} else if (error.response.status == INTERNAL_SERVER_ERROR.code) {
			errorCode = INTERNAL_SERVER_ERROR.code;
			errorMessage = INTERNAL_SERVER_ERROR.message;
		}
	} else if (error.request) {
		// The request was made but no response was received
		if (String(error).includes("Network Error")) {
			errorCode = NO_INTERNET_CONNECTION.code;
			errorMessage = NO_INTERNET_CONNECTION.message;
		}
	}

	errorInfo.code = errorCode;
	handleDuplicatedMessageCase(errorInfo, errorMessage);

	return errorInfo;
}

function handleDuplicatedMessageCase(errorInfo: ErrorInfo, lastErrorMessage: string): ErrorInfo {
	if (errorInfo.happenedXTimes == 0 || errorInfo.happenedXTimes == undefined) {
		//first time
		errorInfo.message = lastErrorMessage;
		errorInfo.happenedXTimes = 1;
	} else {
		errorInfo.message = lastErrorMessage + " (" + (errorInfo.happenedXTimes + 1) + ")";
		errorInfo.happenedXTimes = errorInfo.happenedXTimes + 1;
	}
	return errorInfo;
}
