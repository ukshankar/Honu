--------------------------------------------------------------------------------
-- Honu Database Object Creation Script                                     --
--------------------------------------------------------------------------------
--
-- This script creates the Honu database tables. We should not do data insertions or manipulations  in here.

--
-- Java Type(s)           Postgresql Type(s)       Notes
-- Long/long              INT8; SERIAL8            SERIAL# is preferred for
--                                                 Postgresql over creating
--                                                 sequences explicitly because
--                                                 it creates sequences with
--                                                 predictable names.
-- Integer/int            INT4; SERIAL4            See SERIAL8 note.
-- Short/short            INT2;
-- Boolean/boolean        BOOLEAN
-- Date                   TIMESTAMP WITH TIME ZONE Java dates are always in GMT.
--                        DATE                     DATE is only used when we're
--                                                 concerned only with the Date
--                                                 and not the time.  Generally,
--                                                 favour using the date and
--                                                 time form, because it will be
--                                                 more predictable when there
--                                                 are customers in multiple
--                                                 time zones.

CREATE TABLE honuuser (
  honuUserId                  SERIAL8        PRIMARY KEY,
  username                   VARCHAR(320)   UNIQUE,
  password                   VARCHAR(500)  ,
  isActivated                BOOLEAN           ,
  joininggDate           timestamp with time zone,
  termsAgreedTo				 int4			  ,
  agreesToPrivacyPolicy      BOOLEAN           ,
  dateOfBirth                DATE            ,
  temporarySignUpPasscode    VARCHAR(8)      ,
  firstName                  VARCHAR(50)     ,
  lastName                   VARCHAR(50)     ,
  biography                  TEXT,
  currentCountryCode         VARCHAR(3),
  currentCity                VARCHAR(50),
  currentProvinceCode        VARCHAR(6),
  timezoneCode               VARCHAR(10)     ,
  accountLocked              BOOLEAN           ,
  reputation                 NUMERIC		   ,
  seesbetagames              BOOLEAN           ,
  subscribesToMailingList    boolean           ,
  preferredLanguageCode		 VARCHAR(5),
  phonenumber				 VARCHAR(18), 
  passwordresettoken 		 varchar(65),
  passwordresetexpirydate 	 timestamp with time zone,
  migrated 					 boolean 		,
  authString 		 varchar(65),
  version                    INT8           
);

alter sequence honuuser_honuUserId_seq restart with 10000;


create table userskill (

skillid SERIAL8 primary key ,
honuUserId SERIAL8,
skillName         VARCHAR(3),
  skillDetail                VARCHAR(50)

);


create table honurequest (

honureqId SERIAL8 primary key ,
userReqId SERIAL8,
userId SERIAL8,
reqType    VARCHAR(500),
message    VARCHAR(500),
exp    VARCHAR(500),
location    VARCHAR(500),
aoi    VARCHAR(500),
createdTs 	 timestamp with time zone,
updatedTs 	 timestamp with time zone
);
alter sequence honurequest_honureqId_seq restart with 10000;

create table userevent (

honureqId SERIAL8 ,
eventId SERIAL8,
name    VARCHAR(500),
description    VARCHAR(500),
eventTime 	 timestamp with time zone,
eventType varchar(500)
);

alter sequence userevent_eventId_seq restart with 10000;

create table user_roles (
user_role_id SERIAL8 ,
role    VARCHAR(500),
honuuserid    SERIAL8
);

alter sequence user_roles_user_role_id_seq restart with 10000;