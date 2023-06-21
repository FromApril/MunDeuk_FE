export type EmotionType = 'Depressed' | 'Flutter' | 'Glad' | 'Touched';

export interface Note {
  imageUrls: string[];
  createAt: string;
  updatedAt: string;
  content: string;
  isDeleted: string;
  viewCount: string;
  likeCount: string;
  latitude: string;
  longitude: string;
}
