import * as SvgIcons from '@/public/icons';

type IconsName = keyof typeof SvgIcons;

type IconProps = {
  name: IconsName;
  width: number;
  height: number;
  stroke?: string;
  fill?: string | 'none';
  onClick?: () => void;
};

export default function Icon(props: IconProps) {
  const RenderedIcon = SvgIcons[props.name];

  return <RenderedIcon {...props} />;
}
