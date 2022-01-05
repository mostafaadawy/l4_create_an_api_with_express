# API Express
## 1-Introduction and overview
What we'll do

This lesson is all about the client-facing side of our API. We'll cover the following topics
### RESTful API structure
- Express for incoming requests
- Breaking Express routes into separate files
- Mapping RESTful routes to model methods
- Testing routes

### Helpful Preparation
- For this lesson it will be helpful for you to brush up on your HTTP basics - specifically requests and the HTTP verbs. Here is the [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) for reference.

- MVC. In this course I won't be teaching a strict MVC design, but there are times that we will borrow from it. If you aren't already familiar with the Model View Controller design pattern, its a good one to be familiar with. Here is an intro [article to some of MVC concepts](https://www.freecodecamp.org/news/understanding-the-basics-of-ruby-on-rails-http-mvc-and-routes-359b8d809c7a/).

----------------------------------------------------------

## 2-RESTful APIs

To get us started in this lesson we are going to look at what happens when a client-side (aka from a browser or end user) request reaches our API. This video is going to focus on what it means to be a RESTful API.
Video Summary
- REST implies a specific set of API endpoints for every entity in the app. 
- There are five actionable RESTful routes for APIs:
    - INDEX
    - SHOW
    - CREATE
    - EDIT
    - DELETE
-------------------------------------------------------------------

# My Def What is the defference between API RESTAPI & RESFUL API

## API:
 
 stands for application programming intefrace that allow comunictation between two defferent devices or peace of codes,
 
 ## REST API:
 
 is the same api but under condition of restricted by a certain pattern where evere http-verp(GET POST UPDATE Delete) uses for calling  and reurning certain object and doing certainfunctions such as
 |REST API Pattern|Path|Discribtion model called method|
 |---|---|---|
 GET| /path|call index method from model to return all records|
 GET| /path/:id|call show method form model to return single records match id|
 POST| /path/ +body obj|call create method form model to save single records and return it|
 PUT| /path/:id|call patch/update method form model to update single records and return it|
 DELETE| /path/:id|call delete method form model to delete single records and return it|

 -----------------------------------------------------

 ## 3-QUIZ REST APIs
 ### Question 1 of 3
REST is useful for providing a predictable, industry standard, well-organized way to structure API endpoints.
- (✓)True
- False
## Question 2 of 3
Match the RESTful route to the CRUD action
|CRUD|REST|
|---|---|
|CREATE|Create|
|READ(One)|Show|
|UPDATE|Edit|
|DELETE|Delete|
|READ(All)|Index|
## Question 3 of 3
Match the HTTP verb and url path to the RESTful route
|URL [Route]|CRUD|
|---|---|
|GET ['/cats']|INDEX|
|GET ['/cats/:id']|SHOW|
|POST ['/cats']|CREATE|
|PUT ['/cats/:id']|UPDATE|
|DELETE ['/cats/:id']|DELETE|

---------------------------------------------------------

## 4-CORS for API Endpoints

Adding CORS to our API is a small but essential step. This video talk about what CORS is, why we need it, and how to enable it.
### Video Summary
- CORS stands for Cross Origin Resource Sharing and is an important factor in making and handling API requests
- Express provides a CORS integration that is pretty straightforward to set up
- We can use CORS as a middleware on a route by route basis

## Help! The API I want to use doesn't support CORS!

The plea above is a common one I have seen students struggle with.

First, how do you know the API doesn't support CORS? If you are making a normal fetch request to an endpoint the API says it supplies, but are getting an HTTP error similar to this one:
```sh
Reason: Did not find method in CORS header ‘Access-Control-Allow-Methods’
```
Then you might be working with an API that doesn't support CORS. To make certain, you can read more into the documentation of the API, or, another quick trick is to open Postman or another endpoint testing tool and try the exact same request there. Postman is not a browser and does not require CORS support, so if your request works from Postman but not from the browser, it is pretty much confirmed that your issue is that the API doesn't support CORS. This is a major failure on the API's side, CORS support is pretty much required in order to be useful to modern web applications, but you still see this problem around on older APIs from time to time.

When selecting APIs for your project, you should definietly look for which ones are CORS enabled. But, if you really must use one that isn't -- don't panic -- it is still possible. The issue is that CORS support is required by browsers. So the solution is to not make the request from the front end. Your back end will have to make the request to the API. So you can make a custom endpoint in your API that IS accessible from your front end, and that API endpoint will trigger a request to the actual API you want to use. Once it gets a response from that API, your back end will just pass that information to the frontend. It is more complicated than it should be, but its a 'best of a bad situation' solution. That is why in this course we only teach you to make APIs with CORS support!

```sh
CORS Briefly is Cross Origin Resources Sharing it is simply amiddleware that is used for security it simbly execute a secure protocol to allow our API to connect to other domains, where browsers with diffrent domains refuses to connect without cores  
```

-------------------------------------------

## 5-Creating RESTful routes

In this exercise you are tasked with writing all the REST routes for a model. The model is for blog articles and you will find the model file already in the code base. Your job is to write the RESTful Express routes for it.

For now, your routes can return res.send('this is the ____ route') or another placeholder value, as we will be adding the logic that will run inside these routes in the next section.
Task List

## Projecy readme file REST API Exercise
### Getting Started
In this exercise you are tasked with writing all the REST routes for a model. The model is for blog articles and you will find the model file already in the code base. Your job is to look at this model and write the RESTful Express routes for it.

For now, your routes can return res.send('this is the ____ route') or another placeholder value, as we will be adding the logic that will run inside these routes in the next section.
### Environment Workspace
This exercise can be done inside of this Udacity workspace. To ready your environment follow these steps:
In the terminal:
- install yarn npm install yarn -g
- install db-migrate on the machine for terminal commands npm install db-migrate -g
- check node version node -v - it needs to be 10 or 12 level
- IF node was not 10 or 12 level, run
   - npm install -g n
   - n 10.18.0
   - PATH="$PATH"
   - node -v to check that the version is 10 or 12
- install all project dependencies yarn
- to test that it is working, run yarn watch should show an app starting on 0.0.0.0:3000
### Local Environment
If want to do this exercise on your local computer and you already have docker installed, there is a docker file provided for you with generic content. Note that you may need to update this file to fit your computer in order to use it locally.
### Steps to Completion
- Plan to Meet Requirements
- DB Creation and Migrations
- Models
- Express Handlers
- JWTs
- QA and Readme

Go to the following pages to get started on the project!

--------------------------------------------

## 6-Exercise Solution

Here is an example of the routes that would go in your server file. I added very basic error handling to each route to show how you can pass back an HTTP error code. In real life, the errors we look for and status codes we pass back would be much more specific, but this is a pattern for how it could look.
```sh
app.get('/articles', (_req: Request, res: Response) => {
    try {
        res.send('this is the INDEX route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})

app.get('/articles/:id', (_req: Request, res: Response) => {
    try {
       res.send('this is the SHOW route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.post('/articles', (req: Request, res: Response) => {
    const article: Article = {
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the CREATE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.put('/articles/:id', (req: Request, res: Response) => {
    const article: Article = {
      id: req.params.id, 
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the EDIT route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.delete('/articles/:id', (_req: Request, res: Response) => {
    try {
       res.send('this is the DELETE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}
```
## A little extra:

Are you familiar with the syntax of using an underscore in Javascript like in the code above with the argument _req? The callback function we are creating will be given two arguments by default, the request and response. We can't change those two arguments, and we can't ignore them, even if we aren't going to use them. But it is pointless to create a variable we aren't going to use right?

In Javascript the underscore is a special identifier, and when used before a function argument it signals that we are not going to use that argument. Sometimes you might hear arguments named this way as throw away arguments This can be a helpful trick when using built in functions like map, filter, and reduce, or with arrow functions. Consider that these are the same, but the first syntax clearly marks that the argument is unimportant:
```sh
const exampleArrowFunct = _ => console.log(_)
const exampleArrowFunct = foo => console.log(foo)
```
--------------------------------------------------

## 7-Routes to Models

We're getting close to a fully operational API! In the last lesson we began to write some Express handlers for incoming requests, now we need to connect the last of the plumbing and make sure those handlers can interact with the model methods we created in the last lesson. This video walks through how to call model methods from handlers.
### Video Summary
- We tie everything together by calling model methods in the handler functions

--------------------------------------
