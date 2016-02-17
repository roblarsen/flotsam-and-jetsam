##install

Node and grunt are required.

`npm install -g grunt-cli`

`npm install` will install most dependencies. Some have to be installed manually:
`npm install karma`
`npm install phantomjs-prebuilt`
`npm install jasmine-core`



## Build & development

Run `grunt` for building and `grunt serve:dist` for full preview.

TODO: `grunt serve` fails to run the `watch` task. I'm currently running the server in one window and `grunt watch` in the other.  

## Testing

Running `grunt test` will run the unit tests with karma.
