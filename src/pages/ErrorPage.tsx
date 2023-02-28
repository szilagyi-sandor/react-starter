import { getErrorInfo } from '../shared/error/getErrorInfo';
import { useErrorContext } from '../shared/error/ErrorContext';
import { convertToCustomError } from '../shared/error/convertToCustomError';

function ErrorPage() {
  const error = useErrorContext();

  if (!error) {
    return null;
  }

  const { title, message } = getErrorInfo(convertToCustomError(error));

  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>

      {message ? <p>{message}</p> : null}
    </section>
  );
}

export { ErrorPage };
