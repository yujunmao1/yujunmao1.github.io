## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
  integrity="sha384-xBsHBR6BS/LSlO3cOyY2D/4KkmaHjlNn3NnXUMFFc14HLZD7vwVgS3+6U/WkHAra"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"
  integrity="sha384-WmGkHEmwSI19EhTfO1nrSk3RziUQKRWg3vO0Ur3VYZjWvJRdRnX4/scQg+S2w1fI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-uBlc/xEFeDxZmBU7K/YWwi3ryXQrLQCAY2K1Dl3OD2DaAQBZZTt6Ew3aeDP20ix0 /es/languages/bash.js
sha384-4qer4rJCVxZjkwD4YaJfOnT2NOOt0qdjKYJM2076C+djiJ4lgrP1LVsB/MCpJSET /es/languages/bash.min.js
sha384-+5oyk7Ed3OlvEWGj8xracq/6e52BScKUN4kxcreNwB7kfRTVsAMs/aAJM58dzIFN /es/languages/python.js
sha384-ND/UH2UkaeWiej5v/oJspfKDz9BGUaVpoDcz4cof0jaiv/mCigjvy7RQ7e+3S6bg /es/languages/python.min.js
sha384-qbbaBGYYg7PdopdWOGj8KdkBosUDY5PAe3aTMJKTqWcriPBJJzCVu5BlwNEwqr9U /languages/bash.js
sha384-ByZsYVIHcE8sB12cYY+NUpM80NAWHoBs5SL8VVocIvqVLdXf1hmXNSBn/H9leT4c /languages/bash.min.js
sha384-zdZio5RcGiKQJCpe/1IXujPle3bIY8sbmvCabSU5G5GzWAzZtoRZfg9QAQXCL08q /languages/python.js
sha384-IP4vv4Aoh9Lyg8QyzVkAmn2JGoDCpgVHzVSrD3Z+rVyn7+s4wx4pRjv+go3TEwfj /languages/python.min.js
sha384-xldCwMn8M5wtaDSbRYAXowRHy2pX27nRQj4odgMjdKfkRqu8owMSv2R7w44qgpIf /highlight.js
sha384-ieETFlLkNJ0b3uSlZfxX4wdNI/zjqw93jpjxBTDhRP2oYmPLWif/S8NIfsKapY7W /highlight.min.js
```

