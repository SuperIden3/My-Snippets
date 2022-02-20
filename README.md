Here, this is where I code JavaScript files.
They might have some HTML files, but it also has JavaScript.

```js
alert('Check out the code!')
```

JavaScript is what creates the behavior of a page.

For instance, if you want to create a button that shows you the date, that's on your device, printed on a new line, you would use JavaScript.

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="button" value="Date" onclick="document.getElementById('demo').innerHTML = Date()" />
    <p id="demo"></p>
  </body>
</html>
```

