function App() {
  const [userName, setUserName] = useState("Sameer");

  return (
    <>
      <Navbar name={userName} />
      <Profile name={userName} />
      <Dashboard name={userName} />
    </>
  );
}