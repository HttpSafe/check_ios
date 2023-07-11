# check_ios

Check if the device is an iOS device and determine if it's an iPad, iPhone, Mac or Just any iOS device.

## Description

This package provides a class `CheckIOS` that allows you to check if the device is an iOS device and determine if it's an if it's an iPad, iPhone, Mac or Just any iOS device. It utilizes regular expressions to match the user agent string of the device.

## Installation

Install the package using npm:

## Usage

Import the `CheckIOS` class and create an instance of it:

```javascript
import CheckIOS from 'check_ios';

const check = new CheckIOS();

console.log('Is iOS:', check.isIOS());
console.log('Is iPad:', check.isIpad());
console.log('Is iPhone:', check.isIphone());
console.log('Is Mac device:', check.isMac());
```

The isIOS() method checks if the device is an iOS device based on the user agent string. The isIpad() method determines if the device is an iPad. The isIphone() method checks if the device is an iPhone. The isMac() method checks if the device is a Mac device

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the ISC License.

## Author

Sterin Saji
