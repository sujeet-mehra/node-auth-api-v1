```
echo "# node-auth-api-v1" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sujeet-mehra/node-auth-api-v1.git
git push -u origin main
```

Creating a simple REST API with CRUD operations (Create, Read, Update, Delete) for managing "User Auth" using Node.js and MySQL involves several steps.

## How to set up the API using `Express.js`, `mysql2` for database interaction, and basic CRUD operations.

- Create a new user
- Login new user
- Read all users or a single user
- Update a user
- Delete a user

### Steps to Create a REST API with Node.js and MySQL

1. **Set Up the Project:**

   - Install Node.js and MySQL (if not installed already).
   - Initialize a new Node.js project.

   ```bash
   mkdir nodejs-user-auth-mysql-api-v1
   cd nodejs-user-auth-mysql-api-v1
   npm init -y
   ```

2. **Install Required Dependencies:**

   You'll need the following dependencies:

   - `express`: Web framework for building the REST API.
   - `mysql2`: MySQL database client.

   Install them using npm:

   ```bash
   npm install express mysql2
   ```

3. **Create the MySQL Database and Table:**

   First, set up the database and table. Open MySQL and run:

   ```sql
   CREATE DATABASE user_db;
   USE user_db;

   CREATE TABLE user (
       id INT AUTO_INCREMENT PRIMARY KEY,
       email VARCHAR(255) NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```