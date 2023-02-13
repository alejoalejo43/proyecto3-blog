const postsservices = require("./posts.services");
const router = require("express").Router();
router.get("/posts", postsservices.getAllPosts);
router.get("/posts/:id", postsservices.getPostById);
router.post("/posts", postsservices.postNewPost);
router.patch("/posts/:id", postsservices.patchPost);
router.delete("/posts/:id", postsservices.deletePost);

module.exports = router;
