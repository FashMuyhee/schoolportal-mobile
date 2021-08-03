import {
	setGenericPassword,
	ACCESS_CONTROL,
	SECURITY_LEVEL,
	getGenericPassword,
} from 'react-native-keychain';
import TouchID from 'react-native-touch-id';

const checkSensor = async () => {
	const optionalConfigObject = {
		unifiedErrors: false,
		passcodeFallback: false,
	};

	try {
		const biometryType = await TouchID.isSupported(optionalConfigObject)
		if (biometryType && biometryType != 'FaceID') {
			return (true);
		} else {
			return false
		}
	} catch (error) {
		let errorCode = Platform.OS == 'ios' ? error.name : error.code;
		if (
			errorCode === 'LAErrorTouchIDNotEnrolled' ||
			errorCode === 'NOT_AVAILABLE' ||
			errorCode === 'NOT_ENROLLED'
		) {
			return 'Please go to settings and enable Fingerprint'
		}
	}
};

const optionalConfigObject = {
	title: 'Authentication Required',
	imageColor: 'black',
	imageErrorColor: '#e00606',
	sensorDescription: 'Touch sensor',
	sensorErrorDescription: 'Failed',
	cancelText: 'Cancel',
};

const authenticateBiometric = async (biometryType) => {
	if (biometryType !== null && biometryType !== undefined) {
		try {
			const isAuth = await TouchID.authenticate(
				'Touch Fingerprint scanner to continue',
				optionalConfigObject,
			)
			return true;
		} catch (error) {
			console.log('Authentication error is => ', error);
			return false;
		}
	} else {
		console.log('biometric authentication is not available');
	}
};



const saveUserCredentials = async ({ uid, password }) => {
	try {
		await setGenericPassword(uid, password, {
			accessControl: ACCESS_CONTROL.USER_PRESENCE,
			securityLevel: SECURITY_LEVEL.SECURE_HARDWARE,
		});
	} catch (error) {
		console.log(error);
	}
};

const getCredentials = async () => {
	try {
		const credential = await getGenericPassword({
			accessControl: ACCESS_CONTROL.USER_PRESENCE,
		});
		return credential;
	} catch (error) {
		console.log(error);
	}
}

export {
	checkSensor,
	authenticateBiometric,
	saveUserCredentials,
	getCredentials,
};
