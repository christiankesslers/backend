import express from 'express';
import { indexPage, messagesPage, addMessage } from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';
import { userPage } from '../controllers/user';
//import { addUser } from '../models/user';

const indexRouter = express.Router();
indexRouter.get('/', indexPage);
// messages endpoint
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);
// user endpoint
indexRouter.get('/user', userPage);
indexRouter.post('/user', modifyMessage, performAsyncAction, addMessage);

// auth/register post endpoint
indexRouter.post('/auth/register', modifyMessage, performAsyncAction, addMessage);

// auth/login post endpoint
indexRouter.post('/auth/login', modifyMessage, performAsyncAction, addMessage);

// auth/logout post endpoint
indexRouter.post('/auth/logout', modifyMessage, performAsyncAction, addMessage);

// auth/forgot-password post endpoint
indexRouter.post('/auth/forgot-password', modifyMessage, performAsyncAction, addMessage);

// /tasks get endpoint
indexRouter.get('/tasks', messagesPage);
indexRouter.post('/tasks', modifyMessage, performAsyncAction, addMessage);


export default indexRouter;
