const express= require("express");
const { signup } = require("../controllers/userController");
const { getNote, createNote, delteNote, updateNote } = require("../controllers/noteController");
const note = require("../models/note");
const auth = require("../middlewares/auth");

const noteRouter=express.Router();

noteRouter.get('/',auth,getNote);


noteRouter.post('/',auth,createNote);

noteRouter.delete("/:id ",auth, delteNote);

noteRouter.put("/:id",auth,updateNote);




noteRouter.post('/',signup);

module.exports=noteRouter;