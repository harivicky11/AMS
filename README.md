# ATTENDANCE MANAGEMENT SYSTEM

AMS is a simple web application that demonstrates the CRUD operations. It provides a simple form
which takes name, grade, month, year and count of attended days as input and stores it in a database
which can be edited or deleted later.

### Technologies Used
1) NodeJs for backend
2) ExpressJs for framework
3) express-handlebars for frontend template
4) MongoDB and mongoose ORM for data storage and data manipulation

## Installing dependencies

```
npm install
```

### Endpoints

#### GET
localhost:3000/stu        =>        provides a form to perform insertion
localhost:3000/stu/list   =>        provides a list of existing records in DB

#### POST
localhost:3000/stu        =>        performs an insertion

#### PUT
localhost:3000/:id        =>        performs edit operation

#### DELETE
localhost:3000/delete/:id           performs deletion
