interface IProps {
  message: string;
}

const ErrorMessages = ({ message }: IProps) => {
  return (
    <span className=" block text-red-900 font-semibold text-sm">{message}</span>
  );
};

export default ErrorMessages;
