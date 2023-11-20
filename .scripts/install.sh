#!/bin/bash

# Reinstall packages for @monorepo/backend and @monorepo/frontend
yarn workspace @monorepo/backend install
yarn workspace @monorepo/frontend install

# Run all services & UIs
yarn workspace @monorepo/backend dev &
yarn workspace @monorepo/frontend dev
