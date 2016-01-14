package com.litewait.common;


import java.security.spec.KeySpec;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import javax.crypto.spec.DESedeKeySpec;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

/**
 * 
 * StringEncrypter class to encrypt the password
 * 
 */
@Component("desEncrypter")
public class DESEncrypter {

	public static final String DESEDE_ENCRYPTION_SCHEME = "DESede";
	public static final String DES_ENCRYPTION_SCHEME = "DES";
	public static final String DEFAULT_ENCRYPTION_KEY = "mnlijs098l23ljlkjs09iijnsa;;k-0133n4";

	private final Logger log = LoggerFactory.getLogger(DESEncrypter.class);

	private KeySpec keySpec;
	private static SecretKeyFactory keyFactory;
	private static Cipher cipher;

	private static final String UNICODE_FORMAT = "UTF8";

	public DESEncrypter() {
		this(DES_ENCRYPTION_SCHEME);
	}

	public DESEncrypter(String encryptionScheme) {
		this(encryptionScheme, DEFAULT_ENCRYPTION_KEY);
	}

	public DESEncrypter(String encryptionScheme, String encryptionKey) {

		if (encryptionKey == null) {
			throw new IllegalArgumentException("encryption key was null");
		}
		if (encryptionKey.trim().length() < 24) {
			throw new IllegalArgumentException(
					"encryption key was less than 24 characters");
		}

		try {
			byte[] keyAsBytes = encryptionKey.getBytes(UNICODE_FORMAT);

			if (encryptionScheme.equals(DESEDE_ENCRYPTION_SCHEME)) {
				keySpec = new DESedeKeySpec(keyAsBytes);
			} else if (encryptionScheme.equals(DES_ENCRYPTION_SCHEME)) {
				keySpec = new DESKeySpec(keyAsBytes);
			} else {
				throw new IllegalArgumentException(
						"Encryption scheme not supported: " + encryptionScheme);
			}

			keyFactory = SecretKeyFactory.getInstance(encryptionScheme);
			
			cipher = Cipher.getInstance(encryptionScheme);
			

		} catch (Exception e) {
			log.error(
					"Encryption utility fails, so will not be able to connect to the database",
					e);
		}

	}

	public String encrypt(String unencryptedString) throws EncryptionException {
		if (unencryptedString == null || unencryptedString.trim().length() == 0) {
			throw new IllegalArgumentException(
					"unencrypted string was null or empty");
		}

		try {
			SecretKey key = keyFactory.generateSecret(keySpec);
			
				cipher.init(Cipher.ENCRYPT_MODE, key);

				byte[] cleartext = unencryptedString.getBytes(UNICODE_FORMAT);
				byte[] ciphertext = cipher.doFinal(cleartext);

				BASE64Encoder base64encoder = new BASE64Encoder();
				return base64encoder.encode(ciphertext);
			
		} catch (Exception e) {
			throw new EncryptionException(e);
		}
	}

	/**
	 * This method will decrpt the string
	 * 
	 */
	public String decrypt(String encryptedString) throws EncryptionException {
		if (encryptedString == null || encryptedString.trim().length() <= 0) {
			throw new IllegalArgumentException(
					"encrypted string was null or empty");
		}

		try {
			synchronized (Cipher.class) {
			SecretKey key = keyFactory.generateSecret(keySpec);
			cipher.init(Cipher.DECRYPT_MODE, key);
			BASE64Decoder base64decoder = new BASE64Decoder();
			byte[] cleartext = base64decoder.decodeBuffer(encryptedString);
			byte[] ciphertext = cipher.doFinal(cleartext);

			return bytes2String(ciphertext);
			}
		} catch (Exception e) {
			throw new EncryptionException(e);
		}
	}

	private static String bytes2String(byte[] bytes) {
		StringBuffer stringBuffer = new StringBuffer();
		for (int i = 0; i < bytes.length; i++) {
			stringBuffer.append((char) bytes[i]);
		}
		return stringBuffer.toString();
	}

	public static class EncryptionException extends Exception {
		public EncryptionException(Throwable t) {
			super(t);
		}
	}

	
}
