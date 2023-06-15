import type ErrorDTO from "./api/ErrorDTO";

export default class ErrorInfo {
	code: number;
	message: string;
	happenedXTimes?: number;

	constructor(errorInfoAPI: ErrorDTO) {
		this.code = errorInfoAPI.code;
		this.message = errorInfoAPI.message;
		this.happenedXTimes = errorInfoAPI.happenedXTimes;
	}
}
