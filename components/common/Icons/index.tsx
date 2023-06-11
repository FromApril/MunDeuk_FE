import * as SvgIcons from '@/public/icons';

type IconsName = keyof typeof SvgIcons;

type IconsProps = {
  name: IconsName;
  width: number;
  height: number;
  stroke?: string;
  fill?: string | 'none';
  onClick?: () => void;
};

export default function Icons(props: IconsProps) {
  const RenderedIcon = SvgIcons[props.name];

  return <RenderedIcon {...props} />;
}
