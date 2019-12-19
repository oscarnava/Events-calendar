# Events calendar :: Backend

### Ruby version
This project was built in an environment using _**Ruby version 2.6.4**_ and _**Rails version 6.0.1**_

### System dependencies
Be sure to have PostgreSQL installed. For completeness, I have _**PostgreSQL version 11.5**_ installed.

### Configuration
Execute:
````
bundler
````
to install all dependencies.

Depending on your system configuration -mostly on Windows- PostgreSQL might require a user _**and**_ a password to be set. If that's the case, please define two environment variables named _**EVENTS_DATABASE_USERNAME**_ and _**EVENTS_DATABASE_PASSWORD**_ with the corresponding values.

### Database creation
``
rails db:migrate
``

### Database initialization
````
rails db:setup  # This will set some example contents for the events list, and a user named 'tester'.
rails db:seed   # Feel free to change this on the db/seeds.rb file.
````

### How to run the test suite
Before running the test suite, be sure to seed the database using this command:
````
rails db:seed RAILS_ENV=test
````
To run the test suite, use the command:
````
rspec
````

### Deployment instructions
Since this is a mixed repository, to deploy to Heroku you can use this very useful guide: [Deploying Rails API and React App to Heroku from a single GitHub repo](https://medium.com/@nothingisfunny/deploying-rails-api-and-react-app-to-heroku-from-a-single-github-repo-7d8597abc55a).

### Author
  👤 Oscar Nava Trujillo
  - Github: [@oscarnava]( https://github.com/oscarnava )
  - Linkedin: [Oscar Nava Trujillo](https://www.linkedin.com/in/oscar-nava-trujillo-15847a14a/)

### To-do's
- Admin panel to create, update and remove events.
- **Important!** User email validation. (I'm sick of receiving unwanted emails from unverified services; I don't want others to suffer this because of me).

### Contributing
📦 Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/oscarnava/Events-calendar/issues).

### License
Creative Commons [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
