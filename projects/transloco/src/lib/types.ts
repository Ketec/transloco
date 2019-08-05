export type HashMap<T = string> = { [key: string]: T };

export type LoadedEvent = {
  type: 'translationLoadSuccess';
  payload: {
    lang: string;
  };
};

export type FailedEvent = {
  type: 'translationLoadFailure';
  payload: {
    lang: string;
  };
};

export type TranslocoEvents = LoadedEvent | FailedEvent;
