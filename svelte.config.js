import adapter from '@sveltejs/adapter-vercel'; // ← change this

const config = {
  kit: {
    adapter: adapter() // ← no options needed
  }
};

export default config;