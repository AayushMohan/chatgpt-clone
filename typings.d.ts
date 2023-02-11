interface Message {
 text: string;
 createdAt: admin.firebase.Timestamp;
 user:{
  _id: string;
  name: string;
  avatar: string;
 };
}