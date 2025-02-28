<script lang="ts">
  import logo from "../assets/svelte-icon.png";
  export let name: string;
</script>

<main>
  <img src={logo} alt="logo" class="logo" />
  <h1>Hello {name}!</h1>
</main>

<style>
  .logo {
    width: 100px;
    height: 100px;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
