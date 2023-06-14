import type IErrorInfo from "./api/IErrorInfo";

export default class ErrorInfo {
	code: number;
	message: string;
	happenedXTimes?: number;

	constructor(errorInfoAPI: IErrorInfo) {
		this.code = errorInfoAPI.code;
		this.message = errorInfoAPI.message;
		this.happenedXTimes = errorInfoAPI.happenedXTimes;
	}
}
