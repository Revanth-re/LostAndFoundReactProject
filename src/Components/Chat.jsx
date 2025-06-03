import React, { useEffect, useState } from 'react';
// import { db, auth } from '../FireBaseConfig/Firebase';
import { db,authentication } from '../FireBaseConfig/Firebase';
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Chat = ({ otherUserId }) => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [chatId, setChatId] = useState('');
let Data=JSON.parse(localStorage.getItem("reactProjectUsers"))
console.log(Data)
let UserDataName=Data.user.displayName
console.log(UserDataName)


  useEffect(() => {
    // Get current logged-in user
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      if (user) {
        setCurrentUser(user)
        const id = generateChatId(user.displayName)
        console.log(id);
        
        setChatId(id);
      }
    });
    console.log(unsubscribe);
    

    return () => unsubscribe();
  }, [otherUserId]);

  useEffect(() => {
    if (!chatId) return;

    const q = query(
      collection(db, 'chats', chatId, 'messages'),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chats = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setChatLog(chats);
    });

    return () => unsubscribe();
  }, [chatId]);

  const sendMessage = async () => {
    if (message.trim() && currentUser && chatId) {
      await addDoc(collection(db, 'chats', chatId, 'messages'), {
        text: message,
        senderId: currentUser.uid,
        timestamp: serverTimestamp()
      });
      setMessage('');
    }
  };

  const generateChatId = (uid1, uid2) => {
    return uid1 < uid2 ? uid1 + "_" + uid2 : uid2 + "_" + uid1;
  };

  return (
    <div className="container">
      <h2>💬 Chat with User: {otherUserId}</h2>
      <div style={{ border: '1px solid gray', height: '200px', overflowY: 'auto', padding: '10px' }}>
        {chatLog.map((msg) => (
          <p key={msg.id}>
            <b>{msg.senderId === currentUser?.uid ? 'Me' : 'Them'}:</b> {msg.text}
          </p>
        ))}
      </div>
      <input
        className="form-control my-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type something..."
      />
      <button className="btn btn-primary" onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
