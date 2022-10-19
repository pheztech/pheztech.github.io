interface Props {
  href: string;
  children: any;
}

const SocialButton: React.FC<Props> = (props) => {
  return (
    <a
      className="px-2 fill-gray-600 hover:fill-gray-500 active:fill-gray-700"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

export type SocialButtonProps = Props;
export default SocialButton;
