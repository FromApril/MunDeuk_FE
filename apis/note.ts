import { ApiResponse } from '@/interfaces/common';
import { Note } from '@/interfaces/note';

import client from './client';

export const getNote = (location: Location): ApiResponse<Note[]> => {
  return client.get('/note', { params: location });
};

export const postNote = (payload: {
  content: 'string';
  latitude: 0;
  longitude: 0;
  writerId: 0;
  id: 0;
  ownerId: 0;
  originId: 0;
}): ApiResponse<null> => {
  return client.post('/reservations', payload);
};

export const putNote = () => {
  // return client.
};

export const deleteNote = (payload: {
  memberId: number;
  noteId: number;
}): ApiResponse<null> => {
  return client.delete('/delete', { params: payload });
};
