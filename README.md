
# Web APIs Challenge: Code Quiz
![License Badge](https://img.shields.io/badge/License-MIT-green)

## Table of Contents
* [Description](#description)
* [Examples](#examples)
* [Technologies](#technologies)
* [License](#license)


## Description
The purpose is to create a simple calendar application that allows a user to save events for each hour of the day.

## Examples
Created an if than statement that compared the current time using day.js and labeled each block present, past, future.
```JavaScript

var workHours = ["9","10","11","12","13","14","15","16","17"]

var currentHour = dayjs().hour();

      if (currentHour == workHours[i]) {
        whenTime = "present"
      } else if (currentHour < workHours[i]){
        whenTime = "future"
      } else {
        whenTime = "past"
      }
```

Created an event listner that saves the input text to loacl storage.
```JavaScript

    $(".saveBtn").on("click", function () {
      var parent = $(this).parent();
      var id = parent.attr("id");
      var eventText = parent.find(".description").val();
      localStorage.setItem(id, eventText);
    });

```
## Technologies
* ![HTML Badge](https://img.shields.io/badge/Language-HTML-blue)
* ![CSS Badge](https://img.shields.io/badge/Language-CSS-yellow)
* ![JS Badge](https://img.shields.io/badge/Language-JavaScript-yellow)

## License
Copyright 2023 Matt Fleming

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.