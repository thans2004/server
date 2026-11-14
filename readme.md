# Node.js Vs Express.js

Node.js is a runtime environment that allows you to run JavaScript on the server side. It provides a set of built-in modules and APIs for building server-side applications, handling HTTP requests, and managing file systems. buliding web applications with Node.js requires you to write a lot of boilerplate code for routing, middleware, and other common tasks. 


Express.js, on the other hand, is a web application framework built on top of Node.js. It simplifies the process of building web applications by providing a set of features and abstractions that make it easier to handle routing, middleware, and other common tasks. Express.js allows developers to write less code and focus more on the application logic rather than the underlying infrastructure 



mvc

modal
view(rouder)
condroller




nodemon is a utility that automatically restarts your Node.js application whenever it detects changes in the source code. It is particularly useful during development, as it saves time and effort by eliminating the need to manually stop and restart the server after making changes.


dotenv



CRUD operation;
\



status code;
1xx: Informational responses (e.g., 100 Continue, 101 Switching Protocols)
2xx: Successful responses (e.g., 200 OK, 201 Created, 204 No Content)
3xx: Redirection messages (e.g., 301 Moved Permanently, 302 Found, 304 Not Modified)
4xx: Client error responses (e.g., 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
5xx: Server error responses (e.g., 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)

middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware functions can perform various tasks, such as executing code, modifying the request and response objects, ending the request-response cycle, or calling the next middleware function in the stack.commonly used middleware functions include body-parser, cookie-parser,logger, and authentication middleware

incoming requests ->middleware  1(ex:request body parsing,)
middleware 2 (ex:authentication) -> route handler -> response

1.built-in middleware -Express.js comes with several built-in middleware functions that can be used built-in middleware functions include express.json(), 
 -express.json(); bod -parser in request with json  payloads

 -express static();server serve static files specified directory
 
2.third-party middleware-body-parser, cookie-parser, cors,etc
3.custom middleware -logging, authentication, error handling, 