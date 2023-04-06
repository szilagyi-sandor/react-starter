import { useEffect, useState } from 'react';

type Response = {
  loading: boolean;
  error: boolean;
  data?: {
    customMessage: string;
  };
};

const mockType = import.meta.env.VITE_MOCK_TYPE;

function HomePage() {
  const [{ loading, error, data }, setState] = useState<Response>({
    loading: false,
    error: false,
  });

  useEffect(() => {
    const getCustomMessage = async () => {
      if (mockType !== 'msw') {
        setState((state) => ({
          ...state,
          data: {
            customMessage: 'MSW is not enabled',
          },
        }));

        return;
      }

      setState(() => ({
        error: false,
        loading: true,
      }));

      try {
        const response = await fetch('/msw');

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const responseData = await response.json();

        setState(() => ({
          data: responseData,
          error: false,
          loading: false,
        }));
      } catch (err) {
        setState(() => ({
          error: true,
          loading: false,
        }));
      }
    };

    getCustomMessage();
  }, []);

  let message = '';
  if (error) {
    message = 'Error';
  } else if (loading) {
    message = 'Loading';
  } else {
    message = data?.customMessage || '';
  }

  return (
    <section>
      <header>
        <h2>Home page</h2>

        <p>{message}</p>
      </header>
    </section>
  );
}

export default HomePage;
