[ComilaJS](http://www.comilajs.org/)
===================================

## Synopsis

This library aims to provide a lightweight Common Language Infrastructure for
web applications without the need for browser plugins or server-side execution.

## Motivation

This library was developed as a standalone dependency for a commercial project
which enables regular .Net applications to run as responsive web applications
without having to rewrite them completely.

## Installation

1. Download the latest stable release [here](
https://github.com/danitso/comilajs/releases)
2. Extract the contents of the archive and copy the contents of the `dist`
folder to your project's public assets folder.

## Usage

1. Include the [comila.min.js](dist/comila.min.js) script on the page
2. Run an application by invoking `comilajs.run('path/to/application.exe')`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Application Name</title>
    <meta charset="utf-8"/>
    <script src="assets/comila.min.js"></script>
  </head>

  <body>
    <script>
      comilajs.run('path/to/application.exe');
    </script>
  </body>
</html>
```

## Platform Invocation

An application must use P/Invoke in order to access the JavaScript engine in the
browser. This is achieved by targeting `javascript.dll`.

## Limitations

This library provides only the virtual execution system (VES) and as such, it
cannot directly run applications which rely on classes from `mscorlib`. However,
custom implementations of these classes can be provided by the applications.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This library is licensed under the GNU Lesser General Public License - see the
[LICENSE](LICENSE) file for details.
