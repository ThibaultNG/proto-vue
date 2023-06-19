import type { Ref } from "vue";
import type ErrorInfo from "../models/errorInfo";

const errorRecordHTML: Record<string, ErrorInfo> = {
	BAD_REQUEST: {
		code: 400,
		message: "Error : Please enter correct values"
	},
	INTERNAL_SERVER_ERROR: {
		code: 500,
		message: "Error : Our data provider has an issue, please try again later.."
	}
};

const errorRecordOther: Record<string, ErrorInfo> = {
	NO_INTERNET_CONNECTION: {
		code: -1,
		message: "Error : no internet connection"
	},
	UNDEFINED_ERROR: {
		code: -100,
		message: "Error : Something happened, please try again later.."
	}
};

export function setToNoError(errorInfo: Ref<ErrorInfo>): Ref<ErrorInfo> {
	errorInfo.value.code = 0;
	errorInfo.value.message = "";
	errorInfo.value.happenedXTimes = 0;
	return errorInfo;
}
export function handleErrorFromService(error: any, errorInfo: Ref<ErrorInfo>): Ref<ErrorInfo> {
	let errorCode: number = 0;
	let errorMessage: string = "";

	if (error.response) {
		// The request was made and the server responded with a status code(!= 2XX)
		if (error.response.status == errorRecordHTML.BAD_REQUEST.code) {
			errorCode = errorRecordHTML.BAD_REQUEST.code;
			errorMessage = errorRecordHTML.BAD_REQUEST.message;
		} else if (error.response.status == errorRecordHTML.INTERNAL_SERVER_ERROR.code) {
			errorCode = errorRecordHTML.INTERNAL_SERVER_ERROR.code;
			errorMessage = errorRecordHTML.INTERNAL_SERVER_ERROR.message;
		}
	} else if (error.request) {
		// The request was made but no response was received
		if (String(error).includes("Network Error")) {
			errorCode = errorRecordOther.NO_INTERNET_CONNECTION.code;
			errorMessage = errorRecordOther.NO_INTERNET_CONNECTION.message;
		}
	} else {
		errorCode = errorRecordOther.UNDEFINED_ERROR.code;
		errorMessage = errorRecordOther.UNDEFINED_ERROR.message;
	}

	errorInfo.value.code = errorCode;
	handleDuplicatedMessageCase(errorInfo, errorMessage);

	return errorInfo;
}

function handleDuplicatedMessageCase(
	errorInfo: Ref<ErrorInfo>,
	lastErrorMessage: string
): Ref<ErrorInfo> {
	if (errorInfo.value.happenedXTimes == 0 || errorInfo.value.happenedXTimes == undefined) {
		//first time
		errorInfo.value.message = lastErrorMessage;
		errorInfo.value.happenedXTimes = 1;
	} else {
		errorInfo.value.message =
			lastErrorMessage + " (" + (errorInfo.value.happenedXTimes + 1) + ")";
		errorInfo.value.happenedXTimes = errorInfo.value.happenedXTimes + 1;
	}
	return errorInfo;
}
