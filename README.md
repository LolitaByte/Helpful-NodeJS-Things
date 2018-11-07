# Helpful-NodeJS-Things

#Sleep in nodeJS
Function:
```JavaScript
function sleep(millis) {
  return new Promise((res, rej) => {
    setTimeout(millis, res);
  });
}
```
To Run:
```JavaScript
await sleep(1000);
```
