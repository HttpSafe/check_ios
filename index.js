'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var CheckIOS = /** @class */ (function () {
	function CheckIOS() {
		this.iOSRegex =
			/iPad|'iPad Simulator'|iPhone|'iPhone Simulator'|iPod|'iPod Simulator'|Macintosh/;
		this.isIOSMobile =
			/iPad|'iPad Simulator'|iPhone|'iPhone Simulator'|iPod|'iPod Simulator'/;
		this.isMacDevice = /Macintosh/;
	}
	CheckIOS.prototype.isIpad = function () {
		if (this.isIOS()) {
			var maxTouchPoints = navigator.maxTouchPoints;
			if (maxTouchPoints === 5) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};
	CheckIOS.prototype.isIphone = function () {
		if (this.isIOS()) {
			if (this.isIOSMobile.test(navigator.userAgent)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};
	CheckIOS.prototype.isIOS = function () {
		var userAgent = navigator.userAgent;
		if (this.iOSRegex.test(userAgent)) {
			return true;
		} else {
			return false;
		}
	};
	CheckIOS.prototype.isMac = function () {
		if (this.isIOS()) {
			var userAgent = navigator.userAgent;
			if (this.isMacDevice.test(userAgent)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};
	return CheckIOS;
})();
exports.default = CheckIOS;
