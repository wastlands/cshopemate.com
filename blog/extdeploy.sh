#!/usr/bin/env bash

rm -rf ../www/blog
mkdir ../www/blog
hugo_ext -d ../www/blog -v
