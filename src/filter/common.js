/*全局过滤器*/ 

//根据状态获取状态所对应的信息
export function setStatusInfo(value){
	switch(value)
	{
	case 1:
	  return '结算中';
	  break;
	case 2:
	  return '结算完成';
	  break;
	default:
	  return "进行中";
	}

}

