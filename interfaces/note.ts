export type EmotionType = 'Depressed' | 'Flutter' | 'Glad' | 'Touched';

export interface Note {
  imageUrls: string[];
  noteState: ['DELETED', 'ACTIVE', 'OUT_DATED'];
  createAt: string;
  updatedAt: string;
  content: Record<string, any>;
  viewCount: number;
  likeCount: number;
  latitude: number;
  longitude: number;
  id: number;
}
