export enum coordinateRestrictions {
	MAX_LATITUDE = 90,
	MIN_LATITUDE = -90,
	MAX_LONGITUDE = 180,
	MIN_LONGITUDE = -180
}

export const latitudeRules = [
	(value: number) => {
		if (value >= -90) return true;
		return "Latitude must be greater or equal to -90";
	},
	(value: number) => {
		if (value <= 90) return true;
		return "Latitude must be lesser or equal to 90";
	}
];

export const longitudeRules = [
	(value: number) => {
		if (value >= -180) return true;
		return "Latitude must be greater or equal to -180";
	},
	(value: number) => {
		if (value <= 180) return true;
		return "Latitude must be lesser or equal to 180";
	}
];
