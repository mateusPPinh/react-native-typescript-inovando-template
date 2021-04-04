export function signIn(values: any): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '130212dnkl21j3nd21kldn231kj3',
        user: {
          name: 'Inovando',
          email: values.email,
        },
      });
    }, 2000);
  });
}
