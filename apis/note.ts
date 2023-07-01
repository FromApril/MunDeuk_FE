import { ApiResponse, Location } from '@/interfaces/common';
import { Note } from '@/interfaces/note';

import client from './common/client';

export const getNotes = (location: Location): ApiResponse<Note[]> => {
  return client.get('/note', { params: location });
};

export const postNote = (payload: FormData): ApiResponse<null> => {
  return client.post('/note', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const postNoteWithImage = (payload: FormData): ApiResponse<null> => {
  return client.post('/note/withImage', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
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
