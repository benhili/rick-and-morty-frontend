# Rick and Morty Character Explorer

A modern React application that displays Rick and Morty characters using the Rick and Morty API. Browse through all the characters from the multiverse with infinite scrolling and detailed character information.

![Rick and Morty Characters](https://rickandmortyapi.com/api/character/avatar/1.jpeg)

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + DaisyUI
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint
- **API**: [Rick and Morty API](https://rickandmortyapi.com/)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/benhili/rick-and-morty-frontend.git
   cd rick-and-morty-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/           # React components
│   ├── CharacterCard.tsx    # Individual character display
│   ├── CharacterModal.tsx   # Character detail modal
│   ├── LoadingCard.tsx      # Loading skeleton
│   └── __tests__/           # Component tests
├── types.ts             # TypeScript type definitions
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## Testing

Run the test suite:

```bash
npm test
```
