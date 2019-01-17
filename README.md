# burger

### Overview
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!
Please check out the launched app on Heroku(check back soon...)


### Functionality
Using ORM made from scratch, the app has 3 basic CRUD functions...
  1. READ(selectAll) all entries from the MySQL database and display them to the DOM using Handlebars.
  2. UPDATE(updateOne) a selected burger by clicking "Devour It", which...
    * hits an `/burger/:id` route in Express to change its "devoured" status in the MySQL database
    * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
  3. CREATE(insertOne) a new burger using the "Add new burger" form, which...
    * hits a `/burger/` route in Express to insert a new burger into the MySQL database
    * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)