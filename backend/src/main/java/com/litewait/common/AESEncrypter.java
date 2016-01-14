package com.litewait.common;


import java.math.BigInteger;
import java.security.Key;
import java.util.Arrays;
import java.util.Iterator;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;
import org.springframework.stereotype.Component;

@Component("aesEncrypter")
public class AESEncrypter {

	public static String decrypt(final byte[] encKey, final String key)
			throws Exception {

		// Create key and cipher

		Key aesKey = new SecretKeySpec(key.getBytes(), "AES");

		Cipher cipher = Cipher.getInstance("AES");

		// decrypt the text

		cipher.init(Cipher.DECRYPT_MODE, aesKey);

		String decrypted = new String(cipher.doFinal(encKey));

		return decrypted;

	}

	public static byte[] encrypt(final String text, final String key)
			throws Exception {

		// Create key and cipher

		Key aesKey = new SecretKeySpec(key.getBytes(), "AES");

		Cipher cipher = Cipher.getInstance("AES");

		// encrypt the text

		cipher.init(Cipher.ENCRYPT_MODE, aesKey);
		return cipher.doFinal(text.getBytes());

	}

	public static void main(String[] args) {

		AESEncrypter aes = new AESEncrypter();
		try {
			// Base64.encodeToString(aes.encrypt("", ""), Base64.DEFAULT)
			byte[] enc = aes.encrypt("Litewait", "1234567812345678");
			System.out.println(bytesToString(enc));
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
	public static String bytesToString(byte[] b) {
	    byte[] b2 = new byte[b.length + 1];
	    b2[0] = 1;
	    System.arraycopy(b, 0, b2, 1, b.length);
	    return new BigInteger(b2).toString(36);
	}

	public static byte[] stringToBytes(String s) {
	    byte[] b2 = new BigInteger(s, 36).toByteArray();
	    return Arrays.copyOfRange(b2, 1, b2.length);
	}

	private static String bytesToHex(byte[] bytes) {
		final char[] hexArray = { '0', '1', '2', '3', '4', '5', '6', '7', '8',
				'9', 'A', 'B', 'C', 'D', 'E', 'F' };
		char[] hexChars = new char[bytes.length * 2];
		int v;
		for (int j = 0; j < bytes.length; j++) {
			v = bytes[j] & 0xFF;
			hexChars[j * 2] = hexArray[v >>> 4];
			hexChars[j * 2 + 1] = hexArray[v & 0x0F];
		}
		return new String(hexChars);
	}

}
