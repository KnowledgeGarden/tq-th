# !/bin/bash
echo "Cleaning Script start"
echo "Removing Node Modules"
rm -rf ./node_modules
echo "Node Modules removed"
echo "Running npm install"
npm i
echo "Cleaning Script complete"