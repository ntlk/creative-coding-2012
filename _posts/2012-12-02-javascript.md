---
title: JavaScript
number: Session 3 
layout: post
published: true
intro: Time to start building something exciting. We'll make a simple project that will introduce you to JavaScript syntax, and pave the way for making things with data from external sources.
---

## Table of contents

1. [Slides](#slides)
1. [Learning some more in your own time](#learning_some_more_in_your_own_time)
2. [Programs vs markup](#programs_vs_markup)
3. [jQuery](#jquery)
3. [artybollocks inspired project](#artybollocks_inspired_project)
6. [Debugging](#debugging)
7. [Syntax](#syntax)

## Slides

PDF version of the slides for this session can be found [here](/creative-coding-2012/assets/creative_coding_2012_session3_javascript.pdf).

## Learning some more in your own time

[CodeAcademy](http://www.codecademy.com/) has some good sets of exercises that can help you [practice JavaScript](http://www.codecademy.com/tracks/javascript-combined). You can do them in small chunks and save your progress.

## Programs vs markup

If you're still unsure as to what is the difference between a programming language and a markup language, perhaps [this article by J. Korpela](http://www.cs.tut.fi/~jkorpela/prog.html) will help explain that.

## jQuery

[jQuery](http://jquery.com/) is a [library][7] that simplifies some of the common things people do with web pages and JavaScript (and fixes for you some of the inconsistencies resulting from browser bugs etc). It might be a little bit confusing to know which things you learn that are part of it, and which ones are vanilla JavaScript – that's okay. You'll get there in time. 

## artybollocks inspired project

We're going to be making a little program inspired by [artybollocks generator](http://www.artybollocks.com/) - a random statement generator, so you can get familliar with the syntax before we move onto the next thing. We will be using words written by [David James Ross](http://www.davidjamesross.co.uk). I am not sure what the license is, but I hope the authors won't be mad that you are learning from their work :)

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

Notice that the output comes from a different line number, because we've added an extra line to define the contents of the variable.

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

_But beware! This won't work in tools such as JS Bin._

To see the shortcuts for bringing up the console and other developer tools [see this StackOverflow answer][6].

### JS Hint

To pick all the little errors up (big ones too), you can use [JS Hint][3]. Paste your code in and it will suggest improvements, find missing brackets etc. You can customise what you want it to warn you about. Remember to select the options "Development" and "jQuery" so it doesn't by accident highlight correct code. 

You can use JS Hint in your code editor if you're using Sublime Text 2. To do this, you will need to install [Sublime Package Control][4], and then follow instructions under [Install JSHint with Package Control in Sublime Text 2][5]. Erroneous lines will be highlighted, and once your cursor is over them hints will appear in the bottom status bar.

### Asking questions 

[StackOverflow](http://stackoverflow.com/) is a Q&A site dedicated to programming. Most questions you will need to ask have already been asked and answered before. It's one of the sites I have always open when I code. 

Good questions and answers are rewarded, so even fairly basic questions are answered in a helpful manner.

### Other

For other useful debugging suggestions have a look through the [.net magazine tutorial][1].

## Syntax

[Comprehensive JavaScript syntax guide](http://en.wikipedia.org/wiki/JavaScript_syntax) can be found on Wikipedia, though you are already familiar with [DocHub](http://dochub.io/#javascript/) which might be more useful.




[1]: http://www.netmagazine.com/tutorials/javascript-debugging-beginners
[2]: http://www.jslint.com/
[3]: http://www.jshint.com/
[4]: http://wbond.net/sublime_packages/package_control
[5]: https://github.com/uipoet/sublime-jshint
[6]: http://stackoverflow.com/a/5104475/376704
[7]: http://en.wikipedia.org/wiki/Library_(computing)