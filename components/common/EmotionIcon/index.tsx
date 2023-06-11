import * as Icons from '@/public/emotionIcons';

type EmotionIconProps = {
  name: keyof typeof Icons;
  width: number;
  height: number;
  stroke?: string;
  fill?: string | 'none';
  onClick?: () => void;
};

export default function EmotionIcon(props: EmotionIconProps) {
  const Icon = Icons[props.name];

  return <Icon {...props} />;
}
