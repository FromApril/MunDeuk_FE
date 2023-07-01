export type EmotionType = 'Depressed' | 'Flutter' | 'Glad' | 'Touched';

export interface Note {
  content: {
    text: string;
    emotion: EmotionType;
  };
  imageUrls: string[];
  noteState: ['DELETED', 'ACTIVE', 'OUT_DATED'];
  createAt: string;
  updatedAt: string;
  viewCount: number;
  likeCount: number;
  latitude: number;
  longitude: number;
  id: number;
}
