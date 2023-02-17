import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";



type EagerHours = {
  readonly MondayOpen?: number | null;
  readonly MondayClose?: number | null;
  readonly TuesdayOpen?: number | null;
  readonly TuesdayClose?: number | null;
  readonly WednesdayOpen?: number | null;
  readonly WednesdayClose?: number | null;
  readonly ThursdayOpen?: number | null;
  readonly ThursdayClose?: number | null;
  readonly FridayOpen?: number | null;
  readonly FridayClose?: number | null;
  readonly SaturdayOpen?: number | null;
  readonly SaturdayClose?: number | null;
  readonly SundayOpen?: number | null;
  readonly SundayClose?: number | null;
}

type LazyHours = {
  readonly MondayOpen?: number | null;
  readonly MondayClose?: number | null;
  readonly TuesdayOpen?: number | null;
  readonly TuesdayClose?: number | null;
  readonly WednesdayOpen?: number | null;
  readonly WednesdayClose?: number | null;
  readonly ThursdayOpen?: number | null;
  readonly ThursdayClose?: number | null;
  readonly FridayOpen?: number | null;
  readonly FridayClose?: number | null;
  readonly SaturdayOpen?: number | null;
  readonly SaturdayClose?: number | null;
  readonly SundayOpen?: number | null;
  readonly SundayClose?: number | null;
}

export declare type Hours = LazyLoading extends LazyLoadingDisabled ? EagerHours : LazyHours

export declare const Hours: (new (init: ModelInit<Hours>) => Hours)

type EagerMessageReaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageReaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reaction?: string | null;
  readonly messageID: string;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messageReactionUserId?: string | null;
}

type LazyMessageReaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageReaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reaction?: string | null;
  readonly messageID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messageReactionUserId?: string | null;
}

export declare type MessageReaction = LazyLoading extends LazyLoadingDisabled ? EagerMessageReaction : LazyMessageReaction

export declare const MessageReaction: (new (init: ModelInit<MessageReaction>) => MessageReaction) & {
  copyOf(source: MessageReaction, mutator: (draft: MutableModel<MessageReaction>) => MutableModel<MessageReaction> | void): MessageReaction;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly sub?: string | null;
  readonly profilePic?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly schoolsVisited?: (string | null)[] | null;
  readonly searchName?: string | null;
  readonly friends?: (string | null)[] | null;
  readonly affiliations?: (string | null)[] | null;
  readonly Reviews?: (Review | null)[] | null;
  readonly Stories?: (Story | null)[] | null;
  readonly bio?: string | null;
  readonly pendingFriends?: (string | null)[] | null;
  readonly pushTokens?: (string | null)[] | null;
  readonly School?: School | null;
  readonly businessesPosted?: (string | null)[] | null;
  readonly Notifications?: (Notification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSchoolId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly sub?: string | null;
  readonly profilePic?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly schoolsVisited?: (string | null)[] | null;
  readonly searchName?: string | null;
  readonly friends?: (string | null)[] | null;
  readonly affiliations?: (string | null)[] | null;
  readonly Reviews: AsyncCollection<Review>;
  readonly Stories: AsyncCollection<Story>;
  readonly bio?: string | null;
  readonly pendingFriends?: (string | null)[] | null;
  readonly pushTokens?: (string | null)[] | null;
  readonly School: AsyncItem<School | undefined>;
  readonly businessesPosted?: (string | null)[] | null;
  readonly Notifications: AsyncCollection<Notification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSchoolId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly rating?: number | null;
  readonly userID: string;
  readonly businessID: string;
  readonly createdAt?: string | null;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly pictures?: (string | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly rating?: number | null;
  readonly userID: string;
  readonly businessID: string;
  readonly createdAt?: string | null;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly pictures?: (string | null)[] | null;
  readonly updatedAt?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerStory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Story, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly businessID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly picture?: string | null;
  readonly Reactions?: (Reaction | null)[] | null;
  readonly isSaved?: boolean | null;
  readonly updatedAt?: string | null;
}

type LazyStory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Story, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly businessID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly picture?: string | null;
  readonly Reactions: AsyncCollection<Reaction>;
  readonly isSaved?: boolean | null;
  readonly updatedAt?: string | null;
}

export declare type Story = LazyLoading extends LazyLoadingDisabled ? EagerStory : LazyStory

export declare const Story: (new (init: ModelInit<Story>) => Story) & {
  copyOf(source: Story, mutator: (draft: MutableModel<Story>) => MutableModel<Story> | void): Story;
}

type EagerReaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storyID: string;
  readonly User?: User | null;
  readonly reaction?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reactionUserId?: string | null;
}

type LazyReaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storyID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly reaction?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reactionUserId?: string | null;
}

export declare type Reaction = LazyLoading extends LazyLoadingDisabled ? EagerReaction : LazyReaction

export declare const Reaction: (new (init: ModelInit<Reaction>) => Reaction) & {
  copyOf(source: Reaction, mutator: (draft: MutableModel<Reaction>) => MutableModel<Reaction> | void): Reaction;
}

type EagerSchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly shortName?: string | null;
  readonly primaryColor?: string | null;
  readonly secondaryColor?: string | null;
  readonly coordinates?: (string | null)[] | null;
  readonly logo?: string | null;
  readonly maxCoordinates?: (string | null)[] | null;
  readonly minCoordinates?: (string | null)[] | null;
  readonly searchName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly shortName?: string | null;
  readonly primaryColor?: string | null;
  readonly secondaryColor?: string | null;
  readonly coordinates?: (string | null)[] | null;
  readonly logo?: string | null;
  readonly maxCoordinates?: (string | null)[] | null;
  readonly minCoordinates?: (string | null)[] | null;
  readonly searchName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type School = LazyLoading extends LazyLoadingDisabled ? EagerSchool : LazySchool

export declare const School: (new (init: ModelInit<School>) => School) & {
  copyOf(source: School, mutator: (draft: MutableModel<School>) => MutableModel<School> | void): School;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly date?: string | null;
  readonly senderID?: string | null;
  readonly title?: string | null;
  readonly message?: string | null;
  readonly userID: string;
  readonly chatroomID?: string | null;
  readonly messageID?: string | null;
  readonly isRead?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly date?: string | null;
  readonly senderID?: string | null;
  readonly title?: string | null;
  readonly message?: string | null;
  readonly userID: string;
  readonly chatroomID?: string | null;
  readonly messageID?: string | null;
  readonly isRead?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isAnonymous?: boolean | null;
  readonly senderID?: string | null;
  readonly message?: string | null;
  readonly date?: string | null;
  readonly senderName?: string | null;
  readonly geochatroomID: string;
  readonly chatroomID: string;
  readonly businesschatroomID: string;
  readonly picture?: string | null;
  readonly sent?: boolean | null;
  readonly MessageReactions?: (MessageReaction | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isAnonymous?: boolean | null;
  readonly senderID?: string | null;
  readonly message?: string | null;
  readonly date?: string | null;
  readonly senderName?: string | null;
  readonly geochatroomID: string;
  readonly chatroomID: string;
  readonly businesschatroomID: string;
  readonly picture?: string | null;
  readonly sent?: boolean | null;
  readonly MessageReactions: AsyncCollection<MessageReaction>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerPromotion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Promotion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly pictures?: (string | null)[] | null;
  readonly description?: string | null;
  readonly businessID: string;
  readonly likes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPromotion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Promotion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly pictures?: (string | null)[] | null;
  readonly description?: string | null;
  readonly businessID: string;
  readonly likes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Promotion = LazyLoading extends LazyLoadingDisabled ? EagerPromotion : LazyPromotion

export declare const Promotion: (new (init: ModelInit<Promotion>) => Promotion) & {
  copyOf(source: Promotion, mutator: (draft: MutableModel<Promotion>) => MutableModel<Promotion> | void): Promotion;
}

type EagerGeoChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GeoChatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly minLatitude?: string | null;
  readonly maxLatitude?: string | null;
  readonly minLongitude?: string | null;
  readonly maxLongitude?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly School?: School | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly geoChatroomSchoolId?: string | null;
}

type LazyGeoChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GeoChatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly minLatitude?: string | null;
  readonly maxLatitude?: string | null;
  readonly minLongitude?: string | null;
  readonly maxLongitude?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly School: AsyncItem<School | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly geoChatroomSchoolId?: string | null;
}

