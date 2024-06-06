import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Header } from './components/Header.jsx';
import {
  CaptureId,
  CaptureIdOptions,
  CaptureIdResultPreview,
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
          <Route path='/capture-id-options' component={CaptureIdOptions} />
          <Route path='/capture-id/:idType' component={CaptureId} />
          <Route
            path='/capture-id/:idType/result-preview'
            component={CaptureIdResultPreview}
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
