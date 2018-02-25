/*
NOTE REGARDING INPUTS:
	timestamp is the result of new Date().getTime()
		e.g. 1517385346000
	dateString is the string output of new Date()
		e.g. "2018-01-31T07:55:46.000Z"
*/
export function prettifyDate(dateString){
	let datetime = new Date(dateString);
	return datetime.toLocaleDateString('en-US');
}

export function prettifyDateAndTime(dateString){
	let datetime = new Date(dateString);
	return `${datetime.toLocaleDateString('en-US')}, ${datetime.toLocaleTimeString('en-US')}`;
}

export function prettifyTimestamp(timestamp){
	let datetime = new Date(timestamp);
	console.log(datetime.toLocaleString('en-US'));
	return `${datetime.toLocaleDateString('en-US')}, ${datetime.toLocaleTimeString('en-US')}`;
};

export default {
	prettifyDate,
	prettifyDateAndTime,
	prettifyTimestamp,
}
