import useAuth from "../../hooks/useAuth";

const Home: React.FC = () => {
  const { user, isAuthenticate } = useAuth();
  console.log(user, isAuthenticate);

  return <>Home</>;
};

export default Home;
