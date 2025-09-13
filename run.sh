#!/bin/bash

# Use Node version from .nvmrc
if command -v nvm &> /dev/null; then
    nvm use
fi

# Install dependencies and start
yarn install && yarn start