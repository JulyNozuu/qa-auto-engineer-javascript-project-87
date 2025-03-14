gendiff:
	node bin/gendiff.js

make lint:
	npx eslint .

test-coverage:
	npm test -- --coverage