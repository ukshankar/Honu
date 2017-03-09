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
  version                    INT8           
);

alter sequence honuuser_honuUserId_seq restart with 10000;

