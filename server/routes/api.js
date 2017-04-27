import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
   res.send("First draft of API works");
});

export default router;