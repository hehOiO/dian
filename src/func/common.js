export function hidden_str(str,fnum=1,bnum=1,star=4){
 	//新字符串
	let newstr='';
	//前字符串
	var fstr='';
	//后字符串
	let bstr='';
	let starstr='';
	str=str+'';
	fnum=fnum>(str.length/2)?0:fnum;
	bnum=bnum>(str.length/2)?0:bnum;
	for(let i=0;i<fnum;i++){
		fstr = fstr+str[i];
	}
	bstr = str.substr(-bnum)
	for(let i=0;i<star;i++){
		starstr +='*';
	}
	newstr=fstr+starstr+bstr;
	return newstr;
}
//strTotime
export function strTotime(datetime,symbol='-'){ 
  var tmp_datetime = datetime.replace(/:/g,symbol); 
  tmp_datetime = tmp_datetime.replace(/ /g,symbol); 
  var arr = tmp_datetime.split("-"); 
  var now = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5])); 
  return now; 
}
//将秒转换为时分秒格式
export function secondToTime(value,hoursymbol=":",minsymbol=":",secondsymbol=''){
	if(typeof value != 'number'){
		return '时间格式错误';
	}
	let hour = Math.floor(value/3600);
	let min = Math.floor((value-hour*3600)/60);
	let second = value-hour*3600-min*60;
	min = min < 10?'0'+min:min;
	second = second < 10?'0'+second:second;
	return hour+hoursymbol+min+minsymbol+second+secondsymbol;
}