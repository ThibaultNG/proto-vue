import type { Ref } from "vue";
import type ErrorInfo from "../models/errorInfo";

const errorRecord: Record<string, ErrorInfo> = {
	NO_INTERNET_CONNECTION: {
		code: -1,
		message: "Error : no internet connection"
	},
	UNDEFINED_ERROR: {
		code: -100,
		message: "Error : Please enter correct values"
	},
	BAD_REQUEST: {
		code: 400,
		message: "Error : Our data provider has an issue, please try again later.."
	},
	INTERNAL_SERVER_ERROR: {
		code: 500,
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
	let errorCode: number = errorRecord.UNDEFINED_ERROR.code;
	let errorMessage: string = errorRecord.UNDEFINED_ERROR.message;

	if (error.response) {
		// The request was made and the server responded with a status code(!= 2XX)
		if (error.response.status == errorRecord.BAD_REQUEST.code) {
			errorCode = errorRecord.BAD_REQUEST.code;
			errorMessage = errorRecord.BAD_REQUEST.message;
		} else if (error.response.status == errorRecord.INTERNAL_SERVER_ERROR.code) {
			errorCode = errorRecord.INTERNAL_SERVER_ERROR.code;
			errorMessage = errorRecord.INTERNAL_SERVER_ERROR.message;
		}
	} else if (error.request) {
		// The request was made but no response was received
		if (String(error).includes("Network Error")) {
			errorCode = errorRecord.NO_INTERNET_CONNECTION.code;
			errorMessage = errorRecord.NO_INTERNET_CONNECTION.message;
		}
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
