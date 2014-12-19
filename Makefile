DATABASE_PATH = var/store.sqlite
SHELL = /bin/bash

.PHONY: setup

database:
	@if [ -a ${DATABASE_PATH} ] ; \
	then \
		echo "Deleting database..." && rm -rf ${DATABASE_PATH} ; \
	fi; \
	echo "Creating database" && \
	sqlite3 ${DATABASE_PATH} < tests/_data/database.sql

install: npm bower composer
	@echo "Dependencies installed..."

npm:
	npm install

bower:
	bower install

composer:
	composer install

setup: install database
	@echo "Done!";
