docker run --name node-test --mount type=bind,source=\node-example,target=/app/src -p 3000:3000 node-example
