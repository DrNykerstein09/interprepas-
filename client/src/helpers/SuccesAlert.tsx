interface SuccessAlertProps {
  message: string;
}

const SuccesAlert: React.FC<SuccessAlertProps> = ({ message }) => {
  return (
    <div
      className="flex items-center p-4 mt-4 text-sm text-green-800 bg-green-100 dark:bg-gray-800 dark:text-green-400 md:w-3/4 w-full border-t border-b"
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only"></span>
      <div>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default SuccesAlert;
