import useNoteWriteContents from '@/hooks/useNoteWriteContents';

export default function usePhotoContent() {
  const { photos, setPhotos } = useNoteWriteContents();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      if (files.length > 3) {
        alert('3개 이미지까지 업로드 가능합니다.');
        return;
      }

      // 파일사이즈 최대 2MB 체크
      const MAX_SIZE = 2 * Math.pow(2, 20);
      const filesSize = Array.from(files).reduce(
        (acc, file) => acc + file.size,
        0,
      );

      console.log('파일 사이즈');
      console.log(filesSize);

      if (filesSize > MAX_SIZE) {
        alert('이미지 사이즈가 너무 큽니다.');
        return;
      }

      const imgFiles = Array.from(files);
      setPhotos(imgFiles);
    }
  };

  const handleDelete = (idx: number) => {
    const newPhotos = [...photos.slice(0, idx), ...photos.slice(idx + 1)];

    setPhotos(newPhotos);
  };

  const handleLoadImg = (url: string) => {
    URL.revokeObjectURL(url);
  };

  return {
    photos,
    handleChange,
    handleDelete,
    handleLoadImg,
  };
}
