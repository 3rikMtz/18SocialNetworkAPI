Sure! Here's the updated README with the correct link for the demo video:

# Social Network API 🚀

## Description
This is a RESTful API for a social network application. It allows users to create accounts, share thoughts, add friends, and interact with other users.

## Table of Contents 
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)
- [Credits](#credits)
- [Demo](#demo)

## Technologies Used 
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation 
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd social-network-api`
3. Install the dependencies: `npm install`

## Usage
1. Start the server: `npm start`
2. Access the API at `http://localhost:<PORT>`

## API Routes
### Users 👥
- :mag: `GET /api/users` - Get all users
- :mag: `GET /api/users/:userId` - Get a single user by ID
- :heavy_plus_sign: `POST /api/users` - Create a new user
- :pencil2: `PUT /api/users/:userId` - Update a user by ID
- :x: `DELETE /api/users/:userId` - Delete a user by ID
- :heavy_plus_sign: `POST /api/users/:userId/friends/:friendId` - Add a friend to a user's friend list
- :x: `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list

### Thoughts 💡
- :mag: `GET /api/thoughts` - Get all thoughts
- :mag: `GET /api/thoughts/:thoughtId` - Get a single thought by ID
- :heavy_plus_sign: `POST /api/thoughts` - Create a new thought
- :pencil2: `PUT /api/thoughts/:thoughtId` - Update a thought by ID
- :x: `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID
- :heavy_plus_sign: `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- :x: `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Credits 
In order to complete this challenge, I applied the knowledge seen in class, as well as additional resources from the Internet, such as articles and videos.
- [MongoDB Documentation](https://www.mongodb.com/docs/manual/reference/method/cursor.skip/)
- [Mongoose findOneAndUpdate](https://mongoosejs.com/docs/tutorials/findoneandupdate.html)
- [Mongoose connect](https://www.mongodb.com/docs/manual/reference/method/connect/)
- [Mongoose Model Function](https://www.geeksforgeeks.org/mongoose-mongoose-model-function/)
- [Mongoose findOneAndDelete Function](https://www.geeksforgeeks.org/mongoose-findoneanddelete-function/)

## Demo 
You can checkout how does the API works in the [Demo Video](https://drive.google.com/file/d/1lGlRDrnJvKOMQxVXOe7KwnnxXl7_XUv9/view)
