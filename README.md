1)what is emmet?

Emmet is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow
Basically, most text editors out there allow you to store and re-use commonly used code chunks, called “snippets”. While snippets are a good way to boost your productivity, all implementations have common pitfalls: you have to define the snippet first and you can’t extend them in runtime.

Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation. Emmet is developed and optimised for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.

2)Diff between library and framework
Libraries provide developers with predefined functions and classes to make their work easier and boost the development process. Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms

3)what is CDN and why do we use it?
A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.


4)what is crossorigin in script tag
The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

5)what is difference between react and reactdom
The reason for this separation is React's design philosophy to be platform-agnostic. While ReactDOM deals with web-specific rendering, there are other renderers like React Native (for mobile apps) or ReactVR (for virtual reality) that leverage the core React library to target different platforms.

6)what is difference between react.development.js and react.production.js in cdn
In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

What is async in script tag in JavaScript?
Async in script tag in JavaScript is a way to load scripts asynchronously. That means, if a script is async, it will be loaded independently of other scripts on the page, and will not block the page from loading.

If you have a page with several external scripts, loading them all asynchronously can speed up the page load time, because the browser can download and execute them in parallel.

To use async, simply add the async attribute to your script tag:

<script async src="script.js"></script>
Code language: JavaScript (javascript)
What is defer in script tag in JavaScript?
By using the defer attribute in HTML, the browser will load the script only after parsing (loading) the page. This can be helpful if you have a script that is dependent on other scripts, or if you want to improve the loading time of your page by loading scripts after the initial page load.

To use defer, simply add the defer attribute to your script tag:

<script defer src="script.js"></script>
Code language: JavaScript (javascript)
async and defer – Actual difference between the two
The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded, but they differ in when those files are executed.

Async downloads and executes JavaScript as soon as it’s available, while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.

In most cases, it doesn’t matter which attribute you use – both will improve performance by allowing the browser to continue parsing while waiting for JavaScript to download. However, there are some situations where one attribute may be preferable to the other.

Advantages of using the defer attribute
There are several advantages to using the defer attribute in your script tags:

Deferred scripts are guaranteed to run after the page has been loaded and parsed, so they can’t slow down the initial page load.

Since deferred scripts are not parsed until after the page has loaded, they can’t block the parsing of other elements on the page (such as images).

Deferred scripts can be updated independently of the rest of the page, which means that if you change a deferred script, you don’t have to re-parse and re-render the entire page.

Disadvantages of using the defer attribute
One is that it can potentially delay your page from loading. If you have a lot of scripts that use defer, they could all be trying to load at the same time and slow down your page.

Another disadvantage is that older browsers might not support defer, so your scripts might not load at all for some users.

Advantages of using the async attribute
When loading a large JavaScript file, using the async attribute can be beneficial. It tells the browser that it can go ahead and continue parsing the HTML document while the JavaScript file is being downloaded. This can reduce the perceived load time of the page because the browser can start to render elements sooner.

Disadvantages of using the async attribute
One of the biggest disadvantages of using async is that it can break the render-blocking CSS rule. This rule is important for ensuring that the page loads correctly and doesn’t appear blank while the JavaScript file is loading. If async is used, the CSS file will be downloaded as soon as the JavaScript file starts loading, which can cause problems if the JavaScript file is large or takes a long time to load.

Another disadvantage of async is that it can delay the loading of other resources on the page, such as images. This can cause a significant delay in the overall loading time of the page.

Finally, async can also cause issues with certain types of user scripts and extensions. These user scripts and extensions rely on being able to modify the DOM after the page has loaded, but if async is used they may not be able to do this because the DOM might not have already loaded by the time they run.

Conclusion
If you’re working with JavaScript, it’s important to understand the difference between async and defer attributes. Async allows your script to run as soon as it’s loaded, without blocking other elements on the page. Defer means your script will only execute after the page has finished loading. In most cases, async is the better option — but there are exceptions. Understanding when to use each one will help you create a faster and more efficient website.