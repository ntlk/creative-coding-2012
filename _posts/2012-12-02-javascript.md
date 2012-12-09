---
title: JavaScript and APIs
number: Sessions 3 and 4
layout: post
published: false
intro: Time to start building something exciting. During this session I will introduce you to JavaScript, concept of APIs and hopefully will get you forever hooked on fetching data off the wild corners of the web and doing something cool with it.
---

## Table of contents

1. [Learning some more in your own time](#learning_some_more_in_your_own_time)
2. [Why are APIs awesome](#why_are_apis_awesome)
3. [Debugging](#debugging)

## Learning some more in your own time

[CodeAcademy](http://www.codecademy.com/) has some good sets of exercises that can help you [practice JavaScript](http://www.codecademy.com/tracks/javascript-combined). You can do them in small chunks and save your progress.

## Why are APIs awesome

> APIs are the next generation’s cardboard box.

> Give a child a cardboard box, and she’ll make a house, a rocket, a horse, a fort, a car, a cave, an oven, a container, a hat, and eventually a crumpled mess.

> Give a developer an API, and she’ll make untold numbers of new forms of the functionality and content you’ve provided. 

> – [Webponce](http://webponce.com/rants/2012/11/apis-are-our-next-generations-cardboard-box/)

## Debugging

Things always go wrong: you forget to add a bracket, mistype a variable name, or eat a closing semicolon. A good text editor with syntax highlighting can help a great deal, but these things will still happen. I have wasted many days of my life hunting down bugs which later turned out to be one character typos.

### Using the console

When your bugs aren't syntax bugs, but logic bugs tools like JS Hint won't be of much help. luckily there are other things you can do to figure out what went wrong. 

For example, you can print out value of variables, function results etc. into the JavaScript console so you can inspect them. To open up the console, go to the `View` menu, then ` Developer > JavaScript Console`.

You can then use `console.log(value)` in your code, like this:

{% highlight html linenos %}
<script>
	console.log('hello there');
</script>
{% endhighlight %}

Which results in this:

![hello there](http://farm9.staticflickr.com/8077/8256654807_74ebbea534_o.png)

Inspecting variables:

{% highlight html linenos %}
<script>
	var greeting = "hello there";
	console.log(greeting);
</script>
{% endhighlight %}

Notice that the output comes from a different line number.

![hello there](http://farm9.staticflickr.com/8063/8256654853_a4065eb037_o.png)

You can observe how variables change after you modify them:

{% highlight html linenos %}
<script>
	var number = 1;
	console.log(number);
	number = number + 1;
	console.log(number);
</script>
{% endhighlight %}

![hello there](http://farm9.staticflickr.com/8216/8256654765_1427e1d9ff_o.png)

You can also use `console.warn()`, `console.error()` and `console.info()` for printing out different types of messages for yourself.

To see the shortcuts for bringing up the console and other developer tools [see this StackOverflow answer][6].

### JS Hint

To pick all the little errors up (big ones too), you can use [JS Hint][3]. Paste your code in and it will suggest improvements, find missing brackets etc. You can customise what you want it to warn you about. Remember to select the options "Development" and "jQuery" so it doesn't by accident highlight correct code. 

You can use JS Hint in your code editor if you're using Sublime Text 2. To do this, you will need to install [Sublime Package Control][4], and then follow instructions under [Install JSHint with Package Control in Sublime Text 2][5]. Erroneous lines will be highlighted, and once your cursor is over them hints will appear in the bottom status bar.

For other useful debugging suggestions have a look through the [.net magazine tutorial][1].



[1]: http://www.netmagazine.com/tutorials/javascript-debugging-beginners
[2]: http://www.jslint.com/
[3]: http://www.jshint.com/
[4]: http://wbond.net/sublime_packages/package_control
[5]: https://github.com/uipoet/sublime-jshint
[6]: http://stackoverflow.com/a/5104475/376704