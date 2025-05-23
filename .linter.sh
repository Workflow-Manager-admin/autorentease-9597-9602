#!/bin/bash
cd /home/kavia/workspace/code-generation/autorentease-9597-9602/main_container_for_autorentease
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

