[ComlaJS](http://www.comlajs.org/)
===================================

## Synopsis

This library aims to provide a lightweight Common Language Runtime for web
applications without the need for browser plugins or server-side execution.

## Motivation

This library was developed as part of a larger commercial project which enables
regular .NET applications to run as responsive web applications without having
to rewrite them completely.

## Installation

1. Download the latest stable release [here](
https://github.com/danitso/comlajs/releases)
2. Extract the contents of the archive to a directory within your project root

## Usage

1. Include the [comla.min.js](build/comla.min.js) script on the page
2. Run an application by invoking `comlajs.run('/path/to/executable.exe')`

## Platform Invocation

An application must use P/Invoke in order to access the JavaScript engine in the
browser. This is achieved by targeting `comlajs.javascript.dll`.

## Limitations

This library does not include an implementation of `mscorlib`.

In case `mscorlib` references are found, the `System` namespace will be mapped
to `ComlaJS` before all referenced libraries are scanned for a namespace match.
This enables applications to provide custom implementations of the `mscorlib`
features they require.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This library is licensed under the GNU Lesser General Public License - see the
[LICENSE](LICENSE) file for details.
