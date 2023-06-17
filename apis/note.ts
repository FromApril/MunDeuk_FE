import { ApiResponse, Location } from '@/interfaces/common';
import { Note } from '@/interfaces/note';

import client from './client';

export const getNotes = (location: Location): ApiResponse<Note[]> => {
  return client.get('/note', { params: location });
};

export const postNote = (payload: {
  content: string;
  latitude: number;
  longitude: number;
  writerId: number;
}): ApiResponse<null> => {
  return client.post('/note', payload);
};

export const putNote = () => {
  // return client.
};

export const deleteNote = (payload: {
  memberId: number;
  noteId: number;
}): ApiResponse<null> => {
  return client.delete('/note', { params: payload });
};
