install: # install
	npm ci

brain-games: # start the game
	node bin/brain-games.js

publish: # publish the package
	npm publish --dry-run

lint:  # linter checks
	npx eslint .