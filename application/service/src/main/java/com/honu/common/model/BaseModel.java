package com.honu.common.model;

public  interface BaseModel {
	
	public static int  OK = 200;
	public static int NOT_FOUND= 400;
	public static int INTERNAL_ERROR = 500;
	public static int UNATHORIZED = 401;
	
	/** Internal error**/
	public static int  NOT_OK = 201;
	
	public int getResponse() ;
	public String getMessage();

}
