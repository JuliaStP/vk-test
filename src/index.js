VK.init({
  apiId: 7631091
});

function auth() {
  return new Promise((resolve, reject) => {
    VK.Auth.login(data => {
      if (data.session) {
        resolve();
      } else {
        reject(new Error('Could not authorize'));
      }
    }, 2);
  });
}

auth().then(() => console.log('success'));
