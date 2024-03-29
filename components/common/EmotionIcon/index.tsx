import * as Icons from '@/public/emotionIcons';

type EmotionIconProps = {
  name: keyof typeof Icons;
  width: number | string;
  height: number | string;
  fill: string | 'none';
  stroke?: string;
  onClick?: () => void;
};

export default function EmotionIcon(props: EmotionIconProps) {
  const Icon = Icons[props.name];

  return <Icon {...props} />;
}
