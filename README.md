1.  What's your favorite programming language? Let's write an App!
2.  You try it too! tartanhacks.meteor.com.

...ok, so live, real-time, stuff, is hard!   Facebook and Google have proprietary frameworks to power cases like Google Docs and the News Feed.  You're gonna need AJAX or sockets or something - boo!

5.  Let's look at the source! (HTML / JS).
This is all of it. Pretty simple.  How?

6.  Meteor is REACTIVE. After you've written your templates, Meteor goes back and says "OK, it looks like the language_voter template depends on the list_languages function, which depends on the contents of the Languages collection.  So whenever its contents change, I should re-render that template!

* Javascript, server & client side (based on node).
* Mongo-like DB, accessible from client & server.
* Works with CoffeeScript, Backbone, etc - compatible with other stuff we like.
* Heroku-like ease of deployment, and you get yourapp.meteor.com.
* Pretty much magic.

9.  meteor.com | I'm Alexey, Alexeymk.com - I'm around, happy to help!
