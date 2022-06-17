#!/usr/bin/env bash
hugo version
rm -rf ../www/blog
mkdir ../www/blog
hugo -d ../www/blog -v