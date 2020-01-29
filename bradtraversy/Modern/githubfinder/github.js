class Github {
  constructor() {
    this.client_id = 'Iv1.8bb8fd34c3d69326';
    this.client_secret = 'f1eae0a10eaec7d99a5df0309d8a08ff196f530d';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}