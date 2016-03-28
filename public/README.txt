Project 3:

This is a skeleton outline of a web app to retrieve photos from Flickr based on a user submitted query.  The app is meant to form the basis for an online shopping portal where users can view and potentially purchase art.  The app makes use of a Flickr api requiring a private authentication key.  Currently the key is stored in a js file.  A proxied Flickr api request would remove the necessity for storing the key locally. 

In its current form the app the app has the following features:
-- dynamic content based on a user submitted query string
-- parses out the set of found images to display 15 at a time
-- statefully keeps track of which group of 15 is being viewed
-- provides a modal lightbox for close-up image viewing 
-- responsive

Things to do in the immediate next stage of development:
-- optimize: the app can stall
-- improve modularity of js code
-- improve and standardize design elements (its a bit of a css salad at the moment)
-- improve responsiveness to better adapt to differently sized screens
-- potentially implement a request proxy to hide the private key