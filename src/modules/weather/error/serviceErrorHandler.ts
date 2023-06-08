import {
	BAD_REQUEST,
	INTERNAL_SERVER_ERROR,
	NO_INTERNET_CONNECTION,
	UNDEFINED_ERROR
} from "../constants/error-message";
import type { ErrorInfo } from "../models/ErrorInfo";

export function setToNoError(errorInfo: ErrorInfo): ErrorInfo {
	errorInfo.code = 0;
	errorInfo.message = "";
	errorInfo.happenedXTimes = 0;
	return errorInfo;
}

//TODO : add a mapping for errorInfo.code and .message so that the code and message are linked and used together
export function handleErrorFromService(error: any, errorInfo: ErrorInfo): ErrorInfo {
	let errorMessage = UNDEFINED_ERROR;
	let errorCode = -100;

	if (error.response) {
		if (error.response.status == 400) {
			errorCode = 400;
			errorMessage = BAD_REQUEST;
		} else if (error.response.status == 500) {
			errorCode = 500;
			errorMessage = INTERNAL_SERVER_ERROR;
		}
	} else if (String(error).includes("Network Error")) {
		errorCode = -1;
		errorMessage = NO_INTERNET_CONNECTION;
	}

	errorInfo.code = errorCode;
	handleDuplicatedMessageCase(errorInfo, errorMessage);

	return errorInfo;
}

function handleDuplicatedMessageCase(errorInfo: ErrorInfo, lastErrorMessage: string): ErrorInfo {
	if (errorInfo.happenedXTimes == 0) {
		//first time
		errorInfo.message = lastErrorMessage;
		errorInfo.happenedXTimes = errorInfo.happenedXTimes + 1;
	} else {
		errorInfo.message = lastErrorMessage + " (" + errorInfo.happenedXTimes + ")";
		errorInfo.happenedXTimes = errorInfo.happenedXTimes + 1;
	}
	return errorInfo;
}
