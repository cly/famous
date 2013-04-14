all: copy

test:
	NODE_ENV=test node_modules/mocha/bin/mocha --reporter spec --timeout 120000 test/$(file)

build:
	NODE_ENV=test node_modules/uglify-js/bin/uglifyjs --output public/js/app.js lib/app.js

copy:
	cp lib/app.js public/js/app.js


.PHONY: all test build copy
