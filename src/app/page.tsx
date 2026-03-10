import { ThemeToggle } from "../components/shared/ThemeToggle";


const HomePage = () => {
  return (
    <div>
      <ThemeToggle />
      <h1>Welcome to the Twitter Client!</h1>
      <p>Use the navigation to explore your feed, profile, and more.</p>
    </div>
  );
};

export default HomePage;
