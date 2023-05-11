import { Component } from "solid-js";
import { repos, setUsername, username } from "../App";

const Home: Component = () => {
  const refetchWithUsername = (event: Event) => {
    event.preventDefault();
    const usernameInput = document.querySelector(
      "#usernameInput"
    ) as HTMLInputElement;
    setUsername(usernameInput.value);
  };

  return (
    <div>
      <form class="mb-3" onSubmit={event => refetchWithUsername(event)}>
        <input
          type="text"
          class="p-1 align-middle"
          id="usernameInput"
          required
        />
        <button type="submit" class="btn btn-dark ms-3 w-auto">
          Fetch
        </button>
      </form>
      <h3>Github repos for {username()}</h3>
    </div>
  );
};

export default Home;
