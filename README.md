Content filling form for Ramayana sangraha
=======================

## Features
--------
- **Local Authentication** using Email and Password
- **OAuth 1.0a Authentication** via Twitter
- **OAuth 2.0 Authentication** via Facebook, Google, GitHub, LinkedIn, Instagram
- Flash notifications
- MVC Project Structure
- Node.js clusters support
- Sass stylesheets (auto-compiled via middleware)
- Bootstrap 3 + Extra Themes
- Contact Form (powered by Mailgun, Sendgrid or Mandrill)
- **Account Management**
 - Gravatar
 - Profile Details
 - Change Password
 - Forgot Password
 - Reset Password
 - Link multiple OAuth strategies to one account
 - Delete Account
- CSRF protection
- **API Examples**: Facebook, Foursquare, Last.fm, Tumblr, Twitter, Stripe, LinkedIn and more.

## Obtaining API Keys
------------------
I have included dummy keys and passwords for all API examples to get you up and running even faster. But don't forget to update them with your credentials when you are ready to deploy an app. See `.env.example.txt`.

For MongoDB, we recommend creating a free one at [mlab](https://mlab.com).

To use any of the included APIs or OAuth authentication methods, you will need
to obtain appropriate credentials: Client ID, Client Secret, API Key, or
Username & Password. You will need to go through each provider to generate new
credentials.

Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **controllers**/api.js             | Controller for /api route and all api examples.              |
| **controllers**/contact.js         | Controller for contact form.                                 |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **models**/User.js                 | Mongoose schema and model for User.                          |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                 |
| **public**/**js**/main.js          | Place your client-side JavaScript here.                      |
| **public**/**css**/main.scss       | Main stylesheet for your app.                                |
| **public/css/themes**/default.scss | Some Bootstrap overrides to make it look prettier.           |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.      |
| **views/api**/                     | Templates for API Examples.                                  |
| **views/partials**/flash.pug       | Error, info and success flash notifications.                 |
| **views/partials**/header.pug      | Navbar partial template.                                     |
| **views/partials**/footer.pug      | Footer partial template.                                     |
| **views**/layout.pug               | Base template.                                               |
| **views**/home.pug                 | Home page template.                                          |
| .env                       | Your API keys, tokens, passwords and database URI.           |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |

List of Packages
----------------

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| async                           | Utility library that provides asynchronous control flow.              |
| bcrypt-nodejs                   | Library for hashing and salting user passwords.                       |
| cheerio                         | Scrape web pages using jQuery-style syntax.                           |
| clockwork                       | Clockwork SMS API library.                                            |
| connect-mongo                   | MongoDB session store for Express.                                    |                           |
| express                         | Node.js web framework.                                                |
| body-parser                     | Express 4 middleware.                                                 |
| express-session                 | Express 4 middleware.                                                 |
| morgan                          | Express 4 middleware.                                                 |
| compression                     | Express 4 middleware.                                                 |
| errorhandler                    | Express 4 middleware.                                                 |
| serve-favicon                   | Express 4 middleware offering favicon serving and caching.            |
| express-flash                   | Provides flash messages for Express.                                  |
| express-status-monitor          | Reports real-time server metrics for Express.                         |
| express-validator               | Easy form validation for Express.                                     |
| fbgraph                         | Facebook Graph API library.                                           |
| github                          | GitHub API library.                                                   |
| pug (jade)                      | Template engine for Express.                                          |
| lastfm                          | Last.fm API library.                                                  |
| instagram-node                  | Instagram API library.                                                |
| lob                             | Lob API library                                                       |
| lusca                           | CSRF middleware.                                                      |
| mongoose                        | MongoDB ODM.                                                          |
| node-foursquare                 | Foursquare API library.                                               |
| node-linkedin                   | LinkedIn API library.                                                 |
| node-sass-middleware            | Sass middleware compiler.                                                 |
| nodemailer                      | Node.js library for sending emails.                                   |
| passport                        | Simple and elegant authentication library for node.js                 |
| passport-facebook               | Sign-in with Facebook plugin.                                         |
| passport-github                 | Sign-in with GitHub plugin.                                           |
| passport-google-oauth           | Sign-in with Google plugin.                                           |
| passport-twitter                | Sign-in with Twitter plugin.                                          |
| passport-instagram              | Sign-in with Instagram plugin.                                        |
| passport-local                  | Sign-in with Username and Password plugin.                            |
| passport-linkedin-oauth2        | Sign-in with LinkedIn plugin.                                         |
| passport-oauth                  | Allows you to set up your own OAuth 1.0a and OAuth 2.0 strategies.    |
| paypal-rest-sdk                 | PayPal APIs library.                                                  |
| request                         | Simplified HTTP request library.                                      |
| stripe                          | Offical Stripe API library.                                           |
| tumblr.js                       | Tumblr API library.                                                   |
| twilio                          | Twilio API library.                                                   |
| twit                            | Twitter API library.                                                  |
| lodash                          | Handy JavaScript utlities library.                                    |
| validator                       | Used in conjunction with express-validator in **controllers/api.js**. |
| mocha                           | Test framework.                                                       |
| chai                            | BDD/TDD assertion library.                                            |
| supertest                       | HTTP assertion library.                                               |


How It Works (mini guides)
--------------------------

This section is intended for giving you a detailed explanation about
how a particular functionality works. Maybe you are just curious about
how it works, or maybe you are lost and confused while reading the code,
I hope it provides some guidance to you.

###Custom HTML and CSS Design 101

[HTML5 UP](http://html5up.net/) has many beautiful templates that you can download for free.

When you download the ZIP file, it will come with *index.html*, *images*, *css* and *js* folders. So, how do you
integrate it with Hackathon Starter? Hackathon Starter uses Bootstrap CSS framework, but these templates do not.
Trying to use both CSS files at the same time will likely result in undesired effects.

**Note:** Using the custom templates approach, you should understand that you cannot reuse any of the views I have created: layout, home page, api browser, login, signup, account management, contact. Those views were built using Bootstrap grid and styles. You will have to manually update the grid using a different syntax provided in the template. **Having said that, you can mix and match if you want to do so: Use Bootstrap for main app interface, and a custom template for a landing page.**

Let's start from the beginning. For this example I will use [Escape Velocity](http://html5up.net/escape-velocity/) template:
![Alt](http://html5up.net/uploads/images/escape-velocity.jpg)

**Note:** For the sake of simplicity I will only consider `index.html`, and skip `left-sidebar.html`,
`no-sidebar.html`, `right-sidebar.html`.

Move all JavaScript files from `html5up-escape-velocity/js` to `public/js`. Then move all CSS files from `html5up-escape-velocity/css` to `public/css`. And finally, move all images from `html5up-escape-velocity/images` to `public/images`. You could move it to the existing **img** folder, but that would require manually changing every `img` reference. Grab the contents of `index.html` and paste it into [HTML To Jade](http://html2jade.aaron-powell.com/).

**Note:** Do not forget to update all the CSS and JS paths accordingly.

Create a new file `escape-velocity.pug` and paste the Pug markup in `views` folder.
Whenever you see the code `res.render('account/login')` - that means it will search for `views/account/login.pug` file.

Let's see how it looks. Create a new controller **escapeVelocity** inside `controllers/home.js`:

```js
exports.escapeVelocity = (req, res) => {
  res.render('escape-velocity', {
    title: 'Landing Page'
  });
};
```

And then create a route in `app.js`. I placed it right after the index controller:
```js
app.get('/escape-velocity', homeController.escapeVelocity);
```

Restart the server (if you are not using **nodemon**), then you should see the new template at [https://project-name.glitch.me/escape-velocity](https://project-name.glitch.me/escape-velocity).

I will stop right here, but if you would like to use this template as more than just a single page, take a look at how these Jade templates work: `layout.pug` - base template, `index.pug` - home page, `partials/header.pug` - Bootstrap navbar, `partials/footer.pug` - sticky footer. You will have to manually break it apart into smaller pieces. Figure out which part of the template you want to keep the same on all pages - that's your new `layout.pug`.
Then, each page that changes, be it `index.pug`, `about.pug`, `contact.pug`
will be embedded in your new `layout.pug` via `block content`. Use existing templates as a reference.

This is a rather lengthy process, and templates you get from elsewhere,
might have yet another grid system. That's why I chose *Bootstrap* for the Hackathon Starter.
 Many people are already familiar with *Bootstrap*, plus it's easy to get started with it if you have never used *Bootstrap*.
 You can also buy many beautifully designed *Bootstrap* themes at [Themeforest](http://themeforest.net/), and use them as a drop-in replacement for Hackathon Starter. However, if you would like to go with a completely custom HTML/CSS design, this should help you to get started!

<hr>

### How do flash messages work in this project?
Flash messages allow you to display a message at the end of the request and access
it on next request and only next request. For instance, on a failed login attempt, you would
display an alert with some error message, but as soon as you refresh that page or visit a different
page and come back to the login page, that error message will be gone. It is only displayed once.
This project uses *express-flash* module for flash messages. And that
module is built on top of *connect-flash*, which is what I used in
this project initially. With *express-flash* you don't have to
explicitly send a flash message to every view inside `res.render()`.
All flash messages are available in your views via `messages` object by default,
thanks to *express-flash*.

Flash messages have a two-step process. You use `req.flash('errors', { msg: 'Error messages goes here' }`
to create a flash message in your controllers, and then display them in your views:
```jade
if messages.errors
  .alert.alert-danger.fade.in
    for error in messages.errors
      div= error.msg
```
In the first step, `'errors'` is the name of a flash message, which should match the
name of the property on `messages` object in your views. You place alert messages
inside `if message.errors` because you don't want to show them flash messages are actually present.
The reason why you pass an error like `{ msg: 'Error messages goes here' }` instead
of just a string - `'Error messages goes here'`, is for the sake of consistency.
To clarify that, *express-validator* module which is used for validating and sanitizing user's input,
returns all errors as an array of objects, where each object has a `msg` property with a message
why an error has occurred. Here is a more general example of what express-validator returns when there are errors present:

```js
[
  { param: "name", msg: "Name is required", value: "<received input>" },
  { param: "email", msg: "A valid email is required", value: "<received input>" }
]
```

To keep consistent with that style, you should pass all flash messages
as `{ msg: 'My flash message' }` instead of a string. Otherwise you will just see an alert box
without an error message. That is because, in **partials/flash.pug** template it will try to output
`error.msg` (i.e. `"My flash message".msg`), in other words it will try to call a `msg` method on a *String* object,
which will return *undefined*. Everything I just mentioned about errors, also applies
to "info" and "success" flash messages, and you could even create a new one yourself, such as:

**Data Usage Controller (Example)**
```
req.flash('warning', { msg: 'You have exceeded 90% of your data usage' });
```

**User Account Page (Example)**
```jade
if messages.warning
  .alert.alert-warning.fade.in
    for warning in messages.warning
      div= warning.msg
```

`partials/flash.pug` is a partial template that contains how flash messages
are formatted. Previously, flash
messages were scattered throughout each view that used flash messages
(contact, login, signup, profile), but now, thankfully it is uses a *DRY* approach.

The flash messages partial template is *included* in the `layout.pug`, along with footer and navigation.
```jade
body
    include partials/header

    .container
      include partials/flash
      block content

    include partials/footer
```

If you have any further questions about flash messages,
please feel free to open an issue and I will update this mini-guide accordingly,
or send a pull request if you  would like to include something that I missed.

<hr>

### How do I create a new page?
A more correct way to be to say "How do I create a new route". The main file `app.js` contains all the routes.
Each route has a callback function associated with it. Sometimes you will see 3 or more arguments
to routes. In cases like that, the first argument is still a URL string, while middle arguments
are what's called middleware. Think of middleware as a door. If this door prevents you from
continuing forward, you won't get to your callback function. One such example is a route that requires authentication.

```js
app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
```

It always goes from left to right. A user visits `/account` page. Then `isAuthenticated` middleware
checks if you are authenticated:

```js
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};
```

If you are authenticated, you let this visitor pass through your "door" by calling `return next();`. It then proceeds to the
next middleware until it reaches the last argument, which is a callback function that typically renders a template on `GET` requests or redirects on `POST` requests. In this case, if you are authenticated, you will be redirected to *Account Management* page, otherwise you will be redirected to *Login* page.

```js
exports.getAccount = (req, res) => {
  res.render('account/profile', {
    title: 'Account Management'
  });
};
```

Express.js has `app.get`, `app.post`, `app.put`, `app.delete`, but for the most part you will only use the first two HTTP verbs, unless you are building a RESTful API.
If you just want to display a page, then use `GET`, if you are submitting a form, sending a file then use `POST`.

Here is a typical workflow for adding new routes to your application. Let's say we are building
a page that lists all books from database.

**Step 1.** Start by defining a route.
```js
app.get('/books', bookController.getBooks);
```

---

**Note:** As of Express 4.x you can define you routes like so:

```js
app.route('/books')
  .get(bookController.getBooks)
  .post(bookController.createBooks)
  .put(bookController.updateBooks)
  .delete(bookController.deleteBooks)
```

And here is how a route would look if it required an *authentication* and an *authorization* middleware:

```js
app.route('/api/twitter')
  .all(passportConfig.isAuthenticated)
  .all(passportConfig.isAuthorized)
  .get(apiController.getTwitter)
  .post(apiController.postTwitter)
```

Use whichever style that makes sense to you. Either one is acceptable. I really think that chaining HTTP verbs on
`app.route` is very clean and elegant approach, but on the other hand I can no longer see all my routes at a glance
when you have one route per line.

**Step 2.** Create a new schema and a model `Book.js` inside the *models* directory.
```js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
```

**Step 3.** Create a new controller file called `book.js` inside the *controllers* directory.
```js
/**
 * GET /books
 * List all books.
 */
const Book = require('../models/Book.js');

exports.getBooks = (req, res) => {
  Book.find((err, docs) => {
    res.render('books', { books: docs });
  });
};
```

**Step 4.** Import that controller in `app.js`.
```js
const bookController = require('./controllers/book');
```

**Step 5.** Create `books.pug` template.
```jade
extends layout

block content
  .page-header
    h3 All Books

  ul
    for book in books
      li= book.name
```

That's it! I will say that you could have combined Step 1, 2, 3 as following:

```js
app.get('/books',(req, res) => {
  Book.find((err, docs) => {
    res.render('books', { books: docs });
  });
});
```

Sure, it's simpler, but as soon as you pass 1000 lines of code in `app.js` it becomes a little difficult to navigate the file.
I mean, the whole point of this boilerplate project was to separate concerns, so you could
work with your teammates without running into *MERGE CONFLICTS*. Imagine you have 4 developers
working on a single `app.js`, I promise you it won't be fun resolving merge conflicts all the time.
If you are the only developer then it's fine. But as I said, once it gets up to a certain LoC size, it becomes
difficult to maintain everything in a single file.

That's all there is to it. Express.js is super simple to use.
Most of the time you will be dealing with other APIs to do the real work:
[Mongoose](http://mongoosejs.com/docs/guide.html) for querying database, socket.io for sending and receiving messages over websockets,
sending emails via [Nodemailer](http://nodemailer.com/), form validation using [express-validator](https://github.com/ctavan/express-validator) library,
parsing websites using [Cheerio](https://github.com/cheeriojs/cheerio), and etc.

<hr>

### How do I use Socket.io with Hackathon Starter?
[Dan Stroot](https://github.com/dstroot) submitted an excellent [pull request](https://github.com/dstroot/hackathon-starter/commit/0a632def1ce8da446709d92812423d337c977d75) that adds a real-time dashboard with socket.io.
And as  much as I'd like to add it to the project, I think it violates one of the main
principles of the Hackathon Starter:
> When I started this project, my primary focus was on simplicity and ease of use.
> I also tried to make it as generic and reusable as possible to cover most use cases of
> hackathon web apps, **without being too specific**.

When I need to use socket.io, I **really** need it, but most of the time - I don't. But more
importantly, websockets support is still experimental on most hosting providers. As of October 2013,
Heroku supports websockets, but not until you opt-in by running this command:

```js
heroku labs:enable websockets -a myapp
```

And what if you are deploying to OpenShift? They do support websockets, but it is currently in a
preview state. So, for OpenShift you would need to change the socket.io connect URI to the following:

```js
const socket = io.connect('http://yoursite-namespace.rhcloud.com:8000');
```

Wait, why is it on port 8000? Who knows, and if I didn't run across this [blog post](http://velin-georgiev-blog.appspot.com/blog/set-up-nodejs-express-socketio-application-using-websockets-on-openshift-by-red-hat/)
I wouldn't even know I had to use port 8000.

I am really glad that Heroku and OpenShift at least
have a websockets support, because many other PaaS providers still do not support it.
Due to the aforementioned issues with websockets, I cannot include socket.io as part of the Hackathon Starter. *For now...*
If you need to use socket.io in your app, please continue reading.

First you need to install socket.io:
```js
npm install socket.io --save
```

Or, again, if you use Yarn:
```js
yarn add socket.io
```

Replace `const app = express();` with the following code:

```js
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
```

I like to have the following code organization in `app.js` (from top to bottom): module dependencies,
import controllers, import configs, connect to database, express configuration, routes,
start the server, socket.io stuff. That way I always know where to look for things.

Add the following code at the end of `app.js`:

```js
io.on('connection', (socket) => {
  socket.emit('greet', { hello: 'Hey there browser!' });
  socket.on('respond', (data) => {
    console.log(data);
  });
  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });
});
```

One last thing left to change:
```js
app.listen(app.get('port'), () => {
```
to
```js
server.listen(app.get('port'), () => {
```

At this point we are done with the back-end.

You now have a choice - to include your JavaScript code in Pug templates or have all your client-side
JavaScript in a separate file - in `main.js`. I will admit, when I first started out with Node.js and JavaScript in general,
I placed all JavaScript code inside templates because I have access to template variables passed in from Express
right then and there. It's the easiest thing you can do, but also the least efficient and harder to maintain. Since then I
almost never include inline JavaScript inside templates anymore.

But it's also understandable if you want take the easier road.
Most of the time you don't even care about performance during hackathons, you just
want to [*"get shit done"*](https://www.startupvitamins.com/media/products/13/aaron_levie_poster_black.jpg) before the time runs out.
Well, either way, use whichever approach makes more sense to you. At the end of the day,
it's **what** you build that matters, not **how** you build it.

If you want to stick all your JavaScript inside templates, then in `layout.pug` -
your main template file, add this to `head` block.

```jade
script(src='/socket.io/socket.io.js')
script.
    let socket = io.connect(window.location.href);
    socket.on('greet', function (data) {
      console.log(data);
      socket.emit('respond', { message: 'Hey there, server!' });
    });
```

**Note:** Notice the path of the `socket.io.js`, you don't actually
have to have `socket.io.js` file anywhere in your project; it will be generated
automatically at runtime.

If you want to have JavaScript code separate from templates, move that inline
script code into `main.js`, inside the `$(document).ready()` function:

```js
$(document).ready(function() {

  // Place JavaScript code here...
  let socket = io.connect(window.location.href);
  socket.on('greet', function (data) {
    console.log(data);
    socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
  });

});
```

And we are done!