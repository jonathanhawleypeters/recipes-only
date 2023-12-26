#!/bin/bash

cd scripts

node generate-recipes.js
node generate-landing-page-cards.js
node build-search-index.js