export declare type GeoChatroom = LazyLoading extends LazyLoadingDisabled ? EagerGeoChatroom : LazyGeoChatroom

export declare const GeoChatroom: (new (init: ModelInit<GeoChatroom>) => GeoChatroom) & {
  copyOf(source: GeoChatroom, mutator: (draft: MutableModel<GeoChatroom>) => MutableModel<GeoChatroom> | void): GeoChatroom;
}

type EagerBusinessChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessChatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessID?: string | null;
  readonly businessLat?: string | null;
  readonly businessLong?: string | null;
  readonly businessName?: string | null;
  readonly businessProfilePic?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinessChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessChatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessID?: string | null;
  readonly businessLat?: string | null;
  readonly businessLong?: string | null;
  readonly businessName?: string | null;
  readonly businessProfilePic?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BusinessChatroom = LazyLoading extends LazyLoadingDisabled ? EagerBusinessChatroom : LazyBusinessChatroom

export declare const BusinessChatroom: (new (init: ModelInit<BusinessChatroom>) => BusinessChatroom) & {
  copyOf(source: BusinessChatroom, mutator: (draft: MutableModel<BusinessChatroom>) => MutableModel<BusinessChatroom> | void): BusinessChatroom;
}

type EagerChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userIDs?: (string | null)[] | null;
  readonly isGroup?: boolean | null;
  readonly chatroomPic?: string | null;
  readonly name?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly lastMessageID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatroom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chatroom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userIDs?: (string | null)[] | null;
  readonly isGroup?: boolean | null;
  readonly chatroomPic?: string | null;
  readonly name?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly lastMessageID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Chatroom = LazyLoading extends LazyLoadingDisabled ? EagerChatroom : LazyChatroom

export declare const Chatroom: (new (init: ModelInit<Chatroom>) => Chatroom) & {
  copyOf(source: Chatroom, mutator: (draft: MutableModel<Chatroom>) => MutableModel<Chatroom> | void): Chatroom;
}

type EagerBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Business, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly shortName?: string | null;
  readonly address?: string | null;
  readonly profilePic?: string | null;
  readonly socials?: (string | null)[] | null;
  readonly rating?: number | null;
  readonly bannerPic?: string | null;
  readonly Reviews?: (Review | null)[] | null;
  readonly promoters?: (string | null)[] | null;
  readonly Stories?: (Story | null)[] | null;
  readonly BusinessChatroom?: BusinessChatroom | null;
  readonly numReviews?: number | null;
  readonly pictures?: (string | null)[] | null;
  readonly website?: string | null;
  readonly phone?: string | null;
  readonly hours?: Hours | null;
  readonly type?: string | null;
  readonly Promotions?: (Promotion | null)[] | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  readonly searchName?: string | null;
  readonly School?: School | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly businessBusinessChatroomId?: string | null;
  readonly businessSchoolId?: string | null;
}

type LazyBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Business, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly shortName?: string | null;
  readonly address?: string | null;
  readonly profilePic?: string | null;
  readonly socials?: (string | null)[] | null;
  readonly rating?: number | null;
  readonly bannerPic?: string | null;
  readonly Reviews: AsyncCollection<Review>;
  readonly promoters?: (string | null)[] | null;
  readonly Stories: AsyncCollection<Story>;
  readonly BusinessChatroom: AsyncItem<BusinessChatroom | undefined>;
  readonly numReviews?: number | null;
  readonly pictures?: (string | null)[] | null;
  readonly website?: string | null;
  readonly phone?: string | null;
  readonly hours?: Hours | null;
  readonly type?: string | null;
  readonly Promotions: AsyncCollection<Promotion>;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  readonly searchName?: string | null;
  readonly School: AsyncItem<School | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly businessBusinessChatroomId?: string | null;
  readonly businessSchoolId?: string | null;
}

export declare type Business = LazyLoading extends LazyLoadingDisabled ? EagerBusiness : LazyBusiness

export declare const Business: (new (init: ModelInit<Business>) => Business) & {
  copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}