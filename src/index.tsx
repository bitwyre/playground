import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import {
  CaptureDocument,
  CaptureDocumentOptions,
  CaptureDocumentResultPreview,
  CaptureLiveness,
  CaptureSelfie,
  FaceVerificationOnboarding,
  NotFound,
  Onboarding,
  VerificationCompleted,
} from './pages';
import './style.css';

export function App() {
  return (
    <LocationProvider>
      <main className='bg-slate-950 text-slate-400'>
        <Router>
          <Route path='/' component={Onboarding} />
          <Route
            path='/capture-document-options'
            component={CaptureDocumentOptions}
          />
          <Route
            path='/capture-document/:documentType'
            component={CaptureDocument}
          />
          <Route
            path='/capture-document/:documentType/result-preview'
            component={CaptureDocumentResultPreview}
          />
          <Route
            path='/face-verification-onboarding'
            component={FaceVerificationOnboarding}
          />
          <Route path='/capture-selfie' component={CaptureSelfie} />
          <Route path='/capture-liveness' component={CaptureLiveness} />
          <Route
            path='/verification-completed'
            component={VerificationCompleted}
          />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById('app'));
