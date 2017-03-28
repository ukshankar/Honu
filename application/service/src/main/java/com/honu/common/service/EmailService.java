package com.honu.common.service;

import java.util.Date;

public interface EmailService {

	void sendEmail(String to, String subject, String body);

	void sendInvite(String to, String subject, String body, Date time) throws Exception;

}
