gendiff:
	node bin/gendiff.js

make lint:
	npx eslint .
	
test-coverage:
		NODE_OPTIONS=--experimental-vm-modules npx jest --coverage