class Github {
  constructor() {
    this.client_id = 'Iv1.8bb8fd34c3d69326';
    this.client_secret = 'c4a0fae82ea05d3d8aa5d7b1e49305c2c0658eba';
    this.repos_count = 5;
    this.repos_sort = 'create: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    
    return {
      profile,
      repos
    }
  }
}