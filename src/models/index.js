// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MessageReaction, User, Review, Story, Reaction, School, Notification, Message, Promotion, GeoChatroom, BusinessChatroom, Chatroom, Business, Hours } = initSchema(schema);

export {
  MessageReaction,
  User,
  Review,
  Story,
  Reaction,
  School,
  Notification,
  Message,
  Promotion,
  GeoChatroom,
  BusinessChatroom,
  Chatroom,
  Business,
  Hours
};