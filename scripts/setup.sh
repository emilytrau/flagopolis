#!/usr/bin/env bash

DENO_VERSION="1.25.2"

if [ ! -f ~/.bashrc.d/60-deno ]; then
  echo "Installing Deno v${DENO_VERSION}"
  wget -O /tmp/deno.zip "https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip"
  mkdir -p /workspace/.deno/bin /workspace/.deno/cache
  unzip -od /workspace/.deno/bin /tmp/deno.zip
  rm /tmp/deno.zip
  echo 'export PATH="/workspace/.deno/bin:$PATH"' > ~/.bashrc.d/60-deno
  echo 'export DENO_DIR="/workspace/.deno/cache"' >> ~/.bashrc.d/60-deno
  echo "Done"
fi

if ! command -v deno &> /dev/null; then
  source ~/.bashrc.d/60-deno
fi
