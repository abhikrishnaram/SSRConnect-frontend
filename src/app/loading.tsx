import AppView from '@/app/(console)/(private)/_appview';

const LoadingPage = () => {
  return (
      <AppView>
          <div className="w-full flex-grow h-full items-center justify-center">
              <h1>Loading...</h1>
          </div>
      </AppView>
  );
};

export default LoadingPage;