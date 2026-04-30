#!/bin/bash

case $NODE_ENV in
  development)
    echo "Running Example API in development mode."
    cp .env.example .env
    pnpm run build
    pnpm run start:debug
    ;;
  production)
    echo "Running Example API in production mode."
    cp .env.production .env
    pnpm run build
    pnpm run start
    ;;
  *)
    echo "Running Example API in staging mode (default)."
    cp .env.staging .env
    pnpm run build
    pnpm run start
    ;;
esac
