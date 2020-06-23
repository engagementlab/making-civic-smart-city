#!/usr/bin/env bash
# Script for launching dev instance

export NVM_DIR=~/.nvm;
source ~/.nvm/nvm.sh;

cd client;
nvm use;

npm run dev;