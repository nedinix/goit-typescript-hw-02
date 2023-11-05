/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
	SUNDAY = "SUNDAY",
	MONDAY = "MONDAY",
	TUESDAY = "TUESDAY",
	WEDNESDAY = "WEDNESDAY",
	THURSDAY = "THURSDAY",
	FRIDAY = "FRIDAY",
	SATURDAYS = "SATURDAYS",
}

type IsWeekendType = boolean;

function isWeekend(param: string): IsWeekendType {
	return param === Days.SATURDAYS || param === Days.SUNDAY ? true : false;
}

isWeekend(Days.MONDAY);
