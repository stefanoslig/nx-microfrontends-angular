import { User } from '@nx-microfrontends-angular/api-types';

type UserState = User & { token: string };

export const initialUserValue: UserState = {
  email: '',
  username: '',
  password: '',
  bio: '',
  image: '',
  token: '',
};
