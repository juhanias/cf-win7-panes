# cf-win7-panes
a Cloudflare worker for serving Windows 7-styled window panes for use as OBS layout components, using 7.css.

The actual win7 styling magic is done with [7.css](https://github.com/khang-nd/7.css) by [khang-nd](https://github.com/khang-nd)

Example requests to the worker:

https://worker.domain/?title=title&color=c851f0&surface=ffffff

![kuva](https://github.com/user-attachments/assets/75d72fc1-d0d9-48b9-8fff-0458b0f07833)

https://worker.domain/?title=multi-part%20title&color=c851f0&surface=ffffff

![kuva](https://github.com/user-attachments/assets/a37cacf1-c891-4134-ae91-cb191166348e)

https://worker.domain/?title=Hello%20World&color=eb3495

![kuva](https://github.com/user-attachments/assets/887bbc86-6724-4be5-8433-7be5a2512eaf)
