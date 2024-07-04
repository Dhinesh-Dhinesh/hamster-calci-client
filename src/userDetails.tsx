// src/UserDetails.tsx
import React from 'react';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  chat_id: number;
}

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Username: {user.username}</p>
      <p>Chat ID: {user.chat_id}</p>
    </div>
  );
};

export default UserDetails;