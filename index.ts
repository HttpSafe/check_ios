class CheckIOS {
	private iOSRegex: RegExp;
	private isIOSMobile: RegExp;
	private isMacDevice: RegExp;

	constructor() {
		this.iOSRegex =
			/iPad|'iPad Simulator'|iPhone|'iPhone Simulator'|iPod|'iPod Simulator'|Macintosh/;
		this.isIOSMobile =
			/iPad|'iPad Simulator'|iPhone|'iPhone Simulator'|iPod|'iPod Simulator'/;
		this.isMacDevice = /Macintosh/;
	}

	isIpad(): boolean {
		if (this.isIOS()) {
			const maxTouchPoints: number = navigator.maxTouchPoints;
			if (maxTouchPoints === 5) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	isIphone(): boolean {
		if (this.isIOS()) {
			if (this.isIOSMobile.test(navigator.userAgent)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	isIOS(): boolean {
		const userAgent: string = navigator.userAgent;

		if (this.iOSRegex.test(userAgent)) {
			return true;
		} else {
			return false;
		}
	}

	isMac(): boolean {
		if (this.isIOS()) {
			const userAgent: string = navigator.userAgent;
			if (this.isMacDevice.test(userAgent)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
}

export default CheckIOS;
