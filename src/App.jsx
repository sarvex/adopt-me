import { createRoot } from 'react-dom';
import Pet from './Pet';

// const App = () => {
//   return createElement('div', {}, [
//     createElement('h1', {}, 'Adopt Me! v8'),
//     createElement(Pet, { animal: 'Dog', name: 'Luna', breed: 'Havanese' }),
//     createElement(Pet, { animal: 'Bird', name: 'Pepper', breed: 'Cockatiel' }),
//     createElement(Pet, { animal: 'Cat', name: 'Doink', breed: 'Mixed' }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet animal="Dog" name="Luna" breed="Havanese" />
      <Pet animal="Bird" name="Pepper" breed="Cockatiel" />
      <Pet animal="Cat" name="Doink" breed="Mixed" />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
