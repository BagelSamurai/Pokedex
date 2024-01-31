function Header() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="">
          {" "}
          <h1 className="text-7xl font-bold">
            Pokedex |{" "}
            <span className="text-3xl">
              Your last stop to find pokemon info.
            </span>
          </h1>
        </div>
        <div className="">
          <img src="./public/pokeball.svg" width={60} height={60} />
        </div>
      </div>
    </header>
  );
}

export default Header;
