# Girls-n-a-Dude
Girls-n-a-Dude is an simple application to look up Facsters in Nazareth
### To get started
Click [here]() to use the application

Or you can clone this repository.
```
git clone
```
Install the dependencies by typing
```
npm Install
```
start the application by typing
```
npm run devStart
```
then go to the localhost.

Magic is happening!

### User stories:
**As a member of FACN :**
+ I can look up profiles of all members in FACN2
+ I can choose a member and read more details about her/him
+ I can have access to Github profile of  a chosen member

**As a future employer :**
+ I can look up profiles of potential employees from FACN2
+ I can choose a member and read more details about her/him
+ I can have access to Github profile of candidates

**As a future member of FACN**
+ I can look up members of FACN to ask questions about the program
+ I can look up profiles of future mentors

### File system
![File system](https://monosnap.com/file/0Bv9YBrGWpRF9thBOwGJqCqLhaO1X9.png)

### Wireframe
![Wireframe](https://monosnap.com/file/XHLi6djAnuiRdkQNiUoEGcxnwCcw6v.png)

### Database schema
**TABLE members**

| id  |  first-name | surname | country | github | quote | image
| ---|:---:|:---:|:---:|:---:|:---:|---:|
| 1 | Vered | Rekanati | Israel | github.com/veredrec | where are the cookies? | image-vered |
| 2 | Katia | Ashkar | Israel | github.com/katiaash | Please don't take a picture of me! | image-katia |

### Requirements

+ [ ] use express framework
+ [ ] use postgres database
+ [ ] use handlebars template for server-side rendering
+ [ ] use layouts, partials and helper functions
+ [ ] include tests and set up code coverage
+ [ ] use Heroku
+ [ ] use es6 syntax on server

### Stretch goals
+ add a function to add a new member to database
+ authentication
+ protect routes
+ nice CSS
+ add links to different social media platforms of members
