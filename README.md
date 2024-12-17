# cf-win7-panes
a Cloudflare worker for serving Windows 7-styled window panes for use as OBS layout components, using 7.css.

The actual win7 styling magic is done by [7.css](https://github.com/khang-nd/7.css) by [khang-nd](https://github.com/khang-nd)

Example requests to the worker:

https://worker.domain/?title=title&color=c851f0&surface=ffffff

https://worker.domain/?title=multi-part%20title&color=c851f0&surface=ffffff
