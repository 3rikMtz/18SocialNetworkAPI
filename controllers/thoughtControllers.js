const { Thought, User } = require('../models'); 

module.exports = {
    //POST a new thought
    async createThought(req, res) {
        try {
            const user = await User.findOne({ _id: req.body.userId }); //retrieves the user information based on the user id in the request body

            if (!user) {
                return res.status(404).json( {message: 'User not found'} ); //if user not found, return an error
            }
            const thought = new Thought({
                thoughtText: req.body.thoughtText,
                username: user.username, 
            }); 

            await thought.save(); //save the new thought

            user.thoughts.push(thought._id); //add the thought to the user's thoughts array

            await user.save(); //save the updated user

            res.json(thought); 
        } catch (err) {
            res.status(500).json(err); 
        }
    },
    //GET all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find(); 
            res.json(thoughts); 
        } catch (err) {
            res.status(500).json(err); 
        }
    }, 
    //GET a single thought by ID
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-_V'); 

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' }); 
            }
            res.json(thought);  
        } catch (err) {
            res.status(500).json(err); 
        }
    },
    //UPDATE a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body},
                { runValidators: true, new: true }
            ); 

            if (!thought) {
                res.status(404).json({ message: 'No thought with this ID' }); 
            }
            res.json(thought); 
        } catch (err) {
            res.status(500).json(err); 
        }
    },
    //DELETE thought by ID
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId }); 

            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID'}); 
            }
            res.json({ message: 'Thought deleted succesfully' }); 
        } catch {
            res.status(500).json(err); 
        }
    },
    //CREATE a reaction 
    async createReation(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body }},
                { runValidators: true },
                { new: true },                
            );
            if (!thoughtData) {
                return res.status(404).json({ message: 'No thought with that ID'}); 
            }
            res.json(thoughtData); 
        } catch (err) {
        console.log(err); 
        res.status(500).json(err); 
        }
    },
    //DELETE reaction by id
    async deleteReaction(req, res) {
        try {
            const { thoughtId, reactionId } = req.params; 

          const thoughtData = await Thought.findOneAndUpdate(
            { _id: thoughtId },
            { $pull: { reactions: { reactionId: reactionId } } },
            { new: true }
          );
      
          if (!thoughtData) {
            return res.status(404).json({ message: 'No thought or reaction with that ID' });
          }
      
          res.json({ message: 'Reaction deleted successfully' });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
    },  
};
