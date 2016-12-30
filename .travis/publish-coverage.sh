#!/bin/bash

if [ "$TRAVIS_NODE_VERSION" != "stable" ]
then
  echo "Skipping coverage publish for TRAVIS_NODE_VERSION ${TRAVIS_NODE_VERSION}"
  exit 0
fi

cat coverage/lcov.info | coveralls
