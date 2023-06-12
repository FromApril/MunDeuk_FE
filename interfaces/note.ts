export type EmotionType = 'Depressed' | 'Flutter' | 'Glad' | 'Touched';

interface Note {
  createAt: string;
  updatedAt: string;
  content: string;
  isDeleted: string;
  viewCount: string;
  likeCount: string;
  latitude: string;
  longitude: string;
}
