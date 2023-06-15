export default class ErrorInfo {
	code: number;
	message: string;
	happenedXTimes?: number;

	constructor() {
		this.code = 0;
		this.message = "";
		this.happenedXTimes = 0;
	}
}